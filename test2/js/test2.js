$(document).ready(function(){
	var l =$('.hero').length;
	var lc1 = 0;
	$(".nav-three-left").click(function(){
		if (lc1 < 1) {
			alert("已经是第一个步骤啦");
			return;
		}
		lc1--;
		$(".hero").animate({right:"-=280px"});
	});
	$(".nav-three-right").click(function(){
		if (lc1 >l-6) {
			alert("over");
			return;
		}
		lc1++;
		$(".hero").animate({right:"+=280px"});
	});
});