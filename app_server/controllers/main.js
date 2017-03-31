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


module.exports.blockgame = function(req, res) {
  res.render('blockgame', { title: 'Block Game' });
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