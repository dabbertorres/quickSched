/**
    This file contains general use functions for convenience
*/

exports.resPath = function(file)
{
    file = (typeof file !== "undefined") ? file : "";
    return __dirname + "/res/" + file;
};

exports.logReq = function(req, str)
{
	str = (typeof str !== "undefined") ? str : "Request";
    var now = new Date();

    console.log(str + " from: " + req.ip + " for \"" + req.path + "\" at: " + now);
};

exports.logPost = function(req)
{
    var now = new Date();

    console.log("POST from: " + req.ip + " on \"" + req.path + "\" at: " + now);
};
