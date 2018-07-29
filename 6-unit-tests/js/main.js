/**
 Very useful function for friendly people
*/
function helloThere() {
	var helloThere = 'Hello there!';
	return helloThere;
}

// workaround for unit testing
// Export node module.
if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = helloThere;
}
