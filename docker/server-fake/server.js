const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// ============================
//  Config
// ============================
process.env.PORT = process.env.PORT || 443;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.get('/api/json/get/4J4Y6xmnV', function(req, res) {
    res.json([{
        id:1,
        name:'Data'
    },{
        id:2,
        name:'fake'
    }]);
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});



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

// httpServer.listen(8080);
// httpsServer.listen(8443);