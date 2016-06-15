var request = require('request');
var fs = require('fs');
var path = require('path');
var crypto = require('crypto');

//TODO: Export the VirusTotal class. Make it usable in other files

class VirusTotal{
	constructor(apikey){
		this.apikey = apikey;
	}


	// TODO: Implement the rest of the VirusTotal API
	static createHash(filePath,callback){
		var hash = crypto.createHash('sha256');
		var input = fs.createReadStream(filePath);
		var stream = input.pipe(hash);
		stream.on('finish',function(){
			callback(null,hash.read().toString('hex'));
		});
	}

	requestDotPost(stuff, callback){
		request.post(stuff, function(err,httpResponse,body){
			if (err) {
		    callback(err);
		  }
			else if(httpResponse.statusCode != 200){
				var error = new Error('statusCode!=200');
				callback(error);
			}
			else{
				callback(err,JSON.parse(body));
			}
		});
	}

	scanFile(filePath,callback){
		var stuff = {
			url:'https://www.virustotal.com/vtapi/v2/file/scan',
			formData: {
				apikey: this.apikey,
				file: ("file", path.basename(filePath), fs.createReadStream(filePath))
			}
		};
		this.requestDotPost(stuff,callback);
	}

	getFileScanReport(resourceId,callback){
		var stuff = {
			url:'https://www.virustotal.com/vtapi/v2/file/report',
			form: {
				apikey:this.apikey,
				resource: resourceId
			}
		};
		this.requestDotPost(stuff,callback);
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
		this.requestDotPost(stuff,callback);
	}
}


// var someName = new VirusTotal('apikey');
//someName.getFileScanReport('6adccd5984f137482b32fbea59d69ae2e184b28b0b4d40db85e9fa350add4d57', testCallbackFunct);
//someName.getURLScanReport("http://www.youtube.com", testCallbackFunct);
//someName.scanFile('test/files/safe.txt',testCallbackFunct);
// VirusTotal.createHash('test/files/safe.txt',testCallbackFunct);

module.exports = VirusTotal;
