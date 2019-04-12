![](https://user-gold-cdn.xitu.io/2019/1/26/16889da2c2c4c0ac?imageView2/1/w/1304/h/734/q/85/interlace/1)
A simple scaffold based on Next.js for quick use with ant-design, redux, redux-saga, fetch and pm2.

[![macOS CI Status](https://circleci.com/gh/zeit/now-desktop.svg?style=shield)](https://next-antd-scaffold.luffyzh.now.sh/)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/zeit)

## Directory

```
——————
  | -- asserts               // ant-design global less var
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
  | -- redux
      | -- actions           // deal all projectaction
      | -- reducers          // deal all project reducer
      | -- sagas             // sace all project saga
      | -- store.js
  | -- static                // save static source directory
  | -- .babelrc
  | -- .eslintrc
  | -- .gitignore
  | -- next.config.js        // Next.js config file
  | -- package.json
  | -- server.js             // server file
  | -- pm2.config.js         // pm2 deploy config file
  | ...                      // other file
```

## Usage

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

## Features

- React
- Next.js
- Redux
- Redux-Saga
- Ant-Design
- Fetch

## How to depoly application by pm2

```bash
# 1. install pm2
$ npm install -g pm2

# 2. build project
$ yarn build

# 3. pm2 deploy project
$ pm2 start pm2.config.js
```

## Deploy By Now

<a target='__blank' href='https://zeit.co/now'>
  <svg width="94" height="20" viewBox="0 0 94 20" version="1.1"><g stroke="none" stroke-width="1" fill="#000" fill-rule="evenodd"><polygon points="11.0541053 0 22.1082105 19.6826969 0 19.6826969"></polygon><path d="M35.0456522,15.0779327 L43.4034783,15.0779327 L43.4034783,13.6218212 L37.13,13.6218212 L43.3013043,4.7826087 L43.3013043,3.51107465 L35.1478261,3.51107465 L35.1478261,4.96718622 L41.2169565,4.96718622 L35.0456522,13.8063987 L35.0456522,15.0779327 Z M52.1495652,15.0779327 L59.6491304,15.0779327 L59.6491304,13.6218212 L53.8456522,13.6218212 L53.8456522,9.9097621 L58.8930435,9.9097621 L58.8930435,8.45365053 L53.8456522,8.45365053 L53.8456522,4.96718622 L59.6491304,4.96718622 L59.6491304,3.51107465 L52.1495652,3.51107465 L52.1495652,15.0779327 Z M68.6813043,15.0779327 L75.9969565,15.0779327 L75.9969565,13.6218212 L73.1973913,13.6218212 L73.1973913,4.96718622 L75.9969565,4.96718622 L75.9969565,3.51107465 L68.6813043,3.51107465 L68.6813043,4.96718622 L71.5013043,4.96718622 L71.5013043,13.6218212 L68.6813043,13.6218212 L68.6813043,15.0779327 Z M88.0330435,15.0779327 L89.7291304,15.0779327 L89.7291304,4.96718622 L93.6526087,4.96718622 L93.6526087,3.51107465 L84.1504348,3.51107465 L84.1504348,4.96718622 L88.0330435,4.96718622 L88.0330435,15.0779327 Z"></path></g></svg>
</a>
