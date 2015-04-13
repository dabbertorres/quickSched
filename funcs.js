/**
    This file contains general use functions for convenience
*/

exports.resPath = function(file)
{
    if(typeof file !== "undefined")
        return __dirname + "/res/" + file;
    else
        return __dirname + "/res/";
};

exports.logReq = function(req, str)
{
    var now = new Date();

    if(typeof str === "undefined")
        console.log("Request from: " + req.ip + " for \"" + req.path + "\" at: " + now);
    else
        console.log(str + " from: " + req.ip + " for \"" + req.path + "\" at: " + now);
};

exports.logPost = function(req)
{
    var now = new Date();

    console.log("POST from: " + req.ip + " on \"" + req.path + "\" at: " + now);
};
