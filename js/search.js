(function($, algolia, autocomplete) {
  function initSearch() {
    var client = algolia('SFXAWCYDV8', '9ba87280f36f539fcc0a318c2d4fcfe6');
    var index = client.initIndex('APIDocsProd');

    autocomplete('#searchFld', {
      autoselect: true,
      hint: false,
      debug:true
    }, [{
      source: autocomplete.sources.hits(index, {hitsPerPage: 10}),
      templates: {
        suggestion: formatSearchResult
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

    // Hitting '/' puts focus on the search field
    $(document).on('keypress', function(evt) {
      var targetElt = evt.target.tagName.toLowerCase();
      if (evt.which == 47 && ['input', 'textarea'].indexOf(targetElt) < 0) {
        $('#searchFld').focus();
        evt.preventDefault();
      }
    });
  }

  function formatSearchResult(suggestion) {
    var suggBody;

    if (suggestion.actionName) {
      var section = suggestion.resGroupName;
      if (suggestion.actionName == section) {
        section = suggestion.resName;
      }
      suggBody = suggestion.actionName + '<div class="suggestion-section">' + section + '</div>';
    } else if (suggestion.resName) {
      suggBody = suggestion.resName + '<div class="suggestion-section">' + suggestion.resGroupName + '</div>';
    } else if (suggestion.resGroupName) {
      suggBody = suggestion.resGroupName + '<div class="suggestion-section">SparkPost API</div>';
    } else {
      suggBody = suggestion.sectionName + '<div class="suggestion-section">SparkPost API</div>';
    }

    return '<a href="' + suggestion.objectID + '">' + suggBody + '</a>';
  }

  $(initSearch);
})(jQuery, algoliasearch, autocomplete);

