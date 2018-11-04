const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3006;
// 判断开发环境和生产环境
process.env.NODE_ENV = (typeof process.env.NODE_ENV !== 'undefined')
  ? process.env.NODE_ENV.trim()
  : 'development';
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/user/userDetail/:username', (req, res) => {
      const actualPage = '/user/userDetail';
      const queryParams = { username: req.params.username };
      return app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });

