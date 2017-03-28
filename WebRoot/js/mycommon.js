function operateById(operate, url, id, idname) {
	if (!id)
		alert('请选择行');

	else {
		$.ligerDialog.confirm('确定' + operate + '?', function(yes) {
					if (yes) {
						$.post(url + "?" + idname + "=" + id, function(result) {
									handerResult(result, operate);
								});
					}
				});
	}

}
function post(url, data, operate, idname) {

	if (data.length == 0)
		alert('请选择行');

	else {
		var checkedIds = [];
		$(data).each(function() {
					checkedIds.push(this[idname]);
				});
		var mydata = {
			idList : checkedIds
		};
		$.ligerDialog.confirm('确定' + operate + checkedIds.join(',') + '?',

		function(yes) {
					if (yes) {
						$.post(url, jQuery.param(mydata, true),
								function(result) {
									handerResult(result, operate);
								});
					}
				});

	}
}
function handerResult(result, operate) {
	if (result == '0') {
		$.ligerDialog.success(operate + "操作成功");
		if (gridManager != null)
			gridManager.loadData(true);
	} else if (result == "1") {
		$.ligerDialog.error(operate + "操作失败");
	} else if (result == "4")
		$.ligerDialog.error("登录名已被使用过");
	else if (result == "2")
		$.ligerDialog.error("用户已不存在");
	else if (result == "3")
		$.ligerDialog.error("不是apk文件");
	else if (result == "5")
		$.ligerDialog.error("不是车圣宝典程序");
	else if (result == "6")
		$.ligerDialog.error("上传版本必须大于最近的版本");
	else if (result == "7")
		$.ligerDialog.error("非法用户名或密码");
	else if (result == "8")
		$.ligerDialog.error("签名有错");
	else {
		result = jQuery.parseJSON(result);
		if (result == null)
			alert("登录超时请重新登录");
		else {
			var s = result.success
			var f = result.fail
			alert("成功的个数为:" + s + "失败个数:" + f);
			if (s != 0)
				gridManager.loadData(true);
		}
	}
}
function compareDate(start, end) {
	if (start != '') {
		if (end == '') {
			alert("请输入结束时间");
			return false;
		} else {
			var end = parseTime(end);
			var start = parseTime(start);
			if (start > end) {
				alert("开始时间不能大于结束时间");
				return false;
			} else
				return true;
		}
	} else if (end != '') {
		alert("请输入开始时间");
		return false;
	} else
		return true;
}
function parseTime(time) {
	var times = time.split("-");
	var year = parseInt(times[0], 10);
	var month = parseInt(times[1], 10);
	var day = parseInt(times[2], 10);
	return (year - 2000) * 365 + month * 30 + day;
}
