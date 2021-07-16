/* eslint-disable */
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// development or other environment
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

// analyse use webpack-bundle-analyzer 
const isAnalyse = process.env.NODE_ENV === 'analyse';

module.exports = {
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, './src/');
    // analyse use webpack-bundle-analyser
    if (isAnalyse) {
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        // For all options see https://github.com/th0r/webpack-bundle-analyzer#as-plugin
        generateStatsFile: true,
        // Will be available at `.next/stats.json`
        statsFilename: 'stats.json'
      })
    }
    if (!dev) {
      // polyfill IE11
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        if (
          entries['main.js'] &&
          !entries['main.js'].includes('./assets/polyfills.js')
        ) {
          entries['main.js'].unshift('./assets/polyfills.js');
        }
        return entries;
      }
      config.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            terserOptions: {
              ecma: 6,
              warnings: false,
              output: {
                comments: false
              },
              compress: {
                drop_console: true // remove console
              },
              ie8: false
            }
          }),
          new CssMinimizerPlugin({
            parallel: true,
            minify: [
              CssMinimizerPlugin.cssnanoMinify,
              CssMinimizerPlugin.cleanCssMinify
            ],
          }),
        ],
      }
      config.module.rules.push({
        test: /\.js$/,
        include: path.resolve(__dirname, './src'),
        options: {
          workerParallelJobs: 50,
          // additional node.js arguments
          workerNodeArgs: ['--max-old-space-size=1024'],
        },
        loader: 'thread-loader'
      });
      config.devtool = isServer ? false : 'source-map';
    } else {
      config.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        include: path.resolve(__dirname, './src'),
        options: {
          configFile: path.resolve('.eslintrc.js'),
          eslint: {
            configFile: path.resolve(__dirname, '.eslintrc.js')
          }
        },
        loader: 'eslint-loader'
      });
    }
    return config;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // console.log(config, '@@')
    // Important: return the modified config
    return config;
  },
  serverRuntimeConfig: { // Will only be available on the server side
    rootDir: path.join(__dirname, './'),
    PORT: isDev ? 3006 : (process.env.PORT || 5999)
  },
  publicRuntimeConfig: { // Will be available on both server and client
    staticFolder: '/static',
    isDev, // Pass through env variables
  },
  env: {
    SERVER_HOST: 'http://www.luffyzhou.cn'
  }
};