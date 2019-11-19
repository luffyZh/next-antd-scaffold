## How to use cssModules

```
# install next-css

yarn add @zeit/next-css

# use nextCss warpped the config
// next.config.js
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
...
module.exports = withCSS(
  withLess({
    cssModules: true,
    ... // other config
  })
);

# use css modules

import css from "../style.css";

const Component = props => {
  return (
    <div className={css.example}>
      ...
    </div>
  );
}

export default Component;
```

## How to listen for routing changes?

The router of next provide some APIs that are used to listen for routing changes for us.
`For example: beforeHistoryChange, routeChangeComplete...`

```
// _app.js

import Router from 'next/router';
...
// Listen the route path change
Router.events.on('routeChangeStart', (path) => {
  console.log('route start change, the next route is:', path);
  // do something what you want to do.
  ...
});

```

## The solution of `ant-design` in the development environment style load is incomplete.

```
// next.config.js

const isDev = process.env.NODE_ENV !== 'production';

// fix antd bug in dev development
const devAntd = '@import "~antd/dist/antd.less";\n';
const stylesData = fs.readFileSync(
  path.resolve(__dirname, './assets/_styles.less'),
  'utf-8'
);
fs.writeFileSync(
  path.resolve(__dirname, './assets/self-styles.less'),
  isDev ? `${devAntd}${stylesData}` : stylesData,
  'utf-8'
);
```

## The solution of `min-css-extract-plugin` warning in the console

```
chunk commons [mini-css-extract-plugin]
Conflicting order between:
...
```

// next.config.js

```
// define the webpack plugn
class FilterPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tap(
      'FilterPlugin',
      (compilation) => {
        compilation.warnings = (compilation.warnings).filter(
          warning => !this.options.filter.test(warning.message)
        );
      }
    );
  }
}

webpack: (config, {...args}) => {
  config.plugins.push(
    ...[
      // Instantiate the plugin and add it as a Webpack plugin
      new FilterPlugin(
        { filter: /chunk styles \[mini-css-extract-plugin]\nConflicting order between:/ }
      )
    ]
  );
}

```

## How to polyfill IE10/IE9 in this scaffold?

#### Add polyfills.js in your project.

```
// /core/polyfills.js
/* eslint no-extend-native: 0 */
// core-js comes with Next.js. So, you can import it like below
import includes from 'core-js/library/fn/string/virtual/includes';
import repeat from 'core-js/library/fn/string/virtual/repeat';
import assign from 'core-js/library/fn/object/assign';
import 'core-js/es6/map';
import 'core-js/es6/set';

// Add your polyfills
// This files runs at the very beginning (even before React and Next.js core)
console.log('Load your polyfills');

String.prototype.includes = includes;
String.prototype.repeat = repeat;
Object.assign = assign;
```

#### How to alias folder path?

```
// next.config.js

// config alias
config.resolve.alias['@containers'] =
  path.resolve(__dirname, './src/containers');
```

#### Config the next.config.js

```
// next.config.js
...
webpack: function (cfg) {
    const originalEntry = cfg.entry
    cfg.entry = async () => {
      const entries = await originalEntry()

      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./core/polyfills.js')
      ) {
        entries['main.js'].unshift('./core/polyfills.js')
      }

      return entries
    }

    return cfg
  }
...
```

#### Downgrade your Next version to '7.0.2'

## The ant-design style flash when page refresh!

```
// _app.js -> getInitialProps
  /* 刷新页面 antd闪动 */
  if (typeof window !== "undefined") {
    window.onload = () => {
      document.getElementById("flashStyle").remove();
    };
  }

// _app.js -> <Head></Head>
<style
  id='flashStyle'
  dangerouslySetInnerHTML={{
    __html: `
      *, *::before, *::after {
        transition: none!important;
      }
    `
  }}
/>
```

## How to speed up packing in production?

#### 1. tenser-webpack-plugin -> cache

```
new TerserPlugin({
  cache: true, // add this line
  terserOptions: {
    ...
  }
}),
```

#### 2. Add thread-loader

```
config.module.rules.push({
  test: /\.js$/,
  include: [
    path.resolve('src')
    ...
  ],
  options: {
    workerParallelJobs: 50,
    // additional node.js arguments
    workerNodeArgs: ['--max-old-space-size=1024'],
  },
  loader: 'thread-loader'
});
```
