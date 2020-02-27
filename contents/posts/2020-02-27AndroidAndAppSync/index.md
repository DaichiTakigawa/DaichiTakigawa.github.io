---
title: "AndroidとAppSyncでリアルタイムチャットアプリを作成"
date: "2020-02-27 16:00:00 +0800"
slug: "/android-appsync-tutorial/"
thumbnail: "android-amplify-thumbnail.png"
description: "AWSのAppSyncを用いて、リアルタイムチャット機能を持つAndroidアプリを作成してみました。Amplify CLIを用いてクラウド環境を構築する際に躓いた点や、GraphQLのclientをKotlinで実装した感想などをまとめています。"
tags:
    - "Android"
    - "AWS"
---

## これは何

GraphQLを一度触ってみたかったので、AWSのAppSyncというマネージドサービスを用いて、リアルタイムチャット機能を持ったAndroidアプリを作成してみました。  
当投稿ではAmplify CLIを用いてクラウド環境を構築する際に躓いた点や、GraphQLのクライアントをkotlin(Java)で実装した感想などをまとめています。  
AWSやAmplifyについての詳細な説明は割愛させていただきます。

## GraphQLとは

GraphQLはFacebookが開発した、データクエリ言語とデータ操作の仕様です。  
WebAPIとして利用されるほか、例えば当ブログの構築ツールであるGatsbyではmarkdownファイルや画像ファイルなどのコンテンツにアクセスする際にGraphQLを使用します。

GraphQLとの比較対象に挙げられることが多いのがREST APIなのですが、GraphQLはREST APIと比較して以下のメリットがあると言われています。

- 必要なデータだけを過不足なく取得できるので、ネットワークトラフィック量を減らすことができる。
- WebSocketを利用した双方向通信が仕様に組み込まれているので、リアルタイムに更新するアプリなどを作成しやすい。
- スキーマファーストな開発になるので、クライアントとサーバー側の開発の連携が取りやすい。

逆にデメリットとしては、クライアント側でネットワークリクエストのキャッシュを保持しづらいなどが挙げられます。

## AppSyncとは

AWSが提供するGraphQLサーバーを作成するためのマネージドサービスです。
ノーコードでGraphQLサーバーを構築できる、DynamoDBやLambdaなどの他のサービスとの連携が簡単に可能であるなどの特徴があります。

## Amplifyを用いてクラウド環境を構築

今回はAmplify CLIを用いてクラウド環境を構築していきたいと思います。

Amplify + AppSync + DynamoDBを用いてクラウド環境を構築する場合、GraphQL Transformという仕組みを利用すれば、スキーマを記述しただけで、GraphQLサーバー、データベース、クライアントサイドのコードが全て自動生成されます。  
すごいですね。

[GraphQL Transform](https://aws-amplify.github.io/docs/cli-toolchain/graphql)

GraphQL TransoformはSchema directiveを拡張しているみたいです。

[Schema directives - GraphQL Tools - Apollo GraphQL Docs](https://www.apollographql.com/docs/graphql-tools/schema-directives/)

@modelや@connection、@keyなどのdirectiveを活用することで、データベースの構築と簡単なクエリが可能になります。

以下で、主要なものだけ紹介します。

### @model

```graphql
# @modelが付与された型に対応するテーブルがDynamoDBに作成される。

type Post @model {
  id: ID!
  title: String!
  tags: [String!]!
}
```

### @key

```graphql
# @keyディレクティブを用いることでDynamoDBのprimary keyやsort keyを指定できる。
# またnameやqueryFieldを指定することで、indexやそのindexに対するクエリ操作も可能になる。

type Message
  @model
  @key(fields: ["id", "userId"])
  @key(fields: ["userId"], name: "byUserId", queryField: "messagesByUserId") {
  id: ID!
  userId: ID!
  posted: User! @connection(fields: ["userId"])
  text: String!
  dateTime: AWSDateTime
}
```

### @connection

```graphql
# @connecionを用いると、他のテーブルからfieldsで指定したキーでデータを取得できるようになる。
# またkeyNameでindexを指定してデータを取得することも出来る。

type Post @model {
  id: ID!
  title: String!
  comments: [Comment] @connection(keyName: "byPost", fields: ["id"])
}

type Comment @model
  @key(name: "byPost", fields: ["postID", "content"]) {
  id: ID!
  postID: ID!
  content: String!
}
```

そのほかのディレクティブについては以下のサイトを参照ください。

[GraphQL Transform](https://aws-amplify.github.io/docs/cli-toolchain/graphql)

## Android側の実装

AmplifyにAppSyncのAndroidクライアント用のSDKがあるのですが、まだプレビュー版で出来ることが限られていたので、aws-mobile-sdkのAppSync用のsdkを利用することにしました。

基本的なquery、mutation、subscription操作は以下のようにして出来ます。

### query

```kotlin:title=query
    val query = ListMessagesQuery.builder().build()

    appSyncClient.query(query).responseFetcher(AppSyncResponseFetchers.CACHE_AND_NETWORK)
        .enqueue(object : GraphQLCall.Callback<ListMessagesQuery.Data>() {
            override fun onFailure(e: ApolloException) {
                    Log.e(TAG, "${e.message}")
            }

            override fun onResponse(response: Response<ListMessagesQuery.Data>) {
                if (response.hasErrors()) {
                    Log.e(TAG, response.errors().toString())
                    return
                }

                val items = response.data()?.listMessages()?.items()
                Log.d(TAG, "$items")
            }
        })
```

### mutation

```kotlin:title=mutation
    val username = mobileClient.username
    val text = binding.messageEditText.text.toString()
    val input = CreateMessageInput.builder()
        .id(UUID.randomUUID().toString())
        .userId(username)
        .text(text)
        .dateTime(SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ssXXX").format(Date()))
        .build()

    val mutation = CreateMessageMutation.builder().input(input).build()

    appSyncClient.mutate(mutation)
        .enqueue(object : GraphQLCall.Callback<CreateMessageMutation.Data>() {
            override fun onFailure(e: ApolloException) {
                Log.e(TAG, "${e.message}")
            }

            override fun onResponse(response: Response<CreateMessageMutation.Data>) {
                if (response.hasErrors()) {
                    Log.e(TAG, response.errors().toString())
                } else {
                    Log.d(TAG, response.data().toString())
                }
            }
        })
```

### subscription

```kotlin:title=subscribe
    val subscription = OnCreateMessageSubscription.builder().build()

    subscribeWatcher = appSyncClient.subscribe(subscription)

    subscribeWatcher?.execute(object :
        AppSyncSubscriptionCall.Callback<OnCreateMessageSubscription.Data> {
            override fun onFailure(e: ApolloException) {
                Log.e(TAG, "${e.message}")
            }

            override fun onResponse(response: Response<OnCreateMessageSubscription.Data>) {
                if (response.hasErrors()) {
                    Log.e(TAG, response.errors().toString())
                    return
                }
                Log.d(TAG, "${response.data()}")
            }

            override fun onCompleted() {
                Log.d(TAG, "subscribe finished")
            }
    })
```

query操作とmutation操作に対しては、HogehogeQueryやHogehogeMutationといったクラスのオブジェクトを作成し、それをappsyncClientのqueryメソッドやmutationメソッドに渡すというのが基本的な流れみたいです。  
このHogehogeQueryやHogehogeMutationといったクラスはgradleで適当なpluginを導入すると、schemaから自動生成されます。

subsctription操作については、subscribeメソッドが返すsubscribeWatcherを介して、サーバーからのメッセージを受け取るみたいです。

subscribe中にqueryやmutation操作を行うと、subscriptionが一度中断されてしまうので注意してください。

## 感想

アクセス制御周りはほとんど手を付けなかったのですが、一応GraphQLを利用したアプリクライアント実装のイメージぐらいはつかめた気がします。

GraphQLのデメリットとして挙げられるクライアント側のキャッシュの実装についても、AWSのSDKを利用すれば勝手にごにょごにょやってくれるのでほとんど意識する必要はありませんでした。

クライアントサイドがjavascirptの場合は、GraphQL APIから受け取ったデータをそのままオブジェクトにできるのですが、Javaの場合はAPIから受け取るデータを格納するためのモデルクラスをあらかじめ定義しておく必要があります。  
GraphQLはRESTと異なり、APIから取得するデータを好きなように選べるので、モデルクラスがRESTに比べて複雑になりやすいのが強いてい言うならデメリットなのかなという気がしています。


## 参考リンク

- [Schema directives - GraphQL Tools - Apollo GraphQL Docs](https://www.apollographql.com/docs/graphql-tools/schema-directives/)
- [Amplify CLI GraphQL TransformとディレクティブでAppSync+DynamoDBをいじってみよう！(@model @auth, @key) - Qiita](https://qiita.com/nagym/items/e5b9f43b11ef2309c546)
- [[レポート] MOB401: AWS AppSyncを使ったGraphQL APIを改善するための10Tips/Tricks #reinvent ｜ Developers.IO](https://dev.classmethod.jp/cloud/aws/reinvent2018-mob401/)
- [GraphQL Transform](https://aws-amplify.github.io/docs/cli-toolchain/graphql)
- [API](https://aws-amplify.github.io/docs/sdk/android/api)