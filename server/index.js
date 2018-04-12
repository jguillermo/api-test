const express = require('express')
const bodyParser = require('body-parser');

const app = express();

app.use('/', bodyParser.json(), (req, res) => {
    res.status(200);
    res.json({
        hola: 'saludo'
    });

});


app.listen(5678, () => {
    console.log('servidor corriendo en el puesto 5678')
})