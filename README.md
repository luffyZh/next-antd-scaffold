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
## Features
 - react
 - Next.js
 - redux
 - redux-saga
 - ant-design