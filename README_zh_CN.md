![](https://user-gold-cdn.xitu.io/2019/1/26/16889da2c2c4c0ac?imageView2/1/w/1304/h/734/q/85/interlace/1)
一个基于 Next.js 的简易脚手架，内含`ant-design`、`redux`、`redux-saga`、`fetch`以及`pm2`，从开发到部署一站式服务。

[![Deploy Status](https://circleci.com/gh/zeit/now-desktop.svg?style=shield)](https://next-antd-scaffold.luffyzh.now.sh/)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/zeit)

## 🏠 主页

[Next-Antd-Scaffold-Demo](https://next-antd-scaffold.luffyzh.now.sh/)

## 📁 目录结构

```
——————
  | -- assets                // 样式文件的设置，包括antd的主题覆盖
  | -- components            // React UI 组件
  | -- constants             // 系统常量文件夹
      | -- ActionsTypes.js   // 存储redux所有的action常量
      | -- ApiUrlForBE.js    // 存储所有的后端api常量
      | -- ...
  | -- containers            // React 状态组件
  | -- core                  // 核心方法目录
      | -- util.js           // 系统的一些公共方法
      | -- nextFetch.js      // 为了方便使用封装了fetch
  | -- middlewares           // 中间件目录
      | -- client            // 客户端中间件，处理redux的action
      | -- server            // 服务端中间件，处理node模块
  | -- pages                 // Next.js 路由目录
  | -- redux                 // redux目录
      | -- actions           // 处理所有的action
      | -- reducers          // 处理所有的state
      | -- sagas             // 处理所有的saga
      | -- store.js          // 整个系统的store
  | -- static                // 存储所有的静态资源
  | -- .babelrc              // babel配置文件
  | -- .eslintrc             // eslint配置文件
  | -- .gitignore
  | -- next.config.js        // Next.js 配置文件
  | -- package.json
  | -- server.js             // server文件
  | -- pm2.config.js         // pm2 部署文件
  | ...                      // 其他文件
```

## 🔨 如何使用

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

## 🙊 如何通过 pm2 部署项目

```bash
# 1. install pm2
$ npm install -g pm2

# 2. build project
$ yarn build

# 3. pm2 deploy project
$ pm2 start pm2.config.js
```

## ▶️ 通过 now 来进行部署

<a target='__blank' href='https://zeit.co/now'><img src='https://avatars3.githubusercontent.com/in/8329?s=60&u=35934eb25f938206da3c68530ac900e2717abbc3&v=4' /></a>

## 🤔️ 更多相关问题

- 如何在脚手架里使用 cssModule?

- 如何监听路由的变化?

- 关于 `min-css-extract-plugin` 警告的解决办法!

  ```
  chunk commons [mini-css-extract-plugin]
  Conflicting order between:
  ...
  ```

- 这个脚手架怎么兼容 IE9/10?

更多问题请查看 [Faq 文档](./docs/FAQ.md)
