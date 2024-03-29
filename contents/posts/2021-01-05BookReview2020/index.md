---
title: "2020年に読んだ技術書を列挙する(本当に列挙するだけ)"
date: "2021-01-07 16:00:00 +0800"
slug: "/book-review-2020/"
thumbnail: "book-review-thumbnail.png"
description: "今更ながら2020年に読んだ技術書を列挙していきたいと思います。"
tags:
    - "Memo"
---

## Android

昨年はアルバイトの7割方をAndroidアプリ開発に費やしていたので、自然とAndroid関連の技術書を読むことが多かったです。

[Androidを支える技術〈I〉──60fpsを達成するモダンなGUIシステム](https://amzn.to/35qs5cd)

<a href="https://www.amazon.co.jp/Android%E3%82%92%E6%94%AF%E3%81%88%E3%82%8B%E6%8A%80%E8%A1%93%E3%80%88I%E3%80%89%E2%94%80%E2%94%8060fps%E3%82%92%E9%81%94%E6%88%90%E3%81%99%E3%82%8B%E3%83%A2%E3%83%80%E3%83%B3%E3%81%AAGUI%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0-WEB-DB-PRESS-plus/dp/4774187593/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%A2%E3%83%B3%E3%83%89%E3%83%AD%E3%82%A4%E3%83%89%E3%82%92%E6%94%AF%E3%81%88%E3%82%8B%E6%8A%80%E8%A1%931&qid=1609842993&s=books&sr=1-1&linkCode=li3&tag=takigawamemo-22&linkId=fbe80e1e33c6c0d884837c21d95e3b66&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4774187593&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=4774187593" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

Androidアプリ開発というよりも、Androidの仕組みなどアプリが動く裏側について詳しく解説している書籍です。  
ですが、ActivityTaskクラスのmain関数が呼ばれ、メインループが開始、その後ビューツリーの初期化、各ViewやViewGroupの位置や高さ幅の決定、描画処理の実行、といった処理の流れが
詳しく記載されているので、実際にAndroidアプリを開発している時(特にカスタムビューを作成する時)にも役立つ知識が盛り込まれています。

[Androidを支える技術〈II〉──真のマルチタスクに挑んだモバイルOSの心臓部](https://amzn.to/3q8g3fQ)

<a href="https://www.amazon.co.jp/Android%E3%82%92%E6%94%AF%E3%81%88%E3%82%8B%E6%8A%80%E8%A1%93%E3%80%88II%E3%80%89%E2%94%80%E2%94%80%E7%9C%9F%E3%81%AE%E3%83%9E%E3%83%AB%E3%83%81%E3%82%BF%E3%82%B9%E3%82%AF%E3%81%AB%E6%8C%91%E3%82%93%E3%81%A0%E3%83%A2%E3%83%90%E3%82%A4%E3%83%ABOS%E3%81%AE%E5%BF%83%E8%87%93%E9%83%A8-WEB-DB-PRESS-plus/dp/4774188611/ref=as_li_ss_il?_encoding=UTF8&pd_rd_i=4774188611&pd_rd_r=1b7eb2ce-da13-457e-9be0-a5b7b8254744&pd_rd_w=1C66M&pd_rd_wg=fZpGi&pf_rd_p=e64b0a81-ca1b-4802-bd2c-a4b65bccc76e&pf_rd_r=4BGA2EANB2PA43NBCBKC&psc=1&refRID=4BGA2EANB2PA43NBCBKC&linkCode=li3&tag=takigawamemo-22&linkId=d09dfa9b2634734dc19cacfc9096a6b8&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4774188611&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=4774188611" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

こちらは、〈I〉とは違って主にアプリ間の連携や、AndroidシステムのAPIを呼び出した時に裏側で何が行われているのかを解説しています。  

[Android Security  安全なアプリケーションを作成するために](https://amzn.to/35qIddW)

<a href="https://www.amazon.co.jp/Android-Security-%E5%AE%89%E5%85%A8%E3%81%AA%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB-%E3%82%BF%E3%82%AA%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE/dp/4844331345/ref=as_li_ss_il?&linkCode=li3&tag=takigawamemo-22&linkId=9ec80135e43a9dd814236a8a0c6984d2&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4844331345&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=4844331345" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

セキュリティやAccountManagerについて詳しく知りたくて購入したのですが、いかんせん2011年出版で情報が古く、あまり参考にならなかった記憶があります。


[Android Test-Driven Development by Tutorials (First Edition): Learn Android TDD by Building Real-World Apps](https://amzn.to/3bvHdJv)

<a href="https://www.amazon.co.jp/Android-Test-Driven-Development-Tutorials-First/dp/1942878907/ref=as_li_ss_il?&linkCode=li3&tag=takigawamemo-22&linkId=4f075fe6a2dcb463809c1a42270e55d7&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1942878907&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=1942878907" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

Androidアプリ開発のテスト作成方法の入門書として購入しました。  
前半はAndroidアプリ開発におけるベストプラクティス(MVVMなど)で、後半はテスト作成の解説という流れになっています。  
DIライブラリとしてKoinを使っており、かなりKoinに依存した内容になっているので、DIツールとしてDagger + Hilt等を使用している場合はあまりお勧めできません。

## Go

[Go言語でつくるインタプリタ](https://amzn.to/3q97TDA)

<a href="https://www.amazon.co.jp/Go%E8%A8%80%E8%AA%9E%E3%81%A7%E3%81%A4%E3%81%8F%E3%82%8B%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%97%E3%83%AA%E3%82%BF-Thorsten-Ball/dp/4873118220/ref=as_li_ss_il?&linkCode=li3&tag=takigawamemo-22&linkId=c8ebfe8ee8c1d8bbeb8089c690a77f63&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4873118220&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=4873118220" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

インタプリタがどのように作動しているのかさっぱり分からない状態から、「構文解析木...あーね...」と言えるレベルになりました。

[Goならわかるシステムプログラミング](https://amzn.to/3s7ZNNr)

<a href="https://www.amazon.co.jp/Go%E3%81%AA%E3%82%89%E3%82%8F%E3%81%8B%E3%82%8B%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-%E6%B8%8B%E5%B7%9D-%E3%82%88%E3%81%97%E3%81%8D/dp/4908686033/ref=as_li_ss_il?&linkCode=li3&tag=takigawamemo-22&linkId=1ef65712d1ef867610c1d55481395bec&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4908686033&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=4908686033" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

なんか村上春樹みたいな文章を書くなぁと思った記憶があります笑。  
UnixドメインソケットやWindowsの名前付きパイプなどは、この書籍で初めて知ったのですが、その後何度か触る機会があったので良かったです。

## Java

[実践 JUnit ―達人プログラマーのユニットテスト技法](https://amzn.to/2XqN0rp)

<a href="https://www.amazon.co.jp/%E5%AE%9F%E8%B7%B5-JUnit-%E2%80%95%E9%81%94%E4%BA%BA%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9E%E3%83%BC%E3%81%AE%E3%83%A6%E3%83%8B%E3%83%83%E3%83%88%E3%83%86%E3%82%B9%E3%83%88%E6%8A%80%E6%B3%95-Jeff-Langr/dp/4873117305/ref=as_li_ss_il?&linkCode=li3&tag=takigawamemo-22&linkId=18392907735805cc609a8eeebee3e694&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4873117305&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=4873117305" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

AndroidのUnitテスト作成の勉強のために購入。

[増補改訂版Java言語で学ぶデザインパターン入門](https://amzn.to/2XqVheR)

<a href="https://www.amazon.co.jp/%E5%A2%97%E8%A3%9C%E6%94%B9%E8%A8%82%E7%89%88Java%E8%A8%80%E8%AA%9E%E3%81%A7%E5%AD%A6%E3%81%B6%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E5%85%A5%E9%96%80-%E7%B5%90%E5%9F%8E-%E6%B5%A9/dp/4797327030/ref=as_li_ss_il?&linkCode=li3&tag=takigawamemo-22&linkId=dac4ad412fc8ef28d71e6b14a56fe03c&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4797327030&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=4797327030" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

結構色んなサイトで良書として紹介されている書籍です。  
Javaに限らず様々なオブジェクト指向言語で通用する設計のベストプラクティスを知ることができました。

[Spring徹底入門 Spring FrameworkによるJavaアプリケーション開発](https://amzn.to/3nuDPRe)

<a href="https://www.amazon.co.jp/Spring%E5%BE%B9%E5%BA%95%E5%85%A5%E9%96%80-Spring-Framework%E3%81%AB%E3%82%88%E3%82%8BJava%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E9%96%8B%E7%99%BA-%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BENTT%E3%83%87%E3%83%BC%E3%82%BF/dp/4798142476/ref=as_li_ss_il?&linkCode=li3&tag=takigawamemo-22&linkId=00b7727a769ae8841349ea03e5411aae&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4798142476&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=4798142476" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

当ブログのコメント機能やお問い合わせ機能をSpring BootとKotlinで実装したくて、購入しました。  
が、実際にSpring BootとKotlinで実装したサーバーを、GCPのkubernets環境にデプロイしてみたところ、
どれだけリソースを切り詰めても毎日900円程度コストがかかるという事実が発覚したため、断念しました。  
リサーチ不足ですね...。  
気が向いたら、もう一度ちゃんとコストを考えてlambdaやDyamoDBを使ったserverlessなブログのコメント機能を実装してみようと思います。

[【後悔しないための入門書】Spring解体新書](https://amzn.to/35ngKtp)

<a href="https://www.amazon.co.jp/%E3%80%90%E5%BE%8C%E6%82%94%E3%81%97%E3%81%AA%E3%81%84%E3%81%9F%E3%82%81%E3%81%AE%E5%85%A5%E9%96%80%E6%9B%B8%E3%80%91Spring%E8%A7%A3%E4%BD%93%E6%96%B0%E6%9B%B8-Boot2%E3%81%A7%E5%AE%9F%E9%9A%9B%E3%81%AB%E4%BD%9C%E3%81%A3%E3%81%A6%E5%AD%A6%E3%81%B9%E3%82%8B%EF%BC%81Spring-Security%E3%80%81Spring-JDBC%E3%80%81Spring-MyBatis%E3%81%AA%E3%81%A9%E5%A4%9A%E6%95%B0%E8%A7%A3%E8%AA%AC%EF%BC%81-ebook/dp/B07H6XLXD7/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=Spring%E8%A7%A3%E4%BD%93%E6%96%B0%E6%9B%B8&qid=1609843215&s=books&sr=1-1&linkCode=li3&tag=takigawamemo-22&linkId=56aac81bca6e557c5bcd6a2b5532579f&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07H6XLXD7&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=B07H6XLXD7" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

## クラウド関連

[AWS認定資格試験テキスト AWS認定 ソリューションアーキテクト-アソシエイト](https://amzn.to/3qisEx5)

<a href="https://www.amazon.co.jp/AWS%E8%AA%8D%E5%AE%9A%E8%B3%87%E6%A0%BC%E8%A9%A6%E9%A8%93%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88-AWS%E8%AA%8D%E5%AE%9A-%E3%82%BD%E3%83%AA%E3%83%A5%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%A2%E3%83%BC%E3%82%AD%E3%83%86%E3%82%AF%E3%83%88-%E3%82%A2%E3%82%BD%E3%82%B7%E3%82%A8%E3%82%A4%E3%83%88-NRI%E3%83%8D%E3%83%83%E3%83%88%E3%82%B3%E3%83%A0%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE/dp/479739739X/ref=as_li_ss_il?_encoding=UTF8&pd_rd_i=479739739X&pd_rd_r=635347d3-bd86-4ef0-8f45-ac0b8c9ee368&pd_rd_w=NhtNW&pd_rd_wg=5dGy2&pf_rd_p=cb2cef9d-b0a3-4b58-a575-45abfc5e07e8&pf_rd_r=FQ93TSTDTHWG3H9EC7JQ&psc=1&refRID=FQ93TSTDTHWG3H9EC7JQ&linkCode=li3&tag=takigawamemo-22&linkId=14126d09af8c8be5035ff7e48bc119a8&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=479739739X&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=479739739X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

AWSの入門書として購入。

[Docker/Kubernetes 実践コンテナ開発入門](https://amzn.to/3ovLxf7)

<a href="https://www.amazon.co.jp/Docker-Kubernetes-%E5%AE%9F%E8%B7%B5%E3%82%B3%E3%83%B3%E3%83%86%E3%83%8A%E9%96%8B%E7%99%BA%E5%85%A5%E9%96%80-%E5%B1%B1%E7%94%B0-%E6%98%8E%E6%86%B2-ebook/dp/B07GP1Q3VT/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=1DLOR6SD793K8&dchild=1&keywords=docker+kubernetes+%E5%AE%9F%E8%B7%B5%E3%82%B3%E3%83%B3%E3%83%86%E3%83%8A%E9%96%8B%E7%99%BA%E5%85%A5%E9%96%80&qid=1609842635&sprefix=docker+kubernetes+%E5%AE%9F%E8%B7%B5%2Cstripbooks%2C307&sr=8-1&linkCode=li3&tag=takigawamemo-22&linkId=9c2bcd0c1b59709e3cc50e543d42e5e3&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07GP1Q3VT&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=B07GP1Q3VT" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

去年の年始ごろに、アルバイトでテスト用のpush通知配信環境を作成する必要があり、参考書として購入しました。


## コンピューターアーキテクチャ

[コンピュータの構成と設計 第5版 上](https://amzn.to/3ozvb5e)

<a href="https://www.amazon.co.jp/%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%81%AE%E6%A7%8B%E6%88%90%E3%81%A8%E8%A8%AD%E8%A8%88-%E7%AC%AC5%E7%89%88-%E4%B8%8A-%E3%82%B8%E3%83%A7%E3%83%B3%E3%83%BBL-%E3%83%98%E3%83%8D%E3%82%B7%E3%83%BC/dp/4822298426/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%81%AE%E6%A7%8B%E6%88%90%E3%81%A8%E8%A8%AD%E8%A8%88&qid=1609842718&sr=8-2&linkCode=li3&tag=takigawamemo-22&linkId=3c44c1ef9093b77a87f477d1ef1735a5&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4822298426&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=4822298426" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

[コンピュータの構成と設計 第5版 下](https://amzn.to/3sc4Cpa)

<a href="https://www.amazon.co.jp/%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%81%AE%E6%A7%8B%E6%88%90%E3%81%A8%E8%A8%AD%E8%A8%88-%E7%AC%AC5%E7%89%88-%E4%B8%8B-%E3%83%87%E3%82%A4%E3%83%93%E3%83%83%E3%83%89%E3%83%BB-%E3%83%BB%E3%83%91%E3%82%BF%E3%83%BC%E3%82%BD%E3%83%B3/dp/4822298434/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%81%AE%E6%A7%8B%E6%88%90%E3%81%A8%E8%A8%AD%E8%A8%88&qid=1609842718&sr=8-3&linkCode=li3&tag=takigawamemo-22&linkId=11e54af26e051bec3a52791fe47ccf7f&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4822298434&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=4822298434" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

[作って理解するOS x86系コンピュータを動かす理論と実装](https://amzn.to/3q28lnl)

<a href="https://www.amazon.co.jp/%E4%BD%9C%E3%81%A3%E3%81%A6%E7%90%86%E8%A7%A3%E3%81%99%E3%82%8BOS-x86%E7%B3%BB%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%82%92%E5%8B%95%E3%81%8B%E3%81%99%E7%90%86%E8%AB%96%E3%81%A8%E5%AE%9F%E8%A3%85-%E6%9E%97-%E9%AB%98%E5%8B%B2/dp/429710847X/ref=as_li_ss_il?&linkCode=li3&tag=takigawamemo-22&linkId=7046700099f4e400b5cc7615197cddeb&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=429710847X&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=429710847X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

## 機械学習、最適化、数理

[東京大学のデータサイエンティスト育成講座 ~Pythonで手を動かして学ぶデ―タ分析~](https://amzn.to/2XtMmJL)

<a href="https://www.amazon.co.jp/%E6%9D%B1%E4%BA%AC%E5%A4%A7%E5%AD%A6%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%83%86%E3%82%A3%E3%82%B9%E3%83%88%E8%82%B2%E6%88%90%E8%AC%9B%E5%BA%A7-Python%E3%81%A7%E6%89%8B%E3%82%92%E5%8B%95%E3%81%8B%E3%81%97%E3%81%A6%E5%AD%A6%E3%81%B6%E3%83%87%E2%80%95%E3%82%BF%E5%88%86%E6%9E%90-%E5%A1%9A%E6%9C%AC%E9%82%A6%E5%B0%8A/dp/4839965250/ref=as_li_ss_il?&linkCode=li3&tag=takigawamemo-22&linkId=86c8d0bda028d13baad7bec10d38d8dd&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4839965250&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=4839965250" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

[最適化手法入門 (データサイエンス入門シリーズ)](https://amzn.to/2LFLxdZ)

<a href="https://www.amazon.co.jp/%E6%9C%80%E9%81%A9%E5%8C%96%E6%89%8B%E6%B3%95%E5%85%A5%E9%96%80-%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9%E5%85%A5%E9%96%80%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA-%E9%A7%92%E6%9C%A8-%E6%96%87%E4%BF%9D/dp/4065170087/ref=as_li_ss_il?&linkCode=li3&tag=takigawamemo-22&linkId=0094f68c448b5874c90f25498d1a936a&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4065170087&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=4065170087" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

[モンテカルロ統計計算 (データサイエンス入門シリーズ)](https://amzn.to/2Lbv2Xw)

<a href="https://www.amazon.co.jp/%E3%83%A2%E3%83%B3%E3%83%86%E3%82%AB%E3%83%AB%E3%83%AD%E7%B5%B1%E8%A8%88%E8%A8%88%E7%AE%97-%E3%83%87%E3%83%BC%E3%82%BF%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9%E5%85%A5%E9%96%80%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA-%E9%8E%8C%E8%B0%B7-%E7%A0%94%E5%90%BE/dp/4065191831/ref=as_li_ss_il?&linkCode=li3&tag=takigawamemo-22&linkId=7b1cb99959b3e741ad242c9fa15d3718&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4065191831&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=4065191831" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

[実践Data Scienceシリーズ PythonではじめるKaggleスタートブック](https://amzn.to/39x8oRB)

<a href="https://www.amazon.co.jp/%E5%AE%9F%E8%B7%B5Data-Science%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA-Python%E3%81%A7%E3%81%AF%E3%81%98%E3%82%81%E3%82%8BKaggle%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88%E3%83%96%E3%83%83%E3%82%AF-KS%E6%83%85%E5%A0%B1%E7%A7%91%E5%AD%A6%E5%B0%82%E9%96%80%E6%9B%B8-%E7%A5%A5%E5%A4%AA%E9%83%8E/dp/4065190061/ref=as_li_ss_il?&linkCode=li3&tag=takigawamemo-22&linkId=d45d93e41e6788e82f6a6c8f0ef1e086&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4065190061&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=4065190061" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

[統計的機械学習の数理100問 with Python (機械学習の数理100問シリーズ)](https://amzn.to/3boNEOh)

<a href="https://www.amazon.co.jp/%E7%B5%B1%E8%A8%88%E7%9A%84%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92%E3%81%AE%E6%95%B0%E7%90%86100%E5%95%8F-Python-%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92%E3%81%AE%E6%95%B0%E7%90%86100%E5%95%8F%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA-%E9%88%B4%E6%9C%A8-%E8%AE%93/dp/432012507X/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E7%B5%B1%E8%A8%88%E7%9A%84%E6%A9%9F%E6%A2%B0%E5%AD%A6%E7%BF%92%E3%81%AE%E6%95%B0%E7%90%86&qid=1609842448&s=books&sr=1-1&linkCode=li3&tag=takigawamemo-22&linkId=5aed4f93ec6aa144ccf495529f724c95&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=432012507X&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=432012507X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

## その他

[GitHub実践入門 ~Pull Requestによる開発の変革](https://amzn.to/3q5tmNP)

<a href="https://www.amazon.co.jp/GitHub%E5%AE%9F%E8%B7%B5%E5%85%A5%E9%96%80-Pull-Request%E3%81%AB%E3%82%88%E3%82%8B%E9%96%8B%E7%99%BA%E3%81%AE%E5%A4%89%E9%9D%A9-PRESS-plus/dp/477416366X/ref=as_li_ss_il?&linkCode=li3&tag=takigawamemo-22&linkId=887ca089a250abc642502f0976cafb76&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=477416366X&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=477416366X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

[初めてのGraphQL ―Webサービスを作って学ぶ新世代API](https://amzn.to/2XoHoxV)

<a href="https://www.amazon.co.jp/%E5%88%9D%E3%82%81%E3%81%A6%E3%81%AEGraphQL-%E2%80%95Web%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E5%AD%A6%E3%81%B6%E6%96%B0%E4%B8%96%E4%BB%A3API-Eve-Porcello/dp/487311893X/ref=as_li_ss_il?&linkCode=li3&tag=takigawamemo-22&linkId=050997ef3602183d22ce07347afc2c05&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=487311893X&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=487311893X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

[オブジェクト指向UIデザイン──使いやすいソフトウェアの原理](https://amzn.to/3btC30n)

<a href="https://www.amazon.co.jp/%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91UI%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E2%94%80%E2%94%80%E4%BD%BF%E3%81%84%E3%82%84%E3%81%99%E3%81%84%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%81%AE%E5%8E%9F%E7%90%86-WEB-DB-PRESS-plus%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA/dp/4297113511/ref=as_li_ss_il?&linkCode=li3&tag=takigawamemo-22&linkId=f517f46d563b2ee5c44bcf31243c76bf&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4297113511&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=4297113511" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

[いちばんやさしいブロックチェーンの教本  人気講師が教えるビットコインを支える仕組み 「いちばんやさしい教本」シリーズ](https://amzn.to/3s4b3KK)

<a href="https://www.amazon.co.jp/%E3%81%84%E3%81%A1%E3%81%B0%E3%82%93%E3%82%84%E3%81%95%E3%81%97%E3%81%84%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%83%81%E3%82%A7%E3%83%BC%E3%83%B3%E3%81%AE%E6%95%99%E6%9C%AC-%E4%BA%BA%E6%B0%97%E8%AC%9B%E5%B8%AB%E3%81%8C%E6%95%99%E3%81%88%E3%82%8B%E3%83%93%E3%83%83%E3%83%88%E3%82%B3%E3%82%A4%E3%83%B3%E3%82%92%E6%94%AF%E3%81%88%E3%82%8B%E4%BB%95%E7%B5%84%E3%81%BF-%E3%80%8C%E3%81%84%E3%81%A1%E3%81%B0%E3%82%93%E3%82%84%E3%81%95%E3%81%97%E3%81%84%E6%95%99%E6%9C%AC%E3%80%8D%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA-%E6%9D%89%E4%BA%95%E9%9D%96%E5%85%B8-ebook/dp/B075CFG2TY/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%83%81%E3%82%A7%E3%83%BC%E3%83%B3%E3%81%AE%E6%95%99%E6%9C%AC&qid=1609843293&s=books&sr=1-1&linkCode=li3&tag=takigawamemo-22&linkId=4705273caa52e15d91ff8f6e50a4e284&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B075CFG2TY&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=B075CFG2TY" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

[携帯電話はなぜつながるのか 第2版](https://amzn.to/3q5vOnI)

<a href="https://www.amazon.co.jp/%E6%90%BA%E5%B8%AF%E9%9B%BB%E8%A9%B1%E3%81%AF%E3%81%AA%E3%81%9C%E3%81%A4%E3%81%AA%E3%81%8C%E3%82%8B%E3%81%AE%E3%81%8B-%E7%AC%AC2%E7%89%88-%E4%B8%AD%E5%B6%8B%E4%BF%A1%E7%94%9F/dp/4822284905/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E6%90%BA%E5%B8%AF%E3%81%AF%E3%81%AA%E3%81%9C%E3%81%A4%E3%81%AA%E3%81%8C%E3%82%8B%E3%82%93%E3%81%8B&qid=1609843356&s=books&sr=1-1&linkCode=li3&tag=takigawamemo-22&linkId=db5f507589848876766792d30ec38440&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4822284905&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li3&o=9&a=4822284905" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />


## 個人的に読んで良かったと思う本ベスト5

1. [作って理解するOS x86系コンピュータを動かす理論と実装](https://amzn.to/3q28lnl)

<a href="https://www.amazon.co.jp/%E4%BD%9C%E3%81%A3%E3%81%A6%E7%90%86%E8%A7%A3%E3%81%99%E3%82%8BOS-x86%E7%B3%BB%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%82%92%E5%8B%95%E3%81%8B%E3%81%99%E7%90%86%E8%AB%96%E3%81%A8%E5%AE%9F%E8%A3%85-%E6%9E%97-%E9%AB%98%E5%8B%B2/dp/429710847X/ref=as_li_ss_il?&linkCode=li2&tag=takigawamemo-22&linkId=3d40f678b06c21e38e9889339a2e692a&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=429710847X&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li2&o=9&a=429710847X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

メモリ管理ユニットやページング、割り込み処理、コンテキストスイッチなど、今まで完全にブラックボックスだったOSの仕組みについて少しでも知ることができました。  

2. [コンピュータの構成と設計 第5版](https://amzn.to/2Xo1OqO)

<a href="https://www.amazon.co.jp/%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%81%AE%E6%A7%8B%E6%88%90%E3%81%A8%E8%A8%AD%E8%A8%88-%E7%AC%AC5%E7%89%88-%E4%B8%8A%E3%83%BB%E4%B8%8B%E9%9B%BB%E5%AD%90%E5%90%88%E6%9C%AC%E7%89%88-%E3%83%87%E3%82%A4%E3%83%93%E3%83%83%E3%83%89%E3%83%BB-%E3%83%BB%E3%83%91%E3%82%BF%E3%83%BC%E3%82%BD%E3%83%B3-ebook/dp/B01M5FMGDL/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%81%AE%E6%A7%8B%E6%88%90%E3%81%A8%E8%A8%AD%E8%A8%88&qid=1609843919&s=books&sr=1-1&linkCode=li2&tag=takigawamemo-22&linkId=a882a74791e6210bb20c4264cdda1717&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01M5FMGDL&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li2&o=9&a=B01M5FMGDL" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

こちらも今まで完全にブラックボックスだったCPUの仕組みについてある程度イメージが湧くようになりました。

3. [Androidを支える技術 シリーズ](https://amzn.to/35qs5cd)

<a href="https://www.amazon.co.jp/Android%E3%82%92%E6%94%AF%E3%81%88%E3%82%8B%E6%8A%80%E8%A1%93%E3%80%88I%E3%80%89%E2%94%80%E2%94%8060fps%E3%82%92%E9%81%94%E6%88%90%E3%81%99%E3%82%8B%E3%83%A2%E3%83%80%E3%83%B3%E3%81%AAGUI%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0-WEB-DB-PRESS-plus/dp/4774187593/ref=as_li_ss_il?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%A2%E3%83%B3%E3%83%89%E3%83%AD%E3%82%A4%E3%83%89%E3%82%92%E6%94%AF%E3%81%88%E3%82%8B%E6%8A%80%E8%A1%931&qid=1609842993&s=books&sr=1-1&linkCode=li2&tag=takigawamemo-22&linkId=7c3aed5f5e357787903253810f3b4c93&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4774187593&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li2&o=9&a=4774187593" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

実用書というよりは読みもの的な要素が多かったですが、カスタムビューを作成する際や、intentにflagを設定するときなど実際にAndroidアプリ開発をしている時に役立つ知識も得られました。

4. [Java言語で学ぶデザインパターン入門](https://amzn.to/2JYwHPk)

<a href="https://www.amazon.co.jp/%E5%A2%97%E8%A3%9C%E6%94%B9%E8%A8%82%E7%89%88Java%E8%A8%80%E8%AA%9E%E3%81%A7%E5%AD%A6%E3%81%B6%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E5%85%A5%E9%96%80-%E7%B5%90%E5%9F%8E-%E6%B5%A9/dp/4797327030/ref=as_li_ss_il?&linkCode=li2&tag=takigawamemo-22&linkId=ef8f7ad6b1edbfc87987ce783e65529b&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4797327030&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li2&o=9&a=4797327030" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

これもう知ってるよ的な内容も多かったのですが、StateやBridgeパターンなどは普段から意識しておくことでコードがすっきりするようになりました。

5. [オブジェクト指向UIデザイン──使いやすいソフトウェアの原理](https://amzn.to/3s84hDP)

<a href="https://www.amazon.co.jp/%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91UI%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E2%94%80%E2%94%80%E4%BD%BF%E3%81%84%E3%82%84%E3%81%99%E3%81%84%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%81%AE%E5%8E%9F%E7%90%86-WEB-DB-PRESS-plus%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA/dp/4297113511/ref=as_li_ss_il?&linkCode=li2&tag=takigawamemo-22&linkId=d2d827258c7e3c2c722478ee61728ad0&language=ja_JP" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4297113511&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=takigawamemo-22&language=ja_JP" ></a><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=takigawamemo-22&language=ja_JP&l=li2&o=9&a=4297113511" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

デザイン素人だけどXDなどのツールを使ってプロトタイプを作成しないといけなくなったという方には是非読んでみて欲しい一冊です。  
銀の弾丸とまではいきませんが、少なくともUI/UX設計を行う際に何に気をつけないといけないか、どんなデザインがアンチパターンなのかが判断できるようになります。
