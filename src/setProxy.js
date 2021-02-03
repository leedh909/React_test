const proxy = require('http-proxy-middleware');

function setProxy(app) {
  app.use(
    proxy('/server', {
      target: 'http://localhost:9999',
    })
  );
}

module.exports = {
  setProxy,
};
