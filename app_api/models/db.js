var mongoose = require('mongoose');
var gracefulShutdown;
var dbURI = 'mongodb://localhost/overbooked';
if (process.env.NODE_ENV === 'production')
{
    var dbURI = 'mongodb://heroku_htqtwj5x:ofi4732thkpivhc2fr8oi8dkff@ds147900.mlab.com:47900/heroku_htqtwj5x';
}
mongoose.connect(dbURI);

// Monitoring the state of the mongoose connection 
// CONNECTION EVENTS: connected, error, disconnected 
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

// For app termination
// listen for events on main node app 
process.on('SIGINT', function() {
    gracefulShutdown('app termination', function() {
            // kills node process (main process)
            process.exit(0);
    });
});
var gracefulShutdown = function(msg, callback) {
    
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

//For Heroku app termination
process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app shutdown', function() {
        process.exit(0);
    });
});

require('./userinfo');