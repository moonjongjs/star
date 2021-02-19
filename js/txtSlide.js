$(function(){
	
	var a=[], s=[0,0,0,0,0], 
	    p=1; //부호 -1(음수) 1(양수) / 1*-1=-1 / 1*1=1 / (-1)*(-1)=1
             //p변수를 사용하는 목적은 슬라이드의 방향을 전환 할 수 있다.			
			 //p=-1은 위에서 아래로 텍스트슬라이드 
			 //p= 1은 아래에서 위로 텍스트슬라이드 
		
		s[0]=1;
		setInterval(nextSlideIf, 3000);
	
	function nextSlideIf(){
		
		if(s[0]==1){
			slide(1);
		}
		else if(s[1]==1){
			slide(2);
		}
		else if(s[2]==1){
			slide(3);
		}
		else if(s[3]==1){
			slide(4);
		}
		else if(s[4]==1){
			slide(0);
		}		
		
	}
	

	
	function slide(z){
		
		s=[0,0,0,0,0];
		s[z]=1;
		
		if(z==0){	
			a=[4,0,1,2,3];
		}
		else if(z==1){	
			a=[0,1,2,3,4];
		}
		else if(z==2){	
			a=[1,2,3,4,0];
		}
		else if(z==3){	
			a=[2,3,4,0,1];
		}
		else if(z==4){	
			a=[3,4,0,1,2];
		}
		
			$('.txtSlide').eq(a[0]).animate({top:(100*0*p)+'%'},0).animate({top:(100*0*p)+'%'},400).css({zIndex:1});
			$('.txtSlide').eq(a[1]).animate({top:(100*1*p)+'%'},0).animate({top:(100*0*p)+'%'},400).css({zIndex:2});
			$('.txtSlide').eq(a[2]).animate({top:(100*1*p)+'%'},0).animate({top:(100*1*p)+'%'},400).css({zIndex:2});
			$('.txtSlide').eq(a[3]).animate({top:(100*1*p)+'%'},0).animate({top:(100*1*p)+'%'},400).css({zIndex:2});
			$('.txtSlide').eq(a[4]).animate({top:(100*1*p)+'%'},0).animate({top:(100*1*p)+'%'},400).css({zIndex:2});
			
	}  //slide()함수끝
	
	
}); //txtSlide.js  jQuery 끝