#[演示webpack作用](https://www.webpackjs.com/guides/getting-started/)
#起步流程和命令记录
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
在浏览器可以看到html的效果（html没有meta设置字符集会乱码）。
##使用webpack.config.js配置文件
在配置号webpack.config.js配置文件后执行```npx webpack --config webpack.config.js```
```
D:\devDoc\webWork\webpack-demo>npx webpack --config webpack.config.js
Hash: 31b1c1a633c636cc5864
Version: webpack 4.36.1
Time: 476ms
Built at: 2019-07-22 11:44:16 PM
    Asset     Size  Chunks             Chunk Names
bundle.js  157 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[2] ./src/index.js 349 bytes {0} [built]
[3] (webpack)/buildin/global.js 472 bytes {0} [built]
[4] (webpack)/buildin/module.js 497 bytes {0} [built]
    + 2 hidden modules

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defa
ults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

D:\devDoc\webWork\webpack-demo>
```
执行完成后能看到webpack配置文件里面的内容生效，生成了一个bundle.js。
##用npm通用命令来调用webpack编译
在package.json配置下的script下添加参数"build": "webpack"，然后执行
```npm run build```来调用执行webpack的打包编译。
```
D:\devDoc\webWork\webpack-demo>npm run build

> webpack-demo@1.0.0 build D:\devDoc\webWork\webpack-demo
> webpack

Hash: 31b1c1a633c636cc5864
Version: webpack 4.36.1
Time: 352ms
Built at: 2019-07-22 11:50:07 PM
    Asset     Size  Chunks             Chunk Names
bundle.js  157 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[2] ./src/index.js 349 bytes {0} [built]
[3] (webpack)/buildin/global.js 472 bytes {0} [built]
[4] (webpack)/buildin/module.js 497 bytes {0} [built]
    + 2 hidden modules

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defa
ults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

D:\devDoc\webWork\webpack-demo>
```
#管理资源
##加载css
执行```npm install --save-dev style-loader css-loader```给配置文件添加样式加载器。
```
D:\devDoc\webWork\webpack-demo>npm install --save-dev style-loader css-loader
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ style-loader@0.23.1
+ css-loader@3.1.0
added 15 packages from 47 contributors and audited 5429 packages in 12.081s
found 0 vulnerabilities


D:\devDoc\webWork\webpack-demo>
```
在修改style.css和index.js后执行```npm run build```
```
D:\devDoc\webWork\webpack-demo>npm run build

> webpack-demo@1.0.0 build D:\devDoc\webWork\webpack-demo
> webpack

Hash: 50a8c489d7786ec3250c
Version: webpack 4.36.1
Time: 4827ms
Built at: 2019-07-23 8:36:39 AM
    Asset     Size  Chunks             Chunk Names
bundle.js  163 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[2] ./src/index.js 407 bytes {0} [built]
[3] (webpack)/buildin/global.js 472 bytes {0} [built]
[4] (webpack)/buildin/module.js 497 bytes {0} [built]
[5] ./src/style.css 1.06 KiB {0} [built]
[6] ./node_modules/css-loader/dist/cjs.js!./src/style.css 166 bytes {0} [built]
    + 5 hidden modules

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each enviro
nment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

D:\devDoc\webWork\webpack-demo>
```
打开页面，看到js给页面加的div的Hellowebpack字体变为了红色，样式管理到位。



