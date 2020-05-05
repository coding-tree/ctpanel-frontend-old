// const {createProxyMiddleware} = require('http-proxy-middleware');

// module.exports = (app) => {
//   app.use(
//     createProxyMiddleware('/api', {
//
//     })
//   );
// };

const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      changeOrigin: true,
      target: 'http://server.localhost/',
      pathRewrite: {
        '^/api': '/', // remove base path
      },
    })
  );
};
