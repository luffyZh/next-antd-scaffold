![](https://user-gold-cdn.xitu.io/2019/1/26/16889da2c2c4c0ac?imageView2/1/w/1304/h/734/q/85/interlace/1)
一个基于 Next.js 的简易脚手架，内含`ant-design`、`redux`、`redux-saga`、`fetch`以及`pm2`，从开发到部署一站式服务。

[![Deploy Status](https://circleci.com/gh/zeit/now-desktop.svg?style=shield)](https://next-antd-scaffold.luffyzh.now.sh/)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/zeit)

## 🏠 主页

[Next-Antd-Scaffold-Demo](https://next-antd-scaffold.luffyzh.now.sh/)

> 如果你更喜欢使用 next-v8.1.0 的版本. 地址在这里 [next-antd-scaffold_version8](https://github.com/luffyZh/next-antd-scaffold/tree/v1.0).

## 🌍 Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Chrome 39.0+ ✔                                                                           | Edge 12.0+ ✔                                                                       | Firefox 30.0+ ✔                                                                             | IE 11+ ✔                                                                                                                     | Safari 9.1+ ✔                                                                            |

## 📁 目录结构

```
——————
  | -- assets                    // 样式文件的设置，包括 antd 的主题覆盖
  | -- docs                      // 文档目录
  | -- public                    // 静态资源目录
      | -- static                // 兼容小于 version9 版本的静态资源目录
      | -- favicon.ico           // 一些存放于根路径的资源文件，比如seo文件
      | -- ...
  | -- src                       // source 目录，符合大众习惯
      | -- components            // React UI 组件
      | -- constants             // 系统常量文件夹
          | -- ActionsTypes.js   // 存储 redux 所有的 action 常量
          | -- ApiUrlForBE.js    // 存储所有的后端 API 常量
          | -- ...
      | -- containers            // React 状态组件
      | -- core                  // 核心方法目录
          | -- util.js           // 系统的一些公共方法
          | -- nextFetch.js      // 为了方便使用封装了 unfetch
      | -- middlewares           // 中间件目录
          | -- client            // 客户端中间件，处理 redux 的 actions
          | -- server            // 服务端中间件，处理 node 事件模块
      | -- pages                 // Next.js 路由目录
      | -- redux                 // redux 目录
          | -- actions           // 处理所有的 actions
          | -- reducers          // 处理所有的 reducers
          | -- sagas             // 处理所有的 sagas
          | -- store.js          // 整个系统的 store
  | -- .babelrc                  // babel 配置文件
  | -- .eslintrc                 // eslint 配置文件
  | -- .gitignore
  | -- next.config.js            // Next.js 配置文件
  | -- package.json
  | -- server.js                 // server文件
  | -- pm2.config.js             // pm2 部署文件
  | ...                          // 其他文件
```

## 📖 如何使用

#### 开发环境

```
 1. git clone https://github.com/luffyZh/next-antd-scafflod.git
 2. yarn install
 3. yarn start
```

> 服务运行在 http://localhost:3006

#### 生产环境

```
 1. yarn build
 2. yarn prod
```

> 服务运行在 http://localhost:5999

## ✨ 特性

- React
- Next.js
- Redux
- Redux-Saga
- Ant-Design
- Fetch

## 🔨 如何通过 pm2 部署项目

```bash
# 1. install pm2
$ npm install -g pm2

# 2. build project
$ yarn build

# 3. pm2 deploy project
$ pm2 start pm2.config.js
```

## 🪂 通过 now 来进行部署

<a target='__blank' href='https://zeit.co/now'><img src='https://avatars3.githubusercontent.com/in/8329?s=60&u=35934eb25f938206da3c68530ac900e2717abbc3&v=4' /></a>

## 💐 更多示例

- 全栈 Demo —— [Branch_backend](https://github.com/luffyZh/next-antd-scaffold/tree/backend)
- 授权验证 Demo —— [Branch_auth](https://github.com/luffyZh/next-antd-scaffold/tree/auth)
- Catch 服务端错误 Demo —— [Branch_server-error](https://github.com/luffyZh/next-antd-scaffold/tree/server-error)

## 🤔️ 更多相关问题

- 如何在脚手架里使用 cssModule?

- 如何监听路由的变化?

- 关于 `min-css-extract-plugin` 警告的解决办法!

- 这个脚手架怎么兼容 IE9/10?

- ant-design 刷新页面时样式闪动的解决办法！

- ant-design 在开发时页面样式错乱问题的解决办法！

- 如何加速`build`的构建过程？

...

更多问题请查看 [Faq 文档](./docs/FAQ.md)
