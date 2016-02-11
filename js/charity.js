$.support.cors = true;

$(document).on('click', '#results_button', function() {
  var charity_url = $("meta[property='og:rwc_base_url']").attr('content') + '/summary/charity';
  var resultsDiv = $('<div></div>').attr('id', 'results_table');
  var x = $.ajax({
    type: 'GET',
    dataType: 'json',
    url: charity_url,
    crossDomain: true,
    success: function(data, textStatus, jqXHR) {
      if (data.results) {
        var subjectCounts = [];

        $.each(data.results, function(i, subjectCount) {
          if (subjectCount.subject && subjectCount.count) {
            subjectCounts.push([subjectCount.subject, subjectCount.count]);
          }
        });

        // Sort the tuples in descending order of vote-count
        subjectCounts.sort(function(a, b) {
            a = a[1];
            b = b[1];
            return b < a ? -1 : (b > a ? 1 : 0);
        });

        var headerRow = $('<tr></tr>');
        headerRow.append($('<th></th>').text('Charity'));
        headerRow.append($('<th></th>').text('# of votes'));
        var table = $('<table></table>').addClass('foo').append(headerRow);

        for (var i = 0; i < subjectCounts.length; i++) {
          var row = $('<tr></tr>').addClass('bar');
          row.append($('<td></td>').text(subjectCounts[i][0]));
          row.append($('<td></td>').text(subjectCounts[i][1]));
          table.append(row);
        }

        resultsDiv.append(table);
        $('#results_table').replaceWith(resultsDiv);
      }
      else {
        $('#results_table').replaceWith(resultsDiv.html('<p>No results yet!</p>'));
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      $('#results_table').replaceWith(resultsDiv.html('<p>An error occurred :(</p>'));
    }
  });
});
