---
title: "AndroidのImageViewを同じUriで更新する"
date: "2020-01-12 16:00:00 +0800"
slug: "/android-img-update-uri"
thumbnail: "android-thumbnail.png"
description: "AndroidのImageViewを同じUriで更新する方法を調べたので備忘録。"
tags:
    - "Android"
---

## ハマったところ

ImageViewの画像をUriで指定したいとき下記のようにやると思います。

```kotlin
val imageView = findViewById<ImageView>(R.id.imageView)
imageView.setImageURI(uri)
```

ですが、setImageURIは、引数のuriがその時点でImageViewに設定されているuriと同じ場合、画像を更新してくれません。


## 解決方法

一度引数にnullで設定した後に、もう一度uriをを指定する。

```kotlin
val imageView = findViewById<ImageView>(R.id.imageView)
imageView.setImageURI(null)
imageView.setImageURI(uri)
```