$(function(){
	
	//메달이미지가 반응함에 사이즈변경되어 수직 정렬을 프로그래밍 한다.
	//이유는 가로크기가 변경되면 높이도 자동변경된다. 중앙이 바뀐다.
	//수직 중앙을 자동으로 맞추도록 계산
	
	
	
	
	
	$('.section7-reserve_medal').on({
		mouseenter:	function(){
			$('.section7-reserve').addClass('addSec7Ani');
		},
		mouseleave:	function(){
			$('.section7-reserve').removeClass('addSec7Ani');
		}
	});
	
	
	//키보드 탭키 접근시 회전
	$('.section7-viewBtn').on({
		focusin:	function(){
			$('.section7-reserve').addClass('addSec7Ani');
		},
		focusout:	function(){
			$('.section7-reserve').removeClass('addSec7Ani');
		}
	});
	
	
});  //section7.js