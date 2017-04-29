var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

router.get('/', ctrlMain.index);
router.get('/login', ctrlMain.login);
router.get('/resources', ctrlMain.resources);
router.get('/signup', ctrlMain.signup);
router.get('/game1', ctrlMain.game1);
router.get('/blockgame', ctrlMain.blockgame);
router.get('/blockgameCat',ctrlMain.blockgameCat);//route for main blockgame, will change currently blockgame into blockgamecat
router.get('/blockgameBee',ctrlMain.blockgameBee);
router.get('/blockgameDog',ctrlMain.blockgameDog);
router.get('/blockgameFox',ctrlMain.blockgameFox);
router.get('/blockgameOwl',ctrlMain.blockgameOwl);
router.get('/blockgamePig',ctrlMain.blockgamePig);
router.get('/blockgameBear',ctrlMain.blockgameBear);
router.get('/blockgameDeer',ctrlMain.blockgameDeer);
router.get('/blockgameDuck',ctrlMain.blockgameDuck);
router.get('/blockgameFrog',ctrlMain.blockgameFrog);
router.get('/blockgameHorse',ctrlMain.blockgameHorse);
router.get('/blockgameBunny',ctrlMain.blockgameBunny);
router.get('/blockgameKoala',ctrlMain.blockgameKoala);
router.get('/blockgameSheep',ctrlMain.blockgameSheep);
router.get('/blockgameSloth',ctrlMain.blockgameSloth);
router.get('/blockgameRaccoon',ctrlMain.blockgameRaccoon);
router.get('/blockgameMonkey',ctrlMain.blockgameMonkey);
router.get('/blockgamePenguin',ctrlMain.blockgamePenguin);
router.get('/easy', ctrlMain.easy);
router.get('/medium', ctrlMain.medium);
router.get('/hard', ctrlMain.hard);
router.get('/animalQuiz', ctrlMain.animalQuiz);
router.get('/easyAnimalQuiz', ctrlMain.easyAnimalQuiz);
router.get('/mediumAnimalQuiz', ctrlMain.mediumAnimalQuiz);
router.get('/hardAnimalQuiz', ctrlMain.hardAnimalQuiz);
router.get('/kitchenQuiz', ctrlMain.kitchenQuiz);
router.get('/easyKitchenQuiz', ctrlMain.easyKitchenQuiz);
router.get('/mediumKitchenQuiz', ctrlMain.mediumKitchenQuiz);
router.get('/hardKitchenQuiz', ctrlMain.hardKitchenQuiz);

router.get('/profile', ctrlMain.profile);

module.exports = router;
