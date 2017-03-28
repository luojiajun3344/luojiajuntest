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
										{
				name:'monitorvehicle.monitor_id' ,
				value: $("#monitor_id").val()
				}
				,
					{
				name:'monitorvehicle.account_id' ,
				value: $("#account_id").val()
				}
				,
					{
				name:'monitorvehicle.call_letter' ,
				value: $("#call_letter").val()
				}
				,
					{
				name:'monitorvehicle.position_mode' ,
				value: $("#position_mode").val()
				}
				,
					{
				name:'monitorvehicle.number_plate' ,
				value: $("#number_plate").val()
				}
				
					],newPage:1
				});
				gridManager.loadData(true);
			}
		});
		$("form").ligerForm();
		//表格
		$("#maingrid").ligerGrid({
			columns : [
        
           {
				display : '列名',
				name : 'monitor_id'
			},
        
        
           {
				display : '列名',
				name : 'account_id'
			},
        
        
           {
				display : '列名',
				name : 'call_letter'
			},
        
        
           {
				display : '列名',
				name : 'position_mode'
			},
        
        
           {
				display : '列名',
				name : 'number_plate'
			},
        
			{
				display: '删除', isAllowHide: false,width:30,
				render: function (row)
				{  
				   
				var str1 = '<a  class="l-icon-delete" onclick="operateById(\'删除 \',\'admin/deleteMonitorvehicle.action\',' +row.monitorvehicleId+ ',\'monitorvehicle.monitorvehicleId\');">&nbsp;&nbsp;&nbsp;&nbsp;</a>';
				return str1;
				}
				
			}
			
			],

			dataAction : 'server',
			url : "admin/Monitorvehicle_getByPage.action?type=1",
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
			
			$.post("admin/searchMonitorvehicleById.action", {
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
				var url="admin/deleteMonitorvehicleByList.action";
				var operate="删除";
				post(url,data,operate,'monitorvehicleId');return;
			
			case "edit":
				var data = gridManager.getCheckedRows();
				edit(data);return;
				
			}	
			
		}
		alert(item.text);
	}
	function addOrEditAccount(operate){
		$("#save").click(function() {	
			
			
			$.post("admin/Monitorvehicle_"+operate+".action", {
				'monitorvehicle.monitor_id' : $("#monitor_id").val(),
				'monitorvehicle.account_id' : $("#account_id").val(),
				'monitorvehicle.call_letter' : $("#call_letter").val(),
				'monitorvehicle.position_mode' : $("#position_mode").val(),
				'monitorvehicle.number_plate' : $("#number_plate").val()
				
				
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
                        $("#monitor_id").val(this.monitor_id); 
                        $("#account_id").val(this.account_id); 
                        $("#call_letter").val(this.call_letter); 
                        $("#position_mode").val(this.position_mode); 
                        $("#number_plate").val(this.number_plate); 
                            });
		addOrEditAccount("edit");
	}	
	function add(){
                        $("#monitor_id").val(""); 
                        $("#account_id").val(""); 
                        $("#call_letter").val(""); 
                        $("#position_mode").val(""); 
                        $("#number_plate").val(""); 
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
       
        
					<tr>
						<td>monitor_id:</td>
						<td><input type=text name=monitorvehicle.monitor_id id=monitor_id>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>account_id:</td>
						<td><input type=text name=monitorvehicle.account_id id=account_id>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>call_letter:</td>
						<td><input type=text name=monitorvehicle.call_letter id=call_letter>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>position_mode:</td>
						<td><input type=text name=monitorvehicle.position_mode id=position_mode>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>number_plate:</td>
						<td><input type=text name=monitorvehicle.number_plate id=number_plate>
						</td>
						<td>中文</td>
					</tr>
        
				
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
