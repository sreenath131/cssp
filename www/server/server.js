var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const routes = require('./routes/index');
var app = express();

var port = process.env.PORT || '3000';
app.set('port', port);
var server = http.createServer(app);

server.listen(port);
//server.on('error', onError);
server.on('listening', function(){
    console.log("server listening")
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
console.log(__dirname)
app.use(express.static(path.join(__dirname, '../')));
app.use('/', routes);

app.use(function(req, res, next){
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
