const express = require('express');
const cp = require('child_process');
const path = require('path');
const next = require('next');

// 判断开发环境和生产环境
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();
    // deal seo
    server.get('/robots.txt', (req, res) => (
      res.status(200).sendFile('robots.txt', {
        root: __dirname + '/static/',
        headers: {
          'Content-Type': 'text/plain;charset=UTF-8',
        }
      })
    ));
    
    server.get('/sitemap.xml', (req, res) => (
      res.status(200).sendFile('sitemap.xml', {
        root: __dirname + '/static/',
        headers: {
          'Content-Type': 'text/xml;charset=UTF-8',
        }
      })
    ));
    // deal /favicon.ico
    server.get('/favicon.ico', (req, res) =>
      res.status(200).sendFile(path.join(__dirname, 'static', 'favicon.ico'))
    );

    server.get('/user/detail/:username', (req, res) => {
      const { username } = req.params;
      return app.render(req, res, '/user/detail', { username });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3006, err => {
      if (err) throw err;
      const serverUrl = `http://localhost:${3006}`;
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

