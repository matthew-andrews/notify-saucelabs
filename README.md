# notify-saucelabs

Install:-

```
npm install --save-dev notify-saucelabs
```

Example:-

```js
require('isomorphic-fetch');
var notifiySaucelabs = require('notify-saucelabs');

module.exports = {

	// tests go here
	
	tearDown: function(callback) {
		notifySaucelabs({
			accessKey: this.client.sessionId,
			passed: this.results.failed === 0
		})
		.then(callback);
	}
}
```

Note: depends on [`isomorphic-fetch`](https://github.com/matthew-andrews/isomorphic-fetch/)
