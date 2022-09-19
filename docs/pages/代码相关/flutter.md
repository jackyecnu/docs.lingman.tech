# Flutter 学习

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
