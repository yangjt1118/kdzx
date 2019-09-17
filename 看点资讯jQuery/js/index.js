// index.js
window.onload = function(){
	$('.info-content_content').load('./pages/home.html');
	$('.info-content_nav li').on('click',function(){
		var title = $(this).text().trim();
		switch(title){
			case '首页':
				$('.info-content_content').load('./pages/home.html');
				break;
			case '栏目管理':
				$('.info-content_content').load('./pages/category.html');
				break;
			case '资讯管理':
				$('.info-content_content').load('./pages/info.html');
				break;
			case '用户管理':
				$('.info-content_content').load('./pages/user.html');
				break;
			default:
				break;
		}
	})
}