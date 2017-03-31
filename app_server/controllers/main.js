module.exports.index = function(req, res, next) {
  res.render('index', { title: 'Overbooked' });
};

module.exports.login = function(req, res, next) {
  res.render('login', { title: 'Log In' });
};

module.exports.resources = function(req, res, next) {
  res.render('resources', { title: 'Resources' });
};

module.exports.signup = function(req, res, next) {
  res.render('signup', { title: 'Sign Up' });
};

module.exports.game1 = function(req, res, next) {
  res.render('game1', { title: 'Game 1' });
};

module.exports.blockgame = function(req, res, next) {
  res.render('blockgame', { title: 'Block Game' });
};

module.exports.easy = function(req, res, next) {
  res.render('easy', { title: 'Easy' });
};

module.exports.medium = function(req, res, next) {
  res.render('medium', { title: 'Medium' });
};

module.exports.hard = function(req, res, next) {
  res.render('hard', { title: 'Hard' });
};