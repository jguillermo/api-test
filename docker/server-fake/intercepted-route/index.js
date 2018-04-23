var express = require('express'),
    router = express.Router();
router
  .get('/api/json/get/4J4Y6xmnV', function(req, res) {
    res.json([{
        id:1,
        name:'DATOS'
    },{
        id:2,
        name:'fake'
    }]);
});

module.exports = router;