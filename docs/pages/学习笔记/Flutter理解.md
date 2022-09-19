# Flutter理解

---

## Getx

Get有两个不同的状态管理器：简单的状态管理器(GetBuilder)和响应式状态管理器(GetX)

```dart
// 让变量 observable
var name = "Jonatas Borges".obs;
// 
Obx(()=>Text("${controller.name}"))

```

## StatelessWidget vs StatefulWidget

StatelessWidget

```dart
class stl extends StatelessWidget {
  const stl({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
```

```dart
class stful extends StatefulWidget {
  const stful({Key? key}) : super(key: key);

  @override
  State<stful> createState() => _stfulState();
}

class _stfulState extends State<stful> {
  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
```

## StatefulWidget原理

* stateless是非动态的，它不依赖于除了传入数据以外的任何其他数据，这意味着改变其显示的唯一方式，就是改变传入其构造函数的参数。

```dart
State<stful> createState() => _stfulState();
```

* 这个被重写的方法被用来给我们的widget创建state，image部件以动态方式运行——监听图片引用的变化，一旦发生变化立马更新它的state。因而，它自己管理自己的state，而不是依赖于父类widget来做这件事。
* StatelessWidget 是无状态组件，状态不可变的 widget；StatefulWidget 是有状态组件，持有的状态可能在 widget 生命周期改变

## Widget、Element及RenderObject关系

* Widget实际上就是Element的配置数据，Widget树实际上是一个配置树，而真正的UI渲染树是由Elment构成，Widget只是描述显示元素的一个配置数据，真正代表屏幕上显示元素的类是Element
* 一个Widget对象可以对应多个Element对象(相同的widget可以同时存在)
* UI树由一个个独立的Element节点构成。组件最终的Layout、渲染都是通过RenderObject来完成的，从创建到渲染的大致流程是：根据Widget生成Element，然后创建相应的RenderObject并关联到Element.renderObject属性上，最后再通过RenderObject来完成布局排列和绘制
* 我们可以认为Flutter的UI系统包含三棵树：Widget树、Element树、渲染树。他们的依赖关系是：Element树根据Widget树生成，而渲染树又依赖于Element树。

![https://g.lingman.tech/app/lmapp/dev/uploadfiles/20220417/5B7bmbxcbZHRAnip86KAwKMRhYPaFhjn.jpg](https://g.lingman.tech/app/lmapp/dev/uploadfiles/20220417/5B7bmbxcbZHRAnip86KAwKMRhYPaFhjn.jpg)

widget教你怎么渲染，是蓝图，大小，尺寸，颜色等。真正运行起来，State负责管理状态了。外观跟着widget走的。状态跟着State走的，widget都是immuateable，state在运行的过程中是可变的。
Flutter 的热重启。就是在改变颜色的时候（UI设计的时候），保持state。这样就能做到hot reload

![https://g.lingman.tech/app/lmapp/dev/uploadfiles/20220417/bdxmQ6YjFBArSKtZFF6Qrm3dfR8BcdS6.png](https://g.lingman.tech/app/lmapp/dev/uploadfiles/20220417/bdxmQ6YjFBArSKtZFF6Qrm3dfR8BcdS6.png)
