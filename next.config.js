/* eslint-disable */
const withLess = require('@zeit/next-less');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    if (!dev) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'disabled',
          // For all options see https://github.com/th0r/webpack-bundle-analyzer#as-plugin
          generateStatsFile: true,
          // Will be available at `.next/stats.json`
          statsFilename: 'stats.json'
        })
      );
    } else {
      config.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',

        include: [
          path.resolve('components'),
          path.resolve('pages'),
          path.resolve('utils'),
          path.resolve('constants'),
          path.resolve('redux')
        ],
        options: {
          configFile: path.resolve('.eslintrc'),
          eslint: {
            configFile: path.resolve(__dirname, '.eslintrc')
          }
        },
        loader: 'eslint-loader'
      });
      config.devtool = 'source-map';
    }
    return config;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // console.log(config, '@@')
    // Important: return the modified config
    return config;
  }
})
