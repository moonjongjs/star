$(function(){
	//모바일 앱바 버튼 이벤트
	$('.appBarBtn').on({
		click:	function(){
			$('.mobile-gnb-modal').show(0);
			$('.mobile-gnb-wrap').stop().delay(300).animate({right:0},400,'easeOutExpo');
			$('.mobile-closeBtn').addClass('addCloseRotate');			
		}
	});
	
	//모바일 Close Btn 클릭 이벤트
	//자신을 회전하면서 이벤트
	$('.mobile-closeBtn').on({
		click:	function(){
			$('.mobile-gnb-wrap').stop().animate({right:'-100%'},1000,'easeOutExpo');
			$('.mobile-gnb-modal').delay(500).hide(0);
			$('.mobile-closeBtn').removeClass('addCloseRotate');
		}
	});
	
	
	
	//메인버튼에 마우스 오버 이벤트
	$('.mainBtn').on({
		mouseenter:	function(){
			$('.mainBtn').removeClass('addMainBtn'); //추가된 클래스 모두삭제 초기화
			$(this).addClass('addMainBtn');
			
			$('.sub').slideUp(100);	//서브메뉴 모두 초기화
			$(this).next().slideDown(400);
		},
		focusin:	function(){
			$('.mainBtn').removeClass('addMainBtn'); //추가된 클래스 모두삭제 초기화
			$(this).addClass('addMainBtn');
			
			$('.sub').slideUp(100);	//서브메뉴 모두 초기화
			$(this).next().slideDown(400);
		}
		
	});
	
	//서브메뉴의 부모영역[header]을 마우스가 떠나면[mouseleave] 서브메뉴가 초기화[slideUp(100)]
	$('nav>ul>li').on({
		mouseleave:	function(){
			$(this).children('div').slideUp(100);
			//$('.sub').slideUp(100);
			$(this).children('a').removeClass('addMainBtn');
			//$('.mainBtn').removeClass('addMainBtn');
		}
	});
	
	
});




