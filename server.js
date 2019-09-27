const express = require('express');
const cp = require('child_process');
const path = require('path');
const next = require('next');
const { publicRuntimeConfig, serverRuntimeConfig } = require('./next.config');
const routes = require('./backend/routes');

const { isDev } = publicRuntimeConfig;
const { PORT } = serverRuntimeConfig;

const app = next({ dev: isDev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();
    // deal /favicon.ico
    server.get('/favicon.ico', (req, res) =>
      res.sendFile(path.join(__dirname, 'static', 'favicon.ico'))
    );

    server.get('/user/detail/:username', (req, res) => {
      const { username } = req.params;
      return app.render(req, res, '/user/detail', { username });
    });

    server.use('/api', routes);

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

