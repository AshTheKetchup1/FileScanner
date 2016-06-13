var expect = require('chai').expect;
var VirusTotal = require('../src/index.js');
// var Car = require('../experimental/index.js');

it ('hash safe.txt', function (done){
	var someCallback = function(error, something){
		expect(something).to.equal('6adccd5984f137482b32fbea59d69ae2e184b28b0b4d40db85e9fa350add4d57');
		done();
	};
	VirusTotal.createHash('test/files/safe.txt', someCallback);
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
