var webdriverio = require('webdriverio');

var options = {
		desiredCapabilities: {
	        browserName: 'chrome',
	    }
	};

var driver = webdriverio.remote(options);
console.log('starting...');
var list = ['Yossi Cohen', 'Avi Levi', 'Ben Orsula', 'Kobi Ben Shushan'];
var listIdx = 0;


/* Given a list of keywords, looping through each one by its index and pass them on 
to getSocialUrl function, it has to be one keyword at a time!!!! */
function main(){
	driver.init().then(function(){
		console.log('driver initiated...');
		if (listIdx >= list.length){
			console.log('DONE');
			return;
		} else {
			try {
				getSocialUrl(list[listIdx], function(results){
					console.log('the url list for'+' '+list[listIdx]+':');
					console.log('2:'+results);
					listIdx++;	
			});
				main();
		  	} catch(err){
		  		console.log(err);
		  	  }
		 }
  });
}
main();
/* Typing a single keyword from the list in Google and then pressing on the
search button, then getting the facebook urls
this happens recursively until it reaches the last index */
function getSocialUrl(fullname, callback){
	driver
		.url('http://www.google.com')
		.pause(3500)
		.setValue('#lst-ib', fullname +' '+ 'Facebook')
		.pause(3500)
		.click('button[value="Search"]')
		.pause(4000)
		.getText('#res div[style] cite')
		.then(function(urls){
			console.log('1:'+urls);
			callback(urls);
		});
}