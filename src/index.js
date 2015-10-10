var uniqueRandomArray = require('unique-random-array');
var nflNames = require('./nfl-team-names.json');
var getRandomName = uniqueRandomArray(nflNames);

module.exports = {
	all: nflNames,
	random: random
};

function random(number) {
	if( number === undefined ) {
		return getRandomName();
	} else {
		var randomNames = [];
		for (var i = 0; i < number; i++) {
			randomNames.push(getRandomName());
		}
		return randomNames;
	}
}
