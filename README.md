![](https://user-gold-cdn.xitu.io/2019/1/26/16889da2c2c4c0ac?imageView2/1/w/1304/h/734/q/85/interlace/1)
A simple scaffold based on Next.js for quick use with ant-design, redux, redux-saga, fetch and pm2.

English | [简体中文](./README_zh_CN.md)

[![Deploy Status](https://circleci.com/gh/zeit/now-desktop.svg?style=shield)](https://next-antd-scaffold.luffyzh.now.sh/)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/zeit)

## 🏠 HomePage

[Next-Antd-Scaffold-Demo](https://next-antd-scaffold.luffyzh.now.sh/)

## 📁 Directory

```
——————
  | -- assets                // ant-design global less var
  | -- components            // React UI component
  | -- constants             // constant directory
      | -- ActionsTypes.js   // save all action type
      | -- ApiUrlForBE.js    // save all apiUrl
      | -- ...
  | -- containers            // React container component
  | -- core                  // mehtod dirctory
      | -- util.js           // project method
      | -- nextFetch.js      // packing unfetch for easy use
  | -- middlewares           // middlewares
      | -- client            // client middlewares, deal redux action
      | -- server            // server middlewares, deal node event
  | -- pages                 // Next.js routes
  | -- redux                 // redux directory
      | -- actions           // deal all projectaction
      | -- reducers          // deal all project reducer
      | -- sagas             // sace all project saga
      | -- store.js          // the store of project
  | -- static                // save static source directory
  | -- .babelrc              // babel config file
  | -- .eslintrc             // eslint config file
  | -- .gitignore
  | -- next.config.js        // Next.js config file
  | -- package.json
  | -- server.js             // server file
  | -- pm2.config.js         // pm2 deploy config file
  | ...                      // other files
```

## 🔨 Usage

#### development

```
 1. git clone https://github.com/luffyZh/next-antd-scafflod.git
 2. yarn install
 3. yarn start
```

> The application is ready on http://localhost:3006

#### production

```
 1. yarn build
 2. yarn prod
```

> The application is ready on http://localhost:5999

## ✨ Features

- React
- Next.js
- Redux
- Redux-Saga
- Ant-Design
- Fetch

## 🙊 How to depoly application by pm2

```bash
# 1. install pm2
$ npm install -g pm2

# 2. build project
$ yarn build

# 3. pm2 deploy project
$ pm2 start pm2.config.js
```

## Deploy By now

<a target='__blank' href='https://zeit.co/now'><img src='https://avatars3.githubusercontent.com/in/8329?s=60&u=35934eb25f938206da3c68530ac900e2717abbc3&v=4' /></a>

## 🤔️ More Questions

- How to use cssModules in this scaffold?

- How to listen for routing changes?

- The solution of `min-css-extract-plugin` warning in the console!

  ```
  chunk commons [mini-css-extract-plugin]
  Conflicting order between:
  ...
  ```

- How to polyfill IE10/IE9 in this scaffold?

Please check the [Faq documentation](./docs/FAQ.md)
