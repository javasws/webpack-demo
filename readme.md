#[演示webpack作用](https://www.webpackjs.com/guides/getting-started/)
#主要命令执行记录
##初始化项目并配置
先在webStorm下执行命令创建项目、初始化并添加依赖包
```
mkdir webpack-demo && cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```
给本项目添加库
```npm install --save lodash```
在安装一个要打包到生产环境的安装包时，你应该使用 npm install --save，如果你在安装一个用于开发环境的安装包（例如，linter, 测试库等），你应该使用 npm install --save-dev。请在 npm 文档 中查找更多信息。
##演示打包
在创建index.html和index.js后，测试页面是成功的。
在给项目添加lodash库后，修改html、js和配置json。
执行```npx webpack```后，在控制台看到
```Hash: 3d27043b18f9011db131
   Version: webpack 4.36.1
   Time: 247ms
   Built at: 2019-07-22 4:19:16 PM
     Asset      Size  Chunks             Chunk Names
   main.js  70.5 KiB       0  [emitted]  main
   Entrypoint main = main.js
   [1] ./src/index.js 229 bytes {0} [built]
   [2] (webpack)/buildin/global.js 472 bytes {0} [built]
   [3] (webpack)/buildin/module.js 497 bytes {0} [built]
       + 1 hidden module
   
   WARNING in configuration
   The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
   You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```
这个时候刷新项目目录，可以看到打包出的在html同级目录的main.js文件。
在浏览器可以看到html的效果。


