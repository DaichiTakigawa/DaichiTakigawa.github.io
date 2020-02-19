---
title: "KotlinのDIライブラリKoinを試してみる"
date: "2020-02-18 16:00:00 +0800"
slug: "/android-kotlin-koin/"
thumbnail: "android-thumbnail.png"
description: "KotlinのDpendancy InjectionライブラリであるKoinをAndroidアプリに導入する方法をまとめました。"
tags:
    - "Android"
    - "Kotlin"
---

## これは何

kotlinのDIライブラリであるKoinを使ってみたところ、ViewModelやRepository、WebInterface周りの連携がめちゃくちゃ楽になったので、
AndroidアプリへのKoinの導入方法や利用方法をまとめてみました。

## Dependancy Injectionとは

Dependancy Injectionは日本語訳すると、依存性の注入となります。  
日本語にするとなんとも危ない感じがしますね。

Depndancy Injection自体のコンセプトはそんなにむずかしいものではありません。

以下のように、CarクラスがEngineクラスに依存していたとします。

```kotlin:title=test.kt
class Engine {
    fun start() {
        println("Engine start")
    }
}

class Car {
    private val engine = Engine()
    fun go() {
        engine.start()
    }
}

fun main() {
    val car = Car()
    car.go()
}

```

Engineクラスを継承したSuperEngienクラスを作成し、それをCarクラスのengineとして利用したいとします。

```kotlin:title=test.kt
class SuperEngine: Engine() {
    override fun start() {
        println("SuperEngine start")
    }
}

class Car {
    private val engine = SuperEngine()
    fun go() {
        engine.start()
    }
}

fun main() {
    val car = Car()
    car.go()
}

```

このときCarクラスの内部実装まで変更しなければならない点に注目してください。
このため、依存クラスを置き換えて、Carクラスの挙動に柔軟性をもたせるということが困難になっています。

依存クラスを外部から注入してあげることでこの問題を解決出来ます。

```kotlin:title=test.kt
open class Engine {
    open fun start() {
        println("Engine start")
    }
}

class SuperEngine: Engine() {
    override fun start() {
        println("SuperEngine start")
    }
}

class Car(private val engine: Engine) {
    fun go() {
        engine.start()
    }
}

fun main() {
    val engine = Engine()
    val superEngine = SuperEngine()
    val car = Car(engine)
    val superCar = Car(superEngine)
    car.go()
    superCar.go()
}
```

DIライブラリはこの依存関係の管理をしてくれるライブラリです。
JavaだとDaggerというライブラリが有名です。  
もちろん、KotlinでもDaggerを利用することはできるのですが、よりKotlinっぽく書けるように作成されたKoinというライブラリがあります。
Android + kotlinのDIライブラリとしてはほぼデファクトスタンダードとなっているようなので今回はKoinを使っていきましょう。

## 導入方法

applicationレベルのbuild.gradleに以下の設定を加えます。

```groovy:title=build.gradle(app)
dependencies {
    // Dependancy Injectionをしてくれるライブラリ
    def koin_version = '2.0.1'
    // Koin for Android
    implementation "org.koin:koin-android:$koin_version"
    // Koin Android Scope features
    implementation "org.koin:koin-android-scope:$koin_version"
    // Koin Android ViewModel features
    implementation "org.koin:koin-android-viewmodel:$koin_version"
    // Koin Android Experimental features
    implementation "org.koin:koin-android-ext:$koin_version"
}
```

Applicationクラスを作成します。

```kotlin:title=App.kt
class App : Application() {

    override fun onCreate() {
        super.onCreate()
        startKoin {
            androidContext(this@App)
            modules(createModule())
        }
    }

    private fun createModule() = module {
        // ① DIの設定を書き込んでいく
    }
}
```

AndroidManifestファイルにてApplicationクラスを自作したものに置き換えます。

```xml:title=AndroidManifest.xml
    <application
        android:name=".App"  <- この行を追加
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme">
    </application>
```

これで準備は完了です。あとは、module関数に渡すインターフェース内(①のところ)に依存関係を記述していきます。


## singleton

以下のように記述することで簡単にsingletonパターンが実現できます。  
SomeRepositoryのコンストラクタ引数の型をWebInterfaceにしておけば、get()関数が適当なインスタンスを注入して初期化してくれます。


```kotlin:title=App.kt
    private fun createModule() = module {

        single<WebInterface> {
            val baseUrl = "http://${hostname}:${port}/"

            Retrofit.Builder()
                .addConverterFactory(GsonConverterFactory.create())
                .client(client)
                .baseUrl(baseUrl)
                .build().create(WebInterface::class.java)
        }

        single { SomeRepository(get()) }

    }
```

## viewModel

以下のように記述することでviewModelの依存関係を設定できます。

```kotlin:title=App.kt
    private fun createModule() = module {

        viewModel { MainViewModel() }

    }
```

ActivityやFragmentから取得する際は以下のようにします。byキーワードで遅延初期化をしています。

```kotlin:title=MainActivity.kt

class MainActivity : AppCompatActivity() {

    private val viewModel: MainViewModel by viewModel()


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val username = viewModel.user.name
    }

}
```

さらにFragmentであればViewModelの共有が出来ます。これがめちゃくちゃ便利です。

```kotlin:title=MainActivity.kt
class SomeFragment: Fragment() {

    // 親アクティビティに関連付けられているViewModelを取得
    private val viewModel: MainViewModel by sharedViewModel( from = { requireActivity() })

    // 親フラグメントに関連付けられているViewModelを取得
    private val viewModel: MainViewModel by sharedViewModel( from = { requireParentFragment() })

}
```

## テスト

自分はUnitテストやUIテストをちゃんと真面目に書いた経験がないのですが、
Koinを利用することでテスト時のMockオブジェクト生成や依存関係の設定も簡単に出来るようです。

```kotlin:title=SomeFragmentTests.kt
@RunWith(AndroidJUnit4::class)
class SomeFragmentTests : AutoCloseKoinTest() {
    @get:Rule
    val instantTaskExecutorRule = InstantTaskExecutorRule()
    private val repository: Repository by inject()

    @Before
    fun setup() {
        declareMock<Repository>()

        doAnswer {
            // res
        }.whenever(repository).someFunction(any())
    }


    @Test
    fun whenMapFragmentShow_MachineImageButtonShow() {
        ActivityScenario.launch(MainActivity::class.java)

        onView(withId(R.id.button)).perform(click())

        onView(withId(R.id.some_view))
            .check(matches(isDisplayed()))
    }
}
```

## まとめ

以上Koinの使い方を簡単にまとめました。

koinを使うメリットは、特にviewModel周りでの恩恵が大きいように感じます。
いちいちonActivityCreatedでviewModelを初期化しなくても良いのと、簡単にViewModelの共有が出来るのはめちゃくちゃ便利だと思います。

## 参考リンク

- [insert-koin.io · a smart Kotlin dependency injection framework](https://insert-koin.io/)
