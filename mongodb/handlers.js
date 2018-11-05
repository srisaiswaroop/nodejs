const Movie = require('./models/movie.js');

const getMovie = async (req, res) => {
	//get the route param for Id
	console.log(req.params);
	let id = req.params.id;
	//call Movie model to find the document with id.
	let result = await Movie.find({ _id: id });
	res.json(result);
};

const postMovie = async (req, res) => {
	let body = req.body;
	console.log(body);
	//make the call to mongodb
	let result = await Movie.create(body);
	console.log('result', result);
	res.json(result);
};

const putMovie = (req, res) => {};

const deleteMovie = (req, res) => {};

const getMovieList = (req, res) => {};

//prettier
module.exports = {
	getMovie,
	postMovie,
	putMovie,
	deleteMovie,
	getMovieList,
};
