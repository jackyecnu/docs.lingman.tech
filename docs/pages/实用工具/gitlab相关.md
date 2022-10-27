# gitlab相关

## 更新网址

<https://packages.gitlab.com/gitlab/gitlab-ce/install#bash-rpm>

## docker 安装命令

```sh
sudo docker run --detach \
 --hostname gitlab.lingman.tech \
 --publish 8083:22 --publish 8082:80 --publish 8081:443 \
 --name gitlab \
 --restart always \
 --privileged=true \
 --volume /app/gitlab/config:/etc/gitlab \
 --volume /app/gitlab/logs:/var/log/gitlab \
 --volume /app/gitlab/data:/var/opt/gitlab \
gitlab/gitlab-ce:14.9.5-ce.0
```

## 查看日志

```shell
sudo docker logs -f gitlab
```

## 进入容器

```shell
sudo docker exec -it gitlab /bin/bash
```

## docker文件

|本地地址|容器地址|用法|
|--|--|--|
|$GITLAB_HOME/data|/var/opt/gitlab|For storing application data.|
|$GITLAB_HOME/logs| /var/log/gitlab| For storing logs.
|$GITLAB_HOME/config| /etc/gitlab| For storing the GitLab  

## 版本升级路径

<https://gitlab-com.gitlab.io/support/toolbox/upgrade-path/>
