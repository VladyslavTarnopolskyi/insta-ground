const path = require('path');
const express = require("express");
const app = express();
// const router = express.Router();
// const http = require('http');
const PORT = process.env.PORT || 5000;
// const serverless = require('serverless-http');
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(express.static(path.join(__dirname, 'dist')));
// app.use('/.netlify/functions/server', router);
app.use('/oauth/access_token', createProxyMiddleware(
  {
    target: 'https://api.instagram.com',
    changeOrigin: true
  }
  ));

// app.set('trust proxy', 'loopback')

app.get(['/*'], (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const httpServer = http.createServer({}, app);
//
httpServer.listen(PORT, () => console.log(`Listening on ${ PORT }`));

module.exports = app;
