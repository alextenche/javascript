$(document).ready(function(){
    
  $("a").mouseenter(function(){
      $(this).find("img").animate({top:"-150px"},400);
    });
  
  $("a").mouseleave(function(){
      $(this).find("img").animate({top:"0"},400);
  });

});