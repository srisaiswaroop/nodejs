const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const handlers = require('./handlers.js');
const app = express();
const port = 4444;

mongoose.connect('mongodb://localhost/test');

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', handlers.authentication);

app.get('/', (req, res) => res.send('Authentication Example!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
