var expect = require('chai').expect;
var VirusTotal = require('../src/index.js');
var sinon = require('sinon');
var request = require('request');
// var Car = require('../experimental/index.js');

it ('hash safe.txt', function (done){
	var someCallback = function(error, something){
		expect(something).to.equal('6adccd5984f137482b32fbea59d69ae2e184b28b0b4d40db85e9fa350add4d57');
		done();
	};
	VirusTotal.createHash('test/files/safe.txt', someCallback);
});

describe('virusTotalObj', function () {
	var virusTotalObj;
	before(function () {
		virusTotalObj = new VirusTotal('fake api key');
	});

	describe('getFileScanReport Invalid resourceId', function () {
		before(function () {
			sinon
				.stub(request, 'post')
				.yields(null, {statusCode: 200}, '{"response_code": 0}');
		});

		after(function () {
			request.post.restore();
		});

		it ('get invalid file result', function (done){
			var callback = function (error, data) {
				// console.log(data);
				expect(data.response_code).to.equal(0);
				done();
			};

			virusTotalObj.getFileScanReport('some resourceId', callback);
		});
	});

	describe('getFileScanReport Valid resourceId', function () {
		before(function () {
			sinon
				.stub(request, 'post')
				.yields(null, {statusCode: 200}, '{"response_code": 1}');
		});

		after(function () {
			request.post.restore();
		});

		it ('get valid file report', function (done) {
			var callback = function (error, data) {
				expect(data.response_code).to.equal(1);
				done();
			};

			virusTotalObj.getFileScanReport('valid resourceId', callback);
		});
	});
});



// it ('canary test', function () {
// 	expect(1).to.equal(1);
// });
//
// describe('Car', function () {
// 	it ('red car', function () {
// 		var redCar = new Car("red");
// 		expect(redCar.color).to.equal('red');
// 	});
//
// 	describe('car.drive', function () {
// 		var car;
// 		before(function () {
// 			car = new Car('purple');
// 		});
//
// 		it ('miles driven 1000', function () {
// 			// var car = new Car('purple');
// 			car.drive(1000);
// 			expect(car.miles).to.equal(1000);
// 		});
//
// 		it ('mile driven 100', function () {
// 			// var car = new Car('purple');
// 			car.drive(100);
// 			expect(car.miles).to.equal(1100);
// 		});
// 	});
//
// 	describe('car.addWheels', function () {
// 		var car;
// 		before(function () {
// 			car = new Car('red');
// 		});
//
// 		it ('add 1 wheel', function (done) {
// 			var callbackFunc = function () {
// 				expect(car.wheels).to.equal(5);
// 				done();
// 			};
//
// 			car.addWheels(1, callbackFunc);
// 		});
//
// 		it ('add 5 wheels', function (done) {
// 			var callbackFunc = function () {
// 				expect(car.wheels).to.equal(10);
// 				done();
// 			};
//
// 			car.addWheels(5, callbackFunc);
// 		});
// 	});
// });
