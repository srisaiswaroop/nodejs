const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const handlers = require('./handlers.js');
const app = express();
const port = 4444;

mongoose.connect('mongodb://localhost/test');

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//middleware to verify token
app.use(function(req, res, next) {
	console.log(req.path);
	console.log('I am in the middleware');
	if (req.path == '/login') {
		next();
	} else {
		//verify the token
		var token = req.body.token || req.query.token || req.headers['x-access-token'];

		if (token) {
			try {
				var verified = jwt.verify(token, 'mysecretkey');
				//check for expiry inside the data.
			} catch (e) {
				res.json({
					message: 'malformed token',
				});
			}

			console.log(verified);
			if (verified && verified.iat < +Date.now()) {
				next();
			} else {
				res.json({
					message: 'invalid token',
				});
			}
		} else {
			res.json({
				message: 'missing token',
			});
		}
	}
});

app.post('/login', handlers.authentication);

app.get('/secureapi', handlers.secureapi);

app.get('/', (req, res) => res.send('Authentication Example!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
