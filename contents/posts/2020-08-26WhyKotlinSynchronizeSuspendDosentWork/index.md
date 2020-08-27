---
title: "なぜKotlinでsynchronized suspendは機能しないのか"
date: "2020-08-26 16:00:00 +0800"
slug: "/kotlin-synchronized-suspend/"
thumbnail: "kotlin-thumbnail.png"
description: "Androidで排他制御をかけようとした際に、suspend関数にsyncrhonizedアノテーションを付与してもうまく作動しなかったので原因と解決方法をまとめました。"
tags:
    - "Kotlin"
    - "Android"
---

## なにが問題なのか

まずは以下のコードを見て頂きたいです。

```kotlin
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking

suspend fun doSomething(i: Int) {
    println("#$i enter critical section.")

    // do something critical
    delay(1000)

    println("#$i exit critical section.")
}

fun main() = runBlocking {
    repeat(2) { i ->
        launch(Dispatchers.Default) {
            println("#$i thread name: ${Thread.currentThread().name}")
            doSomething(i)
        }
    }
}
```

main関数内でcoroutineを2つ作成し、doSomething関数を非同期に呼び出しています。  
実行結果は以下のようになります。

```text
#0 thread name: DefaultDispatcher-worker-1
#1 thread name: DefaultDispatcher-worker-2
#0 enter critical section.
#1 enter critical section.
#1 exit critical section.
#0 exit critical section.
```

どのコルーチンで実行されたか分かるように先頭にラベルを出力しています。  
特に排他制御をかけていないので、criticalセクションが同時に二つ走ってしまっていることが分かります。

suspend関数に@Synchronizedアノテーションをつけて排他制御を試みてみます。

```kotlin
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking

@Synchronized
suspend fun doSomething(i: Int) {
    println("#$i enter critical section.")

    // do something
    delay(1000)

    println("#$i exit critical section.")
}

fun main() = runBlocking {
    repeat(2) { i ->
        launch(Dispatchers.Default) {
            println("#$i thread name: ${Thread.currentThread().name}")
            doSomething(i)
        }
    }
}
```

実行します。

```text
#0 thread name: DefaultDispatcher-worker-2
#0 enter critical section.
#1 thread name: DefaultDispatcher-worker-1
#1 enter critical section.
#0 exit critical section.
#1 exit critical section.
```

Sychronizedアノテーションがついているにも関わらず、criticalセクションに入っているthreadが同時に2つ存在しています。

suspend関数にSyncrhonizedアノテーションをつけても無視されるのか？と思い、suspend関数内部でsyncrhonized関数を用いて排他制御をかけようと試みます。

```kotlin
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking

val LOCK = Object()

suspend fun doSomething(i: Int) {
    synchronized(LOCK) {
        println("#$i enter critical section.")

        // do something
        delay(1000) // <- The 'delay' suspension point is inside a critical section

        println("#$i exit critical section.")
    }
}

fun main() = runBlocking {
    repeat(2) { i ->
        launch(Dispatchers.Default) {
            println("#$i thread name: ${Thread.currentThread().name}")
            doSomething(i)
        }
    }
}
```

今度は "The 'delay' suspension point is inside a critical section" というメッセージが出力されてコンパイルエラーになります。

## 解決方法

まず先に解決方法を提示し、そのあとなぜうまく作動しなかったか解説していきたいと思います。

suspend関数内で排他制御をかけたい時はMutexを用います。

```kotlin
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock

val mutex = Mutex()

suspend fun doSomething(i: Int) {
    mutex.withLock {
        println("#$i enter critical section.")

        // do something
        delay(1000) // <- The 'delay' suspension point is inside a critical section

        println("#$i exit critical section.")
    }
}

fun main() = runBlocking {
    repeat(2) { i ->
        launch(Dispatchers.Default) {
            println("#$i thread name: ${Thread.currentThread().name}")
            doSomething(i)
        }
    }
}
```

実行結果。

```text
#0 thread name: DefaultDispatcher-worker-1
#1 thread name: DefaultDispatcher-worker-2
#1 enter critical section.
#1 exit critical section.
#0 enter critical section.
#0 exit critical section.
```

ちゃんとcriticalセクションに入れるthreadが一つに制限されています。


## suspend関数はどのようにコンパイルされるのか

なぜSynchronizedアノテーションをつけたsuspend関数では排他制御がうまく機能しなかったのでしょうか。

どうやらそれはsuspend関数がどのようにバイトコードにコンパイルされるかと関係しているようです。  
suspend関数は一見するとすごく特別な関数のように見えますが、コンパイルされるタイミングではもちろん通常の関数に変換されます。

以下はAPIサーバーからtokenを取得して、postを投げる疑似コードです。  
このコードを用いてsuspend関数がどのようにコンパイルされるのか簡単に見ていきましょう。

```kotlin
class Item()
class Post()

suspend fun requestToken(): String {
    // get token from api
    return "token"
}

suspend fun createPost(token: String, item: Item): Post {
    // create post
    return Post()
}

fun processPost(post: Post) {
    // do post
}

suspend fun postItem(item: Item) {
    val token = requestToken()
    val post = createPost(token, item)
    processPost(post)
}
```

まず、このコードをsuspend関数を使わないで書こうとすると以下のようになるかと思います。


```kotlin
class Item()
class Post()

fun requestToken(callback: (String) -> Unit) {
    // get token from api
    // 実際は多分こんな感じになる。
    // service.getToken(username, password, object : ResponseCallback {
    //      override fun onSuccess(response: Response) {
    //          val token = getToken(response)
    //          callback(token)
    //      }
    // })
    callback("token")
}

fun createPost(token: String, item: Item, callback: (Post) -> Unit) {
    // create post
    callback(Post())
}

fun processPost(post: Post) {
    // do post
}

fun postItem(item: Item) {
    requestToken { token ->
        createPost(token, item) { post ->
            processPost(post)
        }
    }
}

```

ネットワークアクセスや重たい処理はバックグラウンドで行い、結果が返ってきたタイミングでcallbackをよぶスタイルです。  
これを継続渡しスタイル(CPS: Continuation-passing style)と呼ぶらしいです。  
なんてことはないただのcallbackです。

suspend関数もコンパイル時には上記のようにCPSに変換されてコンパイルされます。  
しかし上記のコードとは少し異なるものとなります。

まず、suspend関数のシグニチャがどのように変換されるか見てみます。

```kotlin
// kotlin
suspend fun createPost(token: String, item: Item): Post { ... }

// Java/JVM
Object createPost(String token, Item item, Continuation<Post> cont) { ... }
```

すべてのsuspend関数は上記のように新しくCoutinueation型の引数を受け取るようになります。  
このContinuation\<Post\>はcallbackに相当します。Continuationはkotlinのライブラリで定義されているintarfaceです。中身を見てみます。

```kotlin
interface Continuation<in T> {
    val context: CoroutineContext
    fun resume(value: T)
    fun resumeWithException(exception: Throwable)
}
```

CoroutineContext(どのthreadで実行されるか等の情報を持つ)とコールバックを二つ持ちます。  
ここまでは、上記の手作業でcallbackスタイルに直した場合と基本的には同じことが起きています。

しかし、postItem関数の処理部分がどのように変換されるか観察すると少しずつ違いが出てきます。  

以下、postItem関数の内部のコードがどのように変換されるかステップごとに見ていきましょう。  

まずpostItem関数の内部コード全体は巨大なswitch文となり、すべてのsuspendポイントにラベルが張られます。  
postItem関数はsuspendポイントに到達するたびにreturnし、適当なタイミングでまた呼び出されます。  
イメージとしては以下のようになります。

```kotlin
// イメージ
suspend fun postItem(item: Item, label: Int) {
    switch (label) {
        case 0:
            val token = requestToken()
        case 1:
            val post = createPost(token, item)
        case 2:
            processPost(post)
    }
}
```

しかし、これだとtokenやpostなどの変数を次の呼び出しで利用することができないので、関数内部の実行状態を保存するためのobjectを生成します。  
このobjectは先ほど出てきたContinueationを実装したものです。state machineと呼ぶらしいです。

```kotlin
// イメージ
suspend fun postItem(item: Item) {
    val sm = object : ContinueImpl { ... }
    switch (label) {
        case 0:
            val token = requestToken()
        case 1:
            val post = createPost(token, item)
        case 2:
            processPost(post)
    }
}
```

先ほど話に上がったようににすべてのsuspend関数はContinuationを引数に受け取る通常の関数に変換されます。  
内部で呼び出すsuspend関数にはこの作成したstate machineが渡されます。

```kotlin
// イメージ
fun postItem(item: Item, cont: Continuation) {
    val sm = object : ContinueImpl { ... }
    switch (label) {
        case 0:
            requestToken(sm)
        case 1:
            createPost(token, item, sm)
        case 2:
            processPost(post)
    }
}
```

どこまで実行したかのlabelや内部状態などをこのstate machineに保存するようにします。

```kotlin
// イメージ
fun postItem(item: Item, cont: Continuation) {
    val sm = object : ContinueImpl { ... }
    switch (sm.label) {
        case 0:
            sm.item = item
            sm.label = 1 // <- 次に実行するラベル
            requestToken(sm)
        case 1:
            createPost(token, item, sm)
        case 2:
            processPost(post)
    }
}
```

ContinueImplはContinuationを継承しているのでresumeを実装しています。  
ContineuImplのresume関数内部では自身を引数にしてpostItemが呼び直されます。  
requestToken関数ではすべての処理が終わったタイミングで、このstate machineにtokenを格納し、resume関数を呼ぶことになります。

```kotlin
// イメージ
fun postItem(item: Item, cont: Continuation) {
    val sm = object : ContinueImpl { 
        fun resume() {
            postIem(null, this)
        }
     }
    switch (sm.label) {
        case 0:
            sm.item = item
            sm.label = 1
            requestToken(sm)
        case 1:
            createPost(token, item, sm)
        case 2:
            processPost(post)
    }
}
```

今のままだと内部状態が常に上書きされてしまうので修正します。  
ContineuImplをこのsuspend関数独自のThisSMという型に変更します。  
引数に渡されたcontinuationがThisSM型でない場合だけインスタンスを生成します。  
こうすることで、postItem関数が内部で生成したstate machineのresume経由で呼び出されたときは、前の状態を引き継ぐことができます。  
そしてcase 1ブロック内ではstate machineからitemやtokenなどを受け取ります。

```kotlin
// イメージ
fun postItem(item: Item, cont: Continuation) {
    val sm = cont as? ThisSM ?: object : ThisSM { 
        fun resume() {
            postIem(null, this)
        }
     }
    switch (sm.label) {
        case 0:
            sm.item = item
            sm.label = 1
            requestToken(sm)
        case 1:
            val item = sm.item
            val token = sm.result as String
            sm.label = 2
            createPost(token, item, sm)
        case 2:
            processPost(post)
    }
}
```

解説動画にはなかったのですが、おそらく、すべての処理が終了したら、最初に渡されていたcontinuationのresumeを呼び出す実装になっているのかと思います。(間違っていったらご指摘いただけると幸いです)

```kotlin
// イメージ
fun postItem(item: Item, cont: Continuation) {
    val sm = cont as? ThisSM ?: object : ThisSM { 
        val initialCont = cont
        fun resume() {
            postIem(null, this)
        }
     }
    switch (sm.label) {
        case 0:
            sm.item = item
            sm.label = 1
            requestToken(sm)
        case 1:
            val item = sm.item
            val token = sm.result as String
            sm.label = 2
            createPost(token, item, sm)
        case 2:
            processPost(post)
            sm.initialCont.reusme()
    }
}
```

これでsuspend関数を通常の関数に変換することができました。

## なぜ作動しなかったのか

suspend関数がどのようにコンパイルされるか大体のイメージがつかめると、最初のコードがなぜうまく作動しなかったのか理解できます。

最初のコードを再掲します。

```kotlin
@Synchronized
suspend fun doSomething(i: Int) {
    println("#$i enter critical section.")

    // do something
    delay(1000)

    println("#$i exit critical section.")
}
```

このコードはコンパイルされる時に以下のようにに変換されます。

```kotlin
// イメージ
@Synchronized
fun doSomething(i: Int, cont: Continuation) {
    val sm = cont as? ThisSM ?: ThisSM { ... }
    switch (sm.label) {
        case 0:
            println("#$i enter critical section.")

            sm.label = 1
            delay(1000, sm)
        case 1:
            println("#$i exit critical section.")
    }
}
```

delayを呼び出したあと、doSomething関数が一度returnするタイミングでオブジェクトのlockが外れています。

従ってdelay関数が呼び出されreturnした後、またdoSomething関数が呼び出されるまでの間は、別のcoroutineで呼び出されたdoSomething関数がlockを獲得することができます。

これが原因であたかもcriticalセクションを実行しているthreadが複数存在しているように見えたのでした。

## 参考リンク

- [Coroutines and Java Synchronization Don't Mix](https://blog.danlew.net/2020/01/28/coroutines-and-java-synchronization-dont-mix/)
- [KotlinConf 2017 - Deep Dive into Coroutines on JVM by Roman Elizarov](https://www.youtube.com/watch?v=YrrUCSi72E8)
