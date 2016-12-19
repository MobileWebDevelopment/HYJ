$(function(){
	//删除发货源
	var $sendLi = $('.shop > .shop_main > .sel_send li');
	$sendLi.on('click',function(){
		if( $(this).index() != 2 ){
			$(this).addClass('active').siblings('li').removeClass('active');
		}else{
			$(this).parents('.shop').remove();
		}
	})
	//数量
	var $num_input = $('.shop > .shop_main li .buy_btn input');
	$num_input.each(function(){
		if( parseInt( $(this).val() ) > 1 ){
			$(this).siblings('a:first-of-type').css('color','#222222');
		}else{
			$(this).siblings('a:first-of-type').css('color','#CBCBCB');
		}
	});
	var $btn_num = $('.shop > .shop_main li .buy_btn a');
	$btn_num.on('click',function(){
		var num = parseInt( $(this).siblings('input').val() );
		if( $(this).index() ){
			$(this).siblings('input').val( num + 1 );
			$(this).siblings('a').css('color','#222222');
		}else{
			if( num > 1 ){
				$(this).siblings('input').val( num - 1 );
			}else{
				$(this).css('color','#CBCBCB');
			}
		}
	});
	//单个商品是否选中
	var $item_sel = $('.shop .shop_main .sel');
	$item_sel.on('click',function(){
		var $item_sel = $(this).parents('li').siblings('li').find('.sel');
		var $p_sel = $(this).parents('.shop_main').siblings('.shop_header').find('.sel');
		var flag = true;
		var on = $(this).attr('data-toggle');
		if( on == 'false'){
			$(this).attr('data-toggle','true');
			$(this).html('&#xe62a;');
			$(this).css('color','#C81522');
		}else{
			$(this).attr('data-toggle','false');
			$(this).html('&#xe601;');
			$(this).css('color','');
			$p_sel.attr('data-toggle','false');
			$p_sel.html('&#xe601;');
			$p_sel.css('color','');
			return false;
		}
		$item_sel.each(function(){
			if( $(this).attr('data-toggle') == 'false'){
				flag = false;
				return false;
			}
		});
		if( flag ){
			$p_sel.attr('data-toggle','true');
			$p_sel.html('&#xe62a;');
			$p_sel.css('color','#C81522');
		}
	});
	//一个店铺是否被选中
	var $head_sel = $('.shop .shop_header .sel');
	$head_sel.on('click',function(){
		var $sub_item_sel = $(this).parents('.shop_header').siblings('.shop_main').find('.sel');
		var on = $(this).attr('data-toggle');
		if( on == 'false'){
			$(this).attr('data-toggle','true');
			$(this).html('&#xe62a;');
			$(this).css('color','#C81522');
			$sub_item_sel.each(function(){
				$(this).attr('data-toggle','true');
				$(this).html('&#xe62a;');
				$(this).css('color','#C81522');
			});
		}else{
			$(this).attr('data-toggle','false');
			$(this).html('&#xe601;');
			$(this).css('color','');
			$sub_item_sel.each(function(){
				$(this).attr('data-toggle','false');
				$(this).html('&#xe601;');
				$(this).css('color','');
			});
		}
		return false;
	});
	//折叠
	var timer = null;
	$('.shop .shop_header').on('click',function(event){
		var $self = $(this);
		if( $self.attr('data-toggle') == 'true' ){
			$self.attr('data-toggle',false );
			$(this).find('.shop_header_r .iconfont').html('&#xe626;');
		}else{
			$self.attr('data-toggle',true );
			$(this).find('.shop_header_r .iconfont').html('&#xe627;');
		}
		timer = setTimeout(function(){
			 $self.siblings('.shop_main').slideToggle();
		},100);
	})
});
