$(function(){
	var sec4Top = $('#section4').offset().top;	
	var t=0;
	
	$(window).scroll(function(){
		if( $(window).scrollTop() >= sec4Top ){
			$('.section5-star-r-right').addClass('addSec5Ani');
		}
		else{
			$('.section5-star-r-right').removeClass('addSec5Ani');
		}
	});
	
});  //section8.js