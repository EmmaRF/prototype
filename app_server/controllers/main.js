module.exports.index = function(req, res) {
  res.render('index', { title: 'Overbooked' });
};

module.exports.login = function(req, res) {
  res.render('login', { title: 'Log In' });
};

module.exports.resources = function(req, res) {
  res.render('resources', { title: 'Resources' });
};

module.exports.signup = function(req, res) {
  res.render('signup', { title: 'Sign Up' });
};

module.exports.game1 = function(req, res) {
  res.render('game1', { title: 'Game 1' });
};

module.exports.blockgameCat = function(req, res) {
  res.render('blockgameCat', { title: 'Block Game Cat' });
};

module.exports.blockgame = function(req, res) {
  res.render('blockgame', { title: 'Block Game' }); // should change
};

module.exports.blockgameBear = function(req, res) {
  res.render('blockgameBear', { title: 'Block Game Bear' });
};

module.exports.easy = function(req, res) {
  res.render('easy', { title: 'Easy' });
};

module.exports.medium = function(req, res) {
  res.render('medium', { title: 'Medium' });
};

module.exports.hard = function(req, res) {
  res.render('hard', { title: 'Hard' });
};

module.exports.animalQuiz = function(req, res) {
  res.render('animalQuiz', { title: 'Animal Quiz' });
};

module.exports.easyAnimalQuiz = function(req, res) {
  res.render('easyAnimalQuiz', { title: 'Easy Animal Quiz' });
};

module.exports.mediumAnimalQuiz = function(req, res) {
  res.render('mediumAnimalQuiz', { title: 'Medium Animal Quiz' });
};

module.exports.hardAnimalQuiz = function(req, res) {
  res.render('hardAnimalQuiz', { title: 'Hard Animal Quiz' });
};

module.exports.kitchenQuiz = function(req, res) {
  res.render('kitchenQuiz', { title: 'Kitchen Quiz' });
};

module.exports.easyKitchenQuiz = function(req, res) {
  res.render('easyKitchenQuiz', { title: 'Easy Kitchen Quiz' });
};

module.exports.mediumKitchenQuiz = function(req, res) {
  res.render('mediumKitchenQuiz', { title: 'Medium Kitchen Quiz' });
};

module.exports.hardKitchenQuiz = function(req, res) {
  res.render('hardKitchenQuiz', { title: 'Hard Kitchen Quiz' });
};


// module.exports.templateQuiz = function(req, res) {
//   res.render('templateQuiz', { title: 'templateQuiz' });
// };