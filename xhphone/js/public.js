/* 资费中心 */
$('.consult-nav li').click(function(){
	$(this).addClass('choose').siblings().removeClass('choose');
})

/* 资费详情 */
$('.zifei-table li').click(function(){
	$(this).addClass('choose').siblings().removeClass('choose')
})




/*右侧悬浮*/

$('.positionNav-box1').click(function(){
	$('.positionNav').animate({right:'-60px'});
	$('.positionNav-box1').hide(500)
	$('.positionNav-box2').show(200)
})
$('.positionNav-delete').click(function(){
	$('.positionNav').animate({right:'-100px'});
	$('.positionNav-box1').show(500)
	$('.positionNav-box2').hide(200)
})

	






