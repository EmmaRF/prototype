var mongoose = require('mongoose');
var User = mongoose.model('User');

var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');


var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.register = function(req, res) {

    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var password = req.body.password;

    User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    }, function(err, user) {
        if (err) {
            console.log(err);
            sendJsonResponse(res, 400, err);
            // res.status(400).json(err);
        }
        else {
            console.log('user created', user);
            sendJsonResponse(res, 201, user);
            // res.status(201).json(user);
        }
    });
};


module.exports.login = function(req, res) {

    var email = req.body.email;
    var password = req.body.password;

    User.findOne({
        email: email
    }).exec(function(err, user) {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        }
        else { // password is what user enters
            if (bcrypt.compareSync(password, user.password)) {
                console.log('User found!', user);
                // server generates token
                var token = jwt.sign({
                    email: user.email
                }, 's3cr3t', {
                    expiresIn: 3600
                });

                console.log('Token generated:', token);
                // server sends token to user 
                res.status(200).json({
                    success: true,
                    token: token,
                    user: user
                });
            }
            else {
                res.status(401).json('Unauthorized!');
            }
        }
    });
};

module.exports.usersGet = function(req, res) {
    console.log('Get all users.');
    User
        .find()
        .exec(function(err, user) {
            if (err) {
                console.log(err);
                sendJsonResponse(res, 400, err);
            }
            else {
                console.log(user);
                sendJsonResponse(res, 200, user);
            }
        });
};

module.exports.userCreate = function(req, res) {
    console.log("Create new user.");
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email
    }, function(err, user) {
        if (err) {
            console.log(err);
            sendJsonResponse(res, 400, err);
        }
        else {
            console.log(user);
            sendJsonResponse(res, 201, user);
        }
    })
};

module.exports.userProfile = function(req, res) {
    console.log('Get user profile by user email');
    var email = String(req.body.email);
    User
        .find({
                'email' : email
            },
            function(err, user) {
                if (err) {
                    console.log(err);
                    sendJsonResponse(res, 400, err);
                }
                else {
                    console.log(user);
                    sendJsonResponse(res, 200, user);
                }
            })
};

module.exports.userDelete = function(req, res) {
    var userid = req.params.userid;
    if (userid) {
        User
            .findByIdAndRemove(userid)
            .exec(
                function(err, location) {
                    if (err) {
                        console.log(err);
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    console.log("User id " + userid + " deleted");
                    sendJsonResponse(res, 204, null);
                }
            );
    }
    else {
        sendJsonResponse(res, 400, {
            "message": "No user id."
        });
    }
};

module.exports.userUpdate = function(req, res) {
    if (!req.params.userid) {
        sendJsonResponse(res, 404, {
            "message": "User not found - user id is required!"
        });
        return;
    }
    console.log(req.params.userid);
    User
        .findById(req.params.userid)
        .exec(
            function(err, user) {
                if (!user) {
                    sendJsonResponse(res, 404, {
                        "message": "User id not found!"
                    });
                    return;
                }
                else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                if (req.body.firstName !== undefined) {
                    user.firstName = req.body.firstName;
                }
                if (req.body.lastName !== undefined) {
                    user.lastName = req.body.lastName;
                }
                if (req.body.email !== undefined) {
                    user.email = req.body.email;
                }
                if (req.body.password !== undefined) {
                    user.password = req.body.password;
                }

                user.save(function(err, user) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    }
                    else {
                        sendJsonResponse(res, 200, user);
                    }
                });
            }
        );
};