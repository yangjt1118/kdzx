//ajax的封装
var baseURI='http://134.175.154.93:8099'
function getAjax(url,method,data,successFun,errorFun){
	$.ajax({
		url:baseURI+url,
		method:method,
		data:data,
		success:successFun,
		error:errorFun
	})
}