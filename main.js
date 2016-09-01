'use strict';

module.exports = function(opts) {
	var username = opts.username || process.env.SAUCE_USER;
	var accessKey = opts.accessKey || process.env.SAUCE_KEY;
	var body = {
		passed: opts.passed || false,
		tags: opts.tags || []
	};
	return fetch('https://saucelabs.com/rest/v1/' + username + '/jobs/' + opts.sessionId, {
		method: 'PUT',
		headers: {
			'Authorization': 'Basic ' + new Buffer(username + ':' + accessKey).toString('base64'),
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});
};
