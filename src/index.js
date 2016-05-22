var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// });


var options = {
	url:'https://www.virustotal.com/vtapi/v2/file/report',
	form: {
		apikey:'apikey',
		resource: '52d3df0ed60c46f336c131bf2ca454f73bafdc4b04dfa2aea80746f5ba9e6d1c'
	}
};

// TODO: move the function into its own variable
request.post(options, function(err,httpResponse,body){
	if (!err && httpResponse.statusCode == 200) {
    console.log(JSON.parse(body));
  }
});

// class VirusTotal {
// 	static foo () {
// 		return 'canary';
// 	}
// 	static add (num1,num2) {
// 		return num1+num2;
// 	}
// 	static subtract (num1, num2) {
// 		return num1-num2;
// 	}
// }
//
// module.exports = VirusTotal;
