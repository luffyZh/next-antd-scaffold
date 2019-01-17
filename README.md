A react ssr scafflod with ant-design based on Next.js.

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
  | ...                      // other file
```
## Usage
#### development
```
 1. git clone https://github.com/luffyZh/next-antd-scafflod.git
 2. yarn install
 3. yarn start
 // The application is ready on http://127.0.0.1:3006
```

#### production

```
 1. yarn build
 2. yarn prod
 // The application is ready on http://127.0.0.1:3006
```
> Pm2 is scheduled to be configured for project deployment

## Features
 - react
 - Next.js
 - redux
 - redux-saga
 - ant-design