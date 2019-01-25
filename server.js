const express = require('express');
const cp = require('child_process');
const next = require('next');
const { publicRuntimeConfig } = require('./next.config');

const { isDev, PORT } = publicRuntimeConfig;

const port = PORT || 3006;

// 判断开发环境和生产环境
const dev = isDev;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/user/userDetail/:username', (req, res) => {
      const { username } = req.params;
      return app.render(req, res, '/user/userDetail', { username });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      const serverUrl = `http:127.0.0.1:${port}`;
      console.log(`> Ready on ${serverUrl}`);
      // 开发环境自动启动
      if (dev) {
        switch (process.platform) {
          //mac系统使用 一下命令打开url在浏览器
          case 'darwin':
            cp.exec(`open ${serverUrl}`);
            break;
          //win系统使用 一下命令打开url在浏览器
          case 'win32':
            cp.exec(`start ${serverUrl}`);
            break;
          // 默认mac系统
          default:
            cp.exec(`open ${serverUrl}`);
        }
      }
    });
  });

