var geocoder = require('geocoder');


geocoder.geocode('Disneyland', function(err, data) {
	console.log(data.results[0].geometry.location);
});