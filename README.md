# Detox Setup

### 注意点

jest は 29.0 以上を利用すること。v28 以下だとサポート外のため

### 環境構築

※ReactNative の場合

1.  detox-cli を install する

```shell
yarn global add detox-cli
```

2. brew を利用して `vwix/brew` , と `applesimutils` を install する

```shell
brew tap wix/brew
brew install applesimutils
```

3. プロジェクトに以下を install する

```shell
yarn add -D ts-jest jest@^29
yarn add -D detox
yarn add -D @types/detox @types/jasmine @types/jest
```

4.detox init で以下の 3 ファイルを生成する

```
detoxrc.js
e2e/jest.config.js
e2e/starter.test.js
```

5. .detoxrc.js で以下の YOUR_APP_NAME を project 名に変更する(package.json の name 部分)

6. 以下の 2 つの script を package.json に登録する

```json
"script": {
  "ios:build:debug": "detox build --configuration ios.sim.debug",
  "ios:e2e": "detox test --configuration ios.sim.debug"
}
```

7. 以下コマンドでテスト用の app を build する

```shell
yarn ios:build:debug
```

8. 生成した debug の app に対してテストをするため以下のコマンドを実行する

```shell
yarn ios:e2e
```
