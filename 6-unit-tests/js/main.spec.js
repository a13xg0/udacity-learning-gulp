let helloThere = require ('./main.js');

describe('Testing plesant', function() {
	it ('should be polite', function () {
		expect(helloThere()).toEqual('Hello there!');
	});
});
