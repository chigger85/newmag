var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');	
//configure app

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//use middleware

app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'bower_components')));

//define routes

app.use(require("./todo"));

//start the server

app.listen(1337, function() {

	console.log('Ready on port 1337')
});







// var http = require('http');
// server = http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// })

// server.listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');