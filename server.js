const path = require('path');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/oauth/access_token', createProxyMiddleware(
  {
    target: 'https://api.instagram.com',
    changeOrigin: true
  }
  ));

app.get(['/*'], (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

module.exports = app;
