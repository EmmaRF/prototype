var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/overbooked';
mongoose.connect(dbURI);

require('./userinfo');