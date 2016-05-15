var expect = require('chai').expect;
var VirusTotal = require('../src/index.js');

describe('canary', function () {
	it ('canary test', function () {
		expect(1).to.equal(1);
	});

	it ('canary function', function () {
		expect(VirusTotal.foo()).to.equal("canary");
	});
});

describe('VirusTotal.add', function () {
	it('test add function', function(){
		expect(VirusTotal.add(2,3)).to.equal(5);
	});
	it('test add function 2', function(){
		expect(VirusTotal.add(-15,25)).to.equal(10);
	});
});

describe('VirusTotal.subtract', function () {
	it('test subtract function', function(){
		expect(VirusTotal.subtract(3,2)).to.equal(1);
	});
	it('the other subtract function I guess', function(){
		expect(VirusTotal.subtract(-20,25)).to.equal(-45);
	});
});
