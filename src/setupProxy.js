const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = (app) => {
  if (process.env.REACT_APP_SERVER_PROXY_URL) {
    app.use(
      createProxyMiddleware('/api', {
        target: process.env.REACT_APP_SERVER_PROXY_URL,
        pathRewrite: {
          '^/api': '',
        },
      })
    );
  }
};
