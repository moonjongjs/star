$(function(){

$('.section2-row2-wrap').slideUp(0);

//1.프로모션버튼$('.promotionBtn') 클릭 on() click 이벤트 
//2.히드박스($('.section2-row2-wrap')) slideToggle(500);
//3.클릭한 버튼$(this)에 배경 이미지변경 background-image:url(../img/변경이미지)
//  up이미지 down 이미지 toggleClass('addPromotion');

	$('.promotionBtn').on({
		click:	function(){
			$('.section2-row2-wrap').slideToggle(500);
			$(this).toggleClass('addPromotion');
		}
	});

		

});