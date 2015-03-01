var http             = require('http');
var httpProxy        = require('http-proxy');
var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config           = require('./webpack.config');
var express          = require('express');

var app = express();
var proxy = httpProxy.createProxyServer();

var compiler = webpack(config);

// var proxyTo = 'PROXY_URL';
// app.all('/api/*', function(req, res) {
//   delete req.headers.host;
//   req.url = req.url.replace('/api', '/');
//   proxy.web(req, res, {target: proxyTo});
// });

app.get('/js/*', function(req, res) {
  proxy.web(req, res, {target: 'http://localhost:3001'});
});

app.get('/socket*', function(req, res) {
  proxy.web(req, res, {target: 'http://localhost:3001'});
});

app.use(express.static(__dirname));

app.all('/*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

server = http.createServer(app);

server.on('upgrade', function(req, socket, head) {
  proxy.ws(req, socket, head, {target: 'http://localhost:3001'});
});

server.listen(3000);

new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true
}).listen(3001, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3001');
});
