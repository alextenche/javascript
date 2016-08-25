$('#name').keyup(function(){
	var name = $('#name').val();
	$.post('php/process_name.php',{name: name}, function(data){
		$('#name_feedback').html(data);
	});
});