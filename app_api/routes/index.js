var express = require('express');
var router = express.Router();
var ctrlUsers = require('../controllers/users');

router.get('/users', ctrlUsers.user);
router.post('/users', ctrlUsers.userCreate);
router.put('/users/:userid', ctrlUsers.userUpdate);
router.delete('/users/:userid', ctrlUsers.userDelete);

module.exports = router;