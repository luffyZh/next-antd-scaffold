const { serverRuntimeConfig } = require('./next.config');

module.exports = {
  'process.env.NODE_HOST': `${serverRuntimeConfig.NODE_HOST}:${serverRuntimeConfig.PORT}`
};