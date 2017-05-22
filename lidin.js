var webdriverio = require('webdriverio');

var options = {
		desiredCapabilities: {
	        browserName: 'chrome',
	    }
	};

var driver = webdriverio.remote(options);
var sPagesIdx = 1;
var listIdx = 0;
var list = ['Nir'];
var totalCounter = 0;
var fcallback = function(result){
		totalCounter = totalCounter + result;
		console.log('Current Total Count '+totalCounter);
		driver
			.scroll(0,600)
			.pause(3300)
			.click('button.next').then(function(){
				sPagesIdx++;
			}).pause('3500').then(function(){
				resPerPage(fcallback);
			});
};

console.log('starting...');
function resPerPage(callback){
	driver
		.isExisting('button.next').then(function(res){
			if (res !== true){
				driver
					.elements('li.search-result').then(function(resp){
						var lastPageCt = resp.value.length;
						totalCounter = totalCounter + lastPageCt;
						console.log('this is the last page, finishing up...');
						console.log('Total '+totalCounter);
						return;
					});
			}
			
			else {
				driver
	 				.elements('li.search-result').then(function(resp){
	 					var pageCt = resp.value.length;
	 					callback(pageCt);
	 				});
			}		
		});
}

function getSearchPages(name, callback){
	var pageIdx = 1;
	driver
		.url('http://www.linkedin.com')
		.pause(3500)
		.setValue('#login-email', 'qwasd324fdg@gmail.com')
		.pause(2500)
		.setValue('#login-password', 'LC4FB8raMo')
		.pause(3000)
		.click('#login-submit')
		.pause(4000)
		.setValue('.nav-search-bar input', name)
		.pause(3500)
		.click('button[class="nav-search-button"]')
		.pause(3200)
		.click('h3=Keywords')
		.pause(3000)
		.setValue('#advanced-search-first-name', name)
		.pause(2000)
		.setValue('#advanced-search-title', 'Web Developer')
		.pause(2500)
		.click('button.submit-button')
		.pause(4000)
		.element('.results-paginator ol li').then(function(results){
			if (results.state == "failure"){
				console.log('there is only one page with results, getting number of results, this may take a moment...');
				driver
					.elements('li.search-result').then(function(resultNum){
						console.log('There were '+resultNum.value.length+ 'for ' +name);
					});
			}
			else {
				resPerPage(fcallback);
			 }
		});
}

function main(){
	if (listIdx >= list.length){
		console.log('done');
		return;
	} 
	else {
		getSearchPages(list[listIdx], function(results){

		});
	}
 }

driver
	.init()
	.then(function(){
		console.log('started...');
		main();
	});

//Need to save each name and include all profile text that appears upon search results query
//Transmit data to the database and make sure it has been stored.
//Access the database and get a piece of information for testing purposes