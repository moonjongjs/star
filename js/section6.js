$(function(){
	var sec5Top = $('#section5').offset().top-300;	
	var t=0;


	
	$(window).scroll(function(){
		if( $(window).scrollTop() >= sec5Top ){
			ani1Fn();	//addClass
		}
		else{
			ani2Fn();	//removeClass
		}
		
	});
	
	
	//섹션6-애니메이션이 해상도 너비 960픽셀이하이면 좌우애니메이션 중지
	//섹션6-애니메이션이 해상도 너비 960픽셀이하이면 상하애니메이션 실행
	$(window).resize(function(){
		ani1Fn();
		ani2Fn();
	});
	
		//실행할 함수
		function ani1Fn(){
			if( $(window).innerWidth() > 960 ){  //창너비가 960초과이면 실행
				$('.section6-left-wrap>li').addClass('addSec6Ani');
			}
			else{  //창너비가 960이하이면 실행
				$('.section6-left-wrap>li').addClass('addSec6Ani2');
			}
		}
		function ani2Fn(){
			if( $(window).innerWidth() > 960 ){  //창너비가 960초과이면 실행
				$('.section6-left-wrap>li').removeClass('addSec6Ani');
			}
			else{  //창너비가 960이하이면 실행
				$('.section6-left-wrap>li').removeClass('addSec6Ani2');
			}
		}
	
	
	
	
	
	
	
	
	
});  //section6.js