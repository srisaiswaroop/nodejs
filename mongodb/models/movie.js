const mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
	name: { type: String, unique: true },
	year: Number,
	cast: [{ name: String, role: String, charectername: String }],
});

module.exports = mongoose.model('Movie', movieSchema);
