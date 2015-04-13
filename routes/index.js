/**
    index.js contains routing methods for the index page of the app
*/

var express = require("express");
var router = express.Router();

var funcs = require("../funcs");

router.get('/', function(req, res)
{
    funcs.logReq(req);
    res.sendFile(funcs.resPath("html/index.html"));
});

router.get("/style/calendar.css", function(req, res)
{
    funcs.logReq(req);
    res.sendFile(funcs.resPath("style/calendar.css"));
});

router.get("/scripts/submitAppt.js", function(req, res)
{
    funcs.logReq(req);
    res.sendFile(funcs.resPath("scripts/submitAppt.js"));
});

router.post("/", function(req, res)
{
    funcs.logPost(req);
    console.log("Appt length: " + req.body.apptLength);
    console.log("Message: " + req.body.message);
    res.send("Appointment made for " + "date" + " with length of: " + req.body.apptLength + " with a message of: " + req.body.message);
});

module.exports = router;
