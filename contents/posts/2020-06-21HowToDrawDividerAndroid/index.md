---
title: "AndroidでDividerを描画する方法"
date: "2020-06-21 16:00:00 +0800"
slug: "/android-draw-divider/"
thumbnail: "android-thumbnail.png"
description: "Androidアプリで区切り線を引く方法が検索しても意外と見つからなかったのでまとめました。"
tags:
    - "Android"
---

## これは何

アンドロイドアプリを開発している際、任意の場所に区切り線を描画したいことがあるかと思います。  
区切り線の描画方法について検索しても、情報が乱立していてどれが正しいのか分からなかったのですが、おそらく正解であろう方法を見つけたのでまとめました。

## dividerを設定する方法

答えはこちらのデモアプリにありました。

[Material Components Catalog App](https://github.com/material-components/material-components-android)

以下のxml要素をdivierを描画したいところに設定するだけです。

```xml:title=layout.xml

<!--    horizontal divider    -->
    <View
        android:layout_width="match_parent"
        android:layout_height="1dp"
        android:background="?android:attr/listDivider" />


<!--    vertical divider     -->
    <View
        android:layout_width="1dp"
        android:layout_height="match_parent"
        android:background="?android:attr/listDivider" />

```

マテリアルデザインを導入している場合は、dark themeに切り替えても自動的に色を反転してくれます。

## 参考リンク

- [Material Components Catalog App](https://github.com/material-components/material-components-android)

- [Material Components Dividers](https://material.io/components/dividers)
