

$(document).ready(function() {

	for (var i=0; i < 256; i++) {

		$('#wrapper').append("<div class='grid'></div>");
	}

	$('.grid').mouseenter(function() {

		$(this).css('background-color', '#505050');
	});
});

