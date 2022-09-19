# nest.js 新建工程

## 检查本地版本，并升级

```shell
nest --version
npm i -g @nestjs/cli
```

## 新建工程

```shell
nest new project-name
```

## 读取配置文件

```shell
yarn add cross-env -D
yarn add @nestjs/config
```

改变scripts

```js
 "dev": "cross-env NODE_ENV=dev nest start --watch",
 "build": "cross-env NODE_ENV=production nest build",
```

## 打印地址

```js
const app = await NestFactory.create(AppModule, {
  logger: isProduct ? false : new MyLogger(),
})
```

## 加上request级别的依赖注入

IDemonConfig  DemonConfig

## 加上swagger

## 网络请求

```
yarn add @nestjs/sequelize sequelize sequelize-typescript mysql2
```
