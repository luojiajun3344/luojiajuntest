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
				name:'role.role_id' ,
				value: $("#role_id").val()
				}
				,
					{
				name:'role.role_name' ,
				value: $("#role_name").val()
				}
				,
					{
				name:'role.role_type' ,
				value: $("#role_type").val()
				}
				,
					{
				name:'role.super_role_id' ,
				value: $("#super_role_id").val()
				}
				,
					{
				name:'role.account_id' ,
				value: $("#account_id").val()
				}
				,
					{
				name:'role.create_time' ,
				value: $("#create_time").val()
				}
				,
					{
				name:'role.remarks' ,
				value: $("#remarks").val()
				}
				,
					{
				name:'role.ispublic' ,
				value: $("#ispublic").val()
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
				name : 'role_id'
			},
        
        
           {
				display : '列名',
				name : 'role_name'
			},
        
        
           {
				display : '列名',
				name : 'role_type'
			},
        
        
           {
				display : '列名',
				name : 'super_role_id'
			},
        
        
           {
				display : '列名',
				name : 'account_id'
			},
        
        
           {
				display : '列名',
				name : 'create_time'
			},
        
        
           {
				display : '列名',
				name : 'remarks'
			},
        
        
           {
				display : '列名',
				name : 'ispublic'
			},
        
			{
				display: '删除', isAllowHide: false,width:30,
				render: function (row)
				{  
				   
				var str1 = '<a  class="l-icon-delete" onclick="operateById(\'删除 \',\'admin/deleteRole.action\',' +row.roleId+ ',\'role.roleId\');">&nbsp;&nbsp;&nbsp;&nbsp;</a>';
				return str1;
				}
				
			}
			
			],

			dataAction : 'server',
			url : "admin/Role_getByPage.action?type=1",
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
			
			$.post("admin/searchRoleById.action", {
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
				var url="admin/deleteRoleByList.action";
				var operate="删除";
				post(url,data,operate,'roleId');return;
			
			case "edit":
				var data = gridManager.getCheckedRows();
				edit(data);return;
				
			}	
			
		}
		alert(item.text);
	}
	function addOrEditAccount(operate){
		$("#save").click(function() {	
			
			
			$.post("admin/Role_"+operate+".action", {
				'role.role_id' : $("#role_id").val(),
				'role.role_name' : $("#role_name").val(),
				'role.role_type' : $("#role_type").val(),
				'role.super_role_id' : $("#super_role_id").val(),
				'role.account_id' : $("#account_id").val(),
				'role.create_time' : $("#create_time").val(),
				'role.remarks' : $("#remarks").val(),
				'role.ispublic' : $("#ispublic").val()
				
				
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
                        $("#role_id").val(this.role_id); 
                        $("#role_name").val(this.role_name); 
                        $("#role_type").val(this.role_type); 
                        $("#super_role_id").val(this.super_role_id); 
                        $("#account_id").val(this.account_id); 
                        $("#create_time").val(this.create_time); 
                        $("#remarks").val(this.remarks); 
                        $("#ispublic").val(this.ispublic); 
                            });
		addOrEditAccount("edit");
	}	
	function add(){
                        $("#role_id").val(""); 
                        $("#role_name").val(""); 
                        $("#role_type").val(""); 
                        $("#super_role_id").val(""); 
                        $("#account_id").val(""); 
                        $("#create_time").val(""); 
                        $("#remarks").val(""); 
                        $("#ispublic").val(""); 
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
						<td>role_id:</td>
						<td><input type=text name=role.role_id id=role_id>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>role_name:</td>
						<td><input type=text name=role.role_name id=role_name>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>role_type:</td>
						<td><input type=text name=role.role_type id=role_type>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>super_role_id:</td>
						<td><input type=text name=role.super_role_id id=super_role_id>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>account_id:</td>
						<td><input type=text name=role.account_id id=account_id>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>create_time:</td>
						<td><input type=text name=role.create_time id=create_time>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>remarks:</td>
						<td><input type=text name=role.remarks id=remarks>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>ispublic:</td>
						<td><input type=text name=role.ispublic id=ispublic>
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
