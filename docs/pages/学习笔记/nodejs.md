# node.js

## 什么是IO

Input Stream就是数据从外面（磁盘、网络）流进内存，Output Stream就是数据从内存流到外面去

## 同步IO和异步IO

>由于CPU和内存的速度远远高于外设的速度

第一种是CPU等着，也就是程序暂停执行后续代码，等100M的数据在10秒后写入磁盘，再接着往下执行，这种模式称为同步IO；

另一种方法是CPU不等待，只是告诉磁盘，“您老慢慢写，不着急，我接着干别的事去了”，于是，后续代码可以立刻接着执行，这种模式称为异步IO。

## CPU 密集型

CPU密集型 可以理解为 就是处理繁杂算法的操作，对硬盘等操作不是很频繁，比如一个算法非常之复杂，可能要处理半天，而最终插入到数据库的时间很快。

## 并发、并行、异步、同步

并发单纯的代表计算机能够执行多项任务，实现方式有单核方式和多核方式

单核：计算机通过分配时间片的方式，这个过程叫做进程或线程的上下文切换
![单核并发](/public/static/images/node/bingfa.png)
多核：在不同的核心上真正并行的执行任务
![单核并发](/public/static/images/node/bingfad.png)
同步和异步是两种不同的编程模型

多线程编程 vs (单线程) 异步编程
![单核并发](/public/static/images/node/cc.png)
![单核并发](/public/static/images/node/dan.png)
![单核并发](/public/static/images/node/aa.png)

## Node的异步

1. 调用栈 call stack
2. 回调队列 callback queue
3. 事件循环 eventloop

![事件循环](/public/static/images/node/eventloop.gif)
* **callback queue是其中的一种macroqueue，promise的then和process.nextTick是microqueue,优先级别宏队列高**
* **JS的单线程（single thread）**：仅仅是指JS代码执行在单线程里面。
调用栈（call stack）:又称执行环境（execution contexts）， 当函数或者程序调用的时候，就把该函数push到调用栈，结束时候，就从栈顶端移除。遵循FILO（先进后出）原则。
* **堆（Heap）**： 内存分配（memory allocation）的一块空间。JS的引用类型的值是放在堆内存的。
* **回调队列（callback Queue）**：JS在运行时候，有一个列表用于记录将要处理的回调事件。遵循FIFO（先进先出）原则。
* **事件循环（event loop）**: 事件循环不断的轮询检测调用栈是否为空？如果不为空，就等待调用栈为空，否则就把回调队列列表里的事件放到调用栈执行。循环直到回调队列列表为空

## Node的异步编程

async就是Promise对象的语法糖，async function a 相当于Promise.resolve(function a)

```js
Promise.resolve('foo') // 等价于 
// 等价于
nnew Promise(function (resolve) {
    resolve('foo')
})
```

await如果右侧为promise则返回resolve的结果
wait中如果抛出异常，我们可以在async中捕获异常并处理，如果抛出异常，则async在await抛出异常之后的代码将无法执行。

```js
var promise = new Promise(function(resolve, reject) {
    // ... some code
    console.log(我一创建就执行了)
    if (/* 异步操作成功 */){
      resolve(value);
    } else {
      reject(error);
    }
  });
```
一旦catch前面的任何一个Promise发生异常，都会被catch捕获，包括Promise函数创建的Promise，还有.then返回的Promise,甚至catch前面如果还有一个catch在这个catch抛出的异常也会被后一个catch捕获。
Promise对象的错误具有冒泡性质，会一直向后传递，直到被捕获为止，也即是说，错误总会被下一个catch语句捕获。

<https://blog.csdn.net/sinat_17775997/article/details/93874008>

```js
// bad
promise
  .then(function(data) {
    // success
  }, function(err) {
    // error
  });
 
// good
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error
  });
```


## pm2

**不停机发布**
pm2 reload xxx

## 用pm2部署

## 安装
  
```bash
npm install -g pm2
```

## 添加配置文件

```json
{
  "apps": [
    {
      "name": "app_name",
      "script": "./dist/index.js",
      "instances": "1",
      "exec_mode": "cluster",
      "watch": true,
      "ignore_watch": [
        "node_modules",
        "app"
      ]
    }
  ]
}
```

## 配置说明

apps:json 结构，apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用

- `name` 应用程序名称
- `cwd` 应用程序所在的目录
- `script` 应用程序的脚本路径
- `watch` 是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件或文件夹，如：

    ```json
    {
      "apps": [
        {
          "name": "app_name",
          "script": "./dist/index.js",
          "watch": [
            "./dist"
          ]
        }
      ]
    }
    ```

- `ignore_watch` 忽略监控的文件或文件夹，如：
- `autorestart` 启用/禁用应用程序崩溃或退出时自动重启
- `error_file` 自定义应用程序的错误日志文件
- `out_file` 自定义应用程序日志文件
- `pid_file` 自定义应用程序的pid文件
- `instances` 运行实例个数
- `min_uptime` 最小运行时间
- `cron_restart` 定时启动，解决重启能解决的问题

## 启动

```bash
pm2 start pm2config.json
```

## 启动一个进程并把它命名为 app_name

```bash
pm2 start app.js --name app_name
```

## 停止所有进程

```bash
pm2 stop all
```

## 停止指定的进程
  
```bash
pm2 stop app_name
```

## 重启所有进程

```bash
pm2 restart all
```

## 杀死全部进程
  
```bash
pm2 delete all
```

## 杀死指定的进程

```bash
pm2 delete 0
```
