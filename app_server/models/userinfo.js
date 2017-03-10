var mongoose = require("mongoose");

var detailsSchema = new mongoose.Schema({
    level: { levelNum: Number, levelName: String },
    favGames: [String]
});

var userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    details: {type: detailsSchema, required: false }
});

mongoose.model('User', userSchema, 'users');