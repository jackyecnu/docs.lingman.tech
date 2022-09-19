# MongoDB笔记

## 插入文档

```javascript
//COLLECTION_NAME为集合名
db.COLLECTION_NAME.insert(document)
db.COLLECTION_NAME.insertOne(document)
db.COLLECTION_NAME.insertMany(document)
```

#### 实例

```javascript
//插入单条数据
db.test.insertOne({name:'唐三藏',age:24,gender:'male'})
//插入多条数据
db.test.insertMany([
    {name:'唐三藏',age:24,gender:'male'},
    {name:'孙悟空',age:24,gender:'male'},
    {name:'猪八戒',age:19,gender:'male'},
    {name:'白龙马',age:12,gender:'male'},
    {name:'沙和尚',age:40,gender:'male'}
])
```

***

## 查询文档

```javascript
db.collection.find(query, projection)
//query ：可选，使用查询操作符指定查询条件
//projection ：可选，使用投影操作符指定返回的键。
```

#### 实例

```javascript
db.test.find({},{name:1,_id:0}) //查找全部，仅返回name
db.test.find({name:"唐三藏",age:24}) //query可以包含多个条件
```

#### 其他实例

```javascript
db.test.find({$or:[{name:'唐三藏'},{age:40}]}) //$or可以在两个条件查询
db.test.find({age:{$type:'string'}}) //查询age的值为字符串的文档
db.test.find({},{name:1,_id:0}).sort({age:-1}) //仅查找姓名且按照年龄降序排序（1为升序）
```

##### 查找某个范围

```javascript
db.test.find().limit(2) //限定查询前两个文档
db.test.find().skip(2) //查询前两个之外的全部属性
db.test.find().limit(2),skip(2) //查询前两个之外后的两个文档
db.test.find({age:{$gte:10,$lte:30}}) //查询age大于10小于30
```

##### 综合以上实例查找特定的文档

```javascript
db.test.find({age:{$gte:10,$lte:30}},{name:1,_id:0}).sort({age:1}).skip(1).limit(3)
//查找年龄大于十小于三十，并按年龄升序排序后，越过第一个文档后的两个文档，仅显示姓名
```

***

## 更新文档

```javascript
db.collection.updateOne(query,update) //向指定集合更新单个文档
db.collection.updateMany(query,update) //向指定集合更新多个文档
//query:查找要修改的文档,update:更新的数据
```

#### 实例

```javascript
db.test.updateOne({name:"唐三藏"},{$set:{age:40}}) //更该某个文档的年龄属性
db.test.updateMany({age:{$gte:10}},{$set:{gender:'female'}}) //更改多个文档的某一属性
```

#### 其他实例

```javascript
db.test.updateOne({name:"唐三藏"},{$set:{age:40}},{upsert:true}) //数据不存在时插入
db.test.updateOne({name:'孙悟空'}, {$setOnInsert: {age:40}}) //数据存在时不进行操作
```

---

## 删除文档

```javascript
db.collection.deleteMany({}) //删除该集合全部文档
db.collection.deleteMany({gender:'male'}) //删除gender属性为male的全部文档
db.collection.deleteOne({gender:'male'}) //删除gender属性为male的一个文档
```

---
## 条件操作符
|含义|符号|
|----|----|
|>大于|$gt|
|>=大于等于|$gte|
|<小于|$lt|
|<=小于等于|$lte|
---

## MongoDB聚合

```javascript
db.collection.aggregate(AGGREGATE_OPERATION)
//常用于处理数据（求和，求平均值等）
```

#### 实例

```javascript
db.test.aggregate([{$group : {_id : "$gender", num : {$sum : "$age"}}}])
//按照gender属性分组，求不同组年龄的和
```

|表达式|描述|
|----|----|
|$sum|计算总和|
|$avg|计算平均值|
|$min|获取最小值|
|$max|获取最大值|
---
