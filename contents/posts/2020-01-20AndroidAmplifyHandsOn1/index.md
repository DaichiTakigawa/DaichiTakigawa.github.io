---
title: "AmplifyとAndroidでログイン"
date: "2020-01-20 16:00:00 +0800"
slug: "/amplify-android-congito/"
thumbnail: "android-amplify-thumbnail.png"
description: "awsのamplifyとandroidの連携方法をまとめたtutorial。Cognitoでユーザー管理、S3でファイル保存、PinpointとLambdaでPush通知という流れ。この投稿はその第一弾です。"
tags:
    - "AWS"
    - "Android"
---

## これは何

AWAのAmplifyは、ウェブアプリケーションやモバイルアプリケーションのサーバレスなバックエンドをcliやwebコンソールから簡単に作成できるツールとして最近注目を集めています。  
しかし、Amplifyは元々ウェブアプリケーションのためのツールであり、モバイルアプリケーション向けのライブラリを公開したのは割と最近のことみたいです。  
[Introducing Amplify for iOS and Android](https://aws.amazon.com/jp/about-aws/whats-new/2019/12/introducing-amplify-for-ios-and-android/?nc1=h_ls)

そのため、AndroidとAmplifyの連携方法についての情報が乏しく、githubでサンプルコードを検索してもほとんど見当たらないというのが現状でした。  

今回は、当ブログ運営者がAmplifyを用いて、ログイン、画像アップロード、push通知を実装した際に躓いた点や、実装の大まかな流れをtutorial形式でまとめました。  
AndroidのActivityなどの基本的なコンポーネントや、AWSの各サービスの基本的な説明は省略させていただきます。

なお、今回のデモで作成するアプリの機能要件は以下の通りです。

1. アプリを起動するとログイン画面が表示される。
1. ログイン画面でアカウント作成ボタンをタップするとアカウント作成画面に移行、ログインボタンをタップすると画像アップロード画面に移行。
1. 画像アップロード画面でUPLOADボタンをタップすると写真アプリが開かれ、撮影後、自動的にサーバーに画像を保存。DOWNLOADボタンをタップするとサーバーに保存されている画像を取得。
1. サーバーに画像を保存したタイミングで、プッシュ通知配信先として登録されているすべてのデバイスに対してPush通知を送信。

それでは早速始めていきましょう。

## AndroidProjectにAmplifyを導入

Android StudioやAmplify cliはすでにインストールかつ設定済みであるとします。Amplifyのインストールや設定方法は[Amplifyの公式サイト](https://aws-amplify.github.io/)を確認してください。  
まず、AndorodProjectを作成します。 初期設定は以下の通りです。

|項目|内容|
|---|---|
|テンプレート|Empty Activity|
|プロジェクト名|AmplifyTutorial|
|min sdk|21|

作成後、projectのルートディレクトリで以下のコマンドを打ち込みます。

```shell
$ amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project AmplifyTutorial
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building android
Please tell us about your project
? Where is your Res directory:  app/src/main/res
Using default provider  awscloudformation


For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use default
```

自動的にAmplifyリソースを作成してくれます。以下のコマンドを実行すると、コンソール画面から確認出来ます。

```bash
$ amplify console
```


## AmplifyにAuthを追加

AmplifyにAuth機能を追加します。  
以下のコマンドを実行することで、バックエンドにcognitoや適当なiamロールが作成されます。

```shell
$ amplify add auth
Using service: Cognito, provided by: awscloudformation

 The current configured provider is Amazon Cognito.

 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections.
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.
```

変更をクラウド側にpushします。

```shell
$ amplify push
```

時間がかかるのでしばらく待ちましょう。

## Android側の実装

次はandroid側の実装に移ります。

### gradleに設定を追加

まず適当なライブラリを依存関係に加えます。  
なお、公式サイトではprojectレベルのbuild.gradleの一番最後に  
apply plugin: 'com.amplifyframework.amplifytools'  
を付け加えるように指示していましたが、当ブログ運営者の環境ではエラーになりました。  
現時点では、apply plugin文が無くても問題なく作動したので省略します。

```groovy:title=buid.gradle(project)
buildscript {
    repositories {
        mavenCentral()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.5.3'
        classpath 'com.amplifyframework:amplify-tools-gradle-plugin:0.2.0'
    }
}
```

amlify関連のライブラリに加え、croutineやdatabindingなどの設定も行います。

```groovy:title=buidle.gradle(app)

apply plugin: 'kotlin-kapt'

android {
  dataBinding {
    enabled = true
  }
  compileOptions {
    sourceCompatibility 1.8
    targetCompatibility 1.8
  }
}

dependencies {
  implementation 'com.amplifyframework:core:0.9.0'
  def aws_sdk_version = '2.16.+'
  implementation "com.amazonaws:aws-android-sdk-mobile-client:$aws_sdk_version"

  implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-core:1.3.0'
  implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-android:1.3.0'
}
```

### ログイン画面を作成

まずはログイン画面を作成します。  
MainActivityとactivity_main.xmlを以下のように変更しましょう。

```kotlin:title=MainActivity.kt
package com.example.amplifytutorial

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import androidx.databinding.DataBindingUtil.setContentView
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AlertDialog
import com.amazonaws.mobile.client.AWSMobileClient
import com.amazonaws.mobile.client.Callback
import com.amazonaws.mobile.client.UserStateDetails
import com.amazonaws.mobile.client.results.SignInResult
import com.amazonaws.mobile.client.results.SignInState
import com.example.amplifytutorial.databinding.ActivityMainBinding
import kotlinx.coroutines.*
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit

class MainActivity : AppCompatActivity(), CoroutineScope by MainScope() {

    companion object {
        const val TAG = "MainActivity"
    }

    private lateinit var binding: ActivityMainBinding
    private lateinit var mobileClient: AWSMobileClient

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = setContentView(this, R.layout.activity_main)
        mobileClient = AWSMobileClient.getInstance()

        val mobileClientLatch = CountDownLatch(1)
        mobileClient.initialize(applicationContext, object : Callback<UserStateDetails> {
            override fun onResult(result: UserStateDetails?) {
                mobileClientLatch.countDown()
            }

            override fun onError(e: java.lang.Exception?) {
                Log.e(TAG, "Initialization error.", e)
            }
        })


        try {
            if (!mobileClientLatch.await(
                    2000L,
                    TimeUnit.MILLISECONDS
                )
            ) throw Exception("Failed to initialize mobile client.")
        } catch (exception: Exception) {
            Log.d(TAG, "${exception.message}")
        }

        binding.loginButton.setOnClickListener {
            val username = binding.userIdEditText.text.toString()
            val password = binding.passwordEditText.text.toString()

            login(username, password)
        }

        binding.createAccountButton.setOnClickListener {
//            val intent = Intent(this, SignUpActivity::class.java)
//            startActivity(intent)
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        cancel()
    }

    private fun login(username: String, password: String) {
        mobileClient.signIn(username, password, null, object : Callback<SignInResult> {
            override fun onResult(result: SignInResult?) {
                Log.d(TAG, "initialize onResult: ${result?.signInState}")
                when (result?.signInState) {
                    SignInState.DONE -> {
//                        val intent = Intent(this@MainActivity, UploadImageActivity::class.java)
//                        startActivity(intent)
                    }
                    else -> {
                        Log.e(TAG, "initialize onResult: ${result?.signInState}")
                        createDialog("${result?.signInState}")
                    }
                }
            }

            override fun onError(e: Exception?) {
                e?.printStackTrace()
                Log.e(TAG, "signIn onError: ${e?.message}")
                launch(Dispatchers.Main) {
                    createDialog("${e?.message}")
                }
            }
        })
    }


    private fun createDialog(message: String?) {
        AlertDialog.Builder(this)
            .setMessage(message)
            .setNeutralButton("OK", null)
            .show()
    }

}
```

```xml:title=activity_main.xml
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools">

    <androidx.constraintlayout.widget.ConstraintLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        tools:context=".MainActivity">

        <TextView
            android:id="@+id/textView5"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="userId"
            app:layout_constraintBottom_toTopOf="@+id/textView6"
            app:layout_constraintEnd_toStartOf="@+id/userIdEditText"
            app:layout_constraintHorizontal_bias="0.5"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toTopOf="parent"
            app:layout_constraintVertical_bias="0.3"
            app:layout_constraintVertical_chainStyle="packed" />

        <TextView
            android:id="@+id/textView6"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="64dp"
            android:text="password"
            app:layout_constraintBottom_toBottomOf="parent"
            app:layout_constraintEnd_toStartOf="@+id/passwordEditText"
            app:layout_constraintHorizontal_bias="0.5"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toBottomOf="@+id/textView5"
            app:layout_constraintVertical_chainStyle="packed" />

        <EditText
            android:id="@+id/userIdEditText"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:ems="10"
            android:inputType="textPersonName"
            app:layout_constraintBaseline_toBaselineOf="@+id/textView5"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintHorizontal_bias="0.5"
            app:layout_constraintStart_toEndOf="@+id/textView5" />

        <EditText
            android:id="@+id/passwordEditText"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:ems="10"
            android:inputType="textPassword"
            app:layout_constraintBaseline_toBaselineOf="@+id/textView6"
            app:layout_constraintStart_toStartOf="@+id/userIdEditText" />

        <Button
            android:id="@+id/loginButton"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_marginStart="64dp"
            android:layout_marginTop="64dp"
            android:layout_marginEnd="64dp"
            android:background="@android:color/holo_blue_bright"
            android:text="login"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toBottomOf="@+id/passwordEditText" />

        <Button
            android:id="@+id/createAccountButton"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_marginStart="64dp"
            android:layout_marginTop="32dp"
            android:layout_marginEnd="64dp"
            android:background="@android:color/holo_blue_bright"
            android:text="create account"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toBottomOf="@+id/loginButton" />
    </androidx.constraintlayout.widget.ConstraintLayout>
</layout>
```

とりあえずログイン画面を作成しました。  
mobileClient.initialze()部分が少し気持ち悪い実装になっていますが、後々書き換えるので今はこのままにしておいてください。


### アカウント作成画面を作成

次にアカウント作成画面を作成します。  
新しくSignUpActivityをEmptyActivityとして作成しましょう。作成後SignUpActivityとactivity\_sign\_up.xmlを以下のように書き換えます。

```kotlin:title=SignUpActivity.kt
package com.example.amplifytutorial

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import androidx.databinding.DataBindingUtil.setContentView
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AlertDialog
import com.amazonaws.mobile.client.AWSMobileClient
import com.amazonaws.mobile.client.Callback
import com.amazonaws.mobile.client.results.SignUpResult
import com.example.amplifytutorial.databinding.ActivitySignUpBinding
import kotlinx.coroutines.*

class SignUpActivity : AppCompatActivity(), CoroutineScope by MainScope() {

    companion object {
        const val TAG = "SignUpActivity"
    }

    private lateinit var binding: ActivitySignUpBinding
    private lateinit var mobileClient: AWSMobileClient

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = setContentView(this, R.layout.activity_sign_up)
        mobileClient = AWSMobileClient.getInstance()


        binding.signUpButton.setOnClickListener {
            val username = binding.userIdEditText.text.toString()
            val password = binding.passwordEditText.text.toString()
            val email = binding.emailEditText.text.toString()

            Log.d(TAG, "userId: $username, password: $password, email: $email")

            signUp(username, password, email)
        }

    }

    override fun onDestroy() {
        super.onDestroy()
        cancel()
    }

    private fun signUp(username: String, password: String, email: String) {
        val userAttributes = mapOf("email" to email)

        mobileClient.signUp(
            username,
            password,
            userAttributes,
            null,
            object : Callback<SignUpResult> {
                override fun onResult(result: SignUpResult?) {
                    Log.d(TAG, "signUp onResult: ${result?.confirmationState}")
                    result?.confirmationState?.let { confirmed ->
                        if (confirmed) {
                            val intent = Intent(this@SignUpActivity, MainActivity::class.java)
                            startActivity(intent)
                        }
                    }

                    result?.userCodeDeliveryDetails?.attributeName.let { attribute ->
                        when (attribute) {
                            "email" -> {
//                                val intent = Intent(this@SignUpActivity, VerificationActivity::class.java)
//                                    .putExtra("username", username)
//                                startActivity(intent)
                            }
                            else -> {
                                Log.e(TAG, "signUp onResult: $attribute")
                                launch(Dispatchers.Main) {
                                    createDialog("unknown attribute: $attribute")
                                }
                            }
                        }
                    }
                }

                override fun onError(e: Exception?) {
                    Log.e(TAG, "signUp onError: ${e?.message}")
                    launch(Dispatchers.Main) {
                        createDialog("${e?.message}")
                    }
                }
            })
    }

    private fun createDialog(message: String?) {
        AlertDialog.Builder(this)
            .setMessage(message)
            .setNeutralButton("OK", null)
            .show()
    }

}
```

```xml:title=activity_sign_up.xml
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools">

    <androidx.constraintlayout.widget.ConstraintLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        tools:context=".SignUpActivity">

        <TextView
            android:id="@+id/textView"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="userId"
            app:layout_constraintBottom_toTopOf="@+id/textView4"
            app:layout_constraintEnd_toStartOf="@+id/userIdEditText"
            app:layout_constraintHorizontal_bias="0.5"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toTopOf="parent"
            app:layout_constraintVertical_bias="0.3"
            app:layout_constraintVertical_chainStyle="packed" />

        <TextView
            android:id="@+id/textView2"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="64dp"
            android:text="password"
            app:layout_constraintBottom_toBottomOf="parent"
            app:layout_constraintEnd_toStartOf="@+id/passwordEditText"
            app:layout_constraintHorizontal_bias="0.5"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toBottomOf="@+id/textView4"
            app:layout_constraintVertical_chainStyle="packed" />

        <EditText
            android:id="@+id/userIdEditText"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:ems="10"
            android:inputType="textPersonName"
            app:layout_constraintBaseline_toBaselineOf="@+id/textView"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintHorizontal_bias="0.5"
            app:layout_constraintStart_toEndOf="@+id/textView" />

        <EditText
            android:id="@+id/passwordEditText"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:ems="10"
            android:inputType="textPassword"
            app:layout_constraintBaseline_toBaselineOf="@+id/textView2"
            app:layout_constraintStart_toEndOf="@+id/textView2"
            app:layout_constraintStart_toStartOf="@+id/userIdEditText" />

        <Button
            android:id="@+id/signUpButton"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_marginStart="64dp"
            android:layout_marginTop="64dp"
            android:layout_marginEnd="64dp"
            android:background="@android:color/holo_blue_bright"
            android:text="sigin up"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toBottomOf="@+id/passwordEditText" />

        <TextView
            android:id="@+id/textView4"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="64dp"
            android:text="email"
            app:layout_constraintBottom_toTopOf="@+id/textView2"
            app:layout_constraintEnd_toStartOf="@+id/emailEditText"
            app:layout_constraintHorizontal_bias="0.5"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toBottomOf="@+id/textView" />

        <EditText
            android:id="@+id/emailEditText"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:ems="10"
            android:inputType="textEmailAddress"
            app:layout_constraintBaseline_toBaselineOf="@+id/textView4"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintHorizontal_bias="0.5"
            app:layout_constraintStart_toEndOf="@+id/textView4" />
    </androidx.constraintlayout.widget.ConstraintLayout>

</layout>
```

また、MainActivity.ktの以下のコメントアウトを解除します。

```kotlin:title=MacinActivity.kt
- //            val intent = Intent(this, SignUpActivity::class.java)
- //            startActivity(intent)

+            val intent = Intent(this, SignUpActivity::class.java)
+            startActivity(intent)
```

### 認証コード用の画面を作成

登録したメールアドレスに送信される6ケタの認証コードを入力する画面を作成します。  
VerificationActivityをEmptyActivityとして作成します。作成後VerificationActivity.ktとactivity_verification.xmlを以下のように書き換えます。

```kotlin:title=VerificationActivity.kt
package com.example.amplifytutorial

import android.content.Intent
import androidx.databinding.DataBindingUtil.setContentView
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AlertDialog
import com.amazonaws.mobile.client.AWSMobileClient
import com.amazonaws.mobile.client.Callback
import com.amazonaws.mobile.client.results.SignUpResult
import com.example.amplifytutorial.databinding.ActivityVerificationBinding
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch

class VerificationActivity : AppCompatActivity(), CoroutineScope by MainScope() {

    companion object {
        const val TAG = "VerificationActivity"
    }


    private lateinit var binding: ActivityVerificationBinding
    private lateinit var mobileClient: AWSMobileClient
    var username: String? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = setContentView(this, R.layout.activity_verification)
        mobileClient = AWSMobileClient.getInstance()

        username = intent.getStringExtra("username")

        binding.submitButton.setOnClickListener {
            val code = binding.confirmationCode.text.toString()
            confirm(code)
        }

    }

    private fun confirm(code: String) {
        mobileClient.confirmSignUp(username, code, object : Callback<SignUpResult> {
            override fun onResult(result: SignUpResult?) {
                Log.d(TAG, "signUp onResult: ${result?.confirmationState}")
                result?.confirmationState?.let { confirmed ->
                    if (confirmed) {
                        val intent = Intent(this@VerificationActivity, MainActivity::class.java)
                        startActivity(intent)
                    }
                }
            }

            override fun onError(e: Exception?) {
                Log.e(TAG, "signUp onError: ${e?.message}")
                launch(Dispatchers.Main) {
                    createDialog("${e?.message}")
                }
            }
        })

    }

    private fun createDialog(message: String?) {
        AlertDialog.Builder(this)
            .setMessage(message)
            .setNeutralButton("OK", null)
            .show()
    }

}
```

```xml:title=activity_verification.xml
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools">

    <androidx.constraintlayout.widget.ConstraintLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        tools:context=".VerificationActivity">

        <TextView
            android:id="@+id/textView3"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="128dp"
            android:text="confirmation code"
            app:layout_constraintEnd_toStartOf="@+id/confirmationCode"
            app:layout_constraintHorizontal_bias="0.5"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toTopOf="parent" />

        <EditText
            android:id="@+id/confirmationCode"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:ems="10"
            android:inputType="number"
            app:layout_constraintBaseline_toBaselineOf="@+id/textView3"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintHorizontal_bias="0.5"
            app:layout_constraintStart_toEndOf="@+id/textView3" />

        <Button
            android:id="@+id/submitButton"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="32dp"
            android:text="submit"
            app:layout_constraintEnd_toEndOf="@+id/confirmationCode"
            app:layout_constraintTop_toBottomOf="@+id/confirmationCode" />
    </androidx.constraintlayout.widget.ConstraintLayout>
</layout>
```

また、SignUpActivity.ktの以下の部分のコメントアウトを解除します。

```kotlin:title=SignUpActivigy.kt
- //                                val intent = Intent(this@SignUpActivity, VerificationActivity::class.java)
- //                                    .putExtra("username", username)
- //                                startActivity(intent)

+                                 val intent = Intent(this@SignUpActivity, VerificationActivity::class.java)
+                                     .putExtra("username", username)
+                                 startActivity(intent)
```

AndroidManifest.xmlにパーミッションを追加することも忘れずに

```xml:title=AndroidManifest.xml
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

## デモ

これでCognitoにアカウント作成できるようになりました。  
実際にアプリをビルドしてアカウントを作成してみましょう。

最後のログインまで終了すれば、以下のコマンドからcognitoのコンソール画面を開きアカウントが1つ作成されていることが確認できます。

```shell
amplify console auth
```

## まとめ

以上で、AmplifyとAndroidでログインとファイル保存とPush通知のtutorial第一弾は終了です。  
認証周りのクラウドの環境がコマンド一発で構築出来てしまうのはめちゃくちゃ便利だなぁと感じました。

次回はCognitoからもらったcredential(id token)を用いてS3に画像をアップロードする機能を追加したいと思います。

最後まで読んでいただきありがとうございました。

## 参考リンク

- [Amplify Framework Authentication](https://aws-amplify.github.io/docs/android/authentication)