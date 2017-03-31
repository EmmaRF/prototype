var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.user = function(req, res) { 
    sendJsonResponse(res, 200, {"status" : "success"})
};
module.exports.userCreate = function(req, res) { 
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.userProfile = function(req, res) { 
    sendJsonResponse(res, 200, {"status" : "success"})
};
module.exports.userUpdate = function(req, res) { 
    sendJsonResponse(res, 200, {"status" : "success"})
};
module.exports.userDelete = function(req, res) { 
    sendJsonResponse(res, 200, {"status" : "success"})
};