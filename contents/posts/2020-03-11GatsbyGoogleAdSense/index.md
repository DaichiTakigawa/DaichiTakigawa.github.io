---
title: "GatsbyサイトにGoogleAdSenseを導入する"
date: "2020-03-11 16:00:00 +0800"
slug: "/gatsby-googole-adsense/"
thumbnail: "gatsby-thumbnail.png"
description: "GatsbyにGoogleAdSenseを導入する方法をまとめました。レスポンシブ対応のために広告の表示非表示を切り替えようとした際、GatsbyのSSR周りで不具合が生じたのでその辺を重点的にまとめています。"
tags:
    - "Gatsby"
    - "AdSense"
---

## これは何

先日当ブログにGoogleAdSenseを導入致しました。  
申請してから承認されるまで待たされたり、承認された後もGoogleからサイトが認識されるまで時間がかかったりともどかしい日々が続きましたが、一週間程度で問題なく広告が表示されるようになっていました。  
今回は、GatsbyサイトにGoogleAdSenseを導入する方法、特にGatsbyのSSRに対応する方法や、表示される画面のサイズに応じて広告の表示非表示を切り替える方法などをまとめていきます。  
なお、GoogleAdSenseに自身のサイトを登録する方法などは検索すればいろんなサイトで紹介されていると思いますので今回は省略させて頂きます。

## gatsby-plugin-google-adsense

GoogleAdSenseをサイトに導入するためには、適当なscriptタグをヘッダに追加する必要があります。
それをしてくれるのが[gatsby-plugin-google-adsense | GatsbyJS](https://www.gatsbyjs.org/packages/gatsby-plugin-google-adsense/)というプラグインです。

npmやyarnでインストールして、gatsby-config.jsに以下の設定を書き加えます。

```javascript:title=gatsby-config.js
plugins: [
    {
        resolve: `gatsby-plugin-google-adsense`,
        options: {
            publisherId: `ca-pub-xxxxxxxxxx`
        },
    },
]
```

プラグインの代わりにreact-helmetを用いても、ヘッダにscriptタグを挿入できるのですが、react-helmetではdata-react-helemt="true"というプロパティが自動的に付与されてしまい、AdSenseのスクリプトで「なんかよく分かんないプロパティが追加されているぞ」と怒られてしまったので、最終的にプラグインを用いることにしました。

## AdSenseコンポーネント

あとは広告を表示したい部分に適当なdom要素を追加していきます。  
AdSenseでは適当なプロパティが設定されたins要素を配置することで広告が表示される場所を指定できます。  
しかし、ただins要素を配置しただけでは広告は表示されません。ins要素がdomツリーに追加されたことをAdSenseスクリプトに知らせるため以下のjavascirptコードを実行する必要があります。

```javascript
    window.adsbygoogle = window.adsbygoogle || []
    window.adsbygoogle.push({})
```

windowオブジェクトに新しく追加されたadsbygoogleプロパティとinsタグの関係については以下のサイトが参考になります。

[Fix Google AdSense loading issues with React - M@0_T55 - Medium](https://medium.com/@Mao_Tss/fix-google-adsense-loading-issues-with-react-f338cbd61ac4)

要するに追加されたins要素と同じ数だけadsbygoogleに空のオブジェクトをpushしなければならないようです。  
これらの規則を加味するとReactコンポーネントは以下のようになります。

```javascript:title=AdSense.js
const AdSense = ({ format = "auto" }) => {
  useEffect(() => {
    if (window) {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
    }
  })

  return (
    <div>
      <Ins
        className="adsbygoogle"
        data-ad-client="ca-pub-xxxxxxxxxxxxxxx"
        data-ad-slot="xxxxxxxx"
        data-ad-format={format}
      />
    </div>
  )
}

const Ins = styled.ins`
  display: block
`
```

GatsbyではSSRにより、javascriptコードがサーバー側でhtmlをビルドする時とブラウザに読み込まれた時の二回実行されます。  
クライアントがサイトにアクセスした際は、事前にビルドしたhtmlを表示させて初回読み込み時間を短縮させつつ、React要素ツリーが構築できたらそれを実DOMツリーにhydrateするという仕組みになっているそうです。

サーバー側でhtmlをレンダリングするときは、windowやdocumentなどのオブジェクトにアクセス出来ないので、if文を使ってブラウザ側でのみコードが実行されるようにします。  
また、userEffect hookを用いてDOMツリーが構築された後にコードが実行されるようにしています。(クラスコンポーネントを使用している場合はuseEffect内の中身をcomponentDidMountに移せば問題なく作動します。)


## レスポンシブ対応

画面サイズによって広告の表示非表示を切り替えたかったので以下のResponsiveAdSenseを作成しました。  
一回目のマウント時にwindowから画面の幅を取得し、setStaetを呼び出すことでコンポーネントの再構築を行い、広告を表示させるようにしています。

```javascript:title=AdSense.js
AdSense.Responsive = ({ format = "auto" }) => {
  const [state, setState] = useState({ showAds: false })

  useEffect(() => {
    if (state.showAds) {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
    }
    if (window) {
      const minWidth = responsive.tablet.minWidth // 769
      const shouldShowAds = window.innerWidth >= minWidth
      if (shouldShowAds) {
        setState({ showAds: true })
      }
    }
  }, [state.showAds])

  if (!state.showAds) return null

  return (
    <div>
      <Ins
        className="adsbygoogle"
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxxxxx"
        data-ad-slot="xxxxxxxxxx"
        data-ad-format={format}
      />
    </div>
  )
}

const Ins = styled.ins({
  display: "block"
})
```

## 参考リンク

- [Fix Google AdSense loading issues with React - M@0_T55 - Medium](https://medium.com/@Mao_Tss/fix-google-adsense-loading-issues-with-react-f338cbd61ac4)