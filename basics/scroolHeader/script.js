function hscroll(text, speed, delay){
	if(speed == undefined || delay == undefined){
		speed = 500;
		delay = 2500;
	}
	$('#header').html('<div id="text">'+text+'</div>');
	$('#header').slideToggle(speed).delay(delay).slideToggle(speed);
}