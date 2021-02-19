$(function(){
	var section2Top = $('#section2').offset().top+200;
	var t=0;  //스크롤링 이벤트 버블링 막기 위해 사용하는 토글변수
	
		ani1Fn();
		ani2Fn();	
	
	//스크롤이벤트
	$(window).scroll(function(){
		//윈도우창에서 스크롤 탑값($(window).scrollTop())이 
		//섹션2의 탑값 이상이면 애니메이션 동작
		if( $(window).scrollTop()>=section2Top ){
			if(t==0){
				ani1Fn();
				t=1;
			}
		}
		else{
			if(t==1){
				ani2Fn();
				t=0;
			}
		}
	});   //스크롤이벤트 끝
	
	
	
	
	//창크기가 조절될 때만 실행함.
	$(window).resize(function(){

			ani1Fn();
			ani2Fn();

	});
	
	
	//함수 모음
	function ani1Fn(){
		if( $(window).innerWidth() > 960 ){		
			$('.section4-ani1').stop().animate({top:'50%',marginLeft:-1430, opacity:0},0).animate({top:'50%',marginLeft:-430, opacity:1},2000);
			$('.section4-ani2').stop().animate({top:'50%',marginLeft: 1430, opacity:0},0).animate({top:'50%',marginLeft:   0, opacity:1},2000);			
		}
		else{ //<=960태블릿 모바일 
			$('.section4-ani1').stop().animate({top:-1000, marginLeft:0, opacity:0},0).animate({top:0, marginLeft:0, opacity:1},2000);
			$('.section4-ani2').stop().animate({top:1000, marginLeft:0, opacity:0},0).animate({top:0, marginLeft:0, opacity:1},2000);			
		}
	}
	
	//함수 모음
	function ani2Fn(){
		if( $(window).innerWidth() > 960 ){	
			$('.section4-ani1').stop().animate({top:'50%',marginLeft:-430, opacity:1},0).animate({top:'50%',marginLeft:-1430, opacity:0},1000);
			$('.section4-ani2').stop().animate({top:'50%',marginLeft:0, opacity:1},0).animate({top:'50%',marginLeft: 1430, opacity:0},1000);
		}
		else{ //<=960태블릿 모바일
			$('.section4-ani1').stop().animate({top:0,marginLeft:0, opacity:0},0).animate({top:-1000,marginLeft:0, opacity:1},1000);
			$('.section4-ani2').stop().animate({top:0,marginLeft:0, opacity:0},0).animate({top:1000,marginLeft:0, opacity:1},1000);			
		}
	}

});  //section4.js