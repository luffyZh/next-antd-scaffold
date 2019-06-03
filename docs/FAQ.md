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
