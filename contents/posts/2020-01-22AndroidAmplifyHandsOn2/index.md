---
title: "AmplifyとAndroidでファイル保存"
date: "2020-01-22 16:00:00 +0800"
slug: "/amplify-android-s3/"
thumbnail: "android-amplify-thumbnail.png"
description: "awsのamplifyとandroidの連携方法をまとめたtutorial。Cognitoでユーザー管理、S3でファイル保存、PinpointとLambdaでPush通知という流れ。この投稿はその第二弾です。"
tags:
    - "AWS"
    - "Android"
---

## これは何

AWS Amplifyを用いて、ログイン、画像アップロード、push通知シリーズ第二弾の投稿です。  
第一弾の投稿は以下をご覧ください。

[AmplifyとAndroidでログイン - TAKIGAWA MEMO](https://www.takigawa-memo.com/amplify-android-congito/)

第一弾ではCognitoを用いたアカウントの作成、認証コードの確認、ログイン機能の実装まで終了しました。  
今回は、Cognitoから取得したcredentialを利用してS3に画像をアップロードするデモを作成したいと思います。

前回に引き続きAmplifyTutorialアプリに機能を追加していきます。

## AmplifyにStorageを追加

まずAmplifyにStorage機能を追加します。
プロジェクトのルートディレクトリで以下のコマンドを実行しましょう。

```shell
$ amplify add storage
? Please select from one of the below mentioned services: Content (Images, audio, video, etc.)
? Please provide a friendly name for your resource that will be used to label this category in the project: amplifyTutorialStorage
? Please provide bucket name: amplifytutorialcf329a2411564a1d99b63897c4c79c68
? Who should have access: Auth users only
? What kind of access do you want for Authenticated users? (Press <space> to select, <a> to toggle all, <i> to invert selection)create/update, read, delete
? Do you want to add a Lambda Trigger for your S3 Bucket? No
```

変更をクラウド側にpushします。

```shell
$ amplify push
```

時間がかかるのでしばらく待ちましょう。

## Android側の実装

次はandroid側の実装に移ります。

### gradleに設定を追加

適当なライブラリを依存関係に含めます。

```groovy:title=build.gradle(app)
dependencies {
  implementation 'com.amplifyframework:aws-storage-s3:0.9.0'
}
```

### AWSUtilsクラスを作成

早速画像アップロード機能を追加しましょう、と言いたいところですが少しリファクタリングをします。

第一弾ではAWSMobileClientの初期化をMainActivityで行っていましたが、今後アプリクライアントの機能が追加されるにつれて設定ためのコードも肥大化していくと予想されるので、AWSMobileClientやAmplifyの設定のためのAWSUtilsクラスを新しく作成します。

まず、MainActivityから以下のコードを削除してください。

```kotlin:title=MainActivity.kt
-	val mobileClientLatch = CountDownLatch(1)
-	mobileClient.initialize(applicationContext, object : Callback<UserStateDetails> {
-			override fun onResult(result: UserStateDetails?) {
-					mobileClientLatch.countDown()
-			}
-
-			override fun onError(e: java.lang.Exception?) {
-					Log.e(TAG, "Initialization error.", e)
-			}
-	})
-
-
-	try {
-			if (!mobileClientLatch.await(
-							2000L,
-							TimeUnit.MILLISECONDS
-					)
-			) throw Exception("Failed to initialize mobile client.")
-	} catch (exception: Exception) {
-			Log.d(TAG, "${exception.message}")
-	}
```

そして新しくAWSUtilsクラスを作成します。AWSUtilsはシングルトンパターンにします。

```kotlin:title=AWSUtils.kt
package com.example.amplifytutorial

import android.content.Context
import android.util.Log
import com.amazonaws.mobile.client.AWSMobileClient
import com.amazonaws.mobile.client.Callback
import com.amazonaws.mobile.client.UserStateDetails
import com.amplifyframework.core.Amplify
import com.amplifyframework.storage.s3.AWSS3StoragePlugin
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit

object AWSUtils {
    private const val INITIALIZATION_TIMEOUT_MS = 2000L
    private const val TAG = "AWSUtils"
    private val LOCK = Object()
    private var configured = false


    // AWSMobileClient.getInstance().initialize()は何度呼び出しても問題ないが、
    // 一応排他制御をかけて、一度初期化したら二度目はパスするようにする。
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


    // Amplify.addPlugin(AWSS3StoragePlugin())
    // Amplify.configure(applicationContext)
    // 上記のコードはinitialize()に設定するコールバックのonResult内に書いてもよいが、
    // この次に利用するAmazonPinpointAnalyticsPluginではエラーが生じたのでこのような実装になっている。
    fun configureAmplifyPlugin(applicationContext: Context) {
        try {
            Amplify.addPlugin(AWSS3StoragePlugin())
            Amplify.configure(applicationContext)

            Log.i(TAG, "aws mobile client init done!")

        } catch (e: Throwable) {
            e.printStackTrace()
            Log.e(TAG, "initialize onResult exception: ${e.message}")
        }
    }
}
```

### Splash画面を作成

今回のデモアプリでは、起動したら一番最初にスプラッシュ画面を表示し、そこでAWSMobileClientとAmplifyの設定を行うようにします。  
本来はActivityのスタックに積まれないような処理をするか、Fragmentで実装するべきなのですが、簡単のためスプラッシュ画面はActivityで通常通り実装させて頂きます。

また、[Amplifyの公式サイト](https://aws-amplify.github.io/docs/android/storage)では、AWSMobileClientの初期化はApplicationクラス内に書いた方が良いよみたいなことも書かれていました。

SplashActivityをEmptyActivityとして作成し、SplashActivity.ktとactivity_splash.xmlを以下のように書き換えます。

```kotlin:title=SplashActivity.kt
package com.example.amplifytutorial

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.amazonaws.mobileconnectors.s3.transferutility.TransferNetworkLossHandler
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


            TransferNetworkLossHandler.getInstance(applicationContext)

            val intent = Intent(this@SplashActivity, MainActivity::class.java)
            startActivity(intent)
        }
    }
}
```

```xml:title=activity_splash.xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".SplashActivity">

    <ImageView
        android:id="@+id/imageView2"
        android:layout_width="200dp"
        android:layout_height="200dp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent"
        app:srcCompat="@android:color/holo_blue_light" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Splash"
        android:textColor="@android:color/white"
        android:textSize="36sp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />
</androidx.constraintlayout.widget.ConstraintLayout>
```


AndroidManifest.xmlファイルにて、laucherアクティビティをSplashActivityに変更しておきましょう。

```xml:title=AndroidManifest.xml
 <activity android:name=".SplashActivity">
    <intent-filter>
      <action android:name="android.intent.action.MAIN" />

      <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
  </activity>
```

### 画像アップロード画面を作成

最後に画像アップロード画面を作成します。
UploadImageActivityをEmptyActivityとして作成し、UploadImageActivity.ktとactivity\_upload\_mage.xmlを以下のように書き換えます。

```kotlin:title=UploadImageActivity.kt
package com.example.amplifytutorial

import android.app.Activity
import android.content.Intent
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.provider.MediaStore
import android.util.Log
import androidx.core.content.FileProvider
import androidx.databinding.DataBindingUtil.setContentView
import com.amazonaws.mobile.client.AWSMobileClient
import com.amplifyframework.core.Amplify
import com.amplifyframework.core.ResultListener
import com.amplifyframework.storage.StorageAccessLevel
import com.amplifyframework.storage.options.StorageDownloadFileOptions
import com.amplifyframework.storage.options.StorageUploadFileOptions
import com.amplifyframework.storage.result.StorageDownloadFileResult
import com.amplifyframework.storage.result.StorageUploadFileResult
import com.example.amplifytutorial.databinding.ActivityUploadImageBinding
import kotlinx.coroutines.*
import java.io.File

class UploadImageActivity : AppCompatActivity(), CoroutineScope by MainScope() {

    companion object {
        const val TAG = "UploadImageActivity"
        const val CAMERA_REQUEST_CODE = 1
    }

    private lateinit var binding: ActivityUploadImageBinding
    private lateinit var mobileClient: AWSMobileClient
    private var cacheUri: Uri? = null
    private var uploadFile: File? = null
    private var downloadFile: File? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = setContentView(this, R.layout.activity_upload_image)
        mobileClient = AWSMobileClient.getInstance()

        binding.downloadButton.setOnClickListener {
            download()
        }

        binding.uploadButton.setOnClickListener {
            launch(Dispatchers.Main) {
                val uri = getUri()
                val intent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
                    .putExtra(MediaStore.EXTRA_OUTPUT, uri)
                if (intent.resolveActivity(packageManager) != null) {
                    startActivityForResult(intent, CAMERA_REQUEST_CODE)
                }
            }
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        cancel()
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        when (requestCode) {
            CAMERA_REQUEST_CODE -> {
                if (resultCode == Activity.RESULT_OK) {
                    Log.d(TAG, "result ok")
                    upload()
                }
            }
            else -> {
                super.onActivityResult(requestCode, resultCode, data)
            }
        }
    }

    private fun upload() {
        launch(Dispatchers.Main) {
            val file = getUploadFile()
            val options =
                StorageUploadFileOptions.builder().accessLevel(StorageAccessLevel.PRIVATE).build()
            Amplify.Storage.uploadFile(
                "test.jpg",
                file.absolutePath,
                options,
                object : ResultListener<StorageUploadFileResult> {
                    override fun onResult(result: StorageUploadFileResult?) {
                        Log.d(TAG, "upload success: ${result?.key}")
                    }

                    override fun onError(error: Throwable?) {
                        Log.e(TAG, "upload error: ${error?.message}")
                    }
                })

        }
    }

    private fun download() {
        launch(Dispatchers.Main) {
            val file = getDownloadFile()
            val options =
                StorageDownloadFileOptions.builder().accessLevel(StorageAccessLevel.PRIVATE).build()
            Amplify.Storage.downloadFile(
                "test.jpg",
                file.absolutePath,
                options,
                object : ResultListener<StorageDownloadFileResult> {
                    override fun onResult(result: StorageDownloadFileResult?) {
                        Log.d(TAG, "download success: ${result?.file?.name}")
                        val uri = FileProvider.getUriForFile(
                            applicationContext,
                            BuildConfig.APPLICATION_ID + ".provider",
                            file
                        )
                        binding.imageView.setImageURI(null)
                        binding.imageView.setImageURI(uri)
                    }

                    override fun onError(error: Throwable?) {
                        Log.e(TAG, "download error: ${error?.message}")
                    }
                })

        }
    }

    private suspend fun getUri(): Uri = withContext(Dispatchers.IO) {
        cacheUri?.let {
            return@withContext it
        }

        val uri = FileProvider.getUriForFile(
            applicationContext,
            BuildConfig.APPLICATION_ID + ".provider",
            getUploadFile()
        )

        uri.also { cacheUri = it }
    }

    private suspend fun getUploadFile(): File = withContext(Dispatchers.IO) {
        uploadFile?.let {
            return@withContext it
        }

        val baseDir = File(applicationContext.cacheDir, "image")
        if (!baseDir.exists()) baseDir.mkdir()

        val imageFile = File(baseDir, "upload.jpg")
        if (!imageFile.exists()) imageFile.createNewFile()

        imageFile.also { uploadFile = it }
    }

    private suspend fun getDownloadFile(): File = withContext(Dispatchers.IO) {
        downloadFile?.let {
            return@withContext it
        }

        val baseDir = File(applicationContext.cacheDir, "image")
        if (!baseDir.exists()) baseDir.mkdir()

        val imageFile = File(baseDir, "download.jpg")
        if (!imageFile.exists()) imageFile.createNewFile()

        imageFile.also { downloadFile = it }
    }
}
```

```xml:title=activity_upload_image.xml
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools">

    <androidx.constraintlayout.widget.ConstraintLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        tools:context=".UploadImageActivity">

        <ImageView
            android:id="@+id/imageView"
            android:layout_width="0dp"
            android:layout_height="0dp"
            android:layout_marginStart="32dp"
            android:layout_marginTop="32dp"
            android:layout_marginEnd="32dp"
            android:layout_marginBottom="32dp"
            app:layout_constraintBottom_toTopOf="@+id/downloadButton"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toTopOf="parent"
            app:srcCompat="@android:color/transparent" />

        <Button
            android:id="@+id/downloadButton"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginBottom="16dp"
            android:text="download from s3"
            app:layout_constraintBottom_toTopOf="@+id/uploadButton"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintStart_toStartOf="parent" />

        <Button
            android:id="@+id/uploadButton"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginBottom="16dp"
            android:text="upload to s3"
            app:layout_constraintBottom_toBottomOf="parent"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintStart_toStartOf="parent" />

    </androidx.constraintlayout.widget.ConstraintLayout>
</layout>
```

デフォルトの写真アプリが、AmplifyTutorialアプリの内部ストレージのcacheディレクトリ内を参照できるように、
以下の設定を付け加えておきましょう。

```xml:title=AndroidManifest.xml
<application>
  <provider
      android:name="androidx.core.content.FileProvider"
      android:authorities="${applicationId}.provider"
      android:exported="false"
      android:grantUriPermissions="true">
      <meta-data
          android:name="android.support.FILE_PROVIDER_PATHS"
          android:resource="@xml/file_paths" />
  </provider>
</application>
```

```xml:title=/res/xml/file_paths.xml
<?xml version="1.0" encoding="utf-8"?>
<paths xmlns:android="http://schemas.android.com/apk/res/android">
    <cache-path
        name="image-cache"
        path="image" />
</paths>
```

最後に、MainActivityでコメントアウトしていた部分を解除します。

```kotlin:title=MainActivity.kt
- //                        val intent = Intent(this@MainActivity, UploadImageActivity::class.java)
- //                        startActivity(intent)

+                         val intent = Intent(this@MainActivity, UploadImageActivity::class.java)
+                         startActivity(intent)
```

## デモ

これで全ての実装が完了しました。  
アプリをビルドし、写真の撮影後画像が正しくS3にアップロード出来てるか確認してみましょう。

以下のコマンドでWebコンソールを立ち上げると、紐付けられているS3バケット内に画像が作成されていることが確認できます。

```shell
$ amplify console
```

## まとめ

以上で、AmplifyとAndroidでログインとファイル保存とPush通知のtutorial第二弾は終了です。  
amplify pushコマンドを実行したタイミングで、S3にアクセスするためのポリシーが自動的にIAMロールに追加されています。  
また、S3バケット内のどこにファイルを保存するかによってファイルの読み書き等のアクセス制御も行えるようです。  
詳しくは公式のドキュメントや追加されたポリシーを参照してください。

次回はS3に画像をアップロードしたタイミングで、push通知配信先に登録されている全てのデバイスに対してpush通知を送信する機能を追加したいと思います。

最後まで読んでいただきありがとうございました。


## 参考リンク

- [Amplify Framework - Storage](https://aws-amplify.github.io/docs/android/storage)
