const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/api', {
      target: 'server.localhost/',
      pathRewrite: {
        '^/api': '', // remove base path
      },
      followRedirects: true,
      changeOrigin: true,
      router: {
        'client.localhost': 'http://localhost:80/server',
      },
    })
  );
};
