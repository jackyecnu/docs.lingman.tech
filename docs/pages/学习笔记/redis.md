# Redis

## Redis = Remote Dictionary Server

## 数据类型

1. 字符串
string 类型是 Redis 最基本的数据类型，string 类型的值最大能存储 512MB

   ```shell
   SET runoob "菜鸟教程"
   ```

2. Hash(哈希)
Redis hash 是一个 string 类型的 field 和 value 的映射表，hash 特别适合用于存储对象。

   ```shell
   HMSET runoob field1 "Hello" field2 "World"
   ```

3. List(列表)
Redis 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）。

   ```shell
   lpush runoob redis
   lpush runoob redis1
   ```

4. Set(集合)
Redis 的 Set 是 string 类型的无序集合。

   ```shell
   sadd runoob redis
   sadd runoob mongodb
   ```

5. zset(有序集合)
redis正是通过分数来为集合中的成员进行从小到大的排序。

zset的成员是唯一的,但分数(score)却可以重复。

   ```shell
   zadd runoob 0 redis
   zadd runoob 0 rabbitmq
   ```
