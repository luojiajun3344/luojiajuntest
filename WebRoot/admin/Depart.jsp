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
				name:'depart.depart_id' ,
				value: $("#depart_id").val()
				}
				,
					{
				name:'depart.depart_no' ,
				value: $("#depart_no").val()
				}
				,
					{
				name:'depart.depart_name' ,
				value: $("#depart_name").val()
				}
				,
					{
				name:'depart.super_depart_id' ,
				value: $("#super_depart_id").val()
				}
				,
					{
				name:'depart.manager_name' ,
				value: $("#manager_name").val()
				}
				,
					{
				name:'depart.manager_phone' ,
				value: $("#manager_phone").val()
				}
				,
					{
				name:'depart.email' ,
				value: $("#email").val()
				}
				,
					{
				name:'depart.account_id' ,
				value: $("#account_id").val()
				}
				,
					{
				name:'depart.receive_person_name' ,
				value: $("#receive_person_name").val()
				}
				,
					{
				name:'depart.receive_person_phone' ,
				value: $("#receive_person_phone").val()
				}
				,
					{
				name:'depart.depart_type' ,
				value: $("#depart_type").val()
				}
				,
					{
				name:'depart.is_delete' ,
				value: $("#is_delete").val()
				}
				,
					{
				name:'depart.remark' ,
				value: $("#remark").val()
				}
				,
					{
				name:'depart.stamp' ,
				value: $("#stamp").val()
				}
				,
					{
				name:'depart.depart_sequence' ,
				value: $("#depart_sequence").val()
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
				name : 'depart_id'
			},
        
        
           {
				display : '列名',
				name : 'depart_no'
			},
        
        
           {
				display : '列名',
				name : 'depart_name'
			},
        
        
           {
				display : '列名',
				name : 'super_depart_id'
			},
        
        
           {
				display : '列名',
				name : 'manager_name'
			},
        
        
           {
				display : '列名',
				name : 'manager_phone'
			},
        
        
           {
				display : '列名',
				name : 'email'
			},
        
        
           {
				display : '列名',
				name : 'account_id'
			},
        
        
           {
				display : '列名',
				name : 'receive_person_name'
			},
        
        
           {
				display : '列名',
				name : 'receive_person_phone'
			},
        
        
           {
				display : '列名',
				name : 'depart_type'
			},
        
        
           {
				display : '列名',
				name : 'is_delete'
			},
        
        
           {
				display : '列名',
				name : 'remark'
			},
        
        
           {
				display : '列名',
				name : 'stamp'
			},
        
        
           {
				display : '列名',
				name : 'depart_sequence'
			},
        
			{
				display: '删除', isAllowHide: false,width:30,
				render: function (row)
				{  
				   
				var str1 = '<a  class="l-icon-delete" onclick="operateById(\'删除 \',\'admin/deleteDepart.action\',' +row.departId+ ',\'depart.departId\');">&nbsp;&nbsp;&nbsp;&nbsp;</a>';
				return str1;
				}
				
			}
			
			],

			dataAction : 'server',
			url : "admin/Depart_getByPage.action?type=1",
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
			
			$.post("admin/searchDepartById.action", {
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
				var url="admin/deleteDepartByList.action";
				var operate="删除";
				post(url,data,operate,'departId');return;
			
			case "edit":
				var data = gridManager.getCheckedRows();
				edit(data);return;
				
			}	
			
		}
		alert(item.text);
	}
	function addOrEditAccount(operate){
		$("#save").click(function() {	
			
			
			$.post("admin/Depart_"+operate+".action", {
				'depart.depart_id' : $("#depart_id").val(),
				'depart.depart_no' : $("#depart_no").val(),
				'depart.depart_name' : $("#depart_name").val(),
				'depart.super_depart_id' : $("#super_depart_id").val(),
				'depart.manager_name' : $("#manager_name").val(),
				'depart.manager_phone' : $("#manager_phone").val(),
				'depart.email' : $("#email").val(),
				'depart.account_id' : $("#account_id").val(),
				'depart.receive_person_name' : $("#receive_person_name").val(),
				'depart.receive_person_phone' : $("#receive_person_phone").val(),
				'depart.depart_type' : $("#depart_type").val(),
				'depart.is_delete' : $("#is_delete").val(),
				'depart.remark' : $("#remark").val(),
				'depart.stamp' : $("#stamp").val(),
				'depart.depart_sequence' : $("#depart_sequence").val()
				
				
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
                        $("#depart_id").val(this.depart_id); 
                        $("#depart_no").val(this.depart_no); 
                        $("#depart_name").val(this.depart_name); 
                        $("#super_depart_id").val(this.super_depart_id); 
                        $("#manager_name").val(this.manager_name); 
                        $("#manager_phone").val(this.manager_phone); 
                        $("#email").val(this.email); 
                        $("#account_id").val(this.account_id); 
                        $("#receive_person_name").val(this.receive_person_name); 
                        $("#receive_person_phone").val(this.receive_person_phone); 
                        $("#depart_type").val(this.depart_type); 
                        $("#is_delete").val(this.is_delete); 
                        $("#remark").val(this.remark); 
                        $("#stamp").val(this.stamp); 
                        $("#depart_sequence").val(this.depart_sequence); 
                            });
		addOrEditAccount("edit");
	}	
	function add(){
                        $("#depart_id").val(""); 
                        $("#depart_no").val(""); 
                        $("#depart_name").val(""); 
                        $("#super_depart_id").val(""); 
                        $("#manager_name").val(""); 
                        $("#manager_phone").val(""); 
                        $("#email").val(""); 
                        $("#account_id").val(""); 
                        $("#receive_person_name").val(""); 
                        $("#receive_person_phone").val(""); 
                        $("#depart_type").val(""); 
                        $("#is_delete").val(""); 
                        $("#remark").val(""); 
                        $("#stamp").val(""); 
                        $("#depart_sequence").val(""); 
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
						<td>depart_id:</td>
						<td><input type=text name=depart.depart_id id=depart_id>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>depart_no:</td>
						<td><input type=text name=depart.depart_no id=depart_no>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>depart_name:</td>
						<td><input type=text name=depart.depart_name id=depart_name>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>super_depart_id:</td>
						<td><input type=text name=depart.super_depart_id id=super_depart_id>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>manager_name:</td>
						<td><input type=text name=depart.manager_name id=manager_name>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>manager_phone:</td>
						<td><input type=text name=depart.manager_phone id=manager_phone>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>email:</td>
						<td><input type=text name=depart.email id=email>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>account_id:</td>
						<td><input type=text name=depart.account_id id=account_id>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>receive_person_name:</td>
						<td><input type=text name=depart.receive_person_name id=receive_person_name>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>receive_person_phone:</td>
						<td><input type=text name=depart.receive_person_phone id=receive_person_phone>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>depart_type:</td>
						<td><input type=text name=depart.depart_type id=depart_type>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>is_delete:</td>
						<td><input type=text name=depart.is_delete id=is_delete>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>remark:</td>
						<td><input type=text name=depart.remark id=remark>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>stamp:</td>
						<td><input type=text name=depart.stamp id=stamp>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>depart_sequence:</td>
						<td><input type=text name=depart.depart_sequence id=depart_sequence>
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
