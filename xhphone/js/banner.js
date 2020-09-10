var mySwiper = new Swiper('.swiper-banner',{
					autoplay : 2000,
					pagination: '.pagination',
					loop:true,
					grabCursor: true,
					paginationClickable: true,
					//用户操作swiper之后，是否禁止autoplay.默认为true：停止。
					autoplayDisableOnInteraction:false,
					//拖动释放时不会输出信息，阻止click冒泡。拖动Swiper时阻止click事件。
					preventLinksPropagation:true
				});
				$('.arrow-left').on('click', function(e){
					e.preventDefault()
					mySwiper.swipePrev()
				});
				$('.arrow-right').on('click', function(e){
					e.preventDefault()
					mySwiper.swipeNext()
});