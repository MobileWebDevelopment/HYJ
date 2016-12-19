window.onload = function(){
	//top_banner
		initPage( $('.top_banner') );
	var topSwiper = new Swiper('.top_banner', {
		autoplay: 3000,
		pagination : '.swiper-pagination',
		loop: true,
		preventClicks : true,
		autoplayDisableOnInteraction : false,
		observer:true,
		observeParents:true,
	});
	//bottom_banner
		initPage( $('.bottom_banner') );
	var bottomSwiper = new Swiper('.bottom_banner', {
		autoplay: 3000,
		pagination : '.swiper-pagination',
		loop: true,
		preventClicks : true,
		autoplayDisableOnInteraction : false,
		observer:true,
		observeParents:true,
	});
	function initPage( obj ){
		var w = obj.width();
		var $ul = obj.find('ul');
		var $li = obj.find('li'); 
		$ul.width(($li.length+2)*w);
		$li.width(w);
	}
	window.addEventListener('resize',function(){
		initPage( $('.top_banner') );
		initPage( $('.bottom_banner') );
	},false);
	//菜单选项卡切换
	var $fli =$('footer ul li');
	$fli.on('click',function(){
		$(this).addClass('active').siblings('li').removeClass('active');
	});
}