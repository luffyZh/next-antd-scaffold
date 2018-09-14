const express = require('express');
const { parse } = require('url');
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

    server.get('/user/userDetail', (req, res) => {
      return app.render(req, res, `/user/userDetail/${req.query.username}`);
    });

    server.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;
      if (typeof pathname !== 'undefined' && pathname.indexOf('/user/userDetail/') > -1) {
        const query = { username: pathname.split('/')[3] };
        return app.render(req, res, '/user/userDetail', query);
      }
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });

