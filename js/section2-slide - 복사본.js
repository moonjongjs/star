$(function(){
	var a=[], b=[], s=[], setId=0, t=0, t2=0, n=$('.slide').length-1;  //3개 0 ~ 2

		s[0]=1;  	//첫슬라이드 기본값 설정
		navFn(0); 	//네비게이션 첫슬라이드 마킹
		
		autoPlay('_play');  //자동실행 4초 후에 실행

		
		
		
		
	//////////////////////////////////////////////////////////////////////////////		
	//////////////////////////////////////////////////////////////////////	

		function autoPlay(z){
			if( z=='_play' || z=='_mouseleave' ){
				if(t2==0){ //플레이버튼 클릭과 마우스떠났을때
						   //두번 자동실행을 막기 위해 t2변수 사용 버블링 디버깅.
					setId = setInterval(nextSlideIf,4000);
					t2=1;
				}
			}
		}	
	
		//플레이 일시정지 클릭이벤트
		$('.playBtn').on({
			click:	function(){
				if(t==0){  					//변수 t==0 같다면 비교
					clearInterval(setId);  	//일시정지
					t=1;  					//현재 정지상태
				}
				else if(t==1){ 				//변수 t==1 같다면
					autoPlay('_play');  			//재실행
					t=0;
					t2=1;	  		//자동실행함수를 호출시 변수 초기화
				}
				$(this).toggleClass('addNav');
			}
		});
		
		//슬라이드의 모든 버튼위에 마우스 올리면 타이머 일시정지
		$('.nextBtn,.prevBtn,.slide-control-wrap').on({
			mouseenter:	function(){
				clearInterval(setId);  	//일시정지
			},
			mouseleave:	function(){
				
				if(t==0){  	//플레이버튼 스톱(▶) 상태이라면 플레이 불가능
					t2=0;	//자동실행함수를 호출시 변수 초기화
					autoPlay('_mouseleave'); //플레이(||)	상태에서 자동 실행 가능	
				}
			}
		});
	//////////////////////////////////////////////////////////////////////////////	
	//////////////////////////////////////////////////////////////////////////////	

		
		
		
		
		

		
		
		
		
		
	//////////////////////////////////////////////////////////////////////////////	
	//////////////////////////////////////////////////////////////////////////////	
		
		//네비게이션 버튼 마킹(Marking) 이벤트 
		function navFn(z){
			$('.navBtn').removeClass('addNav');	    //초기화
			$('.navBtn').eq(z).addClass('addNav');	//해당 슬라이드 버튼만 표시 
		}		

		////////////////////////////////////////////////////////////////////////
		//네비게이션 버튼 클릭이벤트
		//네비게이션 버튼을 배열처리(each()메소드)하여 인덱스값 이용
		$('.navBtn').each(function(index){
			$(this).on({
				click:	function(){
					for(i=0; i<=2; i++){
						if( s[i]==1 ){  //1-현재 실행중인 슬라이드 번호를 찾기
							if( i < index ){  //클릭번호가 큰경우
								moveNextSlide( i, index ); //현재위치에서 우측으로 이동
							}
							else if( i > index ){ //클릭번호가 작은경우
								movePrevSlide( i, index ); //현재위치에서 좌측으로 이동
							}
						}	
					}
				}
			});
		});
		
		//네비게이션 버튼을 클릭한 경우 호출되는 콜백함수 좌측으로이동
		function movePrevSlide( z, clickNum ){
			for(i=0; i<=n; i++){ s[i]=0; }
			s[clickNum]=1;     //클릭된 번호로 슬라이드 실행 변경
			navFn(clickNum);   //clickNum
			
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
				prevSlide(clickNum);  //현재위치에서 클릭위치로 즉 클릭 슬라이드로 이동			
			}
		}
		
		//네비게이션 버튼을 클릭한 경우 호출되는 콜백함수 우측으로이동
		function moveNextSlide( z, clickNum ){
			for(i=0; i<=n; i++){ s[i]=0; }
			s[clickNum]=1;     //클릭된 번호로 슬라이드 실행 변경
			navFn(clickNum);   //clickNum
			
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
				slide(clickNum);  //현재위치에서 클릭위치로 즉 클릭 슬라이드로 이동			
			}		
		}
	//////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////	
	
	
		
	

		
	
	

		
		
		

		
		
		
		
		
		
		///////////////////////////////////////////////////////////////////	
		///////////////////////////////////////////////////////////////////
		//슬라이드 기본 다음/이전 슬라이드 함수
		
		
		//다음화살버튼 클릭이벤트
		$('.nextBtn').on({
			click:	function(){
				nextSlideIf();
			}
		});
		
		//이전화살버튼 클릭이벤트
		$('.prevBtn').on({
			click:	function(){
				prevSlideIf();
			}
		});
		
		function nextSlideIf(){
			if(s[0]==1){
				slide(1);
			}
			else if(s[1]==1){
				slide(2);
			}
			else if(s[2]==1){
				slide(0);
			}
		}	

		function prevSlideIf(){
			if(s[0]==1){
				prevSlide(2);
			}
			else if(s[1]==1){
				prevSlide(0);
			}
			else if(s[2]==1){
				prevSlide(1);
			}
		}		
		
		//다음(Next) 슬라이드 함수
		function slide(z){  // 0 1 2 ... n  우측에서 좌측으로 이동
			for(i=0; i<=n; i++){ s[i]=0; }
			s[z]=1;     //실행중인 슬라이드 1로 설정
			navFn(z);
			
			if(z==0){  //슬라이드0   0 1 2 
				a=[2,0,1];   // 맨마지막 배열값 2을 삭제해서 맨앞으로 이동 prepend
			}
			else if(z==1){  //슬라이드1
				a=[0,1,2];  //맨앞을 삭제해서 맨 뒤로 이동 append
			} 
			else if(z==2){  //슬라이드1
				a=[1,2,0];  //맨앞을 삭제해서 맨 뒤로 이동
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
		}
		
		
		//이전(Preview) 슬라이드 함수 역순 n ... 2 1 0  좌측에서 우측으로 이동
		function prevSlide(z){
			for(i=0; i<=n; i++){ s[i]=0; }
			s[z]=1;
			navFn(z);
			
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
		}
		///////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////

});