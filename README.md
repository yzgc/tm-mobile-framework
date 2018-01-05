# tm-mobile-framework

> A Vue.js project

## 当前基本环境
* win7 64位
* node v6.3.1
* npm  v3.10.3
* vue  v2.5.2

## vue-cli运行配置
```bash
? Project name tm-mobile-framework
? Project description A Vue.js project
? Author yzgc <18317894461@163.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Setup unit tests with Karma + Mocha? Yes
? Setup e2e tests with Nightwatch? Yes
```

## 相关方案选择
* 布局方案：使用网易H5适配方案（直接处理根目录，控制大小）(完成)
* px方案：使用postcss-pxtorem (完成)
* css方案：使用sass , css使用BEM命名规则（http://blog.csdn.net/chenmoquan/article/details/17095465）(完成)
* ajax方案：使用vue官方推荐的axios，多做一层封装，方便未来直接替换其他库（基本完成）
* 代码风格统一方案：启用严格eslint Standard模式（完成）
* 自行选择是否使用vuex状态管理方案(本项目引用，且存在demo)
* 文件命名方案：驼峰式

## 其他方案说明
* 使用fastclick.js库，提升移动端点击事件效率 (完成)
* 文件夹深度最多不要超过4层
* 区分组件的目录，基础的组件:tm-mobile-framework/src/components，和扩展组件:tm-mobile-framework/src/pages/components
* 使用360浏览器极速模式（完成）
* 强制使用最高版本ie（完成）
* 使用bluebird插件 ，兼容老式浏览器 || 可以用es6-promise代替(完成)
* 不在index.html中直接引入第三方脚本，尽量使用npm安装依赖
* 使用第三方 mint-ui，按需加载引入（http://elemefe.github.io/mint-ui/#/!/）(完成)
* 使用字体图标，可自行在icon库中下载，也可请设计师设计svg转换(https://icomoon.io/app/#/select)(完成)
* 关于基础组建，如弹窗等可参考vux编写[vux](https://github.com/airyland/vux/blob/v2/src/plugins/confirm/index.js)
* 使用WebStorageCache库，丰富，扩展localStorage和sessionStorage的方法.[WebStorageCache](https://github.com/WQTeam/web-storage-cache)（完成）

## 项目要求
* 作为一个基础的骨架，为移动端单页面应用
* 需要本地模拟数据，使用mock.js（完成）
* 能切换环境，比如本地/测试/正式等（完成）
* Android 4+
* Ios 7+
* 微信内置浏览器
* QQ内置浏览器
* 手机自带浏览器
* 桌面主流浏览器 UC, QQ

## 项目目录结构介绍（持续添加中）
```md
  |-- build webpack的配置
  |-- config 自定义配置
  |-- doc 存放项目中需要说明的文档，如css规范，注意事项等
  |-- server 存放mock.js的配置文件和模块假数据
    |-- mocks 按模块划分的文件夹
        |-- 例如 首页模块
    |-- sccess.log 请求日志
    |-- mock配置文件
  |-- src 项目开发目录，我们的代码从这里开始
      |-- assets 静态资源文件夹（css库等）
      |-- components 基础组建文件夹
      |-- config 项目中，我们自己的一些配置
          |-- apiConfig  请求环境和地址的配置
      |-- http ajax的一些配置
      |-- model 可以是按模块/功能区分的ajax方法集合
          |-- home.js 例如，首页功能部分的ajax方法
      |-- pages 根据路由（功能）划分的页面组件
      |-- router 根据模块（功能）的路由配置文件
      |-- store vuex相关文件夹，如不使用，可以无视
      |-- util 工具函数文件夹
      |-- App.vue 根组件
      |-- main.js 全局入口文件
  |-- static 静态资源文件夹
      |-- css 第三方样式库/公共样式
      |-- icons 字体图标库
  |-- test 单元测试文件夹
  |-- .babelrc babel的配置文件
  |-- .edutorconfig 编辑器风格配置文件
  |-- .eslintignore 这是排除eslint检测文件
  |-- .eslintrc.js eslint的配置文件
  |-- .gitignore git排除控制文件
  |-- .postcssrc.js postcss配置文件，主要针对css兼容
  |-- package.json 项目基本信息，以及依赖
  |-- readme.md (就是本文件)项目基本情况介绍
  |-- index.html 单页面应用的唯一html
```


## 文档资源
- [vux2文档](https://vux.li/#/)
- [vue2文档](https://cn.vuejs.org/v2/guide/)
- [vue-router2文档](https://router.vuejs.org/zh-cn/)
- [sass文档](http://sass.bootcss.com)
- [eslint配置简单介绍的文章](https://yq.aliyun.com/articles/66559)
- [autoprefixer配置](https://github.com/postcss/autoprefixer)
- [axios用法](https://github.com/mzabriskie/axios)
- [es6语法](http://es6.ruanyifeng.com/)


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8060
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 日志系统.
2017/10/17初始化项目
