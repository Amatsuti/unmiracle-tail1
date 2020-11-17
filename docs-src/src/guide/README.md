# Get Start

　UnmiracleTailは不奇跡世界お散歩日和のダイスバトルを自由にシミュレートできるツールです。このツールのエンジンはクライアントで動いているので、サーバとは関係なく、特に動作制限とかはありません（あなたの端末のスペックが許す限りね！）

## セットアップ

最新のNode.jsをインストールして以下のコマンド

```sh
$ npm i
$ npm run cordova-prepare
$ npm run cordova-serve-browser
```

これで`localhost:8080`にツールが立ち上がります。

## 操作

上部のテキストボックスは左側チームと右側チームの設定です。そのまま「シミュレート」を押すと、結果が出力されます。


## プロジェクトのディレクトリ構造

* `/docs`：このドキュメント
* `/public`：公開ディレクトリ
  * `/test-cmd`：テスト用のカード
    * `debuff-burning.json`：「炎上」異常状態
    * `fire.json`：「火炎魔法」カード
    * `smash.json`：「打撃」カード
  * `main.wasm`：シミュレータエンジン 
* `/src`：Vueソース
* `/src-cordova`：Cordova設定

`/public`以下でカードの追加・変更します。
ビジュアルを修正してみたい場合は`/src`以下をいじってみてください。
