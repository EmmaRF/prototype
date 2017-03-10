/* GET home page */
module.exports.index = function(req, res, next) {
  res.render('index', { title: 'Express' });
};

module.exports.login = function(req, res, next) {
  res.render('login', { title: 'Log In' });
};

module.exports.resource = function(req, res, next) {
  res.render('resources', { title: 'Resoures' });
};

module.exports.sidebar = function(req, res, next) {
  res.render('sidebar', { title: 'Sidebars' });
};