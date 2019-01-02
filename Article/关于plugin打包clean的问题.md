### 问题描述

    每次部署的时候都会删除文件然后再加载，这个时候就会导致如果有用户在访问的时候就会无法访问。

### 问题解决

    如何解决这个问题呢：
    
    1.确保打包完成之前文件不会删除；
    
    2.打包完成必须能让静态文件能在服务器上被访问；

    以下方案：

    1.首先打包文件到 dist_temp 文件夹，修改 webpack 出口（output）文件到 dist_temp
   
   
    2.然后使用rm指令删除 dist 文件夹，并且 rename dist_temp 为 dist文件夹

    ```
      rm -fr ./dist 
      mv -f dist_temp dist
    ```

    3.为了npm run build 之后就执行,需要在package.json中修改

    ```
      "scripts": {
        "dev": "webpack --config webpack.config.build.js --color &&  rm -fr ./dist  && mv -f dist_temp dist",
      },
    ```
    
