$(function(){
	
	$('.mBtn').on({
		click:	function(){
			$(this).next().slideToggle(500);
			$(this).toggleClass('addMup');
		}
	});
	
	
}); //mobile.js