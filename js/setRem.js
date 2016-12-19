(function(win){
	var oDocElem = win.document.documentElement,
		timer = null;
	function changeRem( ){
		var w = oDocElem.getBoundingClientRect().width;
		if( w > 750 ){
			w = 750;
		}
		var psw = 750;
		var fontSize = 100*w/750;
		oDocElem.style.fontSize = fontSize + 'px';
	}
	win.addEventListener('resize',function(){
		clearTimeout( timer );
		timer = setTimeout( changeRem , 30 );
	},false);
	win.addEventListener('pageshow',function(e){
		if( e.persisited ){
			clearTimeout( timer );
			timer = setTimeout( changeRem , 30 );
		}
	},false);
	changeRem();
})(window);
