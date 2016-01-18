$('.tabs > ul li a').on('click', function(){
	var tabs = $(this).parent().parent().parent();
	var target = $.trim($(this).attr('href').substring(1));
	var items = tabs.find('ul li');

	items.removeClass('selected').find('a[href="#' + target + '"]').parent().addClass('selected');
	tabs.find('.tab').show();
	tabs.find('.tab:not(".' + target + '")').hide();
});