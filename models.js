var mongoose = require('mongoose');
var schema = new mongoose.Schema({
	name: 'string',
	urls: [Array],
});
var Profile = mongoose.model('Profile', schema);

module.exports = Profile;