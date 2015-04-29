'use strict';

module.exports = function(opts) {
	var username = opts.username || process.env.SAUCE_USER;
	var accessKey = opts.accessKey || process.env.SAUCE_KEY;
	var passed = opts.passed || false;
	return fetch('https://saucelabs.com/rest/v1/' + username + '/jobs/' + opts.sessionId, {
		method: 'PUT',
		headers: {
			'Authorization': 'Basic ' + new Buffer(username + ':' + accessKey).toString('base64'),
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			passed: passed
		})
	});
};
