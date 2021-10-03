const path = require('path');
const services = require(path.join(__dirname, 'sites.json'));
const { get } = require("request")
const request = require("request")
var username = "USERNAME"

//Checks and logs if each social media has a profile.
Object.keys(services).forEach(key => {
		const url = services[key].replace('{}', username);
		request.get(url).on('response', function (response) {
		if (response.statusCode === 200) {
			console.log(`✅ ${url}`);
		} else {
			console.log(`❌ ${url}`);			
		}

	})
})
