const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/test', (req, res) => res.send('Hello Test!'));
app.post('/test', (req, res) => {
	//make the call to mongodb
	//Movies.find()
	res.json({ test: 'test' });
});
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
