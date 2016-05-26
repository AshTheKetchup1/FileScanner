var request = require('request');
class VirusTotal{
	constructor(apikey){
		this.apikey = apikey;
	}

	getFileScanReport(resourceId,callback){
		var stuff = {
			url:'https://www.virustotal.com/vtapi/v2/file/report',
			form: {
				apikey:this.apikey,
				resource: resourceId
			}
		};
		request.post(stuff, function(err,httpResponse,body){
			if (!err && httpResponse.statusCode == 200) {
		    callback(err,JSON.parse(body));
		  }
		});
	}

	getURLScanReport(resourceId,callback){
		var stuff = {
			url:'http://www.virustotal.com/vtapi/v2/url/report',
			form: {
				apikey:this.apikey,
				resource: resourceId,
				scan: "1"
			}
		};
		request.post(stuff, function(err,httpResponse,body){
			if (!err && httpResponse.statusCode == 200) {
		    callback(err,JSON.parse(body));
		  }
		});
	}
}

var testCallbackFunct = function(err, data){
	console.log(data);
}

var someName = new VirusTotal('30f431b8ac4a160a0bc1816b73489766e23ce9ffd5954ca2706d4aa352ad7204');
//someName.getFileScanReport('52d3df0ed60c46f336c131bf2ca454f73bafdc4b04dfa2aea80746f5ba9e6d1c', testCallbackFunct);
someName.getURLScanReport("http://www.virustotal.com", testCallbackFunct);
// var options = {
// 	url:'https://www.virustotal.com/vtapi/v2/file/report',
// 	form: {
// 		apikey:'30f431b8ac4a160a0bc1816b73489766e23ce9ffd5954ca2706d4aa352ad7204'
// ,
// 		resource: '52d3df0ed60c46f336c131bf2ca454f73bafdc4b04dfa2aea80746f5ba9e6d1c'
// 	}
// };
//
// // request.post(options, function(err,httpResponse,body){
// // 	if (!err && httpResponse.statusCode == 200) {
// //     console.log(JSON.parse(body));
// //   }
// // });
//
// var printToScreen = function (err, data) {
// 	if (err) throw err;
// 	console.log(data);
// }
//
// var getScanResult = function (options, callback) {
// 	// TODO: Fill in the rest here.
// 	// I should be able to call getScanResult(options, printToScreen);
// 	request.post(options, function(err,httpResponse,body){
// 		if (!err && httpResponse.statusCode == 200) {
// 	    callback(err,JSON.parse(body));
// 	  }
// 	});
// }
//
// var getDetectionPercentage = function (err, data){
// 	if (err) throw err;
// 	console.log("Detection Percentage = " + data.positives/data.total);
// }
//
// //var programName = 'Malwarebytes';
// var getResultForProgram = function (programName){
// 	var innerFunct = function (err, data){
// 		if (err) throw err;
// 		console.log("result for " + programName + " = " + data.scans[programName].result);
// 	}
// 	return innerFunct;
// }
//
// var someFunct = getResultForProgram('Avast');
// getScanResult(options, someFunct);
