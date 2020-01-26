---
title: "YamlとJsonの比較"
date: "2020-01-26 16:00:00 +0800"
slug: "/compare-yaml-json/"
thumbnail: "yaml-thumbnail.png"
description: "同じデータをYamlで記述した場合とJsonで記述した場合で比較しました。備忘録です。"
tags:
    - "Yaml"
    - "Memo"
---

## これは何

最近、AWSのCluodFromationやGithub Actions、Dockerの設定ファイルなど色々なところでYaml形式のデータを見かけることが多くなってきたので、
備忘録としてYaml形式で記述したデータとJson形式で記述したデータを比較しました。

なお、オンライン上でYamlとJsonを変換してくれるツールがあるので、実際に試しながら進めていくと理解が深まりやすいかと思います。

[Best Online YAML Converter - Convert YAML Strings into JSON, XML, CSV](https://codebeautify.org/yaml-to-json-xml-csv)

## yamlとjsonを比較

### コメントアウト

```yml:title=yaml
count: 3 # これはコメント
```

###  基本型

```yml:title=yaml
count: 3
name: "takigawa"
value: 3.2
boolean: true
```

```json:title=json
{
  "count": 3,
  "name": "takigawa",
  "value": 3.2,
  "boolean": true
}
```


### シーケンス

```yml:title=yaml
list:
  - 3
  - takigawa
  - 3.2
  - true
```

```json:title=json
{
  "list": [
    3,
    "takigawa",
    3.2,
    true
  ]
}
```

### マップ

```yml:title=yaml
map:
  name: "takigawa"
  value: 3.2
  boolean: true
```

```json:title=json
{
	"map": {
		"name": "takigawa",
		"value": 3.2,
		"boolean": true
	}
}
```
### 配列の要素をマップにする

基本的にインデント位置が同じデータは同じキーに属すると考えてよい。

```yml:title=yaml
list:
  - name: "bobyama"
    value: 3.2
  - name: "takigawa"
    value: 3
    boolean: true
```

```json:title=json
{
  "list": [
    {
      "name": "bobyama",
      "value": 3.2
    },
    {
      "name": "takigawa",
      "value": 3,
      "boolean": true
    }
  ]
}
```


### jsonっぽい書き方もできる

```yml:title=yaml
list: ["takigawa", 3.2, true]
map: {name: "takigawa", value: 3.2}
```

```json:title=json
{
	"list": [
		"takigawa",
		3.2,
		true
	],
	"map": {
		"name": "takigawa",
		"value": 3.2
	}
}
```

複数行にすることも可能っちゃ可能っぽい。

```yml:title=yaml
list: ["takigawa", 
    3.5, 
    true,
    fsdafs,
    fdsafd,
    null]
map: {name: "takigawa", 
    value: 3.2}
```

### 改行文字を含む文字列

```yml:title=yaml
name: |
  takigawa
  bobyama
description: >
  this
  is
  description
value: 3.2
```
key-valueのvalueを | で指定すると、インデントした後の文字列が実際のvalueとして扱われる。

```json:title=json
{
	"name": "takigawa\nbobyama\n",
	"description": "this is description\n",
	"value": 3.2
}
```


### マップやシーケンスは別名をつけて参照できる

```yml:title=yaml
map: &alias
  name: "takigawa"
  value: 3.2
  boolean: true
map2:
    data: *alias
list: &alias2
  - item1
  - item2
list2:
  - *alias2
```

```json:title=json
{
	"map": {
		"name": "takigawa",
		"value": 3.2,
		"boolean": true
	},
	"map2": {
		"data": {
			"name": "takigawa",
			"value": 3.2,
			"boolean": true
		}
	},
	"list": [
		"item1",
		"item2"
	],
	"list2": [
		[
			"item1",
			"item2"
		]
	]
}
```

### マップをマージする

```yml:title=yaml
map: &map
  name: takigawa
  value: 3.2
map2:
  name: bobyama
  count: 3
  <<: *map

```

```json:title=json
{
	"map": {
		"name": "takigawa",
		"value": 3.2
	},
	"map2": {
		"name": "bobyama",
		"count": 3,
		"value": 3.2
	}
}
```

## 参考リンク

- [Best Online YAML Converter - Convert YAML Strings into JSON, XML, CSV](https://codebeautify.org/yaml-to-json-xml-csv)
- [YAML 基本記法まとめ - Qiita](https://qiita.com/tfrcm/items/5f8e4c5795ce41b214d1)