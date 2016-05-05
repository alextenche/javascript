$(document).ready(function(){
  $("button").click(function(){
    $("button").removeClass("selected");
    $(this).addClass("selected");

    var flickrApi = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();
    var flickrOptions = {
      tags: animal,
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
    }
    $.getJSON(flickrApi, flickrOptions, displayPhoto);


  });
}); // end ready
