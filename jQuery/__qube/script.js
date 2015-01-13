$(document).ready(function(){
    $('#ackbar').hide();
	
  $("#image").mouseenter(function(){
      $(this).hide("slow");
    });
  
  
  $("#image").mouseenter(function(){
      $(this).show("slow");
    });
	
  $("#button").click(function(){
      $('#ackbar').show();
    });
	
	
});