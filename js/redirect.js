(function($) {
	var PATH = location.pathname;
	var HASH = location.hash;
	var URL_SPACE = '_';	

	// API page with some old hash
	if (PATH === '/api/' && (HASH.indexOf('introduction') >= 0 || HASH.indexOf('reference') >= 0)) {
		var newPath = convertHashToPath(HASH);

		redirect('http://ewandennis.github.io/staticapi' + newPath);
	}

})(jQuery);


function redirect(url) {
	console.log(url);
	// window.location.replace(url);
}

function convertHashToPath(hash) {
	var hashPath = hash.substring(2);
	
	var endpoint = getEndpoint(hashPath);

	return (PATH + endpoint).replace(/-|_/, URL_SPACE);
}

function getEndpoint(hashPath) {
	var firstSlash  = hashPath.indexOf('/') + 1;
	var secondSlash = hashPath.substring(firstSlash).indexOf('/');
	    secondSlash = secondSlash == -1 ? hashPath.length : firstSlash + secondSlash;

	return hashPath.substring(firstSlash, secondSlash) + URL_SPACE + 'api';
}