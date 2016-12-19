window.onload = function(){
	var $ul = $( '#ts_banner ul' );
	var $li = $( '#ts_banner li' );
	var w = window.innerWidth;
		$li.width( w );
	    $ul.width( ( $li.length + 2 ) * w );
	var mySwiper1 = new Swiper('.ts_banner', {
		autoplay: 3000,
		loop: true,
		pagination : '.swiper-pagination',
		preventClicks : true,
		autoplayDisableOnInteraction : false,
		observer:true,
		observeParents:true,
	})
	//秒杀
	var $skUl = $('#ts_sk ul');
	var $skLi = $('#ts_sk ul li');
	var skW = $('#ts_sk').width();
		$skLi.width( skW / 4 );
		$skUl.width( $skLi.width() * $skLi.length );
	var mySwiper2 = new Swiper('#ts_sk', {
		slidesPerView : 4,
		preventClicks : true,
		observer:true,
		observeParents:true,
	})
	//秒杀倒计时
	var endTime = new Date( 2016 , 10 , 13 , 17 , 20 , 0 );
	var oSk_day = document.getElementById('ts_sk_time_day');
	var oSk_hour = document.getElementById('ts_sk_time_hour');
	var oSk_min = document.getElementById('ts_sk_time_min');
	var oSk_sec = document.getElementById('ts_sk_time_sec');
	var endTimer = endTime.getTime();
	var timer = null;
	function skillTime(time,obj1,obj2,obj3,obj4){
		var now = new Date();
		var sec = Math.floor( ( time - now.getTime() ) / 1000 );
		if( sec < 0 ){
			return false;
		}else if( sec == 0 ){
			clearInterval( timer );
		}
		var d = Math.floor( sec / 86400 );
			sec = sec % 86400;
		var h = Math.floor( sec / 3600 );
			sec = sec % 3600;
		var m = Math.floor( sec / 60 );
			sec = sec % 60;
		var s = sec;
		obj1.innerHTML = zeroFill( d , 2 );
		obj2.innerHTML = zeroFill( h , 2 );
		obj3.innerHTML = zeroFill( m , 2 );
		obj4.innerHTML = zeroFill( s , 2 );
	}
	skillTime(endTimer,oSk_day,oSk_hour,oSk_min,oSk_sec);
	
	timer = setInterval( function(){
		skillTime(endTimer,oSk_day,oSk_hour,oSk_min,oSk_sec);
	} , 1000 );
	
	function zeroFill( time , n ){
		var str = "" + time;
		while( str.length < n){
			str = "0" + time;
		}
		return str;
	}
	//吸顶
	var oHeader = document.getElementById('ts_header');
	var $Header = $("#ts_header .ts_header_main");
	window.onscroll = function(){
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		var k = scrollTop / oHeader.offsetHeight;
		var alph = 0;
		if( k >= 1 ){
			$Header.css("background-color","rgba(0,0,0,0.85)");
		}else{
			alph = k * 0.85;
			$Header.css("background-color","rgba(0,0,0," + alph + ")");
		}
	}
	document.addEventListener('touchmove',function(e){
		var event = e || window.event;
		e.cancelBubble = true;
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		var k = scrollTop / oHeader.offsetHeight;
		var alph = 0;
		if( k >= 1 ){
			$Header.css("background-color","rgba(0,0,0,0.85)");
		}else{
			alph = k * 0.85;
			$Header.css("background-color","rgba(0,0,0," + alph + ")");
		}
	},false);
	
	//搜索
	var oInput = ts_header.getElementsByTagName('input')[0];
	var $arr = $('.ts_layout').children('div');	
	oInput.onfocus = function(){
		$arr.each(function(i){
			if( i != $arr.length - 1 ){
				$(this).hide();
			}else{
				$(this).show();
			}
		});
		ajaxLoadHtml('load',"search.html");
	}
	function ajaxLoadHtml(id,url){
		var ajaxobj = new AJAXRequest; 
		ajaxobj.method = 'GET';  
		ajaxobj.url = url;  
		ajaxobj.callback=function(xmlobj) {
			document.getElementById(id).innerHTML = xmlobj.responseText; 
			$('.fixTop > .close_search').on('click',function(){
				$arr.each(function(i){
					if( i != $arr.length - 1 ){
						$(this).show();
					}else{
						$(this).hide();
					}
				});
			});
			$('#input_search').on('input',function(){
				if( $(this).val() ){
					$(this).siblings('.search_clear').show();
				}else{
					$(this).siblings('.search_clear').hide();
				}
			});
			$('.search_clear').on('click',function(){
				$('#input_search').val('');
				$(this).hide();
			});
			//清空历史
			$("#clear_history").on('click',function(){
				$(this).parents('ul').remove();
			});
		}
		ajaxobj.send();
	}
	
}
