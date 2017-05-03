var webdriverio = require('webdriverio');

var options = {
		desiredCapabilities: {
	        browserName: 'chrome',
	    }
	};

var driver = webdriverio.remote(options);

console.log('starting...');

driver.init().then(function(){

	console.log('driver initiated...');
	driver
		.url('http://www.google.com')
		.pause(3500)
		.setValue('input[id="lst-ib"]', 'djdo@walla.com')
		.pause(3000)
		.click('button[id="_fZl"]')
		.pause(4000)
		.getAttribute('=Open Tour', 'href').click()
		.pause(3500)
 		.driver.end();
	});