/*$.getJSON('articles.json', function(data){
	console.log(data);
});*/

$.ajax({
	url : 'articles.json',
	dataType: 'json',
	type: 'get',
	cache: false,
	success: function(data){
		$(data.articles).each(function(index,value){
			console.log(value.name);
		});
	}
});