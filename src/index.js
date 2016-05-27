var request = require('request');
var fs = require('fs');
var path = require('path');
class VirusTotal{
	constructor(apikey){
		this.apikey = apikey;
	}

	// TODO: Implement the rest of the VirusTotal API
	// TODO: Can we reduce the amount of copy and paste?

	scanFile(filePath,callback){
		var stuff = {
			url:'https://www.virustotal.com/vtapi/v2/file/scan',
			formData: {
				apikey: this.apikey,
				file: ("file", path.basename(filePath), fs.createReadStream(filePath))
			}
		}
		request.post(stuff, function(err,httpResponse,body){
			if (!err && httpResponse.statusCode == 200) {
		    callback(err,JSON.parse(body));
		  }
		});
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

var someName = new VirusTotal('apikey');
someName.getFileScanReport('733f04a077cd0c0a1a9aa767ce4f4dcdd7de6b8c8ff3e3adc3f9bfb1cb7aeb48', testCallbackFunct);
//someName.getURLScanReport("http://www.virustotal.com", testCallbackFunct);
//someName.scanFile('test/files/safe.txt',testCallbackFunct);
