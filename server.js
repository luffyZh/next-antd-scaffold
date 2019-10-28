const express = require('express');
const cp = require('child_process');
const next = require('next');
const { publicRuntimeConfig, serverRuntimeConfig } = require('./next.config');

const { isDev } = publicRuntimeConfig;
const { PORT } = serverRuntimeConfig;

const app = next({ dev: isDev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/user/detail/:username', (req, res) => {
      const { username } = req.params;
      return app.render(req, res, '/user/detail', { username });
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      const serverUrl = `http://localhost:${PORT}`;
      console.log(`> Ready on ${serverUrl}`);
      // development auto open browser
      if (isDev) {
        switch (process.platform) {
          // macos
          case 'darwin':
            cp.exec(`open ${serverUrl}`);
            break;
          // windows
          case 'win32':
            cp.exec(`start ${serverUrl}`);
            break;
          default:
            cp.exec(`open ${serverUrl}`);
        }
      }
    });
  });

