$(document).ready(function(){

	$("nav a").click(function() {

		var id = $(this).attr('href');

		$(window).scrollTop($(id), 2000, {offset: 300});

		$("nav a").removeClass('active');
		$(this).addClass('active');
	});

	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var offset = 300;
		var sectionHeight = 600;

		if(scrollTop > offset)
		{
			$("#about").addClass('active');

		}
		else if(scrollTop > offset + sectionHeight)
		{
			$("#work").addClass('active');
		}
	});


	// $(".activate-modal").click(function(e){
	// 	e.preventDefault();

	// 	$(".modal-wrapper").fadeIn();
	// 	$("body").addClass("modal-on");

	// });

	// $(".exit, .modal-wrapper").click(function(e){
	// 	e.preventDefault();
	// 	$(".modal-wrapper").fadeOut();
	// 	$("#work").removeClass("modal-on");
	// });

});

