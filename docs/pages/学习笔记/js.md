# JS 语法

## 解构

一种从数组、对象或函数参数中获取指定元素的方式

### 数组解构

```js
[变量1，变量2，…]=数组
```

### 对象解构

```js
var xiaomi ={
   name1 : "小米",
   price : 3455,
}
var {name1:p1,price:p2}=xiaomi;
```

### 函数参数结构

```javascript
function order({ 
  zhushi:a="香辣鸡腿堡a",
  xiaochi:b="小吃豆",
  drink:c="可乐"
}){
console.log(`主食：${a}`)
console.log(`小吃：${b}`) 
console.log(`饮料：${c}`)
} 
order({zhushi:"汉堡",xiaochi:"鸡腿",drink:"豆浆"});
order({drink:"感冒灵"})
```

## 模板字符串

```js
const info = `我的名字是：${person.username}`;
const info = `第1行
第2行`; 
```

## 箭头函数

普通函数

```js
hello = function() {
  return "Hello World!";
}
```

```js
hello = () => {
  return "Hello World!";
}
```

**如果函数只有一个语句，并且该语句返回一个值，则可以去掉括号和 return 关键字：**

```js
hello = () => "Hello World!";
```

**如果在对象内部，普通函数的function可以省略**

```js
const aa = { xx(){
    console.log("ggg")
}}
```

## 传播算法

场景：快速删除一个对象中的某些属性

```
var student={
            name:"Mike",
            age:20,
            school:"THU",
            go:function(){
                console.log("我骑着自行车去上课");
            }
        };

//对传播操作符...
//name和age已经被解构，对象student中的剩下属性都会传给student2
var {name,age,...student2}=student;
console.log(name);
console.log(age);
console.log(student2); 
```

```js
var sss = (...a)=>{console.log(a)}
sss(1,2,3)
```

a为数组 [1,2,3]

## asign 属性值合并

**深浅克隆本质是看克隆后有没有指向同一个内存空间**
Object.assign() 拷贝的是属性值。假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值。

```js
let obj1 = {
  m: 1,
  n: 2,
  attr: {
    name: 'Jack',
    age: 18
  }
}
 
let obj2 = Object.assign({}, obj1);
 
obj1.attr.name = 'Tom';
console.log( obj1.attr.name );  // Tom
console.log( obj2.attr.name );  // Tom 
```

## map

```js
arr=[1,2,3]
arr.map(d => d + 1);
arr.filter(d => d%2 == 0);
arr.reduce((total, current) => total + current,0);
//some() 方法测试数组中是不是至少有 1 个元素通过了被提供的函数测试。它返回的是一个 Boolean 类型的值。
arr.some(d=> d >2)
//find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
arr.find(element => element > 1000);
//findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1
arr.findIndex(element => element > 1);

//findLast() 方法返回数组中满足提供的测试函数条件的最后一个元素的值。如果没有找到对应元素，则返回 undefined
arr.findLast(element => element > 1);

// foreach 循环 for in  for of
arr.forEach(element => console.log(element));
for(let element in arr) { console.log(element) }
for(var item of arr){ 
    console.log(item);
}

//includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。
arr.includes(3)

Array.from({length:10},(d,a)=>1 + a)
//输出[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

```

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every>

## 模块化

两种导出方式

```js
export const name = 'square';

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}

```

```js
export { name, draw, reportArea, reportPerimeter };
```

导入  

```js
import { name, draw, reportArea, reportPerimeter } from '/js-examples/modules/basic-modules/modules/square.mjs';
```

### 默认导入导出

```js
export default function(ctx) {
  ...
}
```

```js
import randomSquare from './modules/square.mjs';
```

就是下面的

```js
import {default as randomSquare} from './modules/square.mjs';
```
