$(function(){

	animationFn();

	//애니메이션 중앙 커피잔 텍스트 1초간 부드럽게(fadeIn(1000)) 나타남.
	function animationFn(){
		$('.section1-bev1,.section1-bev1-txt') //ani1
			.stop()
			.animate({opacity:0},0)
			.delay(300)
			.animate({opacity:1},1000,function(){
				//ani2
				$('.section1-bev2,.section1-bev2-txt')
					.stop()
					.animate({opacity:0},0)
					.animate({opacity:1},1000,function(){
						$('.section1-bev3,.section1-bev3-txt')
							.stop()
							.animate({opacity:0},0)
							.animate({opacity:1},1000,function(){
								$('.section1-bev4')
									.stop()
									.animate({opacity:0},0)
									.animate({opacity:1},1000,function(){
										$('.section1-bev4-txt')
											.stop()
											.animate({opacity:0},0)
											.animate({opacity:1},1000);
									});
							});
					});
			});
			
	}
	

});