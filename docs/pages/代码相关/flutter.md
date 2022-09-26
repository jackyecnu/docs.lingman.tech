# Flutter 学习

## 常用参考网站

## 编程语言：Dart

### 默认可选参数 和 默认位置参数

```dart
//自定义方法，默认参数
int add3([int a = 1, int b = 2]) {
  return a + b;
}
 
//自定义方法，命名参数
 
int add4(int a, {int b = 4}) {
  return a + b;
}
  print(add3()); //3
  print(add3(9, 89)); // 98
  print(add4(1, b: 16)); //17
```

### aysnc、await、future

和JS一样，future相当于promise

可以将任意函数转换为**async**函数,在future中自动包裹return状态

```dart
Future<int> futureInt() async {
  // 1
  return 1;
}
```

```dart
Future((){
    throw "发生错误了";
    return "你好";
  }).then((value) => print("我就是value"))
      .catchError((error)=>print("当前error==$error"))
      .whenComplete(() => print("当前事件结束了"));
```

### dart中的事件循环

在dart中实际上有两种队列:
1.事件队列(event queue):包含所有的外来事件:**I/O,mouse events, drawing events,timers,isolate**之间的信息传递

2.微任务队列(**microtask queue**):表示一个短时间内就会完成的异步任务，它的优先级最高，高于event queue,只要队列中还有任务，就可以一直霸占着事件循环。**microtask queue*添加的任务只要是由Dart内部产生

### 构造函数

1. 普通构造函数

```dart
class Point{
  num x,y;
  //this指当前实例，Dart中，只有名称冲突时才使用它，否则，Dart的代码风格是要省略this的。
  Point(num x,num y){
    this.x = x ;
    this.y = y ; 
  }
}
```

缩写

```dart
class Point{
  num x,y;
  Point(this.x,this.y);
}
```

**简而言之：所有的构造函数，如果不指定，只会调用父类默认的无参构造。**

如果想要调用父类的特定的构造函数，需要使用双引号:super来指定。、

命名构造函数,为了可读性

```dart
class Point{
  num x , y ;
  Point(this.x , this.y) ;
  Point.origin(){
    this.x = 10 ;
    this.y = 10 ;
  }
  //构造参数为实例变量直接赋值
  Point.rect(this.x ,this.y) ;
  void pointPrint(){
    print('x = $x , y = $y ');
  }
}
//调用
Point p = Point.origin() ;
p.pointPrint();
```

更多构造函数用法请访问
[https://www.jianshu.com/p/e59052e49bf3/](https://www.jianshu.com/p/e59052e49bf3/)

### 数组操作函数

```dart
// forEach()循环
var fruits = [‘banana’, ‘pineapple’, ‘watermelon’];
fruits.forEach((fruit) => print(fruit)); // => banana pineapple watermelon

// map() 产生一个新的列表
var mappedFruits = fruits.map((fruit) => ‘I love $fruit’).toList();
print(mappedFruits); // => ['I love banana', ‘I love pineapple’, ‘I love watermelon’]

// contains() 相当于 js 的 includes
var numbers = [1, 3, 2, 5, 4];
print(numbers.contains(2)); // => true

// sort() 给数组排序
numbers.sort((num1, num2) => num1 - num2); // => [1, 2, 3, 4, 5]

// reduce(), fold() 聚合
var sum = numbers.reduce((curr, next) => curr + next);
print(sum); // => 15
const initialValue = 10;
var sum2 = numbers.fold(initialValue, (curr, next) => curr + next);
print(sum2); // => 25

// every() 相当于js的 every，当每个元素都通过条件为true
List<Map<String, dynamic>> users = [
  { “name”: ‘John’, “age”: 18 },
  { “name”: ‘Jane’, “age”: 21 },
  { “name”: ‘Mary’, “age”: 23 },
];
var is18AndOver = users.every((user) => user[“age”] >= 18);
print(is18AndOver); // => true

// where(), firstWhere(), singleWhere() 相当于js的where find 等方法
// See #6 for users list
var over21s = users.where((user) => user[“age”] > 21);
print(over21s.length); // => 1
var nameJ = users.firstWhere((user) => user[“name”].startsWith(‘J’), orElse: () => null);
print(nameJ); // => {name: John, age: 18}
var under18s = users.singleWhere((user) => user[“age”] < 18, orElse: () => null);
print(under18s); // => null

// take(), skip()
var fiboNumbers = [1, 2, 3, 5, 8, 13, 21];
print(fiboNumbers.take(3).toList()); // => [1, 2, 3]
print(fiboNumbers.skip(5).toList()); // => [13, 21]
print(fiboNumbers.take(3).skip(2).take(1).toList()); // => [3]

// List.from() 根据指定的集合创建一个新的集合
var clonedFiboNumbers = List.from(fiboNumbers);
print(‘Cloned list: $clonedFiboNumbers’);

//expand() ， 将每个元素编程零个活多个元素
var pairs = [[1, 2], [3, 4]];
var flattened = pairs.expand((pair) => pair).toList();
print(‘Flattened result: $flattened’); // => [1, 2, 3, 4]
var input = [1, 2, 3];
var duplicated = input.expand((i) => [i, i]).toList();
print(duplicated); // => [1, 1, 2, 2, 3, 3]
```

## 编程框架：flutter

### widget树，查看，调试能力

![Widget Tree](/public/static/images/flutter/widget_tree.png)

### GetX

#### Getx 路由跳转等

```dart
//不用命名路由方式
Get.to(NextScreen());
Get.back();
Get.off(NextScreen());
Get.offAll(NextScreen());
var data = await Get.to(Payment());
Get.back(result: 'success');

//用命名路由的方式
Get.toNamed("/NextScreen");
Get.offNamed("/NextScreen");
Get.offAllNamed("/NextScreen");
```

```dart
void main() {
  runApp(
    GetMaterialApp(
      unknownRoute: GetPage(name: '/notfound', page: () => UnknownRoutePage()),
      initialRoute: '/',
      getPages: [
        GetPage(name: '/', page: () => MyHomePage()),
        GetPage(name: '/second', page: () => Second()),
        GetPage(
          name: '/third',
          page: () => Third(),
          transition: Transition.zoom  
        ),
      ],
    )
  );
}
```

```dart
Get.offAllNamed("/NextScreen?device=phone&id=354&name=Enzo");
Get.toNamed("/NextScreen", arguments: 'Get is the best');
print(Get.arguments);
```

#### 两种状态管理

简单状态管理（主动update）vs响应式状态管理(Getx 和 obs)

![路径](/public/static/images/flutter/state.png)

#### GetxController及生命周期

GetxController只是有个 update 方法用于通知组件刷新

**onInit**：组件在内存分配后会被马上调用，可以在这个方法对 controller 做一些初始化工作。
**onReady**：这里是在 onInit 一帧后被调用，适合做一些导航进入的事件，例如对话框提示、SnackBar 或异步网络请求。
**onClose**：在 onDelete 方法前调用、用于销毁 controller 使用的资源，例如关闭事件监听，关闭流对象，或者销毁可能造成内存泄露的对象，例如 TextEditingController，AniamtionController。也适用于将数据进行离线持久化。没有view引用的时候自动调用

网络请求等异步操作最好放在 GetxController 的 onReady 生命周期函数中处理

### 布局控件、容器类控件大小等约束规则

## 代码架构

|一级目录|二级目录|注释|
|--|--|--|
|api| |网络请求|
|routers||路由|
|model||各种模型集合|
| ∟|response_model| 返回模型|
| ∟|entity|实体模型|
| ∟|domain_model|领域模型|
| ∟|domain_model|领域模型|
|common||项目相关性公共的模块|
| ∟|demon_config.dart|项目总注入依赖|
| ∟|app_config.dart|app设置|
|utils | | 与项目无关性工具类，公共方法|
| ∟|extension | 扩展方法和属性|
|pages || 所有页面模块|
|widgets||一些自定义控件|

**前端开发**无非就两步第一是**布局**、第二是**请求数据刷新界面**

## 四大组件

> 分为四种，分别是基础类组件、布局类组件、容器类组件、滚动类组件

### 基础类组件

文本(Text)、图片(Image)、按钮(xxButton)、输入框(TextField)、单选框(Switch)、复选框(CheckBox)、表单(Form)

### 布局类组件

>水平线性布局（Row）、垂直线性布局（Column)、弹性布局(Flex)、流式布局（Wrap|Flow）、层叠布局（Stack|Positioned）

### 容器类组件

>容器类与布局类不同的地方在于一般容器类只接受一个子组件。用于修饰、变换、限制大小、设置边距等等

1. Padding 跟移动端不一样的是，flutter的Padding也是单独抽出来的组件。

```dart
Padding(
      //上下左右各添加16像素补白
      padding: EdgeInsets.all(16.0),
      child: Column()
```

2. 限制类容器(ConstrainedBox、SizedBox等等)

>用于限制组件的最大最小值，格式如下，一个是限制条件的属性、一个是child放的内容

```dart
ConstrainedBox(
    constraints: BoxConstraints(minWidth: 60.0, minHeight: 100.0),  //父
    child: UnconstrainedBox( //“去除”父级限制
      child: ConstrainedBox(
        constraints: BoxConstraints(minWidth: 90.0, minHeight: 20.0),//子
        child: redBox,
      ),
    )
)
```

3. 装饰器DecoratedBox

>类似于Android的shape，可以设置圆角、渐变、阴影等等。格式如下

```dart
 DecoratedBox(
    decoration: BoxDecoration(
      gradient: LinearGradient(colors:[Colors.red,Colors.orange[700]]), //背景渐变
      borderRadius: BorderRadius.circular(3.0), //3像素圆角
      boxShadow: [ //阴影
        BoxShadow(
            color:Colors.black54,
            offset: Offset(2.0,2.0),
            blurRadius: 4.0
        )
      ]
    ),
  child: Padding(padding: EdgeInsets.symmetric(horizontal: 80.0, vertical: 18.0),
    child: Text("Login", style: TextStyle(color: Colors.white),),
  )
)

```

4. 变换Transform

> 旋转(rotate)、平移(translate)、缩(scale)

5. RotatedBox

6. Container容器

>这个容器比较强大的是它有padding跟margin以及变换等等不过底层也是用上面的控件实现的

```dart
Container({
  this.alignment,
  this.padding, //容器内补白，属于decoration的装饰范围
  Color color, // 背景色
  Decoration decoration, // 背景装饰
  Decoration foregroundDecoration, //前景装饰
  double width,//容器的宽度
  double height, //容器的高度
  BoxConstraints constraints, //容器大小的限制条件
  this.margin,//容器外补白，不属于decoration的装饰范围
  this.transform, //变换
  this.child,
  padding,
  margin,
})

```

7. Scaffold

>该容器应该不陌生，项目一创建是就有。它是一个脚手架容器，就是很多容器都定义好了。只要跟着写就有相应的效果,先看看
>从Scaffold的下一级子控件来看，有导航栏（appbar）、侧边栏（drawer）、底部导航栏（bottomNavigationBar）、body（内容）

## Provider基本使用三步曲

1. 注册声明Provider
2. 调用显示值
3. 调用修改值修改

## 约束布局规则

1. 上层widget向下层widget传递约束条件
2. 下层widget向上层widget传递大小信息
3. 上层widget决定下层widget位置

> Widget会通过他的父级获得自身的约束。约束实际上就是四个浮点类型的集合：最大、最小宽度，最大、最小高度。
> 然后，这个widget会逐渐遍历他的children列表。向子级传递约束信息（子级之间的约束可能会有所不同），然后询问它的每个子级需要用于布局的大小。
> 然后这个widget就会对它的子级的children逐个进行布局。
> 最后，widget将会把它的大小信息向上传递至父widget（包括其原始约束条件）。
> 最后，widget将会把它的大小信息向上传递至父widget（包括其原始约束条件）。

**子元素遇到布局元素，尺寸会变成紧约束，而对当前元素不受影响**
