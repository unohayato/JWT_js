# JWT_js
## JWTを用いた認証システム With node.js
### JWTとは
- Json Web Token
 - Json→ あのJson, Web→はWeb, Token→ 暗号化された文字列(要はLoginとかが安全ってことらしい)
 - request, response でTokenの発行認証をclient, server で行うイメージ
 - JWT: header: どんな形式で暗号化するのかなど, payload: 実際のデータ(name, date, password etc), veryfy..: いわゆるシークレットキー
### ToDo
## 全体の流れ
 - postman に登録して、postmanからlocalにregister/, login/すると承認できた、できてないを返すプログラムを組む 
#### expressのサーバーを立てる
 - npm init -y
 - express jsonwebtoken nodemon のインストール
 - モジュールの読み込み
 - expressのインスタンス化
 - PORTの宣言代入
 - PORTの待機状態を作る＋コンソールで確認
#### 登録する
 - postでpayloadのname, emailの情報を格納
 - token変数の宣言
 - body(username, email, token)変数の宣言
 - config.js
  - jwt, secret, optionsを設定しておく
 - exportしたconfig.jsをserver.jsのほうで読み込む
 - postmanに情報を登録する(tokenの生成)  
 #### ログイン
 - /loginリクエストを送ると承認のメッセージをjsonで返すようにする
 - auth.js
  - jwtとconfigを読み込む
  - 認証（tokenとsecretkey）をverifyして成功したら次のミドルウェアに移り、成功しなかったら認証失敗の文字列をjsonで返すauth関数を作る
  - このmojuleをserver.jsに読み込む（login/のところに入れる）


### セキュリティ
 - .env, .gitignore でsercretkeyは隠しておく
