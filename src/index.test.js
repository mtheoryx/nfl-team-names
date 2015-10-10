var expect = require('chai').expect;
var nflNames = require('./index');

describe('nfl-names', function() {
	describe('all', function() {
		it('should be an array of strings', function() {
			expect(nflNames.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array) {
				return array.every(function (item) {
					return typeof item === 'string';
				})
			}
		});

		it('should always include the Indianpolis Colts', function() {
			"use strict";
			expect(nflNames.all).to.include('Colts');
		});
	});

	describe('random', function() {
		it('should return a random item from the nflNames.random', function() {
			var randomItem = nflNames.random();
			expect(nflNames.all).to.include(randomItem);
		});
	});
});