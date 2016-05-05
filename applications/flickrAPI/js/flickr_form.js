$(document).ready(function(){
  $("form").submit(function(evt){
    evt.preventDefault();
    var $searchField = $("#search");
    var $submitButton = $("#submit");

    $searchField.prop("disabled", true);
    $submitButton.attr("disabled", true).val("searching...");

    var searchTerm = $searchField.val();
    var flickrApi = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var flickrOptions = {
      tags: searchTerm,
      format: "json"
    };
    function displayPhoto(data){
      photoHTML = "<ul>";
      $.each(data.items, function(i, photo){
        photoHTML += "<li class='grid-25 tablet-grid-50'>";
        photoHTML += "<a href='" + photo.link + "' class='image'>";
        photoHTML += "<img src='" + photo.media.m + "'>";
        photoHTML += "</a>";
        photoHTML += "</li>";
      });
      photoHTML += "</ul>";
      $("#photos").html(photoHTML);
      $searchField.prop("disabled", false);
      $submitButton.attr("disabled", false).val("Search");
    }
    $.getJSON(flickrApi, flickrOptions, displayPhoto);


  });
}); // end ready
