---
title: "AmplifyとAndroidでログインとファイル保存とPush通知(1)"
date: "2020-01-20 16:00:00 +0800"
slug: "/amplify-android-congito/"
thumbnail: "android-aws-thumbnail.png"
description: "awsのamplifyとandroidの連携方法をまとめたtutorial。Cognitoでユーザー管理、S3でファイル保存、PinpointとLambdaでPush通知という流れ。この投稿はその第一弾です。"
tags:
    - "AWS"
    - "Android"
---

## これは何

AWAのAmplifyは、ウェブアプリケーションやモバイルアプリケーションのサーバレスなバックエンドをcliやwebコンソールから簡単に作成できるツールとして最近注目を集めています。  
しかし、Amplifyは元々ウェブアプリケーションのためのツールであり、モバイルアプリケーション向けのライブラリを公開したのはつい最近のことみたいです。[Introducing Amplify for iOS and Android](https://aws.amazon.com/jp/about-aws/whats-new/2019/12/introducing-amplify-for-ios-and-android/?nc1=h_ls)

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

Android StudioやAmplify cliはすでにインストールかつ設定済みであるとします。Amplifyのインストールや設定は[Amplifyの公式サイト](https://aws-amplify.github.io/)を確認してください。  
まず、AndorodProjectを作成します。
以下の設定で作成しました。

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

自動的にAmplifyリソースを作成してくれます。

## AmplifyにAuthを追加

AmplifyにAuth機能を追加しましょう。  
以下のコマンドを実行することで、バックエンドにcognitoや適当なiamロールを自動的に作成してくれます。

```shell
$ amplify add auth
Using service: Cognito, provided by: awscloudformation

 The current configured provider is Amazon Cognito.

 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections.
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.

$ amplify push
```

時間がかかるのでしばらく待ちましょう。

## Android側の実装

次はandroid側の実装に移ります。

### gradleに設定を追加

まず適当なライブラリをdependancyに加えます。
なお、公式サイトではapply plugin: 'com.amplifyframework.amplifytools'を一番最後に付け加えていましたが、当ブログ運営者の環境ではエラーが生じました。現時点では、無くても問題ないので省略します。

```gradle:title=buid.gradle(project)
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

```gradle:title=buidle.gradle(app)

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



### アカウント作成画面を作成

### 認証コード用の画面を作成

## 実際にアカウント作成とログインをする

## まとめ

## 参考リンク