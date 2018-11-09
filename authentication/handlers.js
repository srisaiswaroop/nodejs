const User = require('./models/user.js');
const jwt = require('jsonwebtoken');

const authentication = async (req, res) => {
	let body = req.body;
	// let username = body.username;
	// let password = body.password
	let { username, password } = body; // destructuring

	console.log(body);
	//make the call to mongodb
	let user = await User.findOne({
		username: username,
	});

	if (user.password === password) {
		res.json({
			message: 'Succesfully logged in',
			token: jwt.sign(JSON.parse(JSON.stringify(user)), 'mysecretkey'),
		});
	} else {
		res.json({
			message: 'Failed to login in. Please enter valid credentials',
		});
	}
	console.log('user', user);
	// res.json(user);
};

const secureapi = async (req, res) => {
	res.json({
		message: 'your token is valid and you are able to access the secure api',
	});
};

module.exports = {
	authentication,
	secureapi,
};
