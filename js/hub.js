(function($) {
  // track page view
  mixpanel.track("View page", {
    "title": $(document).find("title").text()
  });

  // track nav links
  mixpanel.track_links("#nav a", "Click nav link", function(element) {
    return {
      "text": $(element).text(),
      "referrer": document.referrer
    };
  });

  // track code sample viewing
  $("#code-examples a").click(function() {
    var aTag = $(this);
    var language = aTag.data("mp-language");
    mixpanel.track("View code sample", {
      "language": language
    });
  });

  // track sign up clicks
  mixpanel.track_links(".mp-signup", "Click sign up link", function(element) {
    return {
      "text": $(element).text(),
      "referrer": document.referrer
    };
  });

  // track library clicks
  mixpanel.track_links("#list-libraries a", "Click client library link", function(element) {
    return {
      "name": $(element).data("mp-library"),
      "referrer": document.referrer
    };
  });

  // track samples/integrations clicks
  mixpanel.track_links("#list-samples a", "Click sample or integration link", function(element) {
    return {
      "name": $(element).text(),
      "referrer": document.referrer
    };
  });

  // track events clicks
  mixpanel.track_links("#list-events a", "Click event link", function(element) {
    return {
      "name": $(element).text(),
      "referrer": document.referrer
    };
  });

  // track blog post clicks
  mixpanel.track_links("#list-posts a", "Click blog post link", function(element) {
    return {
      "name": $(element).text(),
      "referrer": document.referrer
    };
  });
})(jQuery);
