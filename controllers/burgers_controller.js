var express = require('express');
var burgers = require('../models/burger.js');
var router = express.Router();

router.get('/', function(req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
    burgers.selectAll(function(data){
        console.log(data);
        var hbsObject = {burgers : data};
        console.log(hbsObject)
        res.render('index', hbsObject);
    });
});

router.post('/burgers/create', function(req, res){
    console.log(req.body);
    burgers.create(['burger_name', 'devoured'], [req.body.name, req.body.devoured], function(data){
        res.redirect('/burgers')
    });
});

router.put('/burgers/update/:id', function(req, res){
    var condition = 'id = ' + req.params.id;
    
    console.log('condition', condition);
    
    burgers.updateOne({'devoured' : req.body.devoured}, condition, function(data){ 
        res.redirect('/burgers');
    });
});

router.delete('/burgers/delete/:id', function(req, res){
    var condition = 'id = ' + req.params.id;
    
    burgers.deleteOne(condition, function(data){
        res.redirect('/burgers');
    });
});

module.exports = router;