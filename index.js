var path = require('path');
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var connect = require('connect');
var http = require('http');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var models = require('./models');
var Profile = exports.Profile;

// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/sendata', function(data){
	var profileData = data.req.body;
	console.log(profileData);
});
app.listen('4442', function (){
	console.log('Listening on port 4442');
});