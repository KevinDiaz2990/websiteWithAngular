var doT = require("dot").process({
	global: "_page.render"
	, destination: __dirname + "/render/"
	, path: (__dirname + "/../templates")
});
var express = require('express');
var app = express();
var render = require('./render');
var qs = require('querystring');
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/application';
