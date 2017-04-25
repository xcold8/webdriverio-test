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
		.url('http://jango.com/')
		.pause(3500)
		.click('a[href="/music/The+Chainsmokers"]')
		.pause(3000)
		.click('a[id="btn-playpause"]')
		.pause(3000)
		.click('a[id="btn-playpause"]')
		.pause(10000)
 		.driver.end();

	});
 		//.pause(2500)
 		//.setValue('input[ng-model="login_form.password"]', 'xmen4ever')
 		//.pause(2000)
 		//.click('div[ng-click="login()"]')
 		//.pause(5000)


// 		.setValue('input[ng-model="login_form.signup_password"]', 'Ab123456')
// 		.pause(3000)
// 		.click('div[ng-click="signup()"]')
// 		.pause(5000)
// 		.getTitle()
// 		.then(function(ttl){
// 			console.log('title is ' + ttl);
// 			console.log('ending in 3s...');
// 			driver
// 				.pause(3000)
// 				.end();
// 		})
// 		.catch(function(err){
// 			console.log('Error: ' + err);
// 			driver.end();
// 		});
