# node 相关脚本

## NRM 切换源

## node的环境

```js
yarn add cross-env -D
```

```js
"scripts": {
  "dev": "cross-env NODE_ENV=dev node server.js",
  "start": "cross-env NODE_ENV=production next start",
  "build": "next build"
},
```

## npm源

- 查看当前源

```sh
npm config get registry
```

- 换淘宝源

```sh
npm config set registry https://registry.npmmirror.com/
```

## nrm管理npm源

- 安装

```sh
npm install -g nrm
```

- 使用

```sh
# 查看当前源
nrm current

# 查看源列表
nrm ls

# 切换源
nrm use <name>

# 添加新源
nrm add <名称> <源地址>
nrm add tb https://registry.npmmirror.com/

# 删除源
nrm del <registry>

# 测试源响应速度
nrm test <name>
```
