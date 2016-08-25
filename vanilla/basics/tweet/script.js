var tweet_max = 140;

$('#tweet_box').keydown(function(){
	var tweet_length = $('#tweet_box').val().length;
	var char_left = tweet_max - tweet_length;

	$('#tweet_feedback').html('You have ' + char_left + ' charachters remaining');
});