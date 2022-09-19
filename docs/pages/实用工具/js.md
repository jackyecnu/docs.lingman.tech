# 实用的js代码

## 不停机发布的检测代码

```js
setInterval(() => {
  fetch("http://localhost:3000/test1").
    then(async g => {
      console.log(await g.text())
    }).catch(() => {
      console.log("错误")
    })
}, 10)
```

## div 自动加色彩

```js
var arrColor = ["d71345","7fb80e","426ab3","8552a1","f47920","009ad6","7fb80e","367459"];
[...document.getElementsByTagName("div")].forEach((item,index)=> item.style.backgroundColor = "#" + arrColor [index % arrColor.length]  )
```
