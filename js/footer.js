$(function(){
	var s=[], a=[], t=0, t2=0, setId=0, n=$('.footSlide').length-1;
	    s[0]=1;
		
		resizeFn();
		
		$(window).resize(function(){
			resizeFn();
		});
	
		//resizeFn()함수 조건 내용
		//if 조건1 - 창너비가 1100초과인경우  슬라이드 정지 및 초기화
		//if 조건2 - 창너비가 1100 ~ 601경우  슬라이드3개 실행
		//if 조건3 - 창너비가 600  ~ 0  경우  슬라이드1개 실행		
		function resizeFn(){
			
			
			//창너비가 1100픽셀 초과
			if( $(window).innerWidth() > 1100 ){
				clearInterval(setId);
				t=0;  //1100 ~ 601 사이 실행한 변수 슬라이드 초기화
				t2=0; //600  ~ 0 사이 실행한 변수 슬라이드 초기화
				
				$('.footSlide').eq(0).stop().animate({left:(100*0)+'%'},0);
				$('.footSlide').eq(1).stop().animate({left:(100*1)+'%'},0);
				$('.footSlide').eq(2).stop().animate({left:(100*2)+'%'},0);
				$('.footSlide').eq(3).stop().animate({left:(100*3)+'%'},0);
				$('.footSlide').eq(4).stop().animate({left:(100*4)+'%'},0);
				$('.footSlide').eq(5).stop().animate({left:(100*5)+'%'},0);
			}	

			//1100 ~ 601 범위	
			if( $(window).innerWidth() <= 1100 &&   $(window).innerWidth() > 600 ){
				n=($('.footSlide').length/3)-1;  //2-1=1(0~1)=2개
				t2=0; //슬라이드 3개씩 이동인 경우 변수 초기화
				for(i=0; i<=n; i++){
					s[i]=0;  //s[0]=0, s[1]=0
				}				
				s[0]=1;				

				$('.footSlide').eq(5).stop().animate({left:(100*-1)+'%'},0);
				$('.footSlide').eq(0).stop().animate({left:(100* 0)+'%'},0);
				$('.footSlide').eq(1).stop().animate({left:(100* 1)+'%'},0);
				$('.footSlide').eq(2).stop().animate({left:(100* 2)+'%'},0);
				$('.footSlide').eq(3).stop().animate({left:(100* 3)+'%'},0);
				$('.footSlide').eq(4).stop().animate({left:(100* 4)+'%'},0);
			
				if(t==0){
					clearInterval(setId);
					autoPlay();
					t=1;
				}			
			}
			//600 ~ 0 범위	
			else if( $(window).innerWidth() <= 600 ){
				n=$('.footSlide').length-1;  //6-1=5(0~5)=6개 
				t=0;  ////슬라이드 1개씩 이동 인경우 변수 초기화
				for(i=0; i<=n; i++){
					s[i]=0;   //s[0]=0, s[1]=0, s[2]=0, s[3]=0, s[4]=0, s[5]=0
				}				
				s[0]=1;	
				
				$('.footSlide').eq(5).stop().animate({left:(100*-1)+'%'},0);
				$('.footSlide').eq(0).stop().animate({left:(100* 0)+'%'},0);
				$('.footSlide').eq(1).stop().animate({left:(100* 1)+'%'},0);
				$('.footSlide').eq(2).stop().animate({left:(100* 2)+'%'},0);
				$('.footSlide').eq(3).stop().animate({left:(100* 3)+'%'},0);
				$('.footSlide').eq(4).stop().animate({left:(100* 4)+'%'},0);
				
				if(t2==0){
					clearInterval(setId);
					autoPlay();
					t2=1;
				}
				
			}	
			
		
			
		}	

	
	
		//조건1 1100이하에서만 동작하는 슬라이드 
		//조건2 1100~601까지 3개씩 롤링 슬라이드
		//조건3 600이하서는 1개씩 롤링 슬라이드	
		
		function autoPlay(){
			setId = setInterval(nextSlideIf, 3000);
		}
		
		function nextSlideIf(){
			for(i=0; i<=n; i++){
				if(s[i]==1){
					slide(i+1);  //다음슬라이드
					break;
				}	
				else if(s[n]==1){
					slide(0);  	//처음슬라이드
					break;
				}	
			}
		}
		
		function slide(z){
			
			for(i=0; i<=n; i++){
				s[i]=0;
			}
			
			s[z]=1;
			
			//반응형 조건문과 슬라이드 포지션
			resizeSlideFn(z);
			
		}
		
		
		
		function resizeSlideFn(z){
				
			if(n==1){  //3개씩 묶음이 2개(슬라이드2개)
				
				if(z==0){
					a=[3,4,5,0,1,2];
				}
				else if(z==1){
					a=[0,1,2,3,4,5];
				}
				
				$('.footSlide').eq(a[0]).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-3)+'%'},1000);
				$('.footSlide').eq(a[1]).stop().animate({left:(100*1)+'%'},0).animate({left:(100*-2)+'%'},1000);
				$('.footSlide').eq(a[2]).stop().animate({left:(100*2)+'%'},0).animate({left:(100*-1)+'%'},1000);
				$('.footSlide').eq(a[3]).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 0)+'%'},1000);
				$('.footSlide').eq(a[4]).stop().animate({left:(100*4)+'%'},0).animate({left:(100* 1)+'%'},1000);
				$('.footSlide').eq(a[5]).stop().animate({left:(100*5)+'%'},0).animate({left:(100* 2)+'%'},1000);
				
			}
			else if(n==5){  //1개씩 슬라이드6개
				
				if(z==0){
					a=[5,0,1,2,3,4];
				}
				else if(z==1){
					a=[0,1,2,3,4,5];
				}
				else if(z==2){
					a=[1,2,3,4,5,0];
				}
				else if(z==3){
					a=[2,3,4,5,0,1];
				}
				else if(z==4){
					a=[3,4,5,0,1,2];
				}
				else if(z==5){
					a=[4,5,0,1,2,3];
				}

				$('.footSlide').eq(a[0]).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},1000);
				$('.footSlide').eq(a[1]).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},1000);
				$('.footSlide').eq(a[2]).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},1000);
				$('.footSlide').eq(a[3]).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},1000);
				$('.footSlide').eq(a[4]).stop().animate({left:(100*4)+'%'},0).animate({left:(100* 3)+'%'},1000);
				$('.footSlide').eq(a[5]).stop().animate({left:(100*5)+'%'},0).animate({left:(100* 4)+'%'},1000);

			}				
		}
		
		

	
	
}); //footer.js