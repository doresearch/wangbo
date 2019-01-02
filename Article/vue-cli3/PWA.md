### 什么是PWA?

PWA， Progressive Web App，是提升Web App的体验的一种新方法，能给用户原生应用的体验。

### PWA中的一些技术

PWA本身其实是一个概念集合，它不是指某一项技术，而是通过一系列的Web技术与Web标准来优化Web App的安全、性能和体验。包括：

* Web App Manifest
* Service Worker
* Cache API缓存
* Push & Notification 推送和通知
* Background Sync 后台同步
* 响应式设计


### Web App Manifest

Manifest是一个JSON格式的文件，你可以把它理解为一个指定了Web App桌面图标、名称、开屏图标、运行模式等一系列资源的一个清单。

manifest 的目的是将Web应用程序安装到设备的主屏幕，为用户提供更快的访问和更丰富的体验。 —— MDN
 
对于 Web App 来说，有一些重要的特性：

* Web App可以被添加到桌面并有它自己的应用图标；
* 同时，从桌面开启时，回合原生App一样有它自己的"开屏图"
* 更进一步，这个Web App在的样子几乎和原生应用一样--没有浏览器的地址栏、工具条