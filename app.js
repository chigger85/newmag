var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');	
//configure app

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//use middleware

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'styles')));


//define routes

app.use(require("./todo"));
app.set('port', (process.env.PORT || 5000));

//start the server


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});






// var http = require('http');
// server = http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// })

// server.listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');