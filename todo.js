var express = require("express");

var router = express.Router();

var todoItems = [
         {id: 1, desc: 'WE'},
         {id: 2, desc: 'WE'},
         {id: 3, desc: 'WE'}
         ];

router.get('/', function(req,res){
    res.render('index',{
      title: 'WGA',
      items: todoItems
        
    });
});

router.post('/add', function(req,res){
	var newItem = "WE";
	todoItems.push({
		id: todoItems.length + 1,
		desc: newItem
	});

	//res.redirect('/');

})

module.exports = router;