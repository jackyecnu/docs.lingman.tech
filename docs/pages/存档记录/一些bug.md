# 一些bug解决方案
author: John Doe
date: 2022-01-15 18:01:32
tags:
---
.net core 访问gdi+ image

```

.net Core允许在 Centos7 上，使用 System.Draw.Common类库时，报以下错误：

 "Class":"System.TypeInitializationException",
        "Message":"Unable to load DLL 'libgdiplus': The specified module could not be found.",
        "StackTrace":" at System.Drawing.SafeNativeMethods.Gdip.GdipCreateBitmapFromFile(String filename, IntPtr& bitmap)
at System.Drawing.Bitmap..ctor(String filename, Boolean useIcm)
at Ims.Dsl.Utility.ImageUtils.GetResolution(String filePath)
at Ims.Dsl.Persistence.Service.Impl.TemplateService.CreateUploadImage(IList`1 files, String createIp)
at Ims.Dsl.RestApi.Controllers.v1.TemplateController.UploadImage()
解决方案如下：

yum install autoconf automake libtool
yum install freetype-devel fontconfig libXft-devel
yum install libjpeg-turbo-devel libpng-devel giflib-devel libtiff-devel libexif-devel
yum install glib2-devel cairo-devel
git clone https://github.com/mono/libgdiplus
cd libgdiplus
./autogen.sh
make
make install
创建符号链接：

ln -s /usr/local/lib/libgdiplus.so /usr/lib64/libgdiplus.so
ln -s /usr/local/lib/libgdiplus.so /usr/libgdiplus.so
 
```



## Gradle sync failed: Sync failed: reason unknown
设置JAVA-HOME JDK_HOME和CLASS_PATH三个环境变量, 都指向Studio默认的jdk（默认jdk11）。重新同步工程，上面的提示不再复现。但是，还是同步失败：Gradle sync failed: Sync failed: reason unknown

只能通过查看studio log了。log路径：C:\Users\（真实用户名）\AppData\Local\Google\AndroidStudio2020.3\log\idea.log

可以看到：

2021-08-31 18:15:41,203 [2785643]   WARN - ea.gradle.project.sync.SdkSync - Module: 'XXXX' platform 'android-30' not found. 

以自己实际编译的日志为准。这边出现问题的原因从日志看，是缺少platform 'android-30'，从setting->sdk 中下载platform 'android-30'，