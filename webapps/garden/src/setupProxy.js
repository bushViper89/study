const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/gardenList', {
      target: 'http://api.nongsaro.go.kr/service/garden/',
      changeOrigin: true
    })
  );
};