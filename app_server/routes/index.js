var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/login', ctrlMain.login);
router.get('/resources', ctrlMain.resource);

module.exports = router;
