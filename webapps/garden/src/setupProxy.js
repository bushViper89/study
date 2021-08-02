const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/garden/*', {
      target: 'http://api.nongsaro.go.kr/service/',
      changeOrigin: true
    })
  );
};