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
});

describe('VirusTotal.subtract', function () {
	it('test subtract function', function(){
		expect(VirusTotal.subtract(3,2)).to.equal(1);
	});
});
