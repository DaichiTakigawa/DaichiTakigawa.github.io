---
title: "GatsbyサイトをGithubActionsでdeploy"
date: "2020-01-27 16:00:00 +0800"
slug: "/gatsby-github-actions/"
thumbnail: "github-gatsby-thumbnail.png"
description: "GiHub Pages上に、GiHub Actionsを用いてGatsby静的サイトをデプロイする方法をまとめました。最近よく耳にするCI/CDとかいうやつの初級編ですかね。"
tags:
    - "Gatsby"
    - "GitHub Actions"
---

## これは何

このブログは元々Netlify上にホスティングされていたのですが、どうも読み込み速度が遅かったので他のWebホスティングサービスも試してみることにしました。

Amplify(S3)とGitHub Pages、Netlifyの三つを比較してみたところ、読み込み速度的にはAmplify > GitHub Pages > Netlifyの順に良い結果がでたのですが、Amplifyは無料枠を使い切るとビルド時間とアップロードするデータ量に対して料金が発生してしまうので、結局無料で利用できるGitHub Pagesに引っ越すことに決定。

NetlifyにはGitHubの特定のbranchを登録しておくと、そのブランチがpushされたタイミングで自動的にサイトをデプロイしてくれる機能があるのですが、GitHub Pagesで同じことをしようとすると自分で処理を書かないといけません。

幸い、GitHubでもGitHub Actionsという継続的インテグレーション/継続的デプロイ(CI/CD)を支援するサービスが提供されているので、今回はそれを利用してGitHubの特定のブランチにpushされたタイミングで自動的にWebサイトを更新する機能を実現したいと思います。

## GitHub Actionsとは

GitHub Actionsは特定のブランチに対するpushやissueなどのイベントをトリガーとして、一連のタスクであるワークフローを実行できるサービスです。

特定のブランチのルートディレクトリ以下に、.github/workflows/hogehoge-actions.ymlというファイルを作成しておけばそのブランチに対するイベント発生時にyamlファイルを読み込み、記述したワークフローを実行してくれます。

トリガーとして利用でいるイベントは投稿時現在で以下の通りです。(正確な情報は公式ドキュメントを参照してください)

> valid event  
> "check\_run", "check\_suite", "create", "delete", "deployment", "deployment\_status", "fork", "gollum", "issue\_comment", "issues", "label", "member", "milestone", "page\_build", "project", "project\_card", "project\_column", "public", "pull\_request", "pull\_request\_review", "pull\_request\_review\_comment", "push", "release", "status", "watch", "repository\_dispatch"
>
> [ワークフローをトリガーするイベント - GitHub ヘルプ](https://help.github.com/ja/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)

タスクには、通常のシェルコマンドの他に、アクションと呼ばれるjavascriptで記述されたモジュールやDockerを指定することもできます。  
GitHubやDockerHub上には便利なActionが多数公開されているので積極的に使っていきます。

## 設定項目

yamlファイルで設定する項目をテーブル形式でまとめました。  
今回使用した項目のみ含まれているので、詳しい説明は[GitHub Actionsのワークフロー構文 - GitHub ヘルプ](https://help.github.com/ja/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)をご参照ください。

|項目|説明|
|---|---|
|on|トリガーをpushなどのイベントネームで指定。複数可能。複数の場合はどれか1つでも当てはまると実行。|
|on.\<event name\>.branches|ワークフローが実行されるbranchを指定。|
|jobs|一つ以上のjobを指定。|
|jobs.\<job\_id\>.runs-on|jobが実行される環境を指定。|
|jobs.\<job\_id\>.steps|一つ以上のタスクを指定。逐次的に実行され、どこかで失敗すると処理は中断。|
|jobs.\<job\_id\>.steps.uses|GitHubやDockerHubに公開されているアクションを指定。|
|jobs.\<job\_id\>.steps.run|コマンドを指定。|
|jobs.\<job\_id\>.steps.env|環境変数を指定。|


## ワークフローをyaml形式で記述

作成したyamlファイルは以下の通りです。deploy keyやsecreatsの設定方法等は以下のサイトをご参照ください。

[peaceiris/actions-gh-pages: GitHub Actions for GitHub Pages 🚀 Deploy static files and publish your site easily. Static-Site-Generators-friendly.](https://github.com/peaceiris/actions-gh-pages)

またyamlの記法については、以前Jsonとの比較をまとめた記事を作成したのでそちらもご参照ください。

[YamlとJsonの比較 - TAKIGAWA MEMO](https://www.takigawa-memo.com/compare-yaml-json/)

\<user-name\>.github.ioというレポジトリのdeployブランチでpushイベントが発生した際に、Gatsbyサイトをビルドし、masterブランチへデプロイしています。

```yml:title=build-and-deploy.yml
name: build and deploy github pages

on:
  push:
    branches:
      - deploy

jobs:
  build-gatsby-site-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1

      - uses: actions/setup-node@v1

      - run: npm install

      - run: npm run build

      - uses: peaceiris/actions-gh-pages@v2.4.0
        env:
          ACTIONS_DEPLOY_KEY: ${{ secrets.ACTIONS_DEPLOY_KEY }}
          PUBLISH_BRANCH: master
          PUBLISH_DIR: ./public

      - name: Add CNAME file
        run: |
          git config user.email $EMAIL
          git config user.name "DaichiTakigawa"
          git remote set-url origin https://DaichiTakigawa:${GITHUB_TOKEN}@github.com/DaichiTakigawa/DaichiTakigawa.github.io.git
          git checkout master
          git pull
          echo www.takigawa-memo.com > CNAME
          git add CNAME
          git commit -m 'add CNAME file'
          git push
        env:
          GITHUB_TOKEN: ${{ github.token }}
          EMAIL: ${{ secrets.EMAIL }}
```

## まとめ

カスタムドメインを設定するためのCNAMEファイルなどはgatsbyのプラグイン__[gatsby-plugin-cname | GatsbyJS](https://www.gatsbyjs.org/packages/gatsby-plugin-cname/)__を利用すれば簡単に配置できるのですが、せっかくなのでGitHub Actionsを使ってpushしました。


拙い文章であったと存じますが、最後まで読んでいただきありがとうございました。

## 参考リンク

- [Gatsby のサイトを GitHub Actions で GitHub Pages にデプロイ - Qiita](https://qiita.com/peaceiris/items/2f6d83802f2aefa66f9d)
- [GitHub Actionsのワークフロー構文 - GitHub ヘルプ](https://help.github.com/ja/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)
- [ワークフローをトリガーするイベント - GitHub ヘルプ](https://help.github.com/ja/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)
