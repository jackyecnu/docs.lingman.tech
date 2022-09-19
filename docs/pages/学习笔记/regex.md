# 正则表达式

## 测试网站

<https://regex101.com/>

## 语法

![regex](/public/static/images/node/regex.png)

## 匹配模式

g: 全局
m: 多行匹配
i: ignore 忽略大小写

## 正则表达式对象函数

1. test函数

```js
var url = 'http://www.baidu.com?a=1&b=2&c=3';
var reg = /a=1/;
console.log(reg.test(url));    // 输出结果为 true
```

2. exec函数

```js
var url = 'http://www.baidu.com?a=1&b=2&c=3';
var reg = /([^?&=]+)=([^?&=])*/g;
console.log(reg.exec(url)); //["a=1", "a", "1", index: 21, input: "http://www.baidu.com?a=1&b=2&c=3"]
```

## 字符串的函数

1. match

```js
var url = 'http://www.baidu.com?a=1&b=2&c=3';
var reg = /([^?&=]+)=([^?&=])*/;
var result = url.match(reg);
console.log(result);    //["a=1", "a", "1", index: 21, input: "http://www.baidu.com?a=1&b=2&c=3"]
```

2. replace

不带g

```js
var url = 'http://www.baidu.com?a=1&b=2&c=3';
var reg = /([^?&=]+)=([^?&=])*/;
var url1 = url.replace(reg,function(a,b,c,d,e){
    console.log(a,b,c,d,e); //a=1, a, 1, 21, http://www.baidu.com?a=1&b=2&c=3
    return 'ok';
})
console.log(url1);  //http://www.baidu.com?ok&b=2&c=3
```

带g

```js
var url = 'http://www.baidu.com?a=1&b=2&c=3';
var reg = /([^?&=]+)=([^?&=])*/g;
var url1 = url.replace(reg,function(a,b,c,d,e){
    console.log(a,b,c,d,e); //执行3次，分别输出为：a=1, a, 1, 21, http://www.baidu.com?a=1&b=2&c=3 和 b=2, b, 2, 25, http://www.baidu.com?a=1&b=2&c=3 和 | c=3, c, 3, 29, http://www.baidu.com?a=1&b=2&c=3
    return 'ok';
})
console.log(url1);  //http://www.baidu.com?ok&ok&ok
```
