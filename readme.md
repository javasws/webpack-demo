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
##加载图片
执行```npm install --save-dev file-loader```给配置文件添加文件加载器。
```
D:\devDoc\webWork\webpack-demo>npm install --save-dev file-loader
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted
 {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ file-loader@4.1.0
added 2 packages from 2 contributors and audited 5443 packages in 8.581s
found 0 vulnerabilities
```
添加两个字体文件，然后在style.css里面添加
```
@font-face {
   font-family: 'MyFont';
   src: url("./fontawesome-webfont.woff2") format('woff2'),
        url("./fontawesome-webfont.woff") format('woff');
   font-weight: 600;
   font-style: normal;
}
```
接着给.hello添加 ```font-family: 'MyFont';``` 样式后执行```npm run build```,可以看到dist下增加了字体文件，打开页面按F12能看到加载了一个字体文件。
```
D:\devDoc\webWork\webpack-demo>npm run build
> webpack-demo@1.0.0 build D:\devDoc\webWork\webpack-demo
> webpack
Hash: 9063d924aeac15f37196
Version: webpack 4.36.1
Time: 523ms
Built at: 2019-08-16 9:58:57 AM
                                 Asset      Size  Chunks             Chunk Names
  68742aa1cbc6e5d22bf2ef94da525503.gif  97.7 KiB          [emitted]
  7d37c754f3369fff31843ef79cb5d835.png  33.2 KiB          [emitted]
af7ae505a9eed503f8b8e6982036873e.woff2  75.4 KiB          [emitted]
                             bundle.js   164 KiB       0  [emitted]  main
 fee66e712a8a08eef5805a46892932ad.woff  95.7 KiB          [emitted]
Entrypoint main = bundle.js
 [2] ./src/icon.png 82 bytes {0} [built]
 [3] ./src/index.js 529 bytes {0} [built]
 [4] (webpack)/buildin/global.js 472 bytes {0} [built]
 [5] (webpack)/buildin/module.js 497 bytes {0} [built]
 [6] ./src/style.css 1.06 KiB {0} [built]
 [7] ./node_modules/css-loader/dist/cjs.js!./src/style.css 783 bytes {0} [built]
[10] ./src/fontawesome-webfont.woff2 84 bytes {0} [built]
[11] ./src/fontawesome-webfont.woff 83 bytes {0} [built]
[12] ./src/avatar.gif 82 bytes {0} [built]
    + 6 hidden modules
```
### 加载数据
载入csv和xml库，用户处理数据文件。先执行```npm install --save-dev csv-loader xml-loader```，然后在webpack.config.js里面添加
```
{
   test: /\.(csv|tsv)$/,
   use: [
       'csv-loader'
   ]
},
{
   test: /\.xml$/,
   use: [
       'xml-loader'
   ]
}
```
,添加数据文件data.xml。好了，可以使用文件里面的数据了。
###回退处理
回退版本，清理文件。
