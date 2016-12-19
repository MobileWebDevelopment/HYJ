(function(){
	var oLogo =document.getElementById("logo");
	if( oLogo.complete ){
		setLogo( );
	}else{
		oLogo.onload = setLogo;
	}
	function setLogo( ){
		var w = oLogo.width;
		var h = oLogo.height;
		w > h ? oLogo.width = w/2 : oLogo.height = h/2;
		var oNext = oLogo.nextElementSibling || oLogo.nextSibling;
		oNext.style.left = oLogo.width + 20 + "px";
	}
})();
// 推荐  销量 新品 的切换
window.onload = function(){
	var oNav = getClass("nav")[0];
	var oLi = oNav.getElementsByTagName("li");
	for ( var i = 0; i < oLi.length; i++) {
		var oBtn = oLi[i].getElementsByTagName("a")[0];
		oBtn.onclick = function(){
			for (var j = 0; j < oLi.length; j++) {
				oLi[j].className = "";
			}
			this.parentNode.className = "active";
		}
	}
	//setGoods();
	//置顶
	var oRside = getClass("rside")[0];
	var oUl = oRside.getElementsByTagName("ul")[0];
	var zd = oUl.firstElementChild || oUl.firstChild;
	
	zd.onclick = function(){
		var timer = setInterval(function() {
			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            window.scrollBy(0, -100);
            if (scrollTop == 0) 
                clearInterval(timer);
        }, 2);
	}
}
function getClass ( name ){
	if( document.getElementsByClassName ){
		return document.getElementsByClassName( name );
	}else{
		var allNodes = document.getElementsByTagName( '*' );
		var arr = [];
		for ( var i = 0; i < allNodes.length; i++ ){
			var classArr = allNodes[i].className.split( ' ' );
			for ( var j = 0; j < classArr.length; j++ ){
				if( classArr[j] == name ){
					arr.push( allNodes[i] );
				}
			}
		}
		return arr;
	}
}
//商品瀑布流
function setGoods(){
	var offsetTop = {
		top1:[],
		top2:[]
	};
	var oLi = getClass("goods")[0].getElementsByTagName("li");
	for (var i = 0;i < oLi.length;i++) {
		var col = i%2;
		var row = Math.floor(i/2);
		if(row == 0){
			oLi[i].style.top = 0;
		}
		var h = parseFloat( getStyle( oLi[i] , "height" ) );
		switch( col ){
			case 0:
				   offsetTop.top1.push( h );
				   oLi[i].className += "left";
				   setTop( oLi[i] , row , offsetTop.top1 );
			       break;
	        case 1:
	        	   offsetTop.top2.push( h );
				   oLi[i].className += "right";
				   setTop( oLi[i] , row , offsetTop.top2 );
			       break;
		}
	}
}
function setTop( obj , row , arr ){
	var num = 0;
	for( var i = 0; i < row; i++){
		num += arr[i] + 10;
	}
	obj.style.top = num + 'px';
}
function getStyle( obj , attr ){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
}
window.onscroll = function(){
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var oRside = getClass("rside")[0];
	oRside.style.display = scrollTop > 500 ? "block" : "none";
}
