//控制字体大小
(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;
			docEl.style.fontSize = 16 * (clientWidth / 640) + 'px';
		};
	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


//改计划按钮切换
function ChangePlan(index){
	$("."+index).toggleClass("hide");
}

//重置进度按钮
$(".Reset_schedule").on('click',function(){
	layer.confirm('是否清空现有进度数据?', {
	  btn: ['确认','取消'] //按钮
	}, function(){
	  alert("确认")
	}, function(){
	  alert("取消");
	});
})

$(document).ready(function(){
	time()
});

function time(){
	var today = new Date();
	var m = today.getMinutes();
	var s = today.getSeconds();
	checkTime(m);
	checkTime(s);
	$(".tool .tool-item:nth-child(2) > p").html(m+":"+s);
	t=setTimeout('time()',500)
	function checkTime(i){
	if (i<10)
	{ i="0" + i}
	return i;}
	
}
