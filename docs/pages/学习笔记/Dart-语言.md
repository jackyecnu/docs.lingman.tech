# Dart 语言

---

## 编译时常量和运行时常量

```
readonly（final）为运行时常量，程序运行时进行赋值，赋值完成后便无法更改，因此也有人称其为只读变量。
const为编译时常量，程序编译时将对常量值进行解析，并将所有常量引用替换为相应值。
```

## 类

```
* 使用关键字 class 声明一个类
* 使用关键字 new 创建一个对象，new可省略
* 所有对象都继承于 Object 类
```

## 属性与方法

```
* 属性默认会生成 getter 和 setter 方法
* 使用 final 声明的属性只有 getter 方法
* 属性和方法通过 . 访问
* 方法不能被重载
```

## 类及成员可见性

```
* Dart中的可见性以 library(库) 为单位
* 默认情况下，每一个Dart文件就是一个库
* 使用 _ 表示库的私有性 （其它文件中是不能访问的）
* 使用 import 导入库
```

## 计算属性

顾名思义，计算属性的值是通过计算而来的，本身不存在储存值

```dart
var rect = Rectangle();
rect.height = 20;
rect.width = 10;
print(rect.area);
             
class Rectangle {
    num width, height;
    num get area => width * height;
    // 或者可以写成
    num get area {
        return width * height;
    }            
}
```

计算属性赋值，其实是通过计算转换到其它实例变量  

```dart
var rect = Rectangle();
rect.area = 200;
print(rect.width);
             
class Rectangle {
    num width, height;
    num get area => width * height;
    // 或者可以写成
    num get area {
        return width * height;
    }
    set area(value) {
        width = value / 20;
    }        
}
```

## 构造方法

如果没有自定义构造方法，则会有个默认的构造方法

```dart
// 类 Person，默认构造方法为
Person() {}
```

如果存在自定义构造方法，则默认构造方法无效

```dart
var person = Person("Tow", 20);
var person1 = Person("Tow", 20, "One");
        
class Person {
    String name;
    int age;
            
    final String gender;
            
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    // 或者写成 语法糖
    Person(this.name, this.age);
            
    // 对 final 属性赋值
    // 错误赋值
    Person(String name, int age, String gender) {
        this.name = name;
        this.age = age;
        this.gender = gender; // 会报错
    }
    // 但可以使用语法糖来对 final 属性赋值, 因为他是执行构造方法前对 final 属性赋值
    Person(this.name, this.age, this.gender);
}
```

* 构造方法不能重载
* 命名构造方法
  * 使用命名构造方法，可以实现多个构造方法
  * 使用 类名.方法 的形式实现

```dart
var person = Person("Tow", 20);
var person1 = Person("Tow", 20, "One");
var person2 = Person.withName("Tow");
var person3 = Person.withAge(20);
        
class Person {
    String name;
    int age;        
    final String gender;
            
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    // 或者写成 语法糖
    Person(this.name, this.age);
            
    Person.withName(String name) {
        this.name = name;
    }
    // 或者写成 语法糖
    Person.withName(this.name);
            
    Person.withAge(this.age);
}
```

## 常量构造方法

* 如果类是不可变状态，可以把对象定义为编译时常量
* 使用 const 声明构造方法，并且所有变量都为 final
* 使用 const 声明对象，可以省略

```dart
const person = const Person("Tow", 20);
// 或者可以写成
const person = Person("Tow", 20);

class Person {
    final String name;
    final int age;        
    final String gender;
            
    const Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    // 或者写成 语法糖
    const Person(this.name, this.age);
}
```

## 工厂构造方法

* 工厂构造方法类似于设计模式中的工厂模式
* 在构造方法前添加关键字 factory 实现一个工厂构造方法
* 在工厂构造方法中可返回对象

```dart
class Logger {
    final String name;
    static final Map<String, Logger> _cache = <String, Logger>();
    
    factory Logger(String name) {
        if (_cache.containsKey(name)) {
            return _cache[name];
        } else {
            final logger = logger._interanl(name);
            _cache[name] = logger;
            return logger;
        }
    }

    Logger._internal(this.name);

    void log(String msg) {
        print(msg);
    }
}
```

## 初始化列表

* 初始化列表会在构造方法体执行之前执行
* 使用逗号分隔初始化表达式
* 初始化列表常用于设置 final 变量的值

```dart
class Person {
    String name;
    int age;        
    final String gender;
    
    Person(this.name, this.age, this.gender);
    Person.withMap(Map map) : name = map["name"], gender = map["gender"] {
      this.age = map["age"];
    }
}
```

## 静态成员

* 使用 static 关键字来实现类级别的变量和函数
* 静态成员不能访问非静态成员，非静态成员可以访问静态成员
* 类中的常量需要使用 static const 声明

```
var page = Page();
Page.scrollDown();

class Page {
  static const int maxPage = 10;
  static int currentPage = 1;

  // 下滑
  static void scrollDown() {
      currentPage = 1;
      print("scrollDown...");
  }

  // 上滑
  void scrollUp() {
      currentPage++;
      print("scrollUp...");
  }
}
```

## 对象操作符

* 条件成员访问：?.
* 类型转换：as
* 是否指定类型：is ，is!
* 级联操作：..

```
// 条件成员访问
Person person = new Person();
person?.name = "Tow";
person?.work();

// 类型转换
var person1;
person1 = "";
person1 = new Person();
(person1 as Person).work();

var person2;
person2 = new Person();
// 是 Person 类
if (person2 is Person) {
    person2.work();
}

var person3;
person3 = new Person();
// 不是 Person 类
if (person3 is! Person) {
    person3.work();
}

// 级联操作
var person4 = new Person();
person4..name = "Tow"
       ..age = 20
       ..work();
// 或者写成
new Person()..name = "Tow"
       ..age = 20
       ..work();

class Person {
    String name;
    int age;
    
    void work() {
        print("work$name,$age");
    }
}
```

## 对象 call 方法

+ 如果类实现了 call() 方法，则该类的对象可以作为方法使用
* call() 方法中的返回值、参数可以随意写

```dart
var person = new Person();
print(person("Test",30));
// 打印结果：Name is Test,Age is 30

class Person {
    String name;
    int age;
    
    String call(String name, int age) {
        return "Name is $name,Age is $age";
    }
}
```

## 继承

* 使用关键字 extends 继承一个类
* 子类会继承父类可见的属性和方法，不会继承构造方法
* 子类能够复写父类的方法，getter 和 setter
* 单继承，多态性

```dart
// 父类
class Person {
  String name;
  int age;
  String _birthday;

  bool get isAdult => age > 18;

  void run() {
      print("Person run...");
  }

  // 这个方法是继承 Object 类，Dart语言中类未指定父类的，默认都是继承 Object类
  @override
  String toString() {
      return "Name is $name,Age is $age";
  }
}

// 继承于 Person 类的子类
class Student extends Person {
  void study() {
    print("Student study...");
  }
  
  // 复写父类的计算属性
  @override
  bool get isAdult => age > 15;

  // 复写父类的 run() 方法
  @override
  void run() {
    print("Student run...");
  }
}

void main() {
  var student = new Student();
  student.study();

  // 访问父类属性，但不能访问私有属性(如： _birthday属性)
  student.name = "Tow";
  student.age = 16;
  print(student.isAdult);

  // 访问父类方法
  student.run();
  
  // 多态
  // person 接收一个 Student 类实例，可访问 Person 类的方法属性，不可访问 Sutdent 类方法属性。
  Person person = new Student();
  // 通过对象操作符，判断是否 Student 类，条件满足则 if 里可以访问 study() 方法
  if (person is Student) {
    person.study();
  }

  // 会执行 Person 类中的 toString() 方法
  print(person);
}
```

## 继承中的构造方法

* 子类的构造方法默认会调用父类的无名无参构造方法
* 如果父类没有无名无参构造方法，则需要显示调用父类构造方法
* 在构造方法参数后使用 : 显示调用父类构造方法

```dart
// 父类
class Person {
  String name;

  // 无名无参构造方法，默认方法
  // Person() {
  //  // 可加入一些 code
  //  print("Person...");
  //}
  
  // 自定义构造
  Person(this.name);
  Person.withName(this.name);
}

// 子类
class Student extends Person {
  int age;

  // 必须实现父类构造方法来实现子类构造方法
  Student(String name) : super(name);
  // 或者写成
  Student(String name) : super.withName(name);
  // 或者写成
  Student.withAge(int age) : super(name);
}

void main() {
  var student = new Student("Tom");
  print(student.name);
}
```

## 构造方法执行顺序

* 父类的构造方法在子类构造方法体开始执行的位置调用
* 如果有初始化列表，初始化列表会在父类构造方法之前执行  

```dart
// 父类
class Person {
  String name;

  // 无名无参构造方法，默认方法
  // Person() {
  //  // 可加入一些 code
  //  print("Person...");
  //}
  
  // 自定义构造
  Person(this.name);
  Person.withName(this.name);
}

// 子类
class Student extends Person {
  int age;
  final String gender;

  // 必须实现父类构造方法来实现子类构造方法
  // 有初始化列表，初始化列表会在父类构造方法之前执行
  Student(String name, String g) : gender = g, super(name);
  // 错误书写
  Student(String name, String g) : super(name), gender = g;
}

void main() {
  var student = new Student("Tom", "Male");
  print(student.name);
}
```

## 抽象类

* 抽象类使用 abstract 表示，不能直接被实例化
* 抽象方法不用 abstract 修饰，无实现
* 抽象类可以没有抽象方法
* 有抽象方法的类一定得声明为抽象类

```
abstract class Person {
  // 无实现的抽象方法，子类必须实现方法
  void run();
  // 或者写成，子类可选实现方法
  void run() {}
}

// 子类继承抽象类
class Student extends Person {
  @override
  void run() {
    print("run...");
  }
}

void main() {
  var student = new Student();
  student.run();
}
```

## 接口

* 类和接口是统一的，类就是接口
* 每个类都隐式的定义了一个包含所有实例成员的接口
* 如果是复用已有类的实现，使用继承 extends
* 如果只是使用已有类的外在行为，使用接口 implements

```
// 接口代码演示
class Person {
  String name;
  int get age => 18;
  void run() {
    print("Person run...");
  }
}

class Student implements Person {
  // 重写实现
  @override
  String name;

  // 重写实现
  @override
  int get age => null;

  // 重写实现
  @override
  void run() {
    
  }
}

void main() {
  var student = new Student();
  student.run();
}
```

```
// 推荐抽象类方式，去对外接口定义
abstract class Person {
  void run();
}

class Student implements Person {
  @override
  void run() {
    print("Student run...");
  }
}

void main() {
  var student = new Student();
  student.run();
}
```

## Mixins

* Mixins 类似于多继承，是在多类继承中重用一个类代码的方式
* 作为Mixins的类不能有显示声明构造方法
* 作为Mixins的类只能继承自Object
* 使用关键字with连接一个或多个Mixin  

```
// Mixins 例子
void main() {
  var d = new D();
  // 打印 ``with``连接的最后一个 ``Mixin`` 类中的``a()``方法
  // 打印结果："C.a()..."
  d.a();
}

class A {
  void a() {
    print("A.a()...");
  }
}

class B {
  void a() {
    print("B.a()...");
  }

  void b() {
    print("B.b()...");
  }
}

class C {
  void a() {
    print("C.a()...");
  }

  void b() {
    print("C.b()...");
  }

  void c() {
    print("C.c()...");
  }
}

// B，C类是``Mixins``类，类中不能有显示声明构造方法，只能继承自``Object``
class D extends A with B,C {
  
}

```

```
// Mixins 例子
abstract class Engine {
  void work();
}

class OilEngine implements Engine {
  @override
  void work() {
    print("work with oil...");
  }
}

class ElectricEngine implements Engine {
  @override
  void work() {
    print("work with Electric...");
  }
}

class Tyre {
  String name;
  void run() {}
}

// 使用``Mixins``时，正常书写方法
class Car extends Tyre with ElectricEngine {
  String type;
}

// 使用``Mixins``时，可书写这种是简写方式，但``Car``、``Bus``类不能自定义属性方法
class Car = Tyre with ElectricEngine;
class Bus = Tyre with OilEngine;

```

## 操作符覆写

覆写操作符需要在类中定义

```
返回类型 operator 操作符 (参数1，参数2,...) {
实现体...
return 返回值
}
```

## Dart闭包

```dart
  Function(int a) fn() {
    var num = 1;
    return (int a) {
      num += a;
      print(num);
    };
  }

  var loadFn = fn();
  loadFn(1); //2
  loadFn(2); //4
  loadFn(4); //8
```

## 构造函数

Person(this.name, this.age);

## 类及成员

1. Dart中的可见性以library（库）为单位
2. 默认情况下，每一个Dart文件就是一个库
3. 使用_表示库的私有性
4. 使用import导入库

## final

类成员变量，只初始化一次。并且在构造函数里初始化
类属性默认生成set get方法。 final 只有get方法

## 匿名方法

(参数1，参数2) {
   方法体。。。
   return 返回值
}

## 函数签名作为变量

```
void aaa(int i, String sss(int i)) {}
```

## 可选函数

1.基于名称 printPerson(String name, { int age, String gender })  
2.基于位置 printPerson(String name, [ int age, String gender ])

## 赋值

??= 如果为空不赋值，如果不空就

## 字符串常用方法

```
contains() subString()
toLowerCase() toUpperCase()
startsWith() endsWith()
trim() trimLeft() trimRight()
indexOf() lastIndexOf()
split() replaceXXX()
```

## Dart的数据类型

数值型：Number，字符串 String, 布尔型Boolean  列表型 List ，键值对 Map
num 分 int 和 double

## json序列化和反序列化

jsonDecode() 和 jsonEncode() 只支持 JSON 和 Map/List 之间的转换。如果要支持 JSON 和 Model 类之间的转换，需要自己实现方法去解析。

```dart
import 'dart:convert' 
var mapData={"name":"张三","age":"20"}; 
var strData='{"name":"张三","age":"20"}'; 
print(json.encode(mapData)); // Map 转换成 Json 字符串 
print(json.decode(strData)); // Json 字符串转化成 Map 类型
```

Json2Dart网址
[https://javiercbk.github.io/json_to_dart/](https://javiercbk.github.io/json_to_dart/)
  
```dart
class User {
  final String name;
  final int age;
  User({this.name, this.age});
  User.fromJson(Map<String, dynamic> json) : name = json['name'],age = json['age'];
  Map<String, dynamic> toJson() => <String, dynamic>{
        'name': name,
        'age': age,
      };
}
```

```dart
class User {
  String? name;
  String? age;

  User({this.name, this.age});

  User.fromJson(Map<String, dynamic> json) {
    name = json['name'];
    age = json['age'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['name'] = this.name;
    data['age'] = this.age;
    return data;
  }
}
```
