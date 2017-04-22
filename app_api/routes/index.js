var express = require('express');
var router = express.Router();

var ctrlUsers = require('../controllers/users');

router.get('/users', ctrlUsers.usersGet);
router.post('/users/createuser', ctrlUsers.userCreate);
router.get('/users/:userid', ctrlUsers.userProfile);
router.put('/users/:userid', ctrlUsers.userUpdate);
router.delete('/users/:userid', ctrlUsers.userDelete);

// Authentication
router.post('/register', ctrlUsers.register);
router.post('/login', ctrlUsers.login);

module.exports = router;