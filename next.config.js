/* eslint-disable */
const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const fs = require('fs');
const path = require('path');

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './assets/antd-custom.less'),
    'utf8',
  )
);

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

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withLess({
  target: 'serverless',
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables,
    localIdentName: '[local]___[hash:base64:5]',
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    if (!dev) {
      config.plugins.push(
        ...[
          new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            // For all options see https://github.com/th0r/webpack-bundle-analyzer#as-plugin
            generateStatsFile: true,
            // Will be available at `.next/stats.json`
            statsFilename: 'stats.json'
          }),
      ]);
      config.devtool = 'source-map';
    } else {
      config.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        include: [
          path.resolve('components'),
          path.resolve('pages'),
          path.resolve('utils'),
          path.resolve('constants'),
          path.resolve('redux'),
          path.resolve('containers')
        ],
        options: {
          configFile: path.resolve('.eslintrc'),
          eslint: {
            configFile: path.resolve(__dirname, '.eslintrc')
          }
        },
        loader: 'eslint-loader'
      });
      config.devtool = 'cheap-module-inline-source-map';
    }
    return config;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // console.log(config, '@@')
    // Important: return the modified config
    return config;
  },
  env: {
    SERVER_HOST: 'http://www.luffyzhou.cn'
  }
});