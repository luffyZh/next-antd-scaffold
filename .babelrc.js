const envConfig = require('./env.config.js');

module.exports = {
  "presets": ["next/babel"],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "decoratorsBeforeExport": true
      }
    ],
    [
      "import",
      {
        "libraryName": "antd",
        "style": true
      }
    ],
    ["lodash"],
    ["transform-define", envConfig]
  ]
};