var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/overbooked';
if (process.env.NODE_ENV === 'production')
{
    var dbURI = 'mongodb://heroku_htqtwj5x:ofi4732thkpivhc2fr8oi8dkff@ds147900.mlab.com:47900/heroku_htqtwj5x';
}
mongoose.connect(dbURI);

require('./userinfo');