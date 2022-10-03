# ♥JS 语法

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

// slice、substring、substr 根据位置截取
//不传参数：如果不传参数，默认结果为本身
//区别：slice 可用于数组截取， substring、substr 只能用于字符串截取，可用看方法的命名方式记下。
var str="www.runoob.com!";
document.write(str.slice(4)+"<br>"); // 从第 5 个字符开始截取到末尾
document.write(str.slice(4,10)); // 从第 5 个字符开始截取到第10个字符


// substring

```

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every>
slice、substring、substr
<https://zhuanlan.zhihu.com/p/143369330>
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





## CSS
# css知识

## 盒子模型

![盒子模型](https://www.runoob.com/images/box-model.gif)
**总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距**

两个盒子相邻的时候，margin会以大的一方

background-color 渲染的时候包括padding部分

孩子的高度可以撑开父亲盒子的高度
默认盒子的宽度为100%

如果父亲设置了固定宽度或高度。孩子会溢出

## FlexBox

Flexible Box 弹性盒子
Flex 容器（flex container）和 Flex 项目（flex items）
![s](https://pic1.zhimg.com/80/v2-3b36245858fe73d6f50396c2e773848c_1440w.jpg)

“container” 默认存在两根轴：主轴（main axis）和垂直的交叉轴（cross axis）。主轴默认为水平方向。主轴开始的地方叫“main start”, 结束的地方叫“main end”。同理交叉轴开始于“cross start”，结束于“cross end”。

## FlexBox Container 属性

### 1. flex-direction

主轴的方向。也就是 “items” 排列的方向。
![https://pic1.zhimg.com/80/v2-0ac377493a33869f2829c4b1d3d70100_1440w.jpg](https://pic1.zhimg.com/80/v2-0ac377493a33869f2829c4b1d3d70100_1440w.jpg)

### 2. flex-wrap

默认情况下，“items” 在 “container” 中按一条直线排列。
flex-wrap属性有三个值：

* nowrap（默认）：不换行，沿主轴轴方向排列，如果排满了就缩小 “items” 的尺寸。
* wrap：沿交叉轴方向换行。
* wrap-reverse：沿交叉轴相反方向换行。

### 3. flex-row

*flex-flow*是*flex-direction*属性和*flex-wrap*属性的简写属性。

### 4. justify-content

justify-content属性定义了 "items" 在 主轴 上的 对齐方式。

### 5. align-items

align-items属性定义项目在交叉轴上如何对齐。

### 6. align-content

align-content属性定义了多根轴线的对齐方式。

## Flexbox items 属性

### 1. order

order属性定义单个 “item” 的排列位置。属性值值越小，排列越靠前，默认为0。

### 2. flex-grow

flex-grow属性定义 “items” 的放大比例，默认为0，也就是如果存在剩余空间，也不放大。

### 3. flex-shrink

flex-shrink属性定义了 "items" 的缩小比例，默认为1，即如果空间不足，该 "item" 将缩小。

### 4. flex-basis

### 5. flex

flex属性是flex-grow, flex-shrink 和 flex-basis的简写属性，默认值为0 1 auto

### 6. align-self

align-self属性允许单个 “item” 可以和其他项目有不一样的对齐方式。

<https://zhuanlan.zhihu.com/p/32946068>

<http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html>

<http://www.ruanyifeng.com/blog/2015/07/flex-examples.html>

## div 自动加色彩

```html
<script>
var arrColor = ["d71345","7fb80e","426ab3","8552a1","f47920","009ad6","7fb80e","367459"];
[...document.getElementsByTagName("div")].forEach((item,index)=> item.style.backgroundColor = "#" + arrColor [index % arrColor.length]  )
</script>
```
