document.writeln("<div class=\'border-bottom-red\'>");
document.writeln("			<div class=\'content clearfix\'style=\'border-bottom: 2px solid #FFC102;\'>");
document.writeln("				<div class=\'clearfix\'>");
document.writeln("					<a href=\'index.html\'><img class=\'logo fl\' src=\'img/logo.png\' alt=\'logo\'><a/>");
document.writeln("					<div class=\'search fl\'>");
document.writeln("						<ul>");
document.writeln("							<li name=\'0\ ' class=\'choose\'>移动</li>");
document.writeln("							<li name=\'1\ '>联通</li>");
document.writeln("							<li name=\'2\ '>电信</li>");
document.writeln("						</ul>");
document.writeln("						<div class=\'form\'>");
document.writeln("							<i class=\'fa fa-search fa-lg fl\'></i>");
document.writeln("							<input id=\'inpVal\' type=\'text\' placeholder=\'靓号搜索\'>");
document.writeln("							<span class=\'submit\' value=\'搜索\ '>搜索</span>");
document.writeln("						</div>");
document.writeln("					</div>");
document.writeln("					<div class=\'phone fr\'>");
document.writeln("						<div>");
document.writeln("							<i class=\'fa fa-search fa-lg fl\'></i>");
document.writeln("							<b>咨询热线：</b>");
document.writeln("							<em>09:00~21:00</em>");
document.writeln("						</div>");
document.writeln("						<div>");
document.writeln("							<span>400</span>");
document.writeln("							<span>-</span>");
document.writeln("							<span>881</span>");
document.writeln("							<span>-</span>");
document.writeln("							<span>8765</span>");
document.writeln("						</div>");
document.writeln("					</div>");
document.writeln("				</div>");
document.writeln("				<div class=\'head-nav clearfix\'>");
document.writeln("					<div class=\'nav-title\'>全部栏目导航</div>");
document.writeln("					<ul>");
document.writeln("						<li><a href=\'index.html\'>首页</a></li>");
document.writeln("						<li><a href=\'list.html?navhead=1\'>移动选号</a></li>");
document.writeln("						<li><a href=\'list.html?type=1&navhead=2\'>联通选号</a></li>");
document.writeln("						<li><a href=\'list.html?type=2&navhead=3\'>电信选号</a></li>");
document.writeln("						<!-- <li><a href=\'list.html?type=3\'>固定电话</a></li> -->");
document.writeln("						<li><a href=\'400-choose.html\'>400选号</a></li>");
document.writeln("						<li><a href=\'recovery.html\'>靓号回收</a></li>");
document.writeln("						<li><a href=\'personal.html\'>号码定制</a></li>");
document.writeln("						<li><a href=\'consultation.html\'>资费中心</a></li>");
document.writeln("					</ul>");
document.writeln("				</div>");
document.writeln("				");
document.writeln("			</div>");
document.writeln("		</div>");

if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
	var test = window.location.href;
	console.log(test)
	 var index= test.lastIndexOf("\413xhw.cn/");
		test = test.substring(index+17,test.length);
	window.location.href = "http://413xhw.cn/xhphone" + test;
}









