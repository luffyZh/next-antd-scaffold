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
