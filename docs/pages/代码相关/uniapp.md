# uniapp

## 代码编写方法

1. 用 vs code 写代码， 用 HBuilder打包

## vs 相关插件

|名称|功能|
|--|--|
|uni-app-snippets|代码片段|
|uni-create-view|创建uniapp页面|

## 常用的package.json的命令

```js
  "web": "uni", // 启动h5调试
  "wgt": "yarn &&  node scripts/wgt.mjs wgt_pro",  //发布正式版
  "test": "yarn && node scripts/wgt.mjs wgt_dev",  //发布测试版
```

## init.js

```js
import './utils/init'
```

```js
import { Request, localGet, localRemove } from 'lingman-uniapp'
import { BaseUrl, appName, project } from './constant'
Request.baseUrl = BaseUrl
Request.handle401 = () => {
  localRemove('token')
  uni.navigateTo({
    url: '/pages/login/login',
  })
}
Request.header = (url) => {
  return {
    'Content-Type': 'application/json',
    'app': appName,
    'project': project.value,
    'token': localGet('token') || '',
  }
}

```

## 文件目录

![目录](/public/static/images/uniapp/filemenu.png)
