const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('./request')

// ============================
//  Config
// ============================
process.env.PORT = process.env.PORT || 8056;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.json([{
        url:'/user',
        method:'GET'
    },{
        url:'/user/:id',
        method:'GET'
    },{
        url:'/user',
        method:'POST'
    },{
        url:'/user/:id',
        method:'PUT'
    },{
        url:'/user/:id',
        method:'DELETE'
    }]);
});

app.get('/user', function(req, res) {
    res.json([{
        id:1,
        name:'Jose'
    },{
        id:2,
        name:'Ariana'
    }]);
});

app.get('/user/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id,
        name:'Jose'
    });
});

app.post('/user', function(req, res) {

    let body = req.body;

    if (body.name === undefined) {

        res.status(400).json({
            mensaje: 'El nombre es necesario'
        });

    } else {
        res.status(201).json({
            id:3,
            name:body.name
        });
    }

});

app.put('/user/:id', function(req, res) {

    let id = req.params.id;

    let body = req.body;

    if (body.name === undefined) {
        res.status(400).json({
            mensaje: 'El nombre es necesario'
        });

    } else {
        res.json({
            id,
            name:body.name
        });
    }
});

app.delete('/user/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        message:`eliminado el usuario ${id}`
    });
});

app.get('/api-ext',async function(req,res){
    let { body, statusCode } = await request('http://next.json-generator.com/api/json/get/4J4Y6xmnV');
    res.json(body);
})


app.use(function(req, res, next){
    res.status('404').json({ status: 404, url: req.url });
  });

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});