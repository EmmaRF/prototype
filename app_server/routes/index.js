var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

router.get('/', ctrlMain.index);
router.get('/login', ctrlMain.login);
router.get('/resources', ctrlMain.resources);
router.get('/signup', ctrlMain.signup);
router.get('/game1', ctrlMain.game1);
router.get('/blockgame', ctrlMain.blockgame);
router.get('/easy', ctrlMain.easy);
router.get('/medium', ctrlMain.medium);
router.get('/hard', ctrlMain.hard);
router.get('/easyAnimalQuiz', ctrlMain.easyAnimalQuiz);
router.get('/mediumAnimalQuiz', ctrlMain.mediumAnimalQuiz);
router.get('/hardAnimalQuiz', ctrlMain.hardAnimalQuiz);
router.get('/easyKitchenQuiz', ctrlMain.easyKitchenQuiz);
// router.get('/templateQuiz', ctrlMain.templateQuiz);

module.exports = router;
