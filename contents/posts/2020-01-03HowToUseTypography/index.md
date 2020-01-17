---
title: "Typographyjsのrhythmとscaleの使い方"
date: "2020-01-03 16:00:00 +0800"
slug: "/typographyjs-rhythm-scale/"
thumbnail: "gatsby-thumbnail.png"
description: "Gatsbyを用いて作成されたWebサイトでよく見かけるTypograhpy.jsのrhythmとscaleの使い方をまとめました。"
tags:
    - "Gastby"
    - "Typography.js"
---

## これは何

[Typography.js](https://kyleamathews.github.io/typography.js/)という、Gatsbyで簡単にタイポグラフィを実現できるライブラリの使い方をまとめたものです。

## タイポグラフィとは

Wikipediaを見ると、Typographyを以下のように説明しています。

> タイポグラフィ（英: typography）は、活字（あるいは一定の文字の形状を複製し反復使用して印刷するための媒体）を用い、それを適切に配列することで、印刷物における文字の体裁を整える技芸である。  
>
> [タイポグラフィ - ウィキペディア (Wikipedia): フリー百科事典](https://ja.wikipedia.org/wiki/%E3%82%BF%E3%82%A4%E3%83%9D%E3%82%B0%E3%83%A9%E3%83%95%E3%82%A3)

要するに、「紙やWebサイトといった媒体で、文字のレイアウト、要素間のスペース、各要素の配置を美的かつ効率的に構築するための技術がタイポグラフィである」といったところでしょうか。

タイポグラフィを実現するためには、ざっくりと2つのルールを守る必要があるようです。

vertical rhythmとmoduler scaleです。

## vertical rhythmとは

一言でいうと、「レイアウト内の各要素の高さを、ある基準値の整数倍にする」という決まりです。

Webデザインの世界では、cssのline-heightがこの基準値として採用されます。

Webサイト全体で、縦のpaddingやmargin、heightをline-heightの整数倍にすることで、レイアウトに規則性が生まれ、読者が読みやすいと感じるようになります。

## moduler scaleとは

moduler scaleは文字の大きさに関する約束事項です。

moduler scaleでは、文字の大きさを(基準値)x(比率の累乗)で指定します。  
数式で記述すると以下の通りです。

$$
base \times ratio^{\pm n} \ \ (nは0以上の整数)
$$

Webデザインの世界では、この値でcssのfont-sizeを指定します。

基準値は14$\sim$18px、比率は黄金比として知られる $\frac{1+\sqrt{5}}{2} \fallingdotseq 1.618$ や白銀比として知られる $\sqrt{2}$ が良く採用されているみたいです。

## Typographyjsとは

先ほどもチラッと説明いたしましたが、[Typography.js](https://kyleamathews.github.io/typography.js/)はGatsbyでタイポグラフィーを簡単に実現できるライブラリです。

Gatsbyを開発しているチームと同じチームが開発しているみたいです。


## Typographyjsの導入

公式サイトで詳しく説明されていますが、一応流れだけ書いておきます。

プロジェクトのルートディレクトリで以下のコマンドを実行。

```shell
$ yarn add gatsby-plugin-typography
```

gatsby-configファイルにプラグインを追加。

```javascript:title=gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
```

導入したいテーマを依存関係に追加。

```shell
$ yarn add typography-theme-fairy-gates
```

src/utils/typography.jsファイルで設定を記述する。

```javascript:title=src/utils/typography.js
import Typography from "typography"
import fiaryGateTheme from "typography-theme-fairy-gates"

const typography = new Typography(fiaryGateTheme)

export default typography

export const { scale, rhythm } = typography
```

上記のうちtypography-theme-fairy-gatesの箇所を自分が導入したいテーマで置き換えてください。

以上の設定が無事完了すれば、各コンポーネントファイル内でimportして利用できます。

```javascript
import React from "react"
import { scale, rhythm } from "path/to/typography.js"

export default () => (
  <div>
    <h1
      style={{ fontSize: scale(2).fontSize, lineHeight: scale(2).lineHeight }}
    >
      Title
    </h1>
    <p style={{ fontSize: scale(0).fontSize, lineHeight: scale(0).lineHeight }}>
      Hellow World!
    </p>
    <h2 style={{ fontSize: scale(1/2).fontSize, lineHeight: rhythm(1) }}>
      Fotter
    </h2>
  </div>
)
```


## rhythmとscaleについて

Typography.jsで主に利用するのがrhythmとscaleという関数なのですが、この二つの関数、公式サイトを見ても詳しい使用方法が記載されておらず、またソースコードを読んでもいまいちよく分かりません。

ですので、rhythmとscaleの引数に色々な値を代入してみて、こんな感じで使うんじゃないかなと予測したものをまとめておきます。

実際にソースコードや公式サイトで確認したわけではないので間違っていた場合はご容赦ください。

まず[Typography.js](https://kyleamathews.github.io/typography.js/)の公式サイトを見ていただくと、右上にテーマを切り替えるビューがあります。

![Typography.js公式サイト](./Screenshot_2020-01-10&#32;Typography&#32;js.png)

このビューの中にはいくつか項目があります。  
各項目の意味は以下の通りです。

|項目|意味|
|---|---|
|Pick theme|選択されたテーマ|
|Font size|moduler scaleの基準値となる値 (px)|
|Line Height|vertical rhythmの基準値となる値 (rem)|
|Scale Ratio|moduler scaleの比率となる値|
|Paragraph Spacing|パラグラフ間のデフォルトのスペース (rhythm)|

あるテーマをGatsbyサイトに導入すると、rhythm関数とscale関数はここに記載された値を用いて計算を行います。

rhythm関数は引数に自然数nを渡してあげると、Line Heightをn倍したものを返してくれます。

scale関数の戻り値はfontSizeとlineHeightという二つのプロパティを持つオブジェクトです。  

fontSizeは (Font Size) x (Scale Ratio)$^{arg}$ (argは引数で渡した値) を計算したものになります。

多くのテーマでは Scale Ratio は2に設定されているので、scale関数に渡す引数の値を$\pm \frac{1}{2}$の倍数にすれば、白銀比のmoduler scaleを実現できます。

lineHightにはfontSizeに対応して、いい感じにvertical rhythmされたline heightが設定されているようです。


## まとめ

今回は、Gatsbyで簡単お手軽にタイポグラフィーを実現できるTypography.jsというライブラリをご紹介いたしました。

私自身としては、vertical rhythmはなんとなく直感的に正当性を理解できるのですが、moduler scaleに関してはなぜ文字の大きさをこんな感じで決めると美しいレイアウトになるのか腑に落ちないといった感想を持ちました。...

また気が向いた時に、「moduler scaleがなぜ美しいか」みたいなものもまとめて記事にしたいと思います。

## 参考リンク

- [[Sass] Vertical Rhythm と Modular Scale を使ってタイポグラフィを考え直した ](https://b.0218.jp/20170326001009.html)