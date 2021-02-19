$(function(){
	
		addClassFn();
		removeClassFn();

	//스클롤 이벤트
	//스크롤탑값[$(window).scrollTop()]이 섹션8의 탑값[$('#section8').offset().top]에 도달시 애니메이션 실행 addClass
	//아니면 애니메이션 정지 removeClass
	$(window).scroll(function(){
		
		if( $(window).scrollTop() > $('#section8').offset().top-300 ){
			addClassFn();
		}
		else{
			removeClassFn();
		}
		
		
		
		//e퀀시 안보이게 
		if( $(window).scrollTop() > $('#footer').offset().top-300 ){
			$('.event-2019-summer').addClass('addEvent');
		}
		else{
			$('.event-2019-summer').removeClass('addEvent');
		}
		
		
		
		
	});
	
	
	//반응형 해상도 960미만에서만 실행
	$(window).resize(function(){
		addClassFn();
		removeClassFn();
	});
	
	//addClass  removeClass 함수 제작	
	function addClassFn(){
		if( $(window).innerWidth() <= 960 ){
			$('.section8-element-3>li').addClass('addSec8Ani2');
		}
	}
	function removeClassFn(){
		if( $(window).innerWidth() <= 960 ){
			$('.section8-element-3>li').removeClass('addSec8Ani2');
		}
	}
	
}); //section8Mobile.js