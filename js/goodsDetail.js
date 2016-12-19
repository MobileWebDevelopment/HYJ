$(function(){
	//返回上一页
	$("header i.icon_back").on('click',function(){
		window.history.back();
	})
	$('header ul li').on('click',function(){
		$(this).addClass('active').siblings('li').removeClass('active');
	});
	/*
	 * banner
	 */
	var $ul = $( '.scrllo_img > .wrapper > ul' );
	var $li = $( '.scrllo_img > .wrapper > ul > li' );
	var w = $li.width();
	    $ul.width( ( $li.length + 2 ) * w );
	var mySwiper = new Swiper('.swiper-container', {
		loop: true,
		pagination : '.swiper-pagination',
		preventClicks : true,
		autoplayDisableOnInteraction : false,
		observer:true,
		observeParents:true,
	})
	/*
	 * 型号的显示与隐藏 
	 */
	$('.goods_detail > ul > li:nth-child(2)').on('click',function(){
		$(this).next().toggle();
		if( $(this).next().css('display') == 'none' ){
			$(this).find('i').html('&#xe627;');
			$(this).css('border-bottom-color','#C9C9C9');
		}else{
			$(this).find('i').html('&#xe626;');
			$(this).css('border-bottom-color','#fff');
		}
	});
	/*
	 * 商品型号和数量
	 */
	var $type = $('.goods_detail > ul > li:nth-child(2) > p .type');
	var $num = $('.goods_detail > ul > li:nth-child(2) > p .num');
	var $num_input = $('.goods_detail > ul > li:nth-child(3) > .buy_count > .buy_count_main > input');
	$type.html( $('.goods_detail > ul > li:nth-child(3) > div > ul > li:first-of-type').html() );
	$('.goods_detail > ul > li:nth-child(3) > div > ul > li').on('click',function(){
		$(this).addClass('active').siblings('li').removeClass('active');
		$type.html( $(this).html() );
	});
	$('.goods_detail > ul > li:nth-child(3) > .buy_count > .buy_count_main > a').on('click',function(){
		if( $(this).index() ){
			$num_input.val( parseInt( $num_input.val() ) + 1 );
		}else{
			if( $num_input.val() > 1){
				$num_input.val( parseInt( $num_input.val() ) - 1 );
			}
		}
		if( $num_input.val() == 1){
			$(this).parent().find('.dis_num').css('color','#BFBFBF');
		}else{
			$(this).parent().find('.dis_num').css('color','#5A5A5C');
		}
		$num.html( $num_input.val() );
	});
	$num_input.on('change',function(){
		if( parseInt( $(this).val() ) > 0){
			$num.html( $(this).val() );
		}else{
			$num.html( 1 );
			$(this).val( 1 );
			$(this).parent().find('.dis_num').css('color','#BFBFBF');
		}
	});
})
