Q: Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option to remove this warning.

A: 一般是认为只要设置 experimentalDecorators: true 就可以了，但是如果你将tsconfig.json放在文件夹最外层，这样才可以让编译器不报错。