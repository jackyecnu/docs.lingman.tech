# flutter 开发规范

## 创建项目
- 用命令行创建项目
```bash
flutter create --org [包名]  -i swift -a java [项目名称]
```

- 修改android gradle配置
```text
## 切换为国内镜像
allprojects {
    repositories {
        maven{ url'https://maven.aliyun.com/nexus/content/groups/public/'} 
        ...
    }
}
```
