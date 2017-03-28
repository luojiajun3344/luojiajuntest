CommWindow = function(str) {
	var title = '';
	var win = this;
	var panel;
	if (str == 'modifyaccount') {
		title = '修改账号资料';
		this.param7 = new Ext.form.DisplayField({
					fieldLabel : '登陆名',
					name : 'param7',
					value : 'reddy',
					width : 140,
					allowblank : true
				})
		this.password = new Ext.form.TextField({
					fieldLabel : '密码',
					name : 'password',
					width : 140,
					allowblank : true
				})

		this.password1 = new Ext.form.TextField({
					fieldLabel : '确认密码',
					name : 'password1',
					width : 140,
					allowblank : true
				})

		this.phone = new Ext.form.TextField({
					fieldLabel : '电话',
					name : 'phone',
					width : 140,
					allowblank : true
				})
		this.mobile = new Ext.form.TextField({
					fieldLabel : '手机号码',
					name : 'mobile',
					width : 140,
					allowblank : true
				})

		this.modifyaccount = new Ext.form.FormPanel({
					id : 'gprsparam',
					// title:'车牌号码:湘A0003',
					labelWidth : 70,
					labelAlign : 'right',
					hideLabel : false,
					// frame : true,
					border : false,
					buttonAlign : 'center',
					layout : 'column',
					bbar : ['->', new Ext.Button({
										text : '确定',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '重置',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '关闭',
										width : 70,
										handler : function() {

										}
									})],
					defaults : {
						layout : 'form',
						columnWidth : .9,
						border : false
					},
					items : [{
								columnWidth : .9,
								items : win.param7
							}, {
								columnWidth : .9,
								items : win.password
							}, {
								columnWidth : .9,
								items : win.password1
							}, {
								columnWidth : .9,
								items : win.phone
							}, {
								columnWidth : .9,
								items : win.mobile
							}]
				});
		panel = win.modifyaccount;
	}
	if (str == "addvehilce" || str == "updatevehicle") {
		if (str == "addvehilce") {
			title = "新增车辆信息"
		} else {
			title = "修改车辆信息"
		}
		var form1 = new Ext.form.TextField({
					fieldLabel : '车牌号码',
					name : 'form1',
					width : 140,
					allowblank : true
				});
		var form13 = new Ext.form.TextField({
					fieldLabel : '品牌',
					name : 'form13',
					width : 140,
					allowblank : true
				});
		var form2 = new Ext.form.TextField({
					fieldLabel : '车辆型号',
					name : 'form2',
					width : 140,
					allowblank : true
				});
		var form3 = new Ext.form.TextField({
					fieldLabel : '车辆类型',
					name : 'form3',
					width : 140,
					allowblank : true
				});
		var form4 = new Ext.form.TextField({
					fieldLabel : '车架号',
					name : 'form4',
					width : 140,
					allowblank : true
				});
		var form5 = new Ext.form.TextField({
					fieldLabel : '发动机号',
					name : 'form5',
					width : 140,
					allowblank : true
				});
		var form6 = new Ext.form.TextField({
					fieldLabel : '颜色',
					name : 'form6',
					width : 140,
					allowblank : true
				});
		var form7 = new Ext.form.TextField({
					fieldLabel : '初始里程',
					name : 'form7',
					width : 140,
					allowblank : true
				});
		var form8 = new Ext.form.TextField({
					fieldLabel : '使用单位',
					name : 'form8',
					width : 140,
					allowblank : true
				});
		var form9 = new Ext.form.TextField({
					fieldLabel : '使用人',
					name : 'form9',
					width : 140,
					allowblank : true
				});
		var form10 = new Ext.form.TextField({
					fieldLabel : '联系人',
					name : 'form10',
					width : 140,
					allowblank : true
				});
		var form11 = new Ext.form.TextField({
					fieldLabel : '手机号',
					name : 'form11',
					width : 140,
					allowblank : true
				});
		var form12 = new Ext.form.TextField({
					fieldLabel : '电话',
					name : 'form12',
					width : 140,
					allowblank : true
				});
		this.vehicleform = new Ext.form.FormPanel({
					id : 'addvehicleform',
					labelWidth : 70,
					labelAlign : 'right',
					hideLabel : false,
					// frame : true,
					border : false,
					buttonAlign : 'center',
					layout : 'column',
					bbar : ['->', new Ext.Button({
										text : '保存',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '重置',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '关闭',
										width : 70,
										handler : function() {

										}
									})],
					defaults : {
						layout : 'form',
						columnWidth : .5,
						border : false
					},
					items : [{
								columnWidth : .5,
								items : form1
							}, {
								columnWidth : .5,
								items : form13
							}, {
								columnWidth : .5,
								items : form2
							}, {
								columnWidth : .5,
								items : form3
							}, {
								columnWidth : .5,
								items : form4
							}, {
								columnWidth : .5,
								items : form5
							}, {
								columnWidth : .5,
								items : form6
							}, {
								columnWidth : .5,
								items : form7
							}, {
								columnWidth : .5,
								items : form8
							}, {
								columnWidth : .5,
								items : form9
							}, {
								columnWidth : .5,
								items : form10
							}, {
								columnWidth : .5,
								items : form11
							}, {
								columnWidth : .5,
								items : form12
							}]
				})
		panel = win.vehicleform;
	}

	if (str == "addunit" || str == "updateunit") {
		if (str == "addunit") {
			title = "新增车台信息"
		} else {
			title = "修改车台信息"
		}
		var uform1 = new Ext.form.TextField({
					fieldLabel : '车载电话号码',
					name : 'uform1',
					width : 140,
					allowblank : true
				});
		var uform2 = new Ext.form.TextField({
					fieldLabel : '车台序列号',
					name : 'uform2',
					width : 140,
					allowblank : true
				});
		var uform3 = new Ext.form.TextField({
					fieldLabel : '车台类型',
					name : 'uform3',
					width : 140,
					allowblank : true
				});
		var uform4 = new Ext.form.TextField({
					fieldLabel : '车载终端模式',
					name : 'uform4',
					width : 140,
					allowblank : true
				});
		var uform5 = new Ext.form.TextField({
					fieldLabel : '运营商',
					name : 'uform5',
					width : 140,
					allowblank : true
				});
		var uform6 = new Ext.form.TextField({
					fieldLabel : '遥控器编号',
					name : 'uform6',
					width : 140,
					allowblank : true
				});
		var uform7 = new Ext.form.TextField({
					fieldLabel : '通信模式',
					name : 'uform7',
					width : 140,
					allowblank : true
				});
		var uform8 = new Ext.form.TextField({
					fieldLabel : '开通服务时间',
					name : 'uform8',
					width : 140,
					allowblank : true
				});
		var uform9 = new Ext.form.TextField({
					fieldLabel : '安装时间',
					name : 'uform9',
					width : 140,
					allowblank : true
				});
		var uform10 = new Ext.form.TextField({
					fieldLabel : '更新时间',
					name : 'uform10',
					width : 140,
					allowblank : true
				});
		var uform11 = new Ext.form.TextField({
					fieldLabel : '安装人',
					name : 'uform11',
					width : 140,
					allowblank : true
				});
		var uform12 = new Ext.form.TextField({
					fieldLabel : '安装地点',
					name : 'uform12',
					width : 140,
					allowblank : true
				});
		this.unitform = new Ext.form.FormPanel({
					id : 'unitform',
					labelWidth : 80,
					labelAlign : 'right',
					hideLabel : false,
					// frame : true,
					border : false,
					buttonAlign : 'center',
					layout : 'column',
					bbar : ['->', new Ext.Button({
										text : '保存',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '重置',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '关闭',
										width : 70,
										handler : function() {

										}
									})],
					defaults : {
						layout : 'form',
						columnWidth : .5,
						border : false
					},
					items : [{
								columnWidth : .5,
								items : uform1
							}, {
								columnWidth : .5,
								items : uform2
							}, {
								columnWidth : .5,
								items : uform3
							}, {
								columnWidth : .5,
								items : uform4
							}, {
								columnWidth : .5,
								items : uform5
							}, {
								columnWidth : .5,
								items : uform6
							}, {
								columnWidth : .5,
								items : uform7
							}, {
								columnWidth : .5,
								items : uform8
							}, {
								columnWidth : .5,
								items : uform9
							}, {
								columnWidth : .5,
								items : uform10
							}, {
								columnWidth : .5,
								items : uform11
							}, {
								columnWidth : .5,
								items : uform12
							}]
				})
		panel = win.unitform;
	}

	if (str == "adddepart" || str == "updatedepart") {
		if (str == "adddepart") {
			title = "新增组织机构信息"
		} else {
			title = "修改组织机构信息"
		}
		var dform1 = new Ext.form.TextField({
					fieldLabel : '机构名称',
					name : 'dform1',
					width : 140,
					allowblank : true
				});
		var dform2 = new Ext.form.TextField({
					fieldLabel : '上级机构名称',
					name : 'dform2',
					width : 140,
					allowblank : true
				});
		var dform3 = new Ext.form.TextField({
					fieldLabel : '负责人',
					name : 'dform3',
					width : 140,
					allowblank : true
				});
		var dform4 = new Ext.form.TextField({
					fieldLabel : '负责人号码',
					name : 'dform4',
					width : 140,
					allowblank : true
				});
		var dform5 = new Ext.form.TextField({
					fieldLabel : '负责人邮箱',
					name : 'dform5',
					width : 140,
					allowblank : true
				});
		var dform6 = new Ext.form.TextField({
					fieldLabel : '信息管理员',
					name : 'dform6',
					width : 140,
					allowblank : true
				});
		var dform7 = new Ext.form.TextField({
					fieldLabel : '警情接收人',
					name : 'dform7',
					width : 140,
					allowblank : true
				});
		var dform8 = new Ext.form.TextField({
					fieldLabel : '警情接收人号码',
					name : 'dform8',
					width : 140,
					allowblank : true
				});

		this.departform = new Ext.form.FormPanel({
					id : 'departform',
					labelWidth : 100,
					labelAlign : 'right',
					hideLabel : false,
					// frame : true,
					border : false,
					// buttonAlign : 'center',
					layout : 'column',
					bbar : ['->', new Ext.Button({
										text : '保存',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '重置',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '关闭',
										width : 70,
										handler : function() {

										}
									})],
					defaults : {
						layout : 'form',
						columnWidth : .5,
						border : false
					},
					items : [{
								columnWidth : .5,
								items : dform1
							}, {
								columnWidth : .5,
								items : dform2
							}, {
								columnWidth : .5,
								items : dform3
							}, {
								columnWidth : .5,
								items : dform4
							}, {
								columnWidth : .5,
								items : dform5
							}, {
								columnWidth : .5,
								items : dform6
							}, {
								columnWidth : .5,
								items : dform7
							}, {
								columnWidth : .5,
								items : dform8
							}]
				})
		panel = win.departform;
	}

	if (str == "addaccount" || str == "updateaccount") {
		if (str == "addaccount") {
			title = "新增账号信息"
		} else {
			title = "修改账号信息"
		}
		var aform1 = new Ext.form.TextField({
					fieldLabel : '登录名',
					name : 'aform1',
					width : 140,
					allowblank : true
				});
		var aform2 = new Ext.form.TextField({
					fieldLabel : '用户姓名',
					name : 'aform2',
					width : 140,
					allowblank : true
				});
		var aform3 = new Ext.form.TextField({
					fieldLabel : '密码',
					name : 'aform3',
					width : 140,
					allowblank : true
				});
		var aform4 = new Ext.form.TextField({
					fieldLabel : '确认密码',
					name : 'aform4',
					width : 140,
					allowblank : true
				});
		var aform5 = new Ext.form.TextField({
					fieldLabel : '所属机构',
					name : 'aform5',
					width : 140,
					allowblank : true
				});
		var aform6 = new Ext.form.TextField({
					fieldLabel : '电话号码',
					name : 'aform6',
					width : 140,
					allowblank : true
				});
		var aform7 = new Ext.form.TextField({
					fieldLabel : '手机号码',
					name : 'aform7',
					width : 140,
					allowblank : true
				});
		var aform8 = new Ext.form.TextField({
					fieldLabel : '邮箱',
					name : 'aform8',
					width : 140,
					allowblank : true
				});
		var aform9 = new Ext.form.TextField({
					fieldLabel : '警号',
					name : 'aform9',
					width : 140,
					allowblank : true
				});
		var aform10 = new Ext.form.TextField({
					fieldLabel : '身份证号',
					name : 'aform10',
					width : 140,
					allowblank : true
				});

		this.accountform = new Ext.form.FormPanel({
					id : 'accountform',
					labelWidth : 80,
					labelAlign : 'right',
					hideLabel : false,
					// frame : true,
					border : false,
					buttonAlign : 'center',
					layout : 'column',
					bbar : ['->', new Ext.Button({
										text : '保存',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '重置',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '关闭',
										width : 70,
										handler : function() {

										}
									})],
					defaults : {
						layout : 'form',
						columnWidth : .5,
						border : false
					},
					items : [{
								columnWidth : .5,
								items : aform1
							}, {
								columnWidth : .5,
								items : aform2
							}, {
								columnWidth : .5,
								items : aform3
							}, {
								columnWidth : .5,
								items : aform4
							}, {
								columnWidth : .5,
								items : aform5
							}, {
								columnWidth : .5,
								items : aform6
							}, {
								columnWidth : .5,
								items : aform7
							}, {
								columnWidth : .5,
								items : aform8
							}, {
								columnWidth : .5,
								items : aform9
							}, {
								columnWidth : .5,
								items : aform10
							}]
				})
		panel = win.accountform;
	}

	if (str == "addrole" || str == "updaterole") {
		if (str == "addrole") {
			title = "新增角色信息"
		} else {
			title = "修改角色信息"
		}
		var rform1 = new Ext.form.TextField({
					fieldLabel : '角色名称',
					name : 'rform1',
					width : 140,
					allowblank : true
				});
		var rform2 = new Ext.form.TextField({
					fieldLabel : '备注',
					name : 'rform2',
					width : 140,
					allowblank : true
				});

		this.roleform = new Ext.form.FormPanel({
					id : 'roleform',
					labelWidth : 100,
					labelAlign : 'right',
					hideLabel : false,
					// frame : true,
					border : false,
					// buttonAlign : 'center',
					layout : 'form',
					bbar : ['->', new Ext.Button({
										text : '保存',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '重置',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '关闭',
										width : 70,
										handler : function() {

										}
									})],
					defaults : {
						layout : 'form',
						columnWidth : .5,
						border : false
					},
					items : [{
								columnWidth : .5,
								items : rform1
							}, {
								columnWidth : .5,
								items : rform2
							}]
				})
		panel = win.roleform;
	}

	if (str == 'modulemanage') {
		title = '分配功能模块';

		this.moduletree = new Ext.tree.TreePanel({
					id : 'moduletree',
					// region: 'center',
					title : '模块列表',
					// border: false,
					lines : true,
					shim : false,
					autoScroll : true,
					containerScroll : true,
					animate : true,
					rootVisible : false,
					loader : new Ext.tree.TreeLoader({
							/*
							 * id:'treeload', preloadChildren:true, //url:
							 * 'treevalue.jsp', listeners : { 'beforeload' :
							 * function(treeloader, node) { }, 'load' :
							 * function(tree, node, response) { alert(1);
							 * node.expandChildNodes(1); } }
							 */
							}),
					bbar : ['->', new Ext.Button({
										text : '保存',
										width : 70,
										handler : function() {

										}
									})],
					root : new Ext.tree.AsyncTreeNode({
								id : '1',
								text : "所有功能",
								children : [{
											id : 2,
											checked : false,
											text : '系统管理',
											leaf : false,
											children : [{
														id : 8,
														checked : false,
														text : '车辆档案管理',
														leaf : true
													}, {
														id : 8,
														checked : false,
														text : '车台档案管理',
														leaf : true
													}, {
														id : 8,
														checked : false,
														text : '组织机构管理',
														leaf : true
													}, {
														id : 8,
														checked : false,
														text : '账号管理',
														leaf : true
													}, {
														id : 8,
														checked : false,
														text : '角色管理',
														leaf : true
													}]
										}, {
											id : 3,
											checked : false,
											text : '报表管理',
											children : [{
														id : 4,
														checked : false,
														text : '在线统计',
														leaf : true
													}, {
														id : 6,
														checked : false,
														text : '未上报统计',
														leaf : true
													}, {
														id : 7,
														checked : false,
														text : '里程油耗统计',
														leaf : true
													}]
										}, {
											id : 5,
											checked : false,
											text : '日志管理',
											leaf : false,
											children : [{
														id : 9,
														checked : false,
														text : '车辆日志管理',
														leaf : true
													}, {
														id : 9,
														checked : false,
														text : '操作日志管理',
														leaf : true
													}]

										}],
								expanded : true
							}),
					selModel : new Ext.tree.MultiSelectionModel(),
					listeners : {
						'afterlayout' : function(tree) {
							tree.expandAll();
						}
					}
				});

		panel = win.moduletree;
	}

	if (str == 'distibutionroler') {
		title = '分配角色';

		this.distibutionrolertree = new Ext.tree.TreePanel({
					id : 'moduletree',
					// region: 'center',
					title : '角色列表',
					// border: false,
					lines : true,
					shim : false,
					autoScroll : true,
					containerScroll : true,
					animate : true,
					rootVisible : false,
					loader : new Ext.tree.TreeLoader({}),
					bbar : ['->', new Ext.Button({
										text : '保存',
										width : 70,
										handler : function() {

										}
									})],
					root : new Ext.tree.AsyncTreeNode({
								id : '1',
								text : "所有角色",
								children : [{
											id : 2,
											checked : false,
											text : '超级管理员',
											leaf : true
										}, {
											id : 3,
											checked : false,
											text : '普通管理员',
											leaf : true
										}, {
											id : 4,
											checked : false,
											text : '操作员',
											leaf : true
										}],
								expanded : true
							}),
					selModel : new Ext.tree.MultiSelectionModel(),
					listeners : {
						'afterlayout' : function(tree) {
							tree.expandAll();
						}
					}
				});

		panel = win.distibutionrolertree;
	}

	if (str == "addvehicletype" || str == "updatevehicletype") {
		if (str == "addvehicletype") {
			title = "新增车辆类型信息"
		} else {
			title = "修改车辆类型信息"
		}
		var vtform1 = new Ext.form.TextField({
					id : 'vtform1',
					fieldLabel : '车辆类型',
					name : 'vtform1',
					width : 140,
					allowblank : true
				});
		var vtform2 = new Ext.form.TextField({
					fieldLabel : '油耗参数值',
					name : 'vtform2',
					width : 140,
					allowblank : true
				});

		this.vehicletypeform = new Ext.form.FormPanel({
					id : 'vehicletypeform',
					labelWidth : 100,
					labelAlign : 'right',
					hideLabel : false,
					// frame : true,
					border : false,
					// buttonAlign : 'center',
					layout : 'form',
					bbar : ['->', new Ext.Button({
										text : '保存',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '重置',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '关闭',
										width : 70,
										handler : function() {

										}
									})],
					defaults : {
						layout : 'form',
						columnWidth : .9,
						border : false
					},
					items : [{
								columnWidth : .9,
								items : vtform1
							}, {
								columnWidth : .9,
								items : vtform2
							}]
				})
		panel = win.vehicletypeform;
	}

	if (str == 'vehiclegz') {
		title = '车辆跟踪';

		/*
		 * this.vehicleNum = new Ext.form.TextField({ fieldLabel:'车牌号码',
		 * name:'vehicleNum', width:140, allowblank:true })
		 */
		this.vehicleNum = new Ext.form.DisplayField({
					fieldLabel : '车牌号码',
					name : 'vehicleNum',
					value : '湘A0003',
					width : 140,
					allowblank : true
				})
		this.gzNum = new Ext.form.TextField({
					fieldLabel : '跟踪次数',
					name : 'gzNum',
					width : 140,
					allowblank : true
				})

		this.timejg = new Ext.form.TextField({
					fieldLabel : '时间间隔',
					name : 'timejg',
					width : 100,
					allowblank : true
				})

		this.con = new Ext.Container({
					fieldLabel : "时间间隔",
					layout : "column",
					items : [win.timejg, {
								xtype : 'displayfield',
								value : '(单位/s)'
							}]
				});

		this.gzpanel = new Ext.form.FormPanel({
					id : 'gzpanel',
					labelWidth : 70,
					labelAlign : 'right',
					hideLabel : false,
					// frame : true,
					border : false,
					buttonAlign : 'center',
					layout : 'column',
					bbar : ['->', new Ext.Button({
										text : '开始跟踪',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '停止跟踪',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '关闭',
										width : 70,
										handler : function() {

										}
									})],
					defaults : {
						layout : 'form',
						columnWidth : .9,
						border : false
					},
					items : [{
								columnWidth : .9,
								items : win.vehicleNum
							}, {
								columnWidth : .9,
								items : win.gzNum
							}, {
								columnWidth : .9,
								items : win.con
							}]
				});
		panel = win.gzpanel;
	}

	if (str == 'vehicledjsb') {
		title = '车辆定距上报';

		this.param5 = new Ext.form.DisplayField({
					fieldLabel : '车牌号码',
					name : 'param5',
					value : '湘A0003',
					width : 140,
					allowblank : true
				})

		this.distance = new Ext.form.TextField({
					fieldLabel : '距离间隔',
					name : 'distance',
					width : 100,
					allowblank : true
				})

		this.distancecon = new Ext.Container({
					fieldLabel : "距离间隔",
					layout : "column",
					items : [win.distance, {
								xtype : 'displayfield',
								value : '(单位/km)'
							}]
				})

		this.vehicledjsb = new Ext.form.FormPanel({
					id : 'gzpanel',
					labelWidth : 70,
					labelAlign : 'right',
					hideLabel : false,
					// frame : true,
					border : false,
					buttonAlign : 'center',
					layout : 'column',
					bbar : ['->', new Ext.Button({
										text : '开始上报',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '停止上报',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '关闭',
										width : 70,
										handler : function() {

										}
									})],
					defaults : {
						layout : 'form',
						columnWidth : .9,
						border : false
					},
					items : [{
								columnWidth : .9,
								items : win.param5
							}, {
								columnWidth : .9,
								items : win.distancecon
							}]
				});
		panel = win.vehicledjsb;
	}

	if (str == 'gprsparam') {
		title = 'GPRS连接参数';
		this.param7 = new Ext.form.DisplayField({
					fieldLabel : '车牌号码',
					name : 'param7',
					value : '湘A0003',
					width : 140,
					allowblank : true
				})
		this.ip = new Ext.form.TextField({
					fieldLabel : 'IP地址',
					name : 'ip',
					width : 140,
					allowblank : true
				})

		this.APN = new Ext.form.TextField({
					fieldLabel : 'APN',
					name : 'APN',
					width : 140,
					allowblank : true
				})
		this.port = new Ext.form.TextField({
					fieldLabel : '端口',
					name : 'port',
					width : 140,
					allowblank : true
				})

		this.gprsparam = new Ext.form.FormPanel({
					id : 'gprsparam',
					// title:'车牌号码:湘A0003',
					labelWidth : 70,
					labelAlign : 'right',
					hideLabel : false,
					// frame : true,
					border : false,
					buttonAlign : 'center',
					layout : 'column',
					bbar : ['->', new Ext.Button({
										text : '设置',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '重置',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '关闭',
										width : 70,
										handler : function() {

										}
									})],
					defaults : {
						layout : 'form',
						columnWidth : .9,
						border : false
					},
					items : [{
								columnWidth : .9,
								items : win.param7
							}, {
								columnWidth : .9,
								items : win.ip
							}, {
								columnWidth : .9,
								items : win.port
							}, {
								columnWidth : .9,
								items : win.APN
							}]
				});
		panel = win.gprsparam;
	}

	if (str == 'takepictures') {
		title = '拍照设置';
		this.param3 = new Ext.form.DisplayField({
					fieldLabel : '车牌号码',
					name : 'param3',
					value : '湘A0003',
					width : 140,
					allowblank : true
				})
		this.param1 = new Ext.form.ComboBox({
					id : 'param1',
					name : 'param1',
					fieldLabel : '摄像头',
					width : 150,
					triggerAction : 'all',// 此属性必须有 点击时触发执行Action
					mode : "local",
					editable : true,
					store : new Ext.data.SimpleStore({
								data : [[-1, ''], [0, "摄像头1"], [1, "摄像头2"]],
								fields : ['key', 'value']
							}),
					emptyText : '选择摄像头',
					allowBlank : true,
					valueField : 'key',
					displayField : 'value'
				});
		this.param2 = new Ext.form.ComboBox({
					id : 'param2',
					name : 'param2',
					fieldLabel : '图片大小',
					width : 150,
					triggerAction : 'all',// 此属性必须有 点击时触发执行Action
					mode : "local",
					editable : true,
					store : new Ext.data.SimpleStore({
								data : [[-1, ''], [0, "200x200"],
										[1, "200x400"]],
								fields : ['key', 'value']
							}),
					emptyText : '选择图片大小',
					allowBlank : true,
					valueField : 'key',
					displayField : 'value'
				});
		this.takepictures = new Ext.form.FormPanel({
					id : 'takepictures',
					// title:'车牌号码:湘A0003',
					labelWidth : 70,
					labelAlign : 'right',
					hideLabel : false,
					// align:"center",
					// frame : true,
					// bodyStyle:"text-align:center",
					border : false,
					buttonAlign : 'center',
					layout : 'column',
					bbar : ['->', new Ext.Button({
										text : '拍照',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '保存',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '关闭',
										width : 70,
										handler : function() {

										}
									})],
					defaults : {
						layout : 'form',
						columnWidth : .9,
						border : false
					},
					items : [{
								columnWidth : .9,
								items : win.param3
							}, {
								columnWidth : .9,
								items : win.param1
							}, {
								columnWidth : .9,
								items : win.param2
							}, {
								columnWidth : .9,
								items : {
									height : 150,
									width : 150,
									html : '<div></div>'
								}
							}]
				});
		panel = win.takepictures;
	}
	if (str == 'historytrack') {
		title = '历史轨迹回放';
		this.param6 = new Ext.form.DisplayField({
					fieldLabel : '车牌号码',
					name : 'param6',
					value : '湘A0003',
					width : 140,
					allowblank : true
				})
		this.startDate = new Ext.form.DateField({
					id : 'startDate',
					format : 'Y-m-d h:i:s',
					name : 'startDate',
					emptyText : '开始时间',
					// fieldLabel : '购买时间',
					// readOnly : true,
					width : 140,
					allowBlank : true
				});

		this.endDate = new Ext.form.DateField({
					id : 'endDate',
					format : 'Y-m-d h:i:s',
					name : 'endDate',
					emptyText : '结束时间',
					// fieldLabel : '购买时间',
					// readOnly : true,
					width : 140,
					allowBlank : true
				});

		this.histrack = new Ext.form.FormPanel({
					// title:'车牌号码：湘A0003',
					id : 'histrack',
					labelWidth : 70,
					labelAlign : 'right',
					hideLabel : false,
					// frame : true,
					border : false,
					buttonAlign : 'center',
					layout : 'column',
					bbar : ['->', new Ext.Button({
										text : '查询',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '播放',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '关闭',
										width : 70,
										handler : function() {

										}
									})],
					defaults : {
						layout : 'form',
						columnWidth : .9,
						border : false
					},
					items : [{
								columnWidth : .9,
								items : win.param6
							}, {
								columnWidth : .9,
								items : win.startDate
							}, {
								columnWidth : .9,
								items : win.endDate
							}]

				});

		panel = win.histrack;
	}

	if (str == 'alarminfo') {
		title = '警情信息';
		this.search1 = new Ext.form.TextField({
					id : 'search1',
					emptyText : '警情类型'
				});
		this.search2 = new Ext.form.TextField({
					id : 'search2',
					emptyText : '车牌号码'
				});
		this.alarmInfo = new Ext.data.Record.create([{
					name : 'alarmId'
				}, {
					name : 'alarmtime'
				}, {
					name : 'alarmContent'
				}, {
					name : 'plateNumber'
				}, {
					name : 'callLetter'
				}, {
					name : 'operate'
				}])

		this.alarmColumnModel = new Ext.grid.ColumnModel([{
					dataIndex : 'alarmId',
					header : '所属机构',
					
					sortable : true,
					width : 50
				},{
					dataIndex : 'plateNumber',
					header : '车牌号码',
					sortable : true,
					width : 50
				},{
					dataIndex : 'alarmtime',
					header : '时间',
					sortable : true,
					width : 50
				},{
					dataIndex : 'alarmContent',
					header : '警情内容',
					sortable : true,
					width : 50
				}, {
					dataIndex : 'callLetter',
					header : '手机号',
					sortable : true,
					width : 50
				}, {
					header : "操作",
					width : 100,
					dataIndex : 'operate',
					menuDisabled : true,
					renderer : function(v) {
						return "<span style='margin-right:10px'><a href='#' onclick=alarmalert()>短信提醒</a></span>";
					}
				}]);
		this.alarmstore = new Ext.data.Store({
					reader : new Ext.data.JsonReader({
								totalProperty : 'total',
								root : 'resultList'
							}, win.alarmInfo),
					url : '',
					data : {
						resultList : [{		alarmId:'庆阳市西峰分局',
									plateNumber : '甘M0038警',
									callLetter : '1382828228',									
									alarmtime : '2012-01-01 12:30:31',
									alarmContent : '越界'
								},{		alarmId:'庆阳市西峰分局',
									plateNumber : '甘M0038警',
									callLetter : '1382828228',									
									alarmtime : '2012-01-01 12:30:31',
									alarmContent : '偏离线路'
								},{		alarmId:'庆阳市西峰分局',
									plateNumber : '甘M0038警',
									callLetter : '1382828228',									
									alarmtime : '2012-01-01 12:30:31',
									alarmContent : '越界'
								},{		alarmId:'庆阳市西峰分局',
									plateNumber : '甘M0038警',
									callLetter : '1382828228',									
									alarmtime : '2012-01-01 12:30:31',
									alarmContent : '越界'
								},{		alarmId:'庆阳市西峰分局',
									plateNumber : '甘M0038警',
									callLetter : '1382828228',									
									alarmtime : '2012-01-01 12:30:31',
									alarmContent : '偏离线路'
								}],
						total : 3,
						limit : 2,
						start : 0
					},
					baseParams : {

		}
				});

		this.alarmgrid = new Ext.grid.GridPanel({
					id : 'alarmgrid',
					store : win.alarmstore,
					bodyStyle : 'background-color:#dfe8f6',
					border : false,
					cm : win.alarmColumnModel,
					tbar : [win.search1, win.search2, new Ext.Button({
										iconCls : 'filter',
										text : '搜索',
										handler : function() {
											/*
											 * var a =
											 * Ext.getCmp('search1').getValue();
											 * var b =
											 * Ext.getCmp('search2').getValue();
											 * var c =
											 * Ext.getCmp('search3').getValue();
											 */

											win.alarmstore.reload({
														params : {
															start : 0,
															limit : 2
														}
													});
										}
									})],
					bbar : [new Ext.PagingToolbar({
								pageSize : 2,// 每页显示数
								displayInfo : true,
								store : win.alarmstore,// 数据源
								displayMsg : '本页显示 {0} - {1} 条 共 {2} 条',
								emptyMsg : '没有记录'
							})

					],
					viewConfig : {
						forceFit : true
					},
					listeners : {

		}
				});
		panel = win.alarmgrid;
	}
	/*********************在线用户明细window开始***********************/
	if (str == 'onlineuserinfo') {
		title = '在线用户信息';
		this.ausearch1 = new Ext.form.TextField({
					id : 'search1',
					emptyText : '用户姓名'
				});
		this.ausearch2 = new Ext.form.TextField({
					id : 'search2',
					emptyText : '所属机构'
				});
		this.onlineuserInfo = new Ext.data.Record.create([{
					name : 'onlineuserId'
				}, {
					name : 'onlineusertime'
				}, {
					name : 'onlineuserContent'
				}, {
					name : 'plateNumber'
				}, {
					name : 'callLetter'
				}, {
					name : 'operate'
				}, {
					name : 'phone'
				}])

		this.onlineuserColumnModel = new Ext.grid.ColumnModel([{
					dataIndex : 'onlineuserId',
					header : '警情ID',
					hidden : true,
					sortable : true,
					width : 50
				}, {
					dataIndex : 'onlineusertime',
					header : '登陆名',
					sortable : true,
					width : 50
				}, {
					dataIndex : 'onlineuserContent',
					header : '用户姓名',
					sortable : true,
					width : 50
				}, {
					dataIndex : 'plateNumber',
					header : '所属机构',
					sortable : true,
					width : 50
				}, {
					dataIndex : 'callLetter',
					header : '角色名称',
					sortable : true,
					width : 50
				}, {
					header : "电话号码",
					width : 100,
					dataIndex : 'operate',
					sortable : true
					
				}, {
					header : "手机号码",
					width : 100,
					dataIndex : 'phone',
					sortable : true
					
				}]);
		this.onlineuserstore = new Ext.data.Store({
					reader : new Ext.data.JsonReader({
								totalProperty : 'total',
								root : 'resultList'
							}, win.onlineuserInfo),
					//url : '',
					data : {
						resultList : [{
									plateNumber : '兰州市公安局',
									callLetter : '超级管理员',
									onlineuserId : '00001',
									onlineusertime : 're',
									onlineuserContent : '小白'
								}, {
									plateNumber : '兰州市公安局',
									callLetter : '超级管理员',
									onlineuserId : '00001',
									onlineusertime : 'dd',
									onlineuserContent : '小名'
								}, {
									plateNumber : '兰州市公安局',
									callLetter : '操作员',
									onlineuserId : '00001',
									onlineusertime : 'ddy',
									onlineuserContent : '阿黄'
								}],
						total : 3,
						limit : 2,
						start : 0
					},
					baseParams : {

		}
				});

		this.onlineusergrid = new Ext.grid.GridPanel({
					id : 'alarmgrid',
					store : win.onlineuserstore,
					bodyStyle : 'background-color:#dfe8f6',
					border : false,
					cm : win.onlineuserColumnModel,
					tbar : [win.ausearch1, win.ausearch2, new Ext.Button({
										iconCls : 'filter',
										text : '搜索',
										handler : function() {
											/*
											 * var a =
											 * Ext.getCmp('search1').getValue();
											 * var b =
											 * Ext.getCmp('search2').getValue();
											 * var c =
											 * Ext.getCmp('search3').getValue();
											 */

											win.onlineusertore.reload({
														params : {
															start : 0,
															limit : 2
														}
													});
										}
									})],
					bbar : [new Ext.PagingToolbar({
								pageSize : 2,// 每页显示数
								displayInfo : true,
								store : win.onlineuserstore,// 数据源
								displayMsg : '本页显示 {0} - {1} 条 共 {2} 条',
								emptyMsg : '没有记录'
							})

					],
					viewConfig : {
						forceFit : true
					},
					listeners : {

		}
				});
		panel = win.onlineusergrid;
	}
	
	/******************警单信息window开始*********************/
	if (str == 'alarmlist') {
		title = '警单信息';
		this.param4 = new Ext.form.DisplayField({
					fieldLabel : '车牌号码',
					name : 'param4',
					value : '湘A0003',
					width : 140,
					allowblank : true
				})
		this.address = new Ext.form.TextField({
					fieldLabel : '地点',
					name : 'address',
					width : 140,
					allowblank : true
				})

		this.casetype = new Ext.form.TextField({
					fieldLabel : '案件类型',
					name : 'casetype',
					width : 140,
					allowblank : true
				})

		this.reporttime = new Ext.form.TextField({
					fieldLabel : '报案时间',
					name : 'reporttime',
					width : 100,
					allowblank : true,
					sideText : 'xxx'
				})

		this.reportperson = new Ext.form.TextField({
					fieldLabel : '报案人',
					name : 'reportperson',
					width : 140,
					allowblank : true
				})

		this.contact = new Ext.form.TextField({
					fieldLabel : '报案人联系方式',
					name : 'contact',
					width : 140,
					allowblank : true
				})
		this.casecontent = new Ext.form.TextArea({
					fieldLabel : '案件内容',
					name : 'casecontent',
					width : 300,
					height : 150,
					allowblank : true
				})

		this.alarmlist = new Ext.form.FormPanel({
					// title:'警单接收车辆：湘A0003',
					id : 'gzpanel',
					labelWidth : 70,
					labelAlign : 'right',
					hideLabel : false,
					// frame : true,
					border : false,
					buttonAlign : 'center',
					layout : 'column',
					bbar : ['->', new Ext.Button({
										text : '下发警单',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '重置',
										width : 70,
										handler : function() {

										}
									}), new Ext.Button({
										text : '关闭',
										width : 70,
										handler : function() {

										}
									})],
					defaults : {
						layout : 'form',
						columnWidth : .5,
						border : false
					},
					items : [{
								columnWidth : .9,
								items : win.param4
							}, {
								columnWidth : .5,
								items : win.reporttime
							}, {
								columnWidth : .5,
								items : win.address
							}, {
								columnWidth : .5,
								items : win.casetype
							}, {
								columnWidth : .5,
								items : win.reportperson
							}, {
								columnWidth : .9,
								items : win.contact
							}, {
								columnWidth : .9,
								items : win.casecontent
							}]
				});
		panel = win.alarmlist;
	}

	/** ***********路段管理部分window*************** */

	if (str == 'addsections' || str == 'updatesections') {
		if (str == 'addsections') {
			title = '添加路段';
		} else {
			title = '修改路段';
		}
		this.assearch1 = new Ext.form.TextField({
					id : 'assearch1',
					width : 120,
					labelWidth : .1,
					fieldLabel : '路段名称'
				});
		this.assearch3 = new Ext.form.TextField({
					id : 'assearch3',
					width : 120,
					labelWidth : .3,
					fieldLabel : '路段描述'
				});
		this.assearch2 = new Ext.form.TextField({
					id : 'assearch2',
					width : 120,
					labelWidth : .3,
					fieldLabel : '备注'
				});
		this.assearch4 = new Ext.form.TextField({
					id : 'assearch4',
					width : 120,
					fieldLabel : '行驶最高时速'
				});
		this.sectionsInfo = new Ext.data.Record.create([{
					name : 'sectionsId'
				}, {
					name : 'sectionsName'
				}]);
		this.sectionsInfoColumnModel = new Ext.grid.ColumnModel([{
					dataIndex : 'sectionsId',
					header : '经度',
					sortable : true
				}, {
					dataIndex : 'sectionsName',
					header : '纬度',
					sortable : true
				}]);
		this.sectionsInfoStore = new Ext.data.Store({
					reader : new Ext.data.JsonReader({
								totalProperty : 'total',
								root : 'resultList'
							}, win.sectionsInfo),
					url : '',
					baseParams : {

		}
				});

		this.sectionsinfo = new Ext.grid.GridPanel({
					id : 'sectionsinfo',
					// title:'车辆日志',
					store : win.sectionsInfoStore,
					bodyStyle : 'background-color:#dfe8f6',
					border : false,
					region : 'center',
					cm : win.sectionsInfoColumnModel,
					tbar : [new Ext.Button({
										text : '添加点',
										handler : function() {

										}
									}), new Ext.Button({
										text : '删除点',
										handler : function() {

										}
									})],
					listeners : {}
				});

		this.sectionspanel = new Ext.Panel({
					//id : 'sectionspanel',
					//title : '路段管理',
					layout : 'border',
					bbar : ['->', new Ext.Button({
										text : '确定',
										handler : function() {

										}
									}), new Ext.Button({
										text : '取消',
										handler : function() {

										}
									})],
					items : [{
								xtype : 'panel',
								height : 110,
								region : 'north',
								defaults : {
									layout : 'form',
									columnWidth : .9,
									border : false
								},
								items : [{
											columnWidth : .9,
											items : win.assearch1
										}, {
											columnWidth : .9,
											items : win.assearch2
										}, {
											columnWidth : .9,
											items : win.assearch4
										}, {
											columnWidth : .9,
											items : win.assearch3
										}]
							}, win.sectionsinfo]
				});

		panel = win.sectionspanel;
	}

	/** ***********线路管理部分window*************** */

	if (str == 'addlines' || str == 'updatelines') {
		if (str == 'addlines') {
			title = '添加线路';
		} else {
			title = '修改线路';
		}
				this.altext1 = new Ext.form.TextField({
					id : 'altext1',
					width : 120,
					fieldLabel : '线路名称'
				});
				this.altext2 = new Ext.form.TextField({
					id : 'altext2',
					width : 120,
					fieldLabel : '线路类型'
				});
				this.altext3 = new Ext.form.TextField({
					id : 'altext3',
					width : 120,
					fieldLabel : '线路编号'
				});
				this.altext4 = new Ext.form.TextField({
					id : 'altext4',
					width : 120,
					fieldLabel : '偏移量(米)'
				});
				this.altext5 = new Ext.form.TextField({
					id : 'altext5',
					width : 120,
					fieldLabel : '限速'
				});
				this.altext6 = new Ext.form.TextArea({
					id : 'altext6',
					width : 240,
					fieldLabel : '备注'
				});

		this.linesinfo = new Ext.FormPanel({
					id : 'linesinfo',
					title:'基本信息',
					labelWidth : 70,
					buttonAlign : 'center',
					layout : 'column',
					defaults : {
						layout : 'form',
						columnWidth : .5,
						border:false
					},
					items : [{
								columnWidth : .5,
								items : win.altext3
							}, {
								columnWidth : .5,
								items : win.altext1
							}, {
								columnWidth : .5,
								items : win.altext2
							}, {
								columnWidth : .5,
								items : win.altext4
							}, {
								columnWidth : .5,
								items : win.altext5
							}, {
								columnWidth : .9,
								items : win.altext6
							}]
		})
		this.sectionsInfo1 = new Ext.data.Record.create([{
					name : 'sectionsId'
				}, {
					name : 'sectionsName'
				}, {
					name : 'remark'
				}]);
		this.sectionsInfo1ColumnModel = new Ext.grid.ColumnModel([{
					dataIndex : 'sectionsId',
					header : '路段名称',
					sortable : true
				}, {
					dataIndex : 'sectionsName',
					header : '路段描述',
					sortable : true
				}, {
					dataIndex : 'remark',
					header : '备注',
					sortable : true
				}]);
		this.sectionsInfo1Store = new Ext.data.Store({
					reader : new Ext.data.JsonReader({
								totalProperty : 'total',
								root : 'resultList'
							}, win.sectionsInfo1),
					url : '',
					baseParams : {

		}
				});

		this.sectionsinfo1 = new Ext.grid.GridPanel({
					id : 'sectionsinfo1',
					title:'路段信息',
					store : win.sectionsInfo1Store,
					bodyStyle : 'background-color:#dfe8f6',
					border : false,
					region : 'center',
					cm : win.sectionsInfo1ColumnModel,
					tbar : ['->',new Ext.Button({
										text : '添加路段',
										handler : function() {
											var slwin = new CommWindow('sections2lines')
											slwin.setSize(530,250);	
											slwin.show();
										}
									}), new Ext.Button({
										text : '删除路段',
										handler : function() {

										}
									})],
					listeners : {}
				});
		this.vehicleInfo1 = new Ext.data.Record.create([{
					name : 'vehicleId'
				}, {
					name : 'vehicleName'
				}]);
		this.vehicleInfo1ColumnModel = new Ext.grid.ColumnModel([{
					dataIndex : 'vehicleId',
					header : '车牌号码',
					sortable : true
				}, {
					dataIndex : 'vehicleName',
					header : '车载终端号码',
					sortable : true
				}]);
		this.vehicleInfo1Store = new Ext.data.Store({
					reader : new Ext.data.JsonReader({
								totalProperty : 'total',
								root : 'resultList'
							}, win.vehicleInfo1),
					url : '',
					baseParams : {

		}
				});

		this.vehicleinfo1 = new Ext.grid.GridPanel({
					id : 'vehicleinfo1',
					title:'车辆信息',
					store : win.vehicleInfo1Store,
					bodyStyle : 'background-color:#dfe8f6',
					border : false,
					region : 'center',
					cm : win.vehicleInfo1ColumnModel,
					tbar : ['->',new Ext.Button({
										text : '添加车辆',
										handler : function() {
											var slwin = new CommWindow('vehicle2lines')
											slwin.setSize(530,250);	
											slwin.show();
										}
									}), new Ext.Button({
										text : '删除车辆',
										handler : function() {

										}
									})],
					listeners : {}
				});		
		
		this.linespanel = new Ext.TabPanel({
					//id : 'linespanel',
					title : '添加线路',
					// collapseMode : 'mini',
					// collapsible : true,
					activeItem :0,
					border:false,
					bbar : ['->', new Ext.Button({
										text : '确定',
										handler : function() {

										}
									}), new Ext.Button({
										text : '取消',
										handler : function() {

										}
									})],
					items : [win.linesinfo,win.sectionsinfo1,win.vehicleinfo1]
				});

		panel = win.linespanel;
	}
	
	/** ***********线路添加路段路段管理部分window*************** */

	if (str == 'sections2lines') {
		if (str == 'sections2lines') {
			title = '添加路段';
		} 
		this.slsearch1 = new Ext.form.TextField({
					id : 'slsearch1',
					width : 90,
					fieldLabel : '路段名称'
				});
		this.slsearch3 = new Ext.form.TextField({
					id : 'slsearch3',
					width : 90,
					fieldLabel : '路段描述'
				});
		
		this.sections2linesInfo = new Ext.data.Record.create([{
					name : 'sections2linesId'
				}, {
					name : 'sections2linesName'
				}, {
					name : 'remark'
				}]);
		this.sections2linesInfoColumnModel = new Ext.grid.ColumnModel([new Ext.grid.CheckboxSelectionModel(),{
					dataIndex : 'sections2linesId',
					header : '路段名称',
					sortable : true
				}, {
					dataIndex : 'sections2linesName',
					header : '路段描述',
					sortable : true
				}, {
					dataIndex : 'remark',
					header : '备注',
					sortable : true
				}]);
		this.sections2linesInfoStore = new Ext.data.Store({
					reader : new Ext.data.JsonReader({
								totalProperty : 'total',
								root : 'resultList'
							}, win.sections2linesInfo),
					url : '',
					baseParams : {

		}
				});

		this.sections2linesinfo = new Ext.grid.GridPanel({
					id : 'sections2linesinfo',
					// title:'车辆日志',
					store : win.sections2linesInfoStore,
					bodyStyle : 'background-color:#dfe8f6',
					border : false,
					width:300,
					region : 'center',
					cm : win.sections2linesInfoColumnModel,
					bbar : [new Ext.PagingToolbar({
								pageSize : 2,// 每页显示数
								displayInfo : true,
								store : win.alarmstore,// 数据源
								displayMsg : '本页显示 {0} - {1} 条 共 {2} 条',
								emptyMsg : '没有记录'
							})

					],
					listeners : {}
				});

		this.sections2linespanel = new Ext.Panel({
					//id : 'sections2linespanel',
					//title : '路段管理',
					layout : 'border',
					bbar : ['->', new Ext.Button({
										text : '确定',
										handler : function() {

										}
									}), new Ext.Button({
										text : '取消',
										handler : function() {

										}
									})],
					items : [{
								xtype : 'panel',
								title:'查询路段',
								region : 'west',
								width:200,
								bbar : ['->',new Ext.Button({
												text:'查询',
												handler:function(){}
								})],
								defaults : {
									layout : 'form',
									columnWidth : .9,
									buttonAlign:'right',
									border : false
								},
								items : [{
											columnWidth : .9,
											items : win.slsearch1
										}, {
											columnWidth : .9,
											items : win.slsearch3
										}]
							}, win.sections2linesinfo]
				});

		panel = win.sections2linespanel;
	}
	
	/** ***********线路添加车辆信息管理部分window*************** */

	if (str == 'vehicle2lines') {
		if (str == 'vehicle2lines') {
			title = '添加车辆';
		} 
		this.vlsearch1 = new Ext.form.TextField({
					id : 'vlsearch1',
					width : 90,
					fieldLabel : '车牌号码'
				});
		this.vlsearch3 = new Ext.form.TextField({
					id : 'vlsearch3',
					width : 90,
					fieldLabel : '车载终端号码'
				});
		
		this.vehicle2linesInfo = new Ext.data.Record.create([{
					name : 'vehicle2linesId'
				}, {
					name : 'vehicle2linesName'
				}]);
		this.vehicle2linesInfoColumnModel = new Ext.grid.ColumnModel([new Ext.grid.CheckboxSelectionModel(),{
					dataIndex : 'vehicle2linesId',
					header : '车牌号码',
					sortable : true
				}, {
					dataIndex : 'vehicle2linesName',
					header : '车载终端号码',
					sortable : true
				}]);
		this.vehicle2linesInfoStore = new Ext.data.Store({
					reader : new Ext.data.JsonReader({
								totalProperty : 'total',
								root : 'resultList'
							}, win.vehicle2linesInfo),
					url : '',
					baseParams : {

		}
				});

		this.vehicle2linesinfo = new Ext.grid.GridPanel({
					id : 'vehicle2linesinfo',
					// title:'车辆日志',
					store : win.vehicle2linesInfoStore,
					bodyStyle : 'background-color:#dfe8f6',
					border : false,
					width:300,
					region : 'center',
					cm : win.vehicle2linesInfoColumnModel,
					bbar : [new Ext.PagingToolbar({
								pageSize : 2,// 每页显示数
								displayInfo : true,
								store : win.vehicle2linesInfoStore,// 数据源
								displayMsg : '本页显示 {0} - {1} 条 共 {2} 条',
								emptyMsg : '没有记录'
							})

					],
					listeners : {}
				});

		this.vehicle2linespanel = new Ext.Panel({
					//id : 'vehicle2linespanel',
					//title : '路段管理',
					layout : 'border',
					bbar : ['->', new Ext.Button({
										text : '确定',
										handler : function() {

										}
									}), new Ext.Button({
										text : '取消',
										handler : function() {

										}
									})],
					items : [{
								xtype : 'panel',
								title:'查询车辆',
								region : 'west',
								width:200,
								bbar : ['->',new Ext.Button({
												text:'查询',
												handler:function(){}
								})],
								defaults : {
									layout : 'form',
									columnWidth : .9,
									buttonAlign:'right',
									border : false
								},
								items : [{
											columnWidth : .9,
											items : win.vlsearch1
										}, {
											columnWidth : .9,
											items : win.vlsearch3
										}]
							}, win.vehicle2linesinfo]
				});

		panel = win.vehicle2linespanel;
	}
	/** ***********添加区域规则部分window*************** */

	if (str == 'addarea' || str == 'updatearea') {
		if (str == 'addarea') {
			title = '添加区域';
		} else {
			title = '修改区域';
		}
		this.aasearch1 = new Ext.form.TextField({
					id : 'assearch1',
					width : 120,
					labelWidth : .1,
					fieldLabel : '区域名称'
				});
		this.aasearch3 = new Ext.form.TextField({
					id : 'assearch3',
					width : 120,
					labelWidth : .3,
					fieldLabel : '区域形状'
				});
		this.aasearch2 = new Ext.form.TextField({
					id : 'assearch2',
					width : 120,
					labelWidth : .3,
					fieldLabel : '备注'
				});
		
		this.areapanel = new Ext.Panel({
					//id : 'areapanel',
					//title : '路段管理',
					layout : 'border',
					bbar : ['->', new Ext.Button({
										text : '确定',
										handler : function() {

										}
									}), new Ext.Button({
										text : '取消',
										handler : function() {

										}
									})],
					items : [{
								xtype : 'panel',
								height : 110,
								id:'xxoo',
								region : 'center',
								layout:'form',
								defaults : {
									layout : 'form',
									columnWidth : .9,
									border : false
								},
								items : [{
											columnWidth : .9,
											items : win.aasearch1
										}, {
											columnWidth : .9,
											items : win.aasearch3
										}, {
											columnWidth : .9,
											items : win.aasearch2
										}, {
											columnWidth : .9,
											items : new Ext.Button({
												text:'选择区域',
												handler:function(){
													if(typeof(Ext.getCmp('ooh')) != 'undefined'){
														Ext.getCmp('ooh').destroy()
													}
													Ext.getCmp('xxoo').add(new Ext.Panel({
														id:'ooh',
														title:'区域参数',
														border:false,
														defaults : {
									layout : 'form',
									columnWidth : .9,
									border : false
								},
														items:[{
															columnWidth : .9,
															items:new Ext.form.TextField({
																id : 'tt',
					width : 120,
					labelWidth : .3,
					fieldLabel : '长'
															})
														}]
													}));
													Ext.getCmp('xxoo').doLayout();
												}
											})
										}]
							}]
				});

		panel = win.areapanel;
	}
	
	/** ***********车辆区域绑定部分window*************** */
	if (str == 'addvehiclearea' || str == 'updatevehiclearea') {
		if (str == 'addvehiclearea') {
			title = '车辆区域绑定设定';
		} else {
			title = '修改车辆区域绑定';
		}
		this.vasearch1 = new Ext.form.ComboBox({
		id:'vasearch1',
		fieldLabel : '区域名称',
		name : 'alarmlistTypeName',
		width:120,
		triggerAction:'all',//此属性必须有  点击时触发执行Action
		mode:"local",
		editable:true,
		store:new Ext.data.SimpleStore({
			data:[[-1,''],[0,"区域1"],[1,"区域2"],[1,"区域3"]],
			fields:['alarmlistTypeId','alarmlistTypeName']
		}),
		emptyText:'选择区域',
		allowBlank : true,
		valueField:'alarmlistTypeId', 
		displayField:'alarmlistTypeName' 
	});	
		
		this.vehicleareaInfo = new Ext.data.Record.create([{
					name : 'vehicleareaId'
				}, {
					name : 'vehicleareaName'
				}]);
		this.vehicleareaInfoColumnModel = new Ext.grid.ColumnModel([{
					dataIndex : 'vehicleareaId',
					header : '车牌号码',
					sortable : true
				}, {
					dataIndex : 'vehicleareaName',
					header : '车载终端号码',
					sortable : true
				}]);
		this.vehicleareaInfoStore = new Ext.data.Store({
					reader : new Ext.data.JsonReader({
								totalProperty : 'total',
								root : 'resultList'
							}, win.vehicleareaInfo),
					url : '',
					baseParams : {

		}
				});

		this.vehicleareainfo = new Ext.grid.GridPanel({
					id : 'vehicleareainfo',
					// title:'车辆日志',
					store : win.vehicleareaInfoStore,
					bodyStyle : 'background-color:#dfe8f6',
					border : false,
					region : 'center',
					cm : win.vehicleareaInfoColumnModel,
					tbar : [new Ext.Button({
										text : '增加车辆',
										handler : function() {
											var vawin = new CommWindow('vehicle2lines')
											vawin.show();
										}
									}), new Ext.Button({
										text : '删除车辆',
										handler : function() {

										}
									})],
					listeners : {}
				});

		this.vehicleareapanel = new Ext.Panel({
					//id : 'vehicleareapanel',
					//title : '路段管理',
					layout : 'border',
					bbar : ['->', new Ext.Button({
										text : '确定',
										handler : function() {

										}
									}), new Ext.Button({
										text : '取消',
										handler : function() {

										}
									})],
					items : [{
								xtype : 'panel',
								height : 50,
								width:250,
								region : 'north',
								defaults : {
									layout : 'form',
									columnWidth : .9,
									border : false
								},
								items : [{
											columnWidth : .5,
											items : win.vasearch1
										}]
							}, win.vehicleareainfo]
				});

		panel = win.vehicleareapanel;
	}

	CommWindow.superclass.constructor.call(this, {
				title : title,
				height : 250,
				width : 600,
				maximizable : true,
				layout : 'fit',
				items : [panel]
			});
}
Ext.extend(CommWindow, Ext.Window)