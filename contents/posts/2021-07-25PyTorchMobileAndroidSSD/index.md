---
title: "PyTorch Mobileを使ってAndroidでSSDを用いた物体検出をしてみた"
date: "2021-07-25 16:00:00 +0800"
slug: "/pytorch-android-ssd/"
thumbnail: "pytorch-android-thumbnail.png"
description: "PyTorchで学習したモデルをMobileデバイスにシームレスにデプロイ出来るPyTorch Mobileを用いて、COCOデータセットで事前学習された物体検出モデルSSD300をAndroid上で動かしてみました。"
tags:
    - "Android"
    - "PyTorch"
---

## これは何

PyTorchで学習したモデルをiOSやAndroid等のモバイルデバイスにシームレスにデプロイできるフレームワークとしてPyTorch Mobileがあります。   
Tensorflow liteよりも後発で、比較するとまだ情報も少ない感じがしますが、公式リポジトリにて画像認識や物体検出、セグメンテーション、翻訳、音声認識などのデモアプリが公開されています。  
物体検出タスクとしては、Faster-RCNNとYOLOv5の2つを用いたデモが公開されおり、せっかくならSSDを使った物体検出も試してみたいと思ったので、COCOデータセットで事前学習されたSSD300のモデルをgithubから持ってきてTorchScriptに変換し、PyTorch Mobileを使ってAndroid上で動かしてみました。  
今回は、モデルをTorchScriptに変換するときに躓いた点や、公式のデモのFaster-RCNNやYOLOv5との簡単な比較結果をまとめています。  
何か勘違いしている点や至らない点がありましたら指摘していただけると幸いです。

ソースコードはこちらにあげています。  
[DaichiTakigawa/pytorch-android-ssd](https://github.com/DaichiTakigawa/pytorch-android-ssd)

## モデルをTorchScriptに変換

こちらのモデルを使いました。  
[DeepLearningExamples/PyTorch/Detection at master · NVIDIA/DeepLearningExamples](https://github.com/NVIDIA/DeepLearningExamples/tree/master/PyTorch/Detection)

バックボーンとしてResNet50を採用しています。  

そのまま、torch.jit.scirptでTorchScriptに変換しようとしても上手くいかなかったので、いくつか変更を加えました。  
基本的には、引数の型を上手く推論できていない箇所に型ヒントを付けたり、itertoolsを使ったforループを単純なforループに変更したり、numpyを使った処理をtorchに置き換えたりということをしています。

```python
# 型が情報が無いとtorch.Tensor型とみなされてしまうことがあるので、
# 型ヒントを付加する。
-   def encode(self, bboxes_in, labels_in, criteria = 0.5):

+   def encode(self, bboxes_in, labels_in, criteria: float = 0.5):
```

```python
# 単純なforループに直す
-   for i, j in itertools.product(range(sfeat), repeat=2):

+   for i in range(sfeat):
+       for j in range(sfeat):
```

```python
# numpyの関数は使えないのでtorchの関数で代用する
-   best = np.argwhere(confidences > threshold)[:, 0]

+   best = torch.where(confidences > threshold)[0]
```

```python
# nn.ModuleListはzipやenumerateでイテレート出来ない。
# srcはTensor、locとconfはnn.ModuleList
-   for s, l, c in zip(src, loc, conf):
-       ret.append((l(s).view(s.size(0), 4, -1), 
            c(s).view(s.size(0), self.label_num, -1)))

+       locs = []
+       i = 0
+       for l in loc:
+           s = src[i]
+           locs.append(l(s).view(s.size(0), 4, -1))
+           i += 1
```

## デモ

TorchScriptをAndroid上で動かす場合、CPU上で計算するか、Vulkanを使ってGPU上で動かすか、Google NNAPIを使ってDSPやNPU上で動かすかの3つの選択肢あるそうです。

Google NNAPIを使った方法は、まだプロトタイプ段階で一部のテンソル操作しかサポートしていなく、Vulkanを使ってGPU上で動かす方法も、ランタイムをソースコードからコンパイルし直す必要があり、自分の環境では謎のエラーが出て結局解決できなかったので、今回はとりあえずCPU上で計算しています。

<video controls loop src="./ssd.mp4" type="video/mp4" width="320px" ></video>

## 比較

公式のデモで実装されていた、Faster-RCNNのモデルとYOLOv5との簡単な比較をしてみました。

公式のデモのFaster-RCNNは、特徴量抽出層にFBNetを採用しているみたいです。  
FBNetについて、ちゃんと理解していないのですが、モデルの学習時の損失関数にモバイルデバイスでの推論時のレイテンシが組み込まれており、各OSやデバイスに最適化されたモデルを生成することが可能だそうです[4]。

YOLOv5にもいくつかバリエーションがあるようですが、デモでは一番サイズが小さく推論時間が短いYOLOv5sモデルが使われているみたいでした。

Google Pixe 3aの実機上で動かしています。  

| モデル |  Faster-RCNN(FBNetV3A)  |  YOLOv5s  | SSD300(ResNet50) |
| ---- | ---- | --- | --- |
| inference time (ms) | 164.1 | 1308.1 | 2018.7 |
|  fps  | 6.1 | 0.76 | 0.45 |
|  デモ  | <video controls loop src="./d2go.mp4" type="video/mp4" width="200px"></video> | <video controls loop src="./yolov5.mp4" type="video/mp4" width="200px"></video> | <video controls loop src="./ssd.mp4" type="video/mp4" width="200px"></video> |

Faster-RCNNがモバイルに最適化されているということもあって、めっちゃサクサク動いています。  
ただ、他の二つの手法の方が推論の精度は高いような気がします。


## 参考リンク


1. [pytorch/android-demo-app: PyTorch android examples of usage in applications](https://github.com/pytorch/android-demo-app)
1. [Pytorch Mobile Performance Recipes — PyTorch Tutorials 1.9.0+cu102 documentation](https://pytorch.org/tutorials/recipes/mobile_perf.html)
1. [PyTorch Mobile Now Supports Android NNAPI | by PyTorch | PyTorch | Medium](https://medium.com/pytorch/pytorch-mobile-now-supports-android-nnapi-e2a2aeb74534)
1. [Neural Architecture Searchの新潮流 〜DARTSとFBNetの衝撃〜 - Qiita](https://qiita.com/cvusk/items/e7c9bb30c801996cd973)
