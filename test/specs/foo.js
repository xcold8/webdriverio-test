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
		.url('http://www.basparts.com')
		.pause(3500)
		.setValue('#search-input', '21300289')
		.pause(2500)
		.click('#part-search-button')
		.pause(3000)
		.click('#searchContainer .newlistingblock .data a')
		.pause(3500)
		.driver.end();


		//.getText('#main div.str3s_txt').then(function(text_ex){
			//console.log(text_ex);
		//});
	});
