const express = require('express');
const cp = require('child_process');
const next = require('next');
const os = require('os');
const { publicRuntimeConfig, serverRuntimeConfig } = require('./next.config');

function getIPAdress() {
  const interfaces = os.networkInterfaces();
  
  for (let devName in interfaces) {
    const iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}

const { isDev } = publicRuntimeConfig;
const { PORT } = serverRuntimeConfig;

const app = next({ dev: isDev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      const serverUrl = `http://localhost:${PORT}`;
      console.log(`
        App is running at:
        - Local: ${serverUrl}
        - Network: http://${getIPAdress()}:${PORT}
      `);
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

