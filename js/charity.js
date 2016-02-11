(function($) {
  $.support.cors = true;

  var charityURL = $("meta[property='rwc_base_url']").attr('content') + '/summary/charity'
    , btnResults = $("#btn-show-results")
    , dataContainer = $("#data-container")
    , dataARC = $("#data-arc")
    , dataAHA = $("#data-aha")
    , dataLLS = $("#data-lls")
    ;

  dataContainer.hide();

  btnResults.on('click', function() {
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

          dataContainer.removeClass("hide");
          dataContainer.slideDown(250);
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {

      }
    });
  });
})(jQuery);
