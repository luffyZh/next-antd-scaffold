/* eslint-disable */
const withCss = require('@zeit/next-css');
const AntdTheme = require('./antd-theme');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

module.exports = withCss({
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    
    // Important: return the modified config
    config.module.rules.push({
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          }, {
              loader: "css-loader"
          }, {
              loader: "less-loader",
              options: {
                sourceMap: true,
                modifyVars: AntdTheme
              }
          }
        ]
    })
    return config;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // console.log(config, '@@')
    // Important: return the modified config
    return config;
  }
})