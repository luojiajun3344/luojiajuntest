<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page contentType="text/html; charset=utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	
%>
<%@ taglib prefix="s" uri="/struts-tags"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>


<title></title>

<link href="../lib/ligerUI/skins/Aqua/css/ligerui-all.css"
	rel="stylesheet" type="text/css" />
<style type="text/css">
.l-panel-search {
	height: auto;
}
</style>
<script src="../js/jquery-1.5.2.min.js" type="text/javascript"></script>
<script src="../js/mylinger.min.js" type="text/javascript"></script>
<script src="../js/mycommon.js" type="text/javascript"></script>
<%--  <script src="../lib/ligerUI/js/ligerui.all.js" type="text/javascript"></script> --%>
<script type="text/javascript">
	var alert = function(content) {
		$.ligerDialog.alert(content);
	};
	
	//菜单
	var menu3 = {
		width : 120,
		items : [ {
			text : '灰色',
			id : 'Gray',
			click : itemclick
		}, {
			text : '浅绿色',
			id : 'Aqua',
			click : itemclick
		} ]
	};

	var gridManager = null;
	$(function() {

		//菜单条
		$("#topmenu").ligerMenuBar({
			items : [ 
				 {
				text : '表格风格',
				menu : menu3
			} ]
		});

		//工具条
		$("#toptoolbar").ligerToolBar({
			items : [ {
				text : '增加',
				id : 'add',
				click : itemclick,
				icon:'add'
			}, {
				text : '删除',
				id : 'delete',
				click : itemclick,
				icon:'delete'
			},  {
				text : '修改',
				id : 'edit',
				click : itemclick,
				icon:'modify'
			} ]
		});
		
		
		
		//搜索
		//$("#ddlCountry").ligerComboBox();
		$("#searchbtn").ligerButton({
			click : function() {
				
				if (!gridManager)
					return;
				
				gridManager.setOptions({
					parms : [ 
					<#list fieldname as name>
					{
				name:'${beanName?uncap_first}.${name}' ,
				value: $("#${name}").val()
				}
				<#if name_has_next>,</#if>
			</#list>
					],newPage:1
				});
				gridManager.loadData(true);
			}
		});
		$("form").ligerForm();
		//表格
		$("#maingrid").ligerGrid({
			columns : [
			<#list fieldname as name>
        
           {
				display : '列名',
				name : '${name}'
			},
        
        </#list>
			{
				display: '删除', isAllowHide: false,width:30,
				render: function (row)
				{  
				   
				var str1 = '<a  class="l-icon-delete" onclick="operateById(\'删除 \',\'admin/delete${beanName}.action\',' +row.${beanName?uncap_first}Id+ ',\'${beanName?uncap_first}.${beanName?uncap_first}Id\');">&nbsp;&nbsp;&nbsp;&nbsp;</a>';
				return str1;
				}
				
			}
			
			],

			dataAction : 'server',
			url : "admin/${beanName}_getByPage.action?type=1",
			detail : {
				onShowDetail : f_showDetail
			},
			pageParmName:'pageSelect.pageNo',
			pagesizeParmName:'pageSelect.pageSize',
			width : '100%',
			columnWidth:80,
			height : '100%',
			pageSize : 30,
			checkbox : true,
			 root: 'resultList',                       //数据源字段名
		      record: 'total',
			selectRowButtonOnly : true,
			//应用灰色表头
			cssClass : 'l-grid-gray',
			heightDiff : -6
		});
		//详细
		function f_showDetail(row, detailPanel) {
			
			$.post("admin/search${beanName}ById.action", {
				'user.id' : row.id
			}, function(result)

			{
				$(detailPanel).append($(result));
				$(".navtab1").ligerTab();
			})

		}
		$(".l-grid-hd-cell-detail").text("详情");
		gridManager = $("#maingrid").ligerGetGridManager();

		$("#pageloading").hide();

	});
//事件
	function itemclick(item) {
	
		if (item.id) {
			switch (item.id) {
			case "Aqua":
				$("#maingrid").removeClass("l-grid-gray");
				return;
			case "Gray":
				$("#maingrid").addClass("l-grid-gray");
				return;
			case "add":
				
				$.ligerDialog.open({
					target : $("#target1"),width:null,title:"用户增加"
				});
				
				$(".l-window-mask").css("opacity","0.5");
				add();
				return;
			
			case "delete":
				var data = gridManager.getCheckedRows();
				var url="admin/delete${beanName}ByList.action";
				var operate="删除";
				post(url,data,operate,'${beanName?uncap_first}Id');return;
			
			case "edit":
				var data = gridManager.getCheckedRows();
				edit(data);return;
				
			}	
			
		}
		alert(item.text);
	}
	function addOrEditAccount(operate){
		$("#save").click(function() {	
			
			
			$.post("admin/${beanName}_"+operate+".action", {
			<#list fieldname as name>
				'${beanName?uncap_first}.${name}' : $("#${name}").val()<#if name_has_next>,</#if>
			</#list>
				
				
			}, function(result) {				
				//0:成功、1.会员号重复 2:登录名重复、3.手机号码重复(不为空时)、4:Email重复(不空时)、-1:其他错误
				handerResult(result,"添加")
			});
		});
		
		$("#cancel").click(function() {
			var target=$("#target1");
			$.ligerDialog.close();
			$('body').append(target);
		})
		
		
	}
function edit(data){
		$.ligerDialog.open({
			target : $("#target1"),width:null,title:"修改"
		});
		  $(data).each(function ()
                            {
                         <#list fieldname as name>
                        $("#${name}").val(this.${name}); 
                          </#list>
                            });
		addOrEditAccount("edit");
	}	
	function add(){
		<#list fieldname as name>
                        $("#${name}").val(""); 
                          </#list>
		addOrEditAccount("add");
	}
</script>
<base href="<%=basePath%>">
</head>
<body style="padding: 0px; overflow: hidden;">
	<div class="l-loading" style="display: block" id="pageloading"></div>
	<form id="form1" runat="server">
		
		<div id="topmenu"></div>

		<div id="toptoolbar"></div>

		<div class="l-panel-search">
			<table>
				<tbody>
					
					<tr>
						<td>注册时间段 开始:</td>
						<td><input type="text" name="startTime"
							value="<s:date name="startTime" format="yyyy-MM-dd"/>" id="start"
							ltype="date" /></td>
						<td>&nbsp;&nbsp; 结束:</td>
						<td><input type="text" name="endTime"
							value="<s:date name="endTime" format="yyyy-MM-dd"/>" id="end"
							ltype="date" /></td>
						<td>
						
							<div class="l-panel-search-item">
								<div id="searchbtn" style="width: 80px;">搜索</div>
							</div> 
							</td>
						<td valign="top"></td>
					</tr>
				</tbody>
			</table>
		</div>

		<div id="maingrid" style="margin: 0; padding: 0"></div>
		<div id="target1" style="display: none margin:3px;">

			<table width=100% align=center>
				<tbody>
				<#list fieldname as name>
       
        
					<tr>
						<td>${name}:</td>
						<td><input type=text name=${beanName?uncap_first}.${name} id=${name}>
						</td>
						<td>中文</td>
					</tr>
        
        </#list>
				
					<tr>
						<td><input type=button value=保&nbsp;存 id=save>
						</td>
						<td></td>
						<td><input type=button value=取&nbsp;消 id=cancel>
						</td>
					</tr>
				</tbody>
			</table>

		</div>
		
		
	</form>


	</div>

</body>
</html>
