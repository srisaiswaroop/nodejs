const mongoose = require('mongoose');
const Movie = require('./models/movie.js');

mongoose.connect('mongodb://localhost/test');
// let baahubali = new Movie({
// 	name: 'Baahubali - The conclusion',
// 	year: 2017,
// 	cast: [{ name: 'Prabhas', role: 'lead', charectername: 'Mahendra baahubali, Siva, Amarendra baahubali' }],
// });

// baahubali
// 	.save()
// 	.then(data => {
// 		console.log('data : ', data);
// 	})
// 	.catch(err => {
// 		console.log('error is : ', err);
// 	});
//or

// Movie.create({
// 	name: 'The Dark Knight',
// 	year: 2008,
// 	cast: [{ name: 'Christian Bale', role: 'lead', charectername: 'Bruce Wayne' }],
// })
// 	.then(data => console.log(data))
// 	.catch(err => console.error(err));

// Movie.create(
// 	{
// 		name: 'The Dark Knight',
// 		year: 2008,
// 		cast: [{ name: 'Christian Bale', role: 'lead', charectername: 'Bruce Wayne' }],
// 	},
// 	function(err, data) {
// 		console.log(err, data);
// 		}
// );

Movie.find({ year: 2008 }).then(items => console.log(items));
