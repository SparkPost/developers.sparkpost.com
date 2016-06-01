(function($) {
	var PATH = location.pathname, HASH = location.hash,  PATH_SPACE = '_', HASH_SPACE = '-';	

	// check if we are on the API page with an Apiary hash
	if ((PATH === '/api/' || PATH === '/api/index.html') && (HASH.indexOf('introduction') >= 0 || HASH.indexOf('reference') >= 0)) {
		var newPath = convertHashToPath(HASH);

		redirect('http://ewandennis.github.io/staticapi' + PATH + newPath);
	}


	function redirect(url) {
		console.log(url);
		// window.location.replace(url);
	}

	function convertHashToPath(hash) {
		var hashPath = hash.substring(2);
		var type     = getType(hashPath);
		var endpoint = getEndpoint(hashPath);
		var method   = getMethod(hashPath);
		var path     = ''; 

		switch (type) {
			case 'introduction':
				path = 'index.html';

				// add endpoint
				path += ('#header-' + (method || endpoint)).replace(/-|_/g, HASH_SPACE);
				break;

			case 'reference':
				// add endpoint
				path = (endpoint + PATH_SPACE + 'api.html').replace(/-|_/g, PATH_SPACE);

				// add method if it has one
				if (method.length > 0)
					path += ('#' + endpoint + HASH_SPACE + method).replace(/-|_/g, HASH_SPACE);

				break;
		}

		return path;
	}

	function getType(hashPath) {
		var parts = hashPath.split('/');

		return parts.length >= 1 ? parts[0] : '';
	}

	function getEndpoint(hashPath) {
		var parts = hashPath.split('/');

		return parts.length >= 2 ? parts[1] : '';
	}

	function getMethod(hashPath) {
		var parts = hashPath.split('/');

		return parts.length >= 3 ? parts[2] : '';
	}

})(jQuery);
