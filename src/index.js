var uniqueRandomArray = require('unique-random-array');
var nflNames = require('./nfl-team-names.json');

module.exports = {
	all: nflNames,
	random: uniqueRandomArray(nflNames)
};