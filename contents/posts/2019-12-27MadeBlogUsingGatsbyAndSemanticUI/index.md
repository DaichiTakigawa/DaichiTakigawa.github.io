---
title: "GatsbyとSemanticUIを使ってブログを作成。"
date: "2019-12-27 23:00:00 +0800"
slug: "/hello-world/"
thumbnail: "gatsby-semantic-ui.png"
description: "Hello World"
tags:
    - "SemanticUI"
    - "Gatsby"
---

## これは何

以前から備忘録とポートフォリオをかねて、ブログを作成してみたいなと思っていたので、年末年始の課題として作成してみました。  

ブログを作成するにあたり、どのようなツールを用いるのが良いのか調査していくと、  
最近はどうやらGatsbyなる静的Webサイトジェネレータでポートフォリオを作成するのがトレンドらしいぞ ( °Д°) となったので、それに習ってGatsbyを使用することにします。

今回はGatsbyを用いてブログを作成する際の流れや、躓いた点についてまとめていきたいと思います。

## Gatsbyとは

[Gatsby](https://www.gatsbyjs.org/)の公式サイトを見てみると以下のような説明があります。

> Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps

つまり、Reactを用いて作成したWebサイトを爆速にしてくれるらしいです。

Gatsbyは静的Webサイトジェネレータと言って、Reactで作成したSPA(シングルページアプリケーション)をあらかじめHTMLファイルに変換しておくため、高速化が実現されるようです。

## Semantic UIとは

[Semantic UI](https://semantic-ui.com/)はCSSライブラリの1つです。

htmlタグのクラス名を書き加えるだけで、Webサイトをリッチな見た目にしてくれます。

私はWebデザインをちゃんと勉強したことがなく、そもそもフロントエンド自体がド素人なので、 今回はSemantic UIを使って簡単お手軽に見た目を整えることにします。 

## Gatsbyプロジェクトを作成

Gatsbyのインストール。

```shell
$ npm install -g gatsby-cli
```

プロジェクトの作成。

```shell
$ gatsby new gatsby-site
```

プロジェクトのルートディレクトリで以下のコマンドを実行するとホットリロードのローカルサーバーを立ち上げられます。

```shell
$ gatsby develop
```

## Semantic UIを導入

Semantic UIはDOM要素を直接操作しますが、Reactでは通常、DOM要素を直接操作することはなくVirtual DOMなるものを操作するみたいです。

ですので、Semantic UIでDOM要素を直接操作しない、[Semantic UI React](https://react.semantic-ui.com/)というライブラリを利用しました。

Semantic UI ReactをGatsbyプロジェクトで利用するためには、以下のコマンドをプロジェクトのルートディレクトリで実行するだけで大丈夫です。

```shell
$  yarn add semantic-ui-react
```

あとは、jsファイルでimportして、以下のように使います。

```javascript
import React from 'react'
import { Button } from 'semantic-ui-react'

export default () => <Button>Click Here</Button>
```

## ResponsiveがBuildすると上手くいかない

Semantic UI Reactライブラリのコンポーネントの中で比較的多用したのがResponsiveです。

Responsiveは画面の幅に応じて表示非表示を切り替えることができるコンポーネントです。

例えば、タブレットサイズの画面でのみ表示されるコンポーネントを作成したい際は以下の方法で実現できます。

```javascript
import React from "react"
import { Responsive } from "semantic-ui-react"


export default class Content extends React.Component {
  render () {
    return (
      <Responsive
        as="p"
        minWidth={Responsive.onlyTablet.minWidth}
        maxWidth={Responsive.onlyTablet.maxWidth}
      >
       Hello World! 
      </Responsive>
    )
  }
}
```

しかし、このResponsiveコンポーネント、developでサーバーを立ち上げているときは問題なく挙動するのですが、Buildして実際にサーバーを立ち上げてみると、初回起動時に画面レイアウトが崩れてしまうという問題が発生しました。

どうやらhtmlに変換すると最初のマウント時に表示非表示を切り替えるコールバック関数が呼ばれなくなってしまうようです。

## 解決方法

ResponsiveコンポーネントのfireOnMountをtrueにして、getWidthを書き換えればちゃんと作動するみたいな情報もあったのですが、上手くいかず、
結局 [react-no-ssr](https://github.com/kadirahq/react-no-ssr) というライブラリを使ってみたところ問題なく作動するようになりました。

使用方法は以下の通りです。

プロジェクトのルートディレクトリで以下のコマンドを実行。

```shell
$ yarn add react-no-ssr
```

あとは、ResponsiveコンポーネントをNoSSRで囲むだけでbuild時のレイアウトの崩れを防いでくれます。

```javascript
import React from "react"
import NoSSR from "react-no-ssr"
import { Responsive } from "semantic-ui-react"


export default class Content extends React.Component {
  render () {
    return (
      <NoSSR>
        <Responsive
          as="p"
          minWidth={Responsive.onlyTablet.minWidth}
          maxWidth={Responsive.onlyTablet.maxWidth}
        >
        Hello World! 
        </Responsive>
      </NoSSR>
    )
  }
}
```

ただし、このNoSSRを導入するとWebサイトの初回読み込み時間が遅くなります。

今までhtmlに変換されていた箇所が、読み込み時に構築されるようになるので静的Webサイトジェネレータのメリットを享受出来ないのでしょう。

今のところ、そこまで気になるほどの遅さでもないのでそのまま使うことにします。

## まとめ

丸三日程かかって何とか、ブログを作成することが出来ました。

今後は気が向いたときに記事を投稿していきたいと思います。

Gatsbyプロジェクトのソースコードはgithubに公開しています。  
拙いコードですが、ご自由に使っていただいて結構です。


