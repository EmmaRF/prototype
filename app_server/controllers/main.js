/* GET home page */
module.exports.index = function(req, res, next) {
  res.render('index', { title: 'Express' });
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