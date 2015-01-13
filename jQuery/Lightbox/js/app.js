
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>")

// add image to overlay
$overlay.append($image);

// add a caption to overlay
$overlay.append($caption);

// add overlay
$("body").append($overlay);

// capture the click event on a link to an image
$("#imageGallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	// update overlay with the image linked in the link
	$image.attr("src", imageLocation);
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
	
	// show the overlay
	$overlay.show();
});

// when the overlay is clicked
$overlay.click(function(){
	// hide the overlay
	$(this).hide();
})








