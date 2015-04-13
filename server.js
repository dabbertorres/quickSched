/**
    Server entry point for SchedulingApp

    Simply gathers request handling for pages, tells the app to use them,
    and then starts listening for requests.
*/

// protocols
//var https = require("https");
//var http = require("http");

// node modules
var path = require("path");

// express creation
var express = require("express");
var app = express();

// middleware
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// functions lib
var funcs = require("./funcs");

// static content
app.use(express.static(funcs.resPath()));

// handle requests for pages
app.use(require("./routes/index"));

// 404 handling
app.use(function(req, res, next)
{
    funcs.logReq(req, "404");
    res.status(404).sendFile(funcs.resPath("html/error.html"));
});

// start the server
//http.createServer(app).listen(80);    // use app to work on http AND https
//https.createServer(app).listen(443);

var server = app.listen(80, function()
{
    var host = server.address().address;
    var port = server.address().port;

    console.log("Hello world listening at http://%s:%s", host, port);
});
