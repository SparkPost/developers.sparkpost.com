(function($) {
  $.support.cors = true;

  var charityURL = $("meta[property='rwc_base_url']").attr('content') + '/summary/charity'
    , btnResults = $("#btn-show-results")
    , dataContainer = $("#data-container")
    , dataARC = $("#data-arc")
    , dataAHA = $("#data-aha")
    , dataLLS = $("#data-lls")
    ;

  // hide the container for the voting stats initially
  dataContainer.hide();

  // retrieve reults from API
  function getResults() {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: charityURL,
      crossDomain: true,
      success: function(data, textStatus, jqXHR) {
        if ('results' in data) {
          var results = {
            "American Red Cross": 0,
            "American Heart Association": 0,
            "Leukemia Lymphoma Society": 0
          };

          $.each(data.results, function(index, item) {
            results[item.subject] = item.count;
          });

          dataARC.text(results["American Red Cross"]);
          dataAHA.text(results["American Heart Association"]);
          dataLLS.text(results["Leukemia Lymphoma Society"]);
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error("Could not retrieve results", errorThrown);
      }
    });
  }

  // toggle the display of the results
  function toggleResults() {
    if (dataContainer.hasClass("hide")) {
      dataContainer.removeClass("hide");
      dataContainer.slideDown(250, function() {
        btnResults.text("Hide Results");
      });
    } else {
      dataContainer.slideUp(250, function() {
        dataContainer.addClass("hide");
        btnResults.text("Show Results");
      });
    }
  }

  getResults();
  setInterval(getResults, 5000);
  btnResults.on('click', toggleResults);
})(jQuery);
