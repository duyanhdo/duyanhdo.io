$(function() {
	$('header').load('header.html');
	$('footer').load('footer.html');

	$('.loadmore').on('click', function() {
		$(this).fadeOut(400);
		$('.hidden').delay(400).fadeIn(400);
	});

	$('.ajax').on('click', function(event) {
		event.preventDefault();
		$('main').load('ajax.html');
	});
});