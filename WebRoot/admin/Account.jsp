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
				name:'account.account_id' ,
				value: $("#account_id").val()
				}
				,
					{
				name:'account.depart_id' ,
				value: $("#depart_id").val()
				}
				,
					{
				name:'account.loginname' ,
				value: $("#loginname").val()
				}
				,
					{
				name:'account.password' ,
				value: $("#password").val()
				}
				,
					{
				name:'account.username' ,
				value: $("#username").val()
				}
				,
					{
				name:'account.tel_phone_number' ,
				value: $("#tel_phone_number").val()
				}
				,
					{
				name:'account.mobile_phone_number' ,
				value: $("#mobile_phone_number").val()
				}
				,
					{
				name:'account.email' ,
				value: $("#email").val()
				}
				,
					{
				name:'account.police_no' ,
				value: $("#police_no").val()
				}
				,
					{
				name:'account.id_number' ,
				value: $("#id_number").val()
				}
				,
					{
				name:'account.isonline' ,
				value: $("#isonline").val()
				}
				,
					{
				name:'account.aproval_status' ,
				value: $("#aproval_status").val()
				}
				,
					{
				name:'account.police_type' ,
				value: $("#police_type").val()
				}
				,
					{
				name:'account.last_logintime' ,
				value: $("#last_logintime").val()
				}
				,
					{
				name:'account.stamp' ,
				value: $("#stamp").val()
				}
				,
					{
				name:'account.login_type' ,
				value: $("#login_type").val()
				}
				,
					{
				name:'account.usbkey_id' ,
				value: $("#usbkey_id").val()
				}
				,
					{
				name:'account.is_lock' ,
				value: $("#is_lock").val()
				}
				,
					{
				name:'account.is_delete' ,
				value: $("#is_delete").val()
				}
				,
					{
				name:'account.headship' ,
				value: $("#headship").val()
				}
				,
					{
				name:'account.sex' ,
				value: $("#sex").val()
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
				name : 'account_id'
			},
        
        
           {
				display : '列名',
				name : 'depart_id'
			},
        
        
           {
				display : '列名',
				name : 'loginname'
			},
        
        
           {
				display : '列名',
				name : 'password'
			},
        
        
           {
				display : '列名',
				name : 'username'
			},
        
        
           {
				display : '列名',
				name : 'tel_phone_number'
			},
        
        
           {
				display : '列名',
				name : 'mobile_phone_number'
			},
        
        
           {
				display : '列名',
				name : 'email'
			},
        
        
           {
				display : '列名',
				name : 'police_no'
			},
        
        
           {
				display : '列名',
				name : 'id_number'
			},
        
        
           {
				display : '列名',
				name : 'isonline'
			},
        
        
           {
				display : '列名',
				name : 'aproval_status'
			},
        
        
           {
				display : '列名',
				name : 'police_type'
			},
        
        
           {
				display : '列名',
				name : 'last_logintime'
			},
        
        
           {
				display : '列名',
				name : 'stamp'
			},
        
        
           {
				display : '列名',
				name : 'login_type'
			},
        
        
           {
				display : '列名',
				name : 'usbkey_id'
			},
        
        
           {
				display : '列名',
				name : 'is_lock'
			},
        
        
           {
				display : '列名',
				name : 'is_delete'
			},
        
        
           {
				display : '列名',
				name : 'headship'
			},
        
        
           {
				display : '列名',
				name : 'sex'
			},
        
			{
				display: '删除', isAllowHide: false,width:30,
				render: function (row)
				{  
				   
				var str1 = '<a  class="l-icon-delete" onclick="operateById(\'删除 \',\'admin/deleteAccount.action\',' +row.accountId+ ',\'account.accountId\');">&nbsp;&nbsp;&nbsp;&nbsp;</a>';
				return str1;
				}
				
			}
			
			],

			dataAction : 'server',
			url : "admin/Account_getByPage.action?type=1",
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
			
			$.post("admin/searchAccountById.action", {
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
				var url="admin/deleteAccountByList.action";
				var operate="删除";
				post(url,data,operate,'accountId');return;
			
			case "edit":
				var data = gridManager.getCheckedRows();
				edit(data);return;
				
			}	
			
		}
		alert(item.text);
	}
	function addOrEditAccount(operate){
		$("#save").click(function() {	
			
			
			$.post("admin/Account_"+operate+".action", {
				'account.account_id' : $("#account_id").val(),
				'account.depart_id' : $("#depart_id").val(),
				'account.loginname' : $("#loginname").val(),
				'account.password' : $("#password").val(),
				'account.username' : $("#username").val(),
				'account.tel_phone_number' : $("#tel_phone_number").val(),
				'account.mobile_phone_number' : $("#mobile_phone_number").val(),
				'account.email' : $("#email").val(),
				'account.police_no' : $("#police_no").val(),
				'account.id_number' : $("#id_number").val(),
				'account.isonline' : $("#isonline").val(),
				'account.aproval_status' : $("#aproval_status").val(),
				'account.police_type' : $("#police_type").val(),
				'account.last_logintime' : $("#last_logintime").val(),
				'account.stamp' : $("#stamp").val(),
				'account.login_type' : $("#login_type").val(),
				'account.usbkey_id' : $("#usbkey_id").val(),
				'account.is_lock' : $("#is_lock").val(),
				'account.is_delete' : $("#is_delete").val(),
				'account.headship' : $("#headship").val(),
				'account.sex' : $("#sex").val()
				
				
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
                        $("#account_id").val(this.account_id); 
                        $("#depart_id").val(this.depart_id); 
                        $("#loginname").val(this.loginname); 
                        $("#password").val(this.password); 
                        $("#username").val(this.username); 
                        $("#tel_phone_number").val(this.tel_phone_number); 
                        $("#mobile_phone_number").val(this.mobile_phone_number); 
                        $("#email").val(this.email); 
                        $("#police_no").val(this.police_no); 
                        $("#id_number").val(this.id_number); 
                        $("#isonline").val(this.isonline); 
                        $("#aproval_status").val(this.aproval_status); 
                        $("#police_type").val(this.police_type); 
                        $("#last_logintime").val(this.last_logintime); 
                        $("#stamp").val(this.stamp); 
                        $("#login_type").val(this.login_type); 
                        $("#usbkey_id").val(this.usbkey_id); 
                        $("#is_lock").val(this.is_lock); 
                        $("#is_delete").val(this.is_delete); 
                        $("#headship").val(this.headship); 
                        $("#sex").val(this.sex); 
                            });
		addOrEditAccount("edit");
	}	
	function add(){
                        $("#account_id").val(""); 
                        $("#depart_id").val(""); 
                        $("#loginname").val(""); 
                        $("#password").val(""); 
                        $("#username").val(""); 
                        $("#tel_phone_number").val(""); 
                        $("#mobile_phone_number").val(""); 
                        $("#email").val(""); 
                        $("#police_no").val(""); 
                        $("#id_number").val(""); 
                        $("#isonline").val(""); 
                        $("#aproval_status").val(""); 
                        $("#police_type").val(""); 
                        $("#last_logintime").val(""); 
                        $("#stamp").val(""); 
                        $("#login_type").val(""); 
                        $("#usbkey_id").val(""); 
                        $("#is_lock").val(""); 
                        $("#is_delete").val(""); 
                        $("#headship").val(""); 
                        $("#sex").val(""); 
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
						<td>account_id:</td>
						<td><input type=text name=account.account_id id=account_id>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>depart_id:</td>
						<td><input type=text name=account.depart_id id=depart_id>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>loginname:</td>
						<td><input type=text name=account.loginname id=loginname>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>password:</td>
						<td><input type=text name=account.password id=password>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>username:</td>
						<td><input type=text name=account.username id=username>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>tel_phone_number:</td>
						<td><input type=text name=account.tel_phone_number id=tel_phone_number>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>mobile_phone_number:</td>
						<td><input type=text name=account.mobile_phone_number id=mobile_phone_number>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>email:</td>
						<td><input type=text name=account.email id=email>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>police_no:</td>
						<td><input type=text name=account.police_no id=police_no>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>id_number:</td>
						<td><input type=text name=account.id_number id=id_number>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>isonline:</td>
						<td><input type=text name=account.isonline id=isonline>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>aproval_status:</td>
						<td><input type=text name=account.aproval_status id=aproval_status>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>police_type:</td>
						<td><input type=text name=account.police_type id=police_type>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>last_logintime:</td>
						<td><input type=text name=account.last_logintime id=last_logintime>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>stamp:</td>
						<td><input type=text name=account.stamp id=stamp>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>login_type:</td>
						<td><input type=text name=account.login_type id=login_type>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>usbkey_id:</td>
						<td><input type=text name=account.usbkey_id id=usbkey_id>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>is_lock:</td>
						<td><input type=text name=account.is_lock id=is_lock>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>is_delete:</td>
						<td><input type=text name=account.is_delete id=is_delete>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>headship:</td>
						<td><input type=text name=account.headship id=headship>
						</td>
						<td>中文</td>
					</tr>
        
       
        
					<tr>
						<td>sex:</td>
						<td><input type=text name=account.sex id=sex>
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
