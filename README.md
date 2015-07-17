# notify-saucelabs

Example:-

```js
tearDown: function(callback) {
	notifySaucelabs({
		accessKey: this.client.sessionId,
		passed: this.results.failed === 0
	})
	.then(callback);
}
```

Note: depends on [`isomorphic-fetch`](https://github.com/matthew-andrews/isomorphic-fetch/)
