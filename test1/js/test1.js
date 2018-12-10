window.onload=function(){
				function getPos(obj){
					var left=0;
					var top=0;
					while(obj.offsetParent){
						left+=obj.offsetLeft;
						top+=obj.offsetTop;
						obj=obj.offsetParent;
					}
					return {"left":left,"top":top};
				}
				var oNav=document.getElementById('mynav');
				var navT=getPos(oNav).top;
				window.onscroll=window.onresize=function(){
					var scT=document.documentElement.scrollTop||document.body.scrollTop;
					
					if(navT<=scT){
						oNav.style.position='';
						oNav.style.top='0';
						oNav.style.left='0';
					}else{
						oNav.style.position='';
					}
				}
			}
			function prev(){
			  var index = $("form .current").index();
			  if(index>0){
			    $(".one").eq(index-1).addClass("current").siblings().removeClass("current");
			  }
			}
			
			function next(){
			  var len = $("form").children().length;
			  var index = $("form .current").index();
			  if(index<len-1){
			    $(".one").eq(index+1).addClass("current").siblings().removeClass("current");
			  }
			}