var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/overbooked';
// var dbURI = 'mongodb://laghee:make17@ds147900.mlab.com:47900/heroku_htqtwj5x';
mongoose.connect(dbURI);

require('./userinfo');