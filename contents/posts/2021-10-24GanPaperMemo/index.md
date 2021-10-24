---
title: "GAN関連の論文をいくつか読んだのでそのメモ"
date: "2021-10-24 16:00:00 +0800"
slug: "/gan-paper-memo/"
thumbnail: "deeplearning-thumbnail.png"
description: "最近GAN関連の論文をいくつか読んだので、備忘録としてまとめておきます。"
tags:
    - "Deep Learning"
    - "Memo"
content: "md"
---

## これは何

最近GAN関連の論文をいくつか読んだので、備忘録としてまとめておきます。


## [Generative Adversarial Nets](https://arxiv.org/abs/1406.2661)
- Tue, 10 Jun 2014
- Ian J. Goodfellow, Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-Farley, Sherjil Ozair, Aaron Courville, Yoshua Bengio
- 最初のGAN。
- DとGは以下の価値関数で表されるminimaxゲームを行う。  
  min_G max_D V (D, G) = Ex∼pdata(x) [log D(x)] + Ez∼pz(z) [log(1 − D(G(z)))].
- 理論的には、DとGが十分なパラメータ空間を持ち、十分なトレーニング回数を確保出来るならば、Gはデータ生成分布を完全に再現可能で、Dは1/2の確率で正解を言い当てる状況に収束する。
- MNISTや、TFD、CIFER-10などのデータセットで学習した例が示されている。
- コード ... [https://github.com/goodfeli/adversarial](https://github.com/goodfeli/adversarial) (Theano)

## [Conditional Generative Adversarial Nets](https://arxiv.org/abs/1411.1784)
- Thu, 6 Nov 2014
- Mehdi Mirza, Simon Osindero
- GeneratorとDiscriminatorに、入力x以外にクラスラベルや他のモーダルからの入力yを供給することで条件付けを行う。
- 検証として、MNISTデータセットに対してクラスラベルで条件付けをした例と、MIR Flickr 25,000 datasetのタグ付けを自動生成する例が示されていた。
- タグ付けをする例において、ImageNetで事前学習したモデルから取得した特徴量ベクトルと、Skip-gramから取得した埋め込みベクトルが使用されている。
- コード ... [https://github.com/sverma88/Conditional-Generative-Adversarial-Networks](https://github.com/sverma88/Conditional-Generative-Adversarial-Networks) (Theano)

## [Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks](https://arxiv.org/abs/1511.06434)
- Thu, 19 Nov 2015
- Alec Radford, Luke Metz, Soumith Chintala
- Deep Convolutional GANs (DCGAN)というCNNベースのGANを提案している。
- プーリング層をストライド畳み込み(Discriminator)とフラクショナルストライドコンボリューション(Generator)に置き換えている。
- ジェネレーターとディスクリミネーターの両方でBatchNormを使用している。
- より深いアーキテクチャのために、隠れ全結合層を削除している。
- GeneratorでTanhを使用する出力を除くすべてのレイヤーでReLUアクティベーションを使用している。
- DiscriminatorのすべてのレイヤーでLeakyReLUアクティベーションを使用している。
- コード ... [https://github.com/floydhub/dcgan](https://github.com/floydhub/dcgan) (PyTorch)

## [Coupled Generative Adversarial Networks](https://arxiv.org/abs/1606.07536)
-  Fri, 24 Jun 2016
- Ming-Yu Liu, Oncel Tuzel
- CoGANと呼ばれる、複数のドメインの画像を生成するGeneratorと、複数のドメインの画像を受け取るDiscriminatorによって構成されるGANを提案している。
- ペア付けがされていないマルチドメインの画像データを教師として、ペア付けがされたマルチドメインの画像データを生成出来るようになる。
- GeneratorとDiscriminatorの高次元の特徴量をデコードするレイヤーの重みを共有することで、ペア付けを可能にしている。
- Discriminatorの重みの共有は必須ではない。
- MNISTデータセット使ってdigit画像とそのネガティブ画像を生成したり、同一人物の顔の画像で、ブロンズヘアーバージョンや、スマイルバージョンや、眼鏡ありバージョンなどの画像を生成したり、RGB画像とそれに対応するdepth画像を生成したりしている。
- コード ... [https://github.com/mingyuliutw/CoGAN](https://github.com/mingyuliutw/CoGAN) (Caffe,PyTorch)

## [Image-to-Image Translation with Conditional Adversarial Networks](https://arxiv.org/abs/1611.07004)
- Mon, 21 Nov 2016
- Phillip Isola, Jun-Yan Zhu, Tinghui Zhou, Alexei A. Efros
- 画像と画像のペアを教師データとして学習することで、ある画像から別の画像へのマッピングを可能にした。
- Generatorとして、セマンティックセグメンテーションとかで使われるU-Netを採用、DiscriminatorとしてPatchGAN(パッチごとのCNNを行う)を採用している。
- Generatorの損失関数として、Discriminatorのfakeかrealか以外にも追加でL1-lossを採用している。
- Discriminatorのfakeかrealかだけだとパターン化した人工模様が生成され、L1-lossだけだとぼやけて全体的に灰色な画像になってしまう。
- 両者を足し合わせた損失関数を採用することで、シャープなエッジのカラフルな人工模様のない画像を生成することに成功している。
- コード ... [https://github.com/junyanz/pytorch-CycleGAN-and-pix2pix](https://github.com/junyanz/pytorch-CycleGAN-and-pix2pix) (PyTorch)

## [Wasserstein GAN](https://arxiv.org/abs/1701.07875)
- Thu, 26 Jan 2017
- Martin Arjovsky, Soumith Chintala, Léon Bottou
- 従来のGANではJensen-Shannon divergenceを使った損失関数を最適化していたが、新しくWasserstein距離を使った損失関数を最適化する手法を提案した。
- Kullback–Leibler divergence ... カルバック- ライブラー情報量。二つの確率分布の差異を測る尺度。
- Earth Mover Distance (EMD) ... ユークリッド距離のような距離尺度の1つ。Wassertstein距離と等価。
- 従来のGANの最適化には、勾配消失、損失関数の値と生成されるサンプルの質に相関がないなどの問題を抱えていたが、Wasserstein距離を用いた最適化では、勾配消失が起こりにくく、また損失関数の値と生成されるサンプルの質に相関がある。
- WGANではCriticを十分に最適化したあとに、Generatorを最適化するため、GeneratorとDiscriminatorの最適化のバランスとかを考える必要がない。
- Criticのoptimizerには、Adamなどのmomentumベースのものではなく、RMSPropといったものを使う方が良い。
- コード ... [https://github.com/eriklindernoren/PyTorch-GAN](https://github.com/eriklindernoren/PyTorch-GAN) (PyTorch)
    または [https://github.com/eriklindernoren/Keras-GAN](https://github.com/eriklindernoren/Keras-GAN) (Tensorflow)

## [Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks](https://arxiv.org/abs/1703.10593)
- Thu, 30 Mar 2017
- Jun-Yan Zhu, Taesung Park, Phillip Isola, Alexei A. Efros
- CoGANのように、対になっていない二つのドメインの画像データを学習セットとして、一方のドメインの画像から他方のドメインの画像を生成するモデルを生成出来る。
- 損失関数として、従来の敵対的損失(Adversarial Loss)以外に新しくサイクル一貫性損失(Cycle Consistency Loss)というものを導入している。
- 二つのドメインX, Yに対して、マッピングG: X -> Y、F: Y -> Xがあった時に、サイクル一貫性損失関数は $$ ||F(G(X)) - X ||_1 $$ や $$ ||G(F(Y)) - Y||_1 $$ を小さくする要因として機能する。
- サイクル一貫性損失として、L1ノルムを用いるのではなく、他のDiscriminatorを使った場合も試してみたが性能向上は認められなかったらしい。
- スタイル変換、ラベルマップ-写真変換、オブジェクト変換など様々なタスクにおいて、CycleGANは他のベースラインモデルの性能を上回り、監視あり学習モデルであるpix2pixに匹敵する性能を示した。
- 欠点として、単純な色やテクスチャの変換についてはほとんどのケースで上手くいっているが、犬 -> 猫などのジオメトリの変更が必要なケースでは変更を最小限に留めようとして上手く変換出来ないケースが多かったらしい。
- コード ... [https://github.com/junyanz/pytorch-CycleGAN-and-pix2pix](https://github.com/junyanz/pytorch-CycleGAN-and-pix2pix) (PyTorch)


## [StackGAN: Text to Photo-realistic Image Synthesis with Stacked Generative Adversarial Networks](https://arxiv.org/abs/1612.03242)
- Sat, 10 Dec 2016
- Han Zhang, Tao Xu, Hongsheng Li, Shaoting Zhang, Xiaogang Wang, Xiaolei Huang, Dimitris Metaxas
- テキストを条件付けとして、対応する画像を生成するStackGANというモデルを提唱している。
- 大まかな色と形状をスケッチするStage-Iと、高解像度でよりディティールの細かい画像を生成するStage-IIの二つのGANをstackしている。
- 文字列の埋め込みベクトルから潜在変数への変換に、Conditioning Augmentationという方法を用いている。
- それまでの埋め込みベクトルから潜在変数への変換は、単純に非線形変換するだけだったが、そこにランダム性を持たせることによって、条件空間の小さな摂動に対してより堅牢になり、また同じ文字列でも様々なポーズの画像が生成出来るようになった。
- また、過去のモデルや、StackGANの様々な構成要素を比較する際の評価指標としてinception scoreというものを使っている。
- inception scoreは、inceptionモデルが識別しやすいほど、また識別されるラベルのバリエーションが多いほど高くなる。
- コード ... [https://github.com/hanzhanggit/StackGAN](https://github.com/hanzhanggit/StackGAN) (Tensorflow) または [https://github.com/hanzhanggit/StackGAN-Pytorch](https://github.com/hanzhanggit/StackGAN-Pytorch) (PyTorch)

## [Progressive Growing of GANs for Improved Quality, Stability, and Variation](https://arxiv.org/abs/1710.10196)
- Fri, 27 Oct 2017
- Tero Karras, Timo Aila, Samuli Laine, Jaakko Lehtinen
- 低解像度の画像から学習していき、徐々にGeneratorとDiscriminatorの両方に対してレイヤーを加えて、高解像度の画像を生成する学習方法によって、生成される画像の質も、収束に要する時間も大幅に改善した。
- progressive growing以外にも、以下に挙げるような細かい改善や変更に対して評価を行っている。
- Small minibatch ... 高解像度の画像を用いて学習を行う場合は、メモリ制約によりバッチサイズが小さくなってしまうので、その影響を評価している。
- Revised training parameters ... 何を指しているのかよくわからなかったが、レイヤーを追加する時に、特徴量マップの補間を取って段々と移行することだと思っている。
- Minibatch discrimination ... あんましよく分かんなかった。なんか以前に提案された方法も試してみました的なことだと思っている。
- Minibatch stddev ... ミニバッチごとに標準偏差を取って、特徴量マップを追加する。
- Equalized learning rate ... 重みを単純に標準正規分布で初期化して、実行時にレイヤーごとに正規化するという方法。
- Pixelwise normalization ... 特徴量マップをピクセルごとに正規化する。  
- Small minibatchでは全ての評価基準において精度が大幅に劣化したが、それ以外ではおおよそ精度の向上が見られた。
- progressive growingでは、学習の初期ではネットワークを流れる画像の解像度が小さいため、従来の方法に比べて、収束も速く、またスループットも大きい。
- 損失関数は、WGAN-GP(一部LSGAN)を使用している。
- コード ... [https://github.com/tkarras/progressive_growing_of_gans](https://github.com/tkarras/progressive_growing_of_gans) (Tensorflow)

## [Self-Attention Generative Adversarial Networks](https://arxiv.org/abs/1805.08318)
- Mon, 21 May 2018
- Han Zhang, Ian Goodfellow, Dimitris Metaxas, Augustus Odena
- GANにself-attention機構を導入した。
- frechet inception distance ... データセットの画像と生成した画像がそれぞれ多変量正規分布に従うと仮定した場合の、二つの分布関数を距離をとったもの。
- Spectral normalization ... DiscriminatorのBatch NormalizationをSpectral Normalizationに置き換えることで、WGANやWGAN-GPで前提としているようなリプシッツ制約を満たし、GANの安定性が向上させたらしい。元々はPFNの人が発表したらしい。
- TTUR ... Discriminatorの学習率をGeneratorの学習率よりも大きくすることで、それぞれ同じ頻度で学習しつつ、Discriminatorの学習をより速くすることに成功した。
- 損失関数はヒンジ関数を用いている。
- コード ... [https://github.com/brain-research/self-attention-gan](https://github.com/brain-research/self-attention-gan) (Tensorflow)


## [Large Scale GAN Training for High Fidelity Natural Image Synthesis](https://arxiv.org/abs/1809.11096)
- Fri, 28 Sep 2018
- Andrew Brock, Jeff Donahue, Karen Simonyan
- バッチサイズとモデルのサイズを大きくすることで、めっちゃ性能が向上した。
- Shared Embedding、Hierarchical latent spaces、Orthogonal Regularizationという制約を導入した。
- Shared Embedding ... 各層に導入されるconditional BatchNormの重みを共有する。
- conditional BatchNorm ... Bach Normalizationの学習パラメータである平均と分散にクラスラベルをMLPに通して組み込んだもの。
- Hierarchical latent spaces ... 複数の階層に対して、ランダムに生成されたノイズを加える。
- Orthogonal Regularization ... モデルの階層が深くなると、ノイズの潜在空間に対してGeneratorが滑らかでななくなり、truncation trickのために学習時と異なる分布のノイズが渡されたときに、不自然な画像を生成してしまう問題があった。Orthogonal Regularizationという制約を課すことにより、Generatorが滑らかになりやすくなるらしい。
- truncation trickという、Generatorに渡される乱数に対して制限を課す手法によって、生成される画像の忠実性と多様性を細かく制御出来るようにした。
- Projection Discriminator ... Discriminatorにクラスラベルを導入する時に、チャンネル方向に結合したり、class lossをとったりするのではなく、xの特徴量とクラスラベルの埋め込みベクトルの内積をとっている。なんでそれが上手くいくのかはちゃんと理解していない。
- progressive growingは使ってない。
- コード ... [https://tfhub.dev/s?q=biggan](https://tfhub.dev/s?q=biggan) (Tensorflow)


## [A Style-Based Generator Architecture for Generative Adversarial Networks](https://arxiv.org/abs/1812.04948)
- Wed, 12 Dec 2018
- Tero Karras, Samuli Laine, Timo Aila
- 従来はランダムに生成された乱数はネットワークの最初の層のみに注入していたが、StyleGANではMapping Networkで変換した特徴量を各解像度で注入している。
- adaptive instance normalization(AdaIN) ... 各特徴量の平均と標準偏差を調整する。
- mixing regularization ... トレーニング中にある一定の確率で、二つの乱数から生成されたスタイル埋め込みベクトルw1の前半ととw2の後半をmixすることにより、各解像度でのスタイルの独立性を高めている。
- 各解像度でノイズを注入することで、ネットワークが疑似乱数を生成する必要がなくなり、ネットワークのキャパシティが増えるらしい。
- PPL ... Perceptual path length。潜在空間での距離と知覚的な距離との比を表す。この値が小さいほど潜在空間でスタイルが線形的にとぎほぐされている。
- コード ... [https://github.com/NVlabs/stylegan](https://github.com/NVlabs/stylegan) (Tensorflow)

