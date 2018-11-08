const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	username: { type: String, unique: true },
	password: String,
	email: String,
});

module.exports = mongoose.model('User', UserSchema);
