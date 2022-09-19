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
