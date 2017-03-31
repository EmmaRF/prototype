var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.user = function(req, res) { 
    User
        .find()
        .exec(function(err, user) {    
            res
                .json(user);  // creates json response with the data 
    });
};
module.exports.userCreate = function(req, res) { 
    
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email
    }, function (err, user) {
        if (err) {
            sendJsonResponse(res, 400, err);
        } else {
            sendJsonResponse(res, 201, user);
        }
    })
};
module.exports.userProfile = function(req, res) { 
    if (req.params && req.params.userid) {
        User
            .findById(req.params.userid)
            .exec(function(err, user) {
                if (!user) {
                    sendJsonResponse(res, 404, {
                        "message" : "userid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, user);
                
            })
    } else {
        sendJsonResponse(res, 404, {
            "message" : "No userid in request"
        });
    }
};
module.exports.userUpdate = function(req, res) { 
    sendJsonResponse(res, 200, {"status" : "success"})
};
module.exports.userDelete = function(req, res) { 
    sendJsonResponse(res, 200, {"status" : "success"})
};