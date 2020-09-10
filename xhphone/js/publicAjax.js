/* ajax 地址路径 */
var path = 'http://www.413xhw.cn/ht'






$(function() {
	var o = $.getUrlParam("o")
	var v = $.getUrlParam("v")

	if (o != '' && o != null && v != '' && v != null) {
		$('.search li').removeClass("choose");
		$('.search li').eq(o).addClass("choose");
		// 联动
		$('#yyx li').removeClass("choose");
		$('#yyx li').eq(Number(o) + 1).addClass("choose");
		$('.head-nav ul li').removeClass("choose");
		$('.head-nav ul li').eq(Number(o) + 1).addClass("choose");
		$('.selected-remove').click();
		$('li[name="mohu"]').css({
			"display": "block"
		}).text(v);
		$('#inpVal').val(v)
		search();
	}

	function search() {
		var b = location.href.split("/");
		var c = b.slice(b.length - 1, b.length).toString(String).split(".");
		var pageName = c.slice(0, 1)[0];
		var value = $('.search li.choose').attr('name')
		var o = $.getUrlParam("o")
		var v = $.getUrlParam("v")

		var inpValue = $('#inpVal').val()
		if (!/[0-9]+/.test(inpValue)) {
			alert('请数入数字')
			$('#inpVal').val('');
			return false;
		} else if (inpValue.length > 11) {
			alert('格式有误');
			$('#inpVal').val('')
			return false;
		} else if (inpValue.length == 11) {
			if (!/^1[3456789]\d{9}$/.test(inpValue)) {
				alert('手机号格式有误')
				$('#inpVal').val('')
				return false;
			}
			if (pageName != "list") {
				window.location.href = 'list.html?o=' + value + '&v=' + inpValue;
			} else {
				aaaaa(1, 1, {
					operator: value,
					phoneNum: inpValue
				})
			}
			return false;
		} else if (inpValue.length < 11) {
			if (pageName != "list") {
				window.location.href = 'list.html?o=' + value + '&v=' + inpValue;
			} else {
				aaaaa(1, 1, {
					operator: value,
					dminPhone: inpValue
				})
			}
		}
	}


})


/* 头部切换 */
$('.search ul li').click(function() {
	$(this).addClass('choose').siblings().removeClass('choose')
})

/* ID */
$.getUrlParam = function(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

$('.search .submit').click(function() {
	var b = location.href.split("/");
	var c = b.slice(b.length - 1, b.length).toString(String).split(".");
	var pageName = c.slice(0, 1)[0];
	var value = $('.search li.choose').attr('name')
	var o = $.getUrlParam("o")
	var v = $.getUrlParam("v")

	var inpValue = $('#inpVal').val()
	if (!/[0-9]+/.test(inpValue)) {
		alert('请数入数字')
		$('#inpVal').val('');
		return false;
	} else if (inpValue.length > 11) {
		alert('格式有误');
		$('#inpVal').val('')
		return false;
	} else if (inpValue.length == 11) {
		if (!/^1[3456789]\d{9}$/.test(inpValue)) {
			alert('手机号格式有误')
			$('#inpVal').val('')
			return false;
		}
		if (pageName != "list") {
			window.location.href = 'list.html?o=' + value + '&v=' + inpValue;
		} else {
			aaaaa(1, 1, {
				operator: value,
				phoneNum: inpValue
			})
		}
		return false;
	} else if (inpValue.length < 11) {
		if (pageName != "list") {
			window.location.href = 'list.html?o=' + value + '&v=' + inpValue;
		} else {
			aaaaa(1, 1, {
				operator: value,
				dminPhone: inpValue
			})
		}
	}

});

/* ajax */
$.ajax({
	url: path+"/web/getArticles",
	type: "get",
	dataType: "json",
	success: function(msg) {
		var result = msg.data;
		for (i in result) {
			//console.log(result[i])
			var zixun = '<li><h1><a href="consult.html?id=' + result[i].id + '">' + result[i].title + '</a></h1><p>' + result[
				i].quest + '</p><span>' + result[i].createTime + '</span></li>'
			$(".consult ul").append(zixun)
		}


	},
	error: function(err) {
		console.log("fail")
	}
})

/* collect */
function collect(id) {
	$.ajax({
		//url: 'http://192.168.3.5:8080/xuanhao/web/collect',
		url: path+'/web/collect',
		type: 'POST',
		xhrFields: {
			withCredentials: true
		}, // 支持跨域发送cookie
		data: {
			id: id
		},
		dataType: 'JSON',
		success: function(result) {
			if (result.data == "success") {
				window.location.href = './star.html';
			}
		}
	})
}

/* 底部 */
/* 客户咨询 走 客户咨询接口 */
$.ajax({
	url: path+'/web/getLinks',
	type: 'GET',
	xhrFields: {
		withCredentials: true
	}, // 支持跨域发送cookie
	data: {
		key: "guanyvLink"
	},
	dataType: 'JSON',
	success: function(result) {
		for (i in result.data) {
			var typeHtml = '<dd><a href="footerText.html?id=' + result.data[i].id + '">' + result.data[i].title + '</a></dd>'
			$('.aboutMe').append(typeHtml)
		}
	},
	error: function() {
		console.log('error')
	}
})
/* 购物指南 */
$.ajax({
	url: path+'/web/getLinks',
	type: 'GET',
	xhrFields: {
		withCredentials: true
	}, // 支持跨域发送cookie
	data: {
		key: "zhinanLink"
	},
	dataType: 'JSON',
	success: function(result) {
		for (i in result.data) {
			var typeHtml = '<dd><a href="footerText.html?id=' + result.data[i].id + '">' + result.data[i].title + '</a></dd>'
			$('.myBuy').append(typeHtml)
		}
	},
	error: function() {
		console.log('error')
	}
})
/* 服务保障 */
$.ajax({
	url: path+'/web/getLinks',
	type: 'GET',
	xhrFields: {
		withCredentials: true
	}, // 支持跨域发送cookie
	data: {
		key: "fuwuLink"
	},
	dataType: 'JSON',
	success: function(result) {
		for (i in result.data) {
			var typeHtml = '<dd><a href="footerText.html?id=' + result.data[i].id + '">' + result.data[i].title + '</a></dd>'
			$('.myProtect').append(typeHtml)
		}
	},
	error: function() {
		console.log('error')
	}
})




/*右侧悬浮 */

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



















