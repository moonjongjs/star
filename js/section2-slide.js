$(function(){
	
	slideObj.init();
	
});

var a=[], b=[], s=[], setId=0, t=0, t2=0, n=0;

var slideObj = {
	init:	function(){
		
		slideObj.formatFn();
		slideObj.navFn(0);		
		slideObj.autoPlay('_play');
		
		slideObj.playBtnEvent();
		slideObj.pauseEvent();
		slideObj.navBtnEvent();
		slideObj.prevBtnEvent();
		slideObj.nextBtnEvent();

	},
	formatFn:	function(){
		
		n=$('.slide').length-1;
		s[0]=1;
		
	},
	autoPlay:	function(z){
	
		if( z=='_play' || z=='_mouseleave' ){
			if(t2==0){ //플레이버튼 클릭과 마우스떠났을때
					   //두번 자동실행을 막기 위해 t2변수 사용 버블링 디버깅.
				setId = setInterval(slideObj.nextSlideIf,4000);
				t2=1;
			}
		}
	
	},
	navFn:	function(z){

		$('.navBtn').removeClass('addNav');	
		$('.navBtn').eq(z).addClass('addNav');	
		
	},
	movePrevSlide:	function( z, clickNum ){

		for(i=0; i<=n; i++){ s[i]=0; }
		s[clickNum]=1;     //클릭된 번호로 슬라이드 실행 변경
			
		if( z==2 && clickNum==0 ){//현재위치에서 클릭위치로, 즉 끝에서 처음으로 이동하는 슬라이드 
			$('.slide').eq(2).stop().animate({left:   '0%'},0).animate({left:'200%'},600, function(){
				$(this).removeClass('addOpacity');
			});
			$('.slide').eq(1).stop().animate({left:'-100%'},0).animate({left:'100%'},600);
			$('.slide').eq(0).stop().animate({left:'-200%'},0).animate({left:  '0%'},600, function(){
				$(this).addClass('addOpacity');
				$('.slide').eq(2).stop().animate({left: '-100%'},0);
			});
		}
		else {  //z==0 &&  clickNum==1 경우 z==1 &&  clickNum==2 
			slideObj.prevSlide( clickNum );  //현재위치에서 클릭위치로 즉 클릭 슬라이드로 이동			
		}

		slideObj.navFn( clickNum );   //clickNum
		
		
	},
	moveNextSlide:	function( z, clickNum ){

		for(i=0; i<=n; i++){ s[i]=0; }
		s[clickNum]=1;     //클릭된 번호로 슬라이드 실행 변경
				
		if( z==0 && clickNum==2 ){//현재위치에서 클릭위치로, 즉 처음에서 끝으로 이동하는 슬라이드 
			$('.slide').eq(0).stop().animate({left:  '0%'},0).animate({left:'-200%'},600, function(){
				$(this).removeClass('addOpacity');					
			});
			$('.slide').eq(1).stop().animate({left:'100%'},0).animate({left:'-100%'},600);
			$('.slide').eq(2).stop().animate({left:'200%'},0).animate({left:   '0%'},600, function(){
				$(this).addClass('addOpacity');
				$('.slide').eq(0).stop().animate({left:  '100%'},0);
			});
		}
		else {  //z==0 &&  clickNum==1 경우 z==1 &&  clickNum==2 
			slideObj.slide( clickNum );  //현재위치에서 클릭위치로 즉 클릭 슬라이드로 이동			
		}		
		
		return slideObj.navFn( clickNum );   //clickNum		
	},
	nextSlideIf:	function(){
		if(s[0]==1){
			slideObj.slide(1);
		}
		else if(s[1]==1){
			slideObj.slide(2);
		}
		else if(s[2]==1){
			slideObj.slide(0);
		}
	},	
	prevSlideIf:	function(){
		if(s[0]==1){
			slideObj.prevSlide(2);
		}
		else if(s[1]==1){
			slideObj.prevSlide(0);
		}
		else if(s[2]==1){
			slideObj.prevSlide(1);
		}
	},	
	slide:	function(z){
	
		for(i=0; i<=n; i++){ s[i]=0; }
		s[z]=1;
		
		if(z==0){
			a=[2,0,1];
		}
		else if(z==1){
			a=[0,1,2];
		} 
		else if(z==2){
			a=[1,2,0];
		}
		$('.slide').eq(a[0]).stop().animate({left:  '0%'},0).animate({left:'-100%'},600, function(){
			$(this).removeClass('addOpacity');
		});
		$('.slide').eq(a[1]).stop().animate({left:'100%'},0).animate({left:   '0%'},600, function(){
			$(this).addClass('addOpacity');
		});
		$('.slide').eq(a[2]).stop().animate({left:'200%'},0).animate({left: '100%'},600, function(){
			$(this).removeClass('addOpacity');
		});
		
		slideObj.navFn(z);		
		
	},
	prevSlide:	function(z){
		for(i=0; i<=n; i++){ s[i]=0; }
		s[z]=1;
					
		if(s[2]==1){ 
			b=[0,2,1];
		}
		else if(s[1]==1){
			b=[2,1,0];
		}
		else if(s[0]==1){
			b=[1,0,2];			
		}	
		
		$('.slide').eq(b[0]).stop().animate({left:   '0%'},0).animate({left: '100%'},600, function(){
			$(this).removeClass('addOpacity');
		});
		$('.slide').eq(b[1]).stop().animate({left:'-100%'},0).animate({left:   '0%'},600, function(){
			$(this).addClass('addOpacity');
		});
		$('.slide').eq(b[2]).stop().animate({left:'-200%'},0).animate({left:'-100%'},600, function(){
			$(this).removeClass('addOpacity');
		});	
		
		slideObj.navFn(z);
		
	},
	playBtnEvent:	function(){	

		$('.playBtn').on({
			click:	function(){
				$(this).toggleClass('addNav');				
				if(t==0){  					//변수 t==0 같다면 비교
					clearInterval(setId);  	//일시정지
					t=1;  					//현재 정지상태
				}
				else if(t==1){ 				//변수 t==1 같다면
					t=0;
					t2=1;	  		//자동실행함수를 호출시 변수 초기화
					slideObj.autoPlay('_play');  					
				}

			}
		});
	},
	pauseEvent:	function(){	

		$('.nextBtn,.prevBtn,.slide-control-wrap').on({
			mouseenter:	function(){
				clearInterval(setId);  	//일시정지
			},
			mouseleave:	function(){
				
				if(t==0){  	//플레이버튼 스톱(▶) 상태이라면 플레이 불가능
					t2=0;	//자동실행함수를 호출시 변수 초기화
					slideObj.autoPlay('_mouseleave'); //플레이(||)	상태에서 자동 실행 가능	
				}
			}
		});
		
	},
	navBtnEvent:	function(){

		$('.navBtn').each(function(index){
			$(this).on({
				click:	function(){
					for(i=0; i<=2; i++){
						if( s[i]==1 ){  //1-현재 실행중인 슬라이드 번호를 찾기
							if( i < index ){  //클릭번호가 큰경우
								slideObj.moveNextSlide( i, index ); //현재위치에서 우측으로 이동
							}
							else if( i > index ){ //클릭번호가 작은경우
								slideObj.movePrevSlide( i, index ); //현재위치에서 좌측으로 이동
							}
						}	
					}
				}
			});
		});
		
	},
	nextBtnEvent:	function(){	

		$('.nextBtn').on({
			click:	function(){
				slideObj.nextSlideIf();
			}
		});
		
	},
	prevBtnEvent:	function(){	
	
		$('.prevBtn').on({
			click:	function(){
				slideObj.prevSlideIf();
			}
		});
		
	}	
		
	
}

