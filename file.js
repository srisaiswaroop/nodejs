var fs = require('fs');

// var filecontent = fs.readFileSync('./helloworld.js', 'utf-8');
// console.log(filecontent);

fs.readFile('./helloworld.js', function(err, data) {
	console.log('err is', err);
	console.log('data is', data);
});
