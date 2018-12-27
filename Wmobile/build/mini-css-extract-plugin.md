### mini-css-extract-plugin
关于 mini-css-extract-plugin 的使用常见错误

1. window  is not defined ，之前使用了style-loader所以导致的结果，现在不应该使用style-loader
2. this[MODULE_TYPE] is not a function, 文件会默认打包出来但是需要一个输出一个路径所以plugin项目必须写


#### MiniCssExtractPlugin如何压缩

#### 关于js的tree shark的问题？
[https://segmentfault.com/a/1190000012794598#articleHeader7](https://segmentfault.com/a/1190000012794598#articleHeader7)
为什么有UglifyJSPlugin去清理多余的js的时候依然会出现引用全部的文件呢？

因为babel会将文件的import编译成为一个对象,使用的是Object.defineProperty

1. 类内部声明的方法，是不可枚举的，而通过原型链声明的方法是可以枚举的。这里可以参考下阮老师介绍Class 的基本语法
2. for...of的循环是通过遍历器(Iterator)迭代的，循环数组时并非是i++，然后通过下标寻值。这里依旧可以看下阮老师关于遍历器与for...of的介绍，以及一篇babel关于for...of编译的说明transform-es2015-for-of


使用[BabelMinifyWebpackPlugin](https://webpack.docschina.org/plugins/babel-minify-webpack-plugin/)来解决
