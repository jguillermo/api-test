const bodyParser = require('body-parser');
const fs = require('fs');
const http = require('http');
const express = require('express');
const https = require('https');

var interceptedRoutes = require('./intercepted-route');


var privateKey  = fs.readFileSync('credencial/server.key', 'utf8');
var certificate = fs.readFileSync('credencial/server.csr', 'utf8');
var credentials = {key: privateKey, cert: certificate};

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Import my test routes into the path '/test'
app.use('/', interceptedRoutes);


var httpServer = http.createServer(app);
//var httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
//httpsServer.listen(443);



// var fs = require('fs');
// var http = require('http');
// var https = require('https');
// var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
// var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');
// var credentials = {key: privateKey, cert: certificate};
// var express = require('express');
// var app = express();
// // your express configuration here
// var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);
// httpServer.listen(80);
// httpsServer.listen(443);