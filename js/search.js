(function($, algolia, autocomplete) {
  function initSearch() {
    var client = algolia('SFXAWCYDV8', '9ba87280f36f539fcc0a318c2d4fcfe6');
    var index = client.initIndex('APIDocsDev');

    autocomplete('#searchFld', {
      hint: false,
      debug:true
    }, [{
      source: autocomplete.sources.hits(index, {hitsPerPage: 10}),
      templates: {
        suggestion: function(suggObj) {
          var ret = formatSearchResult(suggObj);
          return ret;
        }
      }
    }]).on('autocomplete:selected', function(event, suggestion, dataset) {
      if (suggestion.element == 'resourceGroup') {
        window.location.href = suggestion.objectID.split('#')[0];
      } else {
        window.location.href = suggestion.objectID;
      }
    });

    // Algolia relocates the search field under a hard-coded span which we cannot customise easily.
    // This workaround lets us add nodes to that subtree without forking algolia-autocomplete
    $('<i id="searchBadge" aria-hidden="true" class="fa fa-search"></i>').insertAfter('#searchFld');
  }

  function formatSearchResult(suggestion) {
    if (suggestion.actionName) {
      var section = suggestion.resGroupName;
      if (suggestion.actionName == section) {
        section = suggestion.resName;
      }
      return suggestion.actionName + '<div class="suggestion-section">' + section + '</div>';
    } else if (suggestion.resName) {
      return suggestion.resName + '<div class="suggestion-section">' + suggestion.resGroupName + '</div>';
    } else if (suggestion.resGroupName) {
      return suggestion.resGroupName + '<div class="suggestion-section">SparkPost API</div>';
    }
    return suggestion.sectionName + '<div class="suggestion-section">SparkPost API</div>';
  }

  $(initSearch);
})(jQuery, algoliasearch, autocomplete);

