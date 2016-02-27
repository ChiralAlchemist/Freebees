var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var session = require('express-session');
var jwt = require('jsonwebtoken');
var auth = require('./server/auth/auth.js');
var config = require('./server/config/config.js');

var app = express();

//mongoose.connect(config.mongoURI);

// to directly post to the remote online database, use this connection:
mongoose.connect(" mongodb://heroku_7k1tmhpk:321321go@ds045684.mlab.com:45684/heroku_7k1tmhpk");

mongoose.connection.once('open', function(){
  console.log('Connected to mongodb');
});

var port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// Attach/initiate sessions
app.use(session({ secret: config.secret }));

app.use("*", function(req, res, next) {
  //console.log("req.body", req.body);
  next();
});

//use routes.js
app.use(express.static(__dirname + '/client'));
require('./server/routes')(app);

app.listen(port);
console.log('Express is listening on port: ' + port);

module.exports = app;
