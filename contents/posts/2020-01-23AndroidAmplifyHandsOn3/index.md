---
title: "AmplifyとAndroidでPush通知"
date: "2020-01-23 16:00:00 +0800"
slug: "/amplify-android-pinpoint/"
thumbnail: "android-amplify-thumbnail.png"
description: "awsのamplifyとandroidの連携方法をまとめたtutorial。Cognitoでユーザー管理、S3でファイル保存、PinpointとLambdaでPush通知という流れ。この投稿はその第三弾です。"
tags:
    - "AWS"
    - "Android"
---


## これは何

AWS Amplifyを用いて、ログイン、画像アップロード、push通知シリーズ第三弾の投稿です。  
第二弾の投稿は以下をご覧ください。

[AmplifyとAndroidでファイル保存 - TAKIGAWA MEMO](https://www.takigawa-memo.com/amplify-android-s3/)

第二弾ではCognitoから取得したcredentialを利用してS3に画像をアップロードするところまで終了しました。  
今回は、S3に画像をアップロードしたタイミングで、push通知配信先に登録されている全てのデバイスに対してpush通知を送信する機能を追加したいと思います。

前回に引き続きAmplifyTutorialアプリに機能を追加していきます。

## firebaseプロジェクトを作成

Androidでpush通知を実現するためには、[Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging?hl=ja)というサービスにpush通知を依頼する必要があります。  
そのためにまずは、アプリに固有のfirebaseプロジェクトを作成しましょう。firebaseプロジェクトの作成方法については以下のサイトが参考になります。

[Firebase プロジェクトについて理解する](https://firebase.google.com/docs/projects/learn-more?hl=ja)  
[Android プロジェクトに Firebase を追加する](https://firebase.google.com/docs/android/setup?hl=ja)

全ての設定が終了した後、アプリをビルドすると、Firebaseコンソール画面のアナリティクスのDashboadにてエンドポイントの情報が登録されていることが確認できます。

## AmplifyにAnalytics機能を追加

AmplifyにAnalyticsカテゴリを追加すると、AWSのバックエンドにPinpointというサービスのリソースが作成されます。  
AWSの公式ドキュメントではPinpointを以下のように説明しています。

> Amazon Pinpoint は、複数のメッセージングチャネルをまたがってお客様とやり取りするための AWS 製品です。Amazon Pinpoint を使用して、プッシュ通知、E メール、SMS テキストメッセージ、または音声メッセージを送信できます。 
>
> [AWS - Amazon Pinpoint とは](https://docs.aws.amazon.com/ja_jp/pinpoint/latest/developerguide/welcome.html)

AWS Simple Notification ServcieもAWSのプッシュ通知配信サービスとして知られていますが、Pinpointはメッセージテンプレートや、配信スケジュール、セグメント、などユーザーにメッセージを送るためのより高度な機能が追加されています。

AmplifyにAnalytics機能を追加するために以下のコマンドを実行しましょう。

```shell
$ amplify add analytics 
Using service: Pinpoint, provided by: awscloudformation
? Provide your pinpoint resource name: amplifytutorial
Adding analytics would add the Auth category to the project if not already added.
? Apps need authorization to send analytics events. Do you want to allow guests and unauthenticated users to send analytics events? (we recommend you allow this when getting started) Yes
```

次に、AmplifyにNotificationカテゴリを追加し、FCMをpush通知先として設定します。  
ApiKeyの取得方法は以下のサイトが参考になります。

[Android SDK - Setting Up FCM/GCM for Push Notifications](https://aws-amplify.github.io/docs/sdk/android/push-notifications-setup-fcm)

以下のコマンドを実行しましょう。

```shell
$ amplify add notifications
? Choose the push notification channel to enable. FCM
? ApiKey <server key>
```

変更をクラウド側にpushします。

```shell
$ amplify push
```

Pinpointのtokyoリージョンでのサービスが、この記事の投稿時点ではまだ開始されていないので、us-west-2にリソースが作成されると思います。
以下のコマンドでコンソールを開くことができます。

```shell
$ amplify analytics console
```

## Android側の実装

次はandroid側の実装に移ります。

### gradleに依存関係を追加

適当なライブラリを依存関係に含めます。

```groovy:title=build.gradle(app)
dependencies {
    implementation 'com.amplifyframework:aws-analytics-pinpoint:0.9.0'
    implementation "com.amazonaws:aws-android-sdk-pinpoint:$aws_sdk_version"

    implementation 'com.google.firebase:firebase-core:17.2.0'
    implementation 'com.google.firebase:firebase-messaging:20.1.0'
}
```

### AndroidManifestファイルに設定を追加

AndroidManifestファイルにServiceとReceiverを追加します。
ServiceはFCMから送られてきたメッセージを受け取るための、Receiverはアプリがバックグラウンド状態時にpush通知がタップされた場合にアプリが起動されるためのものです。

```xml:title=AndroidManifest.xml
    <application>
        <service
            android:name=".PushListenerService"
            android:exported="false">
            <intent-filter>
                <action android:name="com.google.firebase.MESSAGING_EVENT" />
            </intent-filter>
        </service>
        <receiver
            android:name="com.amazonaws.mobileconnectors.pinpoint.targeting.notification.PinpointNotificationReceiver"
            android:exported="false">
            <intent-filter>
                <action android:name="com.amazonaws.intent.fcm.NOTIFICATION_OPEN" />
            </intent-filter>
        </receiver>
    </application>
```

### AWSUtilsクラスを変更

AWSUtilsクラスを変更し、AmplifyにAmazonPipointPluginを追加します。  
また後々、PushListenerServiceクラスからPinpointManagerにアクセスする必要が出てくるので、そのためのメソッドも追加します。  
変更後のAWSUtilsクラスは以下の通りです。

```kotlin:title=AWSUtils.kt
package com.example.amplifytutorial

import android.content.Context
import android.util.Log
import com.amazonaws.mobile.client.AWSMobileClient
import com.amazonaws.mobile.client.Callback
import com.amazonaws.mobile.client.UserStateDetails
import com.amazonaws.mobile.config.AWSConfiguration
import com.amazonaws.mobileconnectors.pinpoint.PinpointConfiguration
import com.amazonaws.mobileconnectors.pinpoint.PinpointManager
import com.amplifyframework.analytics.pinpoint.AmazonPinpointAnalyticsPlugin
import com.amplifyframework.core.Amplify
import com.amplifyframework.storage.s3.AWSS3StoragePlugin
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit

object AWSUtils {
    private const val INITIALIZATION_TIMEOUT_MS = 2000L
    private const val TAG = "AWSUtils"
    private val LOCK = Object()
    private var configured = false
    private var pinpointManager: PinpointManager? = null

    fun initAWSMobileClient(applicationContext: Context) {
        synchronized(LOCK) {
            if (configured) {
                Log.d(TAG, "already configured")
                return
            }

            val mobileClientLatch = CountDownLatch(1)
            AWSMobileClient.getInstance()
                .initialize(applicationContext, object : Callback<UserStateDetails> {
                    override fun onResult(userStateDetails: UserStateDetails?) {
                        mobileClientLatch.countDown()
                    }

                    override fun onError(e: Exception?) {
                        Log.e(TAG, "Initialization error.", e)
                    }
                })

            try {
                if (!mobileClientLatch.await(
                        INITIALIZATION_TIMEOUT_MS,
                        TimeUnit.MILLISECONDS
                    )
                ) {
                    throw Exception("Failed to initialize mobile client.")
                }
            } catch (exception: Exception) {
                Log.d(TAG, "${exception.message}")
            }

            configured = true
        }
    }


    fun configureAmplifyPlugin(applicationContext: Context) {
        try {
            Amplify.addPlugin(AWSS3StoragePlugin())
            Amplify.addPlugin(AmazonPinpointAnalyticsPlugin())
            Amplify.configure(applicationContext)

            Log.i(TAG, "aws mobile client init done!")

        } catch (e: Throwable) {
            e.printStackTrace()
            Log.e(TAG, "initialize onResult exception: ${e.message}")
        }

        Amplify.Analytics.recordEvent("amplfiy configured")
    }

    fun getPinpointManager(applicationContext: Context): PinpointManager {
        pinpointManager?.let {
            return it
        }

        initAWSMobileClient(applicationContext)

        val pinpointConfig = PinpointConfiguration(
            applicationContext,
            AWSMobileClient.getInstance(),
            AWSConfiguration(applicationContext)
        )

        val pm = PinpointManager(pinpointConfig)

        return pm.also { pinpointManager = it }
    }
}
```

### SplashActivityを変更

アプリを起動すると、firebaseにデバイスごとのinstance idとtokenが作成されます。  
PinpointからPush通知を配信するためにはtokenをPinpointに登録する必要があるのでその処理をSplashActivityに追加します。

```kotlin:title=SplashActivity.kt
package com.example.amplifytutorial

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import com.amazonaws.mobileconnectors.s3.transferutility.TransferNetworkLossHandler
import com.google.firebase.iid.FirebaseInstanceId
import kotlinx.coroutines.*

class SplashActivity : AppCompatActivity(), CoroutineScope by MainScope() {

    companion object {
        const val TAG = "SplashActivity"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splash)

        initializeAWS()

    }

    override fun onDestroy() {
        super.onDestroy()
        cancel()
    }

    private fun initializeAWS() {
        launch(Dispatchers.Default) {

            AWSUtils.initAWSMobileClient(applicationContext)
            AWSUtils.configureAmplifyPlugin(applicationContext)

            val pinpointManager = AWSUtils.getPinpointManager(applicationContext)


            TransferNetworkLossHandler.getInstance(applicationContext)

            FirebaseInstanceId.getInstance().instanceId.addOnCompleteListener { task ->
                if (!task.isSuccessful) {
                    Log.e(TAG, "getInstanceId failed", task.exception)
                }
                task.result?.let {
                    val id = it.id
                    val token = it.token
                    Log.d(TAG, "id: $id")
                    Log.d(TAG, "token: $token")
                    pinpointManager.notificationClient.registerDeviceToken(token)
                }

                val intent = Intent(this@SplashActivity, MainActivity::class.java)
                startActivity(intent)
            }
        }
    }
}
```

### PushListenerServiceクラスを作成

PushListenerServiceを新しく作成し、PushListenerServie.ktを以下のように変更します。

```kotlin:title=PushListenerService
package com.example.amplifytutorial

import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.os.Build
import android.util.Log
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import com.amazonaws.mobileconnectors.pinpoint.targeting.notification.NotificationClient
import com.amazonaws.mobileconnectors.pinpoint.targeting.notification.NotificationClient.CampaignPushResult
import com.amazonaws.mobileconnectors.pinpoint.targeting.notification.NotificationDetails
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage


class PushListenerService : FirebaseMessagingService() {
    companion object {
        const val TAG = "PushListenerService"
        const val CHANNEL_ID = "Default Channel"
        const val NOTIFICATION_ID = 1
        const val TITLE_KEY = "pinpoint.notification.title"
        const val BODY_KEY = "pinpoint.notification.body"
    }


    // tokenが更新された場合、それをPinpointに通知する必要がある。
    override fun onNewToken(token: String) {
        super.onNewToken(token)

        Log.d(TAG, "Registering push notifications token: $token")
        AWSUtils.getPinpointManager(applicationContext)
            .notificationClient.registerDeviceToken(token)
    }

    // Pinpointから送られてくるメッセージはnotificationではなくdata以下に格納されているため、
    // アプリがバックグランドでもフォアグラウンドpush通知処理を自分で書かなければならない。
    override fun onMessageReceived(remoteMessage: RemoteMessage) {
        super.onMessageReceived(remoteMessage)

        Log.d(TAG, "Message: ${remoteMessage.data}")

        val notificationClient = AWSUtils.getPinpointManager(applicationContext).notificationClient

        val notificationDetails = NotificationDetails.builder()
            .from(remoteMessage.from)
            .mapData(remoteMessage.data)
            .intentAction(NotificationClient.FCM_INTENT_ACTION)
            .build()

        val pushResult =
            notificationClient.handleCampaignPush(notificationDetails)

        if (CampaignPushResult.NOT_HANDLED != pushResult) {
            if (CampaignPushResult.APP_IN_FOREGROUND == pushResult) {
//                 アプリがforegroundで実行されていた場合は自分でnotification処理を書かなければならない
                createNotification(remoteMessage.data)
            }
            return
        }

    }

    private fun createNotification(data: Map<String, String>) {

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val name = CHANNEL_ID
            val descriptionText = "サーバーからの通知"
            val importance = NotificationManager.IMPORTANCE_DEFAULT
            val channel = NotificationChannel(CHANNEL_ID, name, importance).apply {
                description = descriptionText
            }

            val notificationManager: NotificationManager =
                getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            notificationManager.createNotificationChannel(channel)
        }

        val notification = NotificationCompat.Builder(applicationContext, CHANNEL_ID)
            .setContentTitle(data[TITLE_KEY])
            .setStyle(NotificationCompat.BigTextStyle().bigText(data[BODY_KEY]))
            .setSmallIcon(R.mipmap.ic_launcher)
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)
            .build()

        NotificationManagerCompat.from(this).notify(NOTIFICATION_ID, notification)
    }
}
```

### amplifyconfiguration.jsonを修正。

ここで一度アプリをビルドしてみてください。  
ビルド出来れば問題ありませんが、当ブログ運営者の環境では以下のようなエラーを出力してクラッシュしました。

```txt
E/AWSUtils: initialize onResult exception: Attempt to invoke virtual method 'org.json.JSONObject org.json.JSONObject.getJSONObject(java.lang.String)' on a null object reference
E/AndroidRuntime: FATAL EXCEPTION: DefaultDispatcher-worker-2
    Process: com.example.amplifytutorial, PID: 8440
    java.lang.IllegalStateException: This category is not yet configured.Make sure you added it with Amplify.addPlugin and then called Amplify.config
        at com.amplifyframework.core.category.Category.getSelectedPlugin(Category.java:137)
        at com.amplifyframework.analytics.AnalyticsCategory.recordEvent(AnalyticsCategory.java:84)
        at com.example.amplifytutorial.AWSUtils.configureAmplifyPlugin(AWSUtils.kt:73)
        at com.example.amplifytutorial.SplashActivity$initializeAWS$1.invokeSuspend(SplashActivity.kt:34)
        at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:33)
        at kotlinx.coroutines.DispatchedTask.run(Dispatched.kt:241)
        at kotlinx.coroutines.scheduling.CoroutineScheduler.runSafely(CoroutineScheduler.kt:594)
        at kotlinx.coroutines.scheduling.CoroutineScheduler.access$runSafely(CoroutineScheduler.kt:60)
        at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.run(CoroutineScheduler.kt:740)
```

いままで説明を省略していたのですが、amplifyはAWSのバックエンドにアクセスするための設定をres/rawディレクトリ以下に格納してます。  
どうやら、ここで設定されているjsonオブジェクトに対して存在しないキーでアクセスしようとしているため、pluginの初期化が上手く出来ていないようです。

アプリがビルドできるようにamplifyconfigure.jsonを以下のように書き換えます。

```json:title=amplifyconfigure.json
-            "awsPinpointAnalyticsPlugin": {

+            "amazonPinpointAnalyticsPlugin": {
```

amplify-android-sdkはまだプレビューですので、こういったバグは他の場所にもあるかもしれないですね。


## Lamdba関数を作成

これでAndroid側の実装は全て終了です。  
あとは、Pinpointにpush通知を依頼するlamdba関数を作成するだけです。  
今回は簡略化のため、S3に任意のオブジェクトが作成された場合に、全てのエンドポイントに対してpush通知を送信するとさせていただきます。
またlamdba関数はnode.jsで作成します。

AWS Lamdbaのwebコンソールを開き、以下の設定でlamdba関数を作成しましょう。

|項目|内容|
|---|---|
|関数名|AmplifyTutorialPushNotification|
|ランタイム|Node.js 12.x|

S3のWebコンソール画面のプロパティでlamdba関数とeventを紐付けます。

|項目|内容|
|---|---|
|名前|ImageUploadEvent|
|イベント|すべてのオブジェクト作成イベント|
|送信先|Lamdba関数|
|Lamdba|AmplifyTutorialPushNotification|

Lamdba関数がPinpointにアクセスできるようにiamロールにポリシーを付け加えます。

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": "mobiletargeting:CreateCampaign",
            "Resource": "arn:aws:mobiletargeting:<region>:<account id>:apps/<app id>"
        }
    ]
}
```

今回はPinpointのWebコンソールであらかじめSegmentを作成しておきます。  
コンソール画面のSegmentsからCreate Segmentを選択し、NameにAllUsersを入力し、他は初期設定のままで作成します。

javascriptでpinpointにpush通知を依頼する処理を書き、アップロードします。  
segment idは以下のコマンドで取得できます。

```shell
$ aws pinpoint  get-segments --region <region> --application-id <app id>
```

javascriptコードは以下の通りです。

```javascript
var AWS = require("aws-sdk");

var pinpoint = new AWS.Pinpoint({ region: "us-west-2" });

var params = {
  ApplicationId: "<project id>",
  WriteCampaignRequest: {
    MessageConfiguration: {
      ADMMessage: {
        Action: "OPEN_APP",
        Body: "",
        Title: "message from lamdba"
      },
      APNSMessage: {
        Action: "OPEN_APP",
        Body: "",
        Title: "message from lamdba"
      },
      BaiduMessage: {
        Action: "OPEN_APP",
        Body: "",
        Title: "message from lamdba"
      },
      GCMMessage: {
        Action: "OPEN_APP",
        Body: "",
        Title: "message from lamdba"
      }
    },
    Name: "Campaign form lambda",
    Schedule: {
      IsLocalTime: false,
      StartTime: "IMMEDIATE",
      Timezone: "UTC"
    },
    SegmentId: "<segment id>",
    SegmentVersion: 1
  }
};

function formatString(date, format) {
  format = format.replace(/YYYY/, date.getFullYear());
  format = format.replace(/MM/, date.getMonth() + 1);
  format = format.replace(/DD/, date.getDate());
  format = format.replace(/hh/, date.getHours());
  format = format.replace(/mm/, date.getMinutes());
  format = format.replace(/ss/, date.getSeconds());

  return format;
}

exports.handler = async event => {
  let s3 = event["Records"][0]["s3"];
  let bucketName = s3["bucket"]["name"];
  let date = formatString(new Date(), "YYYY/MM/DD hh:mm:ss");

  let body = `${date}\nバケット ${bucketName} 内に、ファイルが新しく作成されました。`;
  params["WriteCampaignRequest"]["MessageConfiguration"]["GCMMessage"][
    "Body"
  ] = body;


  let request = pinpoint.createCampaign(params);
  await request.promise();


  const response = {
    statusCode: 200
  };
  return response;
};
```

## デモ

これで、画像をアップロードしたタイミングでpush通知が届くようになりました。  
実際にアプリを起動して、写真を撮影し、S3へアップロードしてみてください。

バケット内にオブジェクトが作成されたというメッセージが届くかと思います。

## まとめ

駆け足ではありましたが以上で、AmplifyとAndroidでログインとファイル保存とPush通知のtutorialシリーズは終了です。  
amplify-android-sdk自体はまだ発表されて間もないので、これから様々な機能が追加されていくことに期待したいですね。  
今後は、Pinpointの各機能をより深く掘り下げていけたらなと考えいています。

自分はまだandroidアプリもawsも知識不足なので、至るところにお見苦しい点があったかと思いますが、最後まで読んで頂き本当にありがとうございました。

## 参考リンク                                                                                                                              

- [Firebase プロジェクトについて理解する](https://firebase.google.com/docs/projects/learn-more?hl=ja)  
- [Android プロジェクトに Firebase を追加する](https://firebase.google.com/docs/android/setup?hl=ja)
- [AWS - Amazon Pinpoint とは](https://docs.aws.amazon.com/ja_jp/pinpoint/latest/developerguide/welcome.html)
- [Android SDK - Push Notifications](https://aws-amplify.github.io/docs/sdk/android/push-notifications)
- [Android SDK - Setting Up FCM/GCM for Push Notifications](https://aws-amplify.github.io/docs/sdk/android/push-notifications-setup-fcm)