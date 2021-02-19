$(function(){
	var sec7Top = $('#section7').offset().top;	
	var t=0;
	
		addClassFn();
		removeClassFn();
		
	$(window).scroll(function(){
		if( $(window).scrollTop() >= sec7Top ){
			addClassFn();
		}
		else{
			removeClassFn();
		}
	});
	$(window).resize(function(){
		addClassFn();
		removeClassFn();
	}); //반응형 jQuery 
	function addClassFn(){
		//조건 반드시 해상도가 960초과 일때만 애니메이션
		if( $(window).innerWidth() > 960 ){
			$('.section8-element-3>li').addClass('addSec8Ani');			
		}
	}
	function removeClassFn(){
		if( $(window).innerWidth() > 960 ){
			$('.section8-element-3>li').removeClass('addSec8Ani');
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});  //section8.js