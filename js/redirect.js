(function($) {
  var PATH = location.pathname
    , HASH = location.hash
    , EXTENSION = ''
    , PATH_SPACE = '-'
    , HASH_SPACE = '-'
    , customRedirects;

  customRedirects = {
    '#header-subaccounts': '/api/subaccounts#header-introduction',
    '#header-terminology': '/api/subaccounts#header-terminology',
    '#header-managing-subaccount-data-as-a-service-provider': '/api/subaccounts#header-managing-subaccount-data-as-a-service-provider',
    '#header-managing-master-account-data-as-a-service-provider': '/api/subaccounts#header-managing-master-account-data-as-a-service-provider'
  };

  // check if we are on the API page with an Apiary hash
  if ((PATH === '/api/' || PATH === '/api/index' || PATH === '/api/index.html') && (HASH.indexOf('introduction') >= 0 || HASH.indexOf('reference') >= 0)) {
    var newPath = convertHashToPath(HASH);

    redirect(location.protocol + '//' + location.host + PATH + newPath);
  } else if ((PATH === '/api/' || PATH === '/api/index' || PATH === '/api/index.html')) {
    if (HASH in customRedirects) {
      redirect(location.protocol + '//' + location.host + customRedirects[HASH]);
    }
  }


  function redirect(url) {
    window.location.replace(url);
  }

  function convertHashToPath(hash) {
    var hashPath = hash.substring(2);
    var type     = getType(hashPath);
    var endpoint = getEndpoint(hashPath);
    var method   = getMethod(hashPath);
    var path     = customMapping(type, endpoint, method);

    if (path.length > 0)
      return path;

    switch (type) {
      case 'introduction':
        // add endpoint
        path = buildHash('#header-' + (method || endpoint));
        break;

      case 'reference':
        // add endpoint
        path = buildPath(endpoint);

        // add method if it has one
        if (method.length > 0)
          path += buildHash('#' + endpoint + HASH_SPACE + method);

        break;
    }

    return path;
  }


  /**
   * returns the a unique path if nesseseary
   * default returns a blank string
   */
  function customMapping(type, endpoint, method) {
    var path = '';
    switch (endpoint) {
      case 'substitutions-reference':
        // add endpoint
        path += buildPath(endpoint);

        // add header if it has one
        if (method.length > 0)
          path += buildHash('#header-' + method);

        break;

      case 'relay-webhooks':
        if (method === 'retrieve-update-and-delete') {
          path  = buildPath(endpoint);
          path += buildHash('#' + endpoint + HASH_SPACE + 'retrieve,-update,-and-delete');
        }
        break;

      case 'sending-domains':
        if (method === 'retrieve-update-and-delete') {
          path  = buildPath(endpoint);
          path += buildHash('#' + endpoint + HASH_SPACE + 'retrieve,-update,-and-delete');
        }
        break;

      case 'suppression-list':
        if (method === 'bulk-insertupdate') {
          path  = buildPath(endpoint);
          path += buildHash('#' + endpoint + HASH_SPACE + 'bulk-insert-update');
        }
        else if (method === 'retrieve-delete') {
          path  = buildPath(endpoint);
          path += buildHash('#' + endpoint + HASH_SPACE + 'retrieve,-delete');
        }
        break;

      case 'tracking-domains':
        if (method === 'retrieve-update-and-delete') {
          path  = buildPath(endpoint);
          path += buildHash('#' + endpoint + HASH_SPACE + 'retrieve,-update,-and-delete');
        }
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

  function buildPath(endpoint) {
    return (endpoint + EXTENSION).replace(/-|_/g, PATH_SPACE);
  }

  function buildHash(hash) {
    return hash.replace(/-|_/g, HASH_SPACE).replace('email-rfc822', 'email_rfc822');
  }

})(jQuery);
