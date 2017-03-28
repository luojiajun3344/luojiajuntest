var MyComboBox = Ext
		.extend(
				Ext.form.ComboBox,
				{
					constructor : function(data, label, config) {
						config = Ext
								.apply(
										{
											id : 'selectRange',
											triggerAction : "all",
											store : new Ext.data.ArrayStore({
												id : 0,
												fields : [ 'myId',
														'displayText' ],
												data : data
											}),
											listeners : {
												beforeRender : function(combo) {
													var firstValue = combo.store.data.items[0].data.displayText;
													combo.setValue(firstValue);// 同时下拉框会将与name为firstValue值对应的
																				// text显示
												}
											},
											displayField : "displayText",
											valueField : "myId",
											mode : "local",
											fieldLabel : label

										}, config);
						MyComboBox.superclass.constructor.call(this, config)
					}

				})

LogPanel = function(ids) {
	var panel = this;
	this.search1 = new MyComboBox([ [ 1, '所有' ], [ 2, '车辆' ] ], '日志类别', {
		id : 'logsearch',
		width : 100
	})

	this.search2 = new Ext.form.DateField({
		id : 'Logsearch2',
		format : 'Y-m-d',
		emptyText : '开始时间'

	});
	this.search3 = new Ext.form.DateField({
		id : 'Logsearch3',
		format : 'Y-m-d',
		emptyText : '结束时间'
	});
	this.sm = new Ext.grid.CheckboxSelectionModel({
		listeners : {
			'rowselect' : function(m) {
				console.log(Ext.getCmp('deleteLog'));
				if (Ext.getCmp('deleteLog').disabled == true)
					Ext.getCmp('deleteLog').setDisabled(false)
			},
			'rowdeselect' : function(m) {
				if (m.getCount() < 1)
					Ext.getCmp('deleteLog').setDisabled(true)
			}

		}

	});
	this.LogStore = new LogStore({
		// all actions except the following will use above url
		read : {url:'admin/Student_getByPage.action?'},
		create : 'admin/addStudent.action',
		update : 'data/Log.json',
		destory : 'admin/deleteStudent.action'
	}, {});
	// 'Logid','Logname','path','speed','handler'
	this.LogColumnModel = new Ext.grid.ColumnModel([ panel.sm, {
		dataIndex : 'studentId',
		header : 'ID',
		hidden : true,
		sortable : true,
		width : 50
	}, {
		dataIndex : 'sa',
		header : '登录名',
		sortable : true,
		width : 50
	}, {// 'logid','adminname','name','organization','optime','type','opcontent'
		dataIndex : 'sn',
		header : '姓名',
		sortable : true,
		width : 50
	}, {
		dataIndex : 'birthday',
		header : '机构',
		sortable : true,
		width : 50
	}
	// ,{header: "操作", width: 100, dataIndex: 'operate', menuDisabled:true,
	// renderer:function(v){
	// return "<span style='margin-right:10px'><a href='#' onclick=updateunit()>
	// 详情</a></span><span style='margin-right:10px'><a href='#'
	// onclick=deleteunit()>删除</a></span>";}
	// }

	])

	this.Loggrid = new Ext.grid.GridPanel({
		id : 'Loggrid',
		// title:'已发短信信息',
		frame : true,
		store : panel.LogStore,
		bodyStyle : 'background-color:#dfe8f6',
		border : false,
		sm : panel.sm,
		cm : panel.LogColumnModel,

		tbar : [ panel.search1, panel.search2, panel.search3, new Ext.Button({
			iconCls : 'filter',
			text : '搜索',
			handler : function() {
				/*
				 * var a = Ext.getCmp('search1').getValue(); var b =
				 * Ext.getCmp('search2').getValue(); var c =
				 * Ext.getCmp('search3').getValue();
				 */
			}
		})
		
		  ,new Ext.Button({ text:'详情', handler:function(){ 
				var win=Ext.getCmp('msgwin');
				if(win)win.close();
			  var grid=Ext.getCmp('Loggrid') 
			  var record=grid.getSelectionModel().getSelected(); 
			  var formwin=new MsgInfo("详情").show(Ext.getBody()); 
			  var form=Ext.getCmp('msginfoform'); 
			  form.getForm().setValues(record.data); 
			  }
		  }),new Ext.Button({ id:'deleteLog', text:'删除', disabled:true,
		  handler:function(){ 
				var win=Ext.getCmp('msgwin');
				if(win)win.close();
			  var grid=Ext.getCmp('Loggrid') 
			  var records=grid.getSelectionModel().getSelections(); 
			  var idList=[];
			  for(var i = 0; i < records.length; i ++){ 
				  idList.push(records[i].get("studentId")); 
	              }
			  var store=grid.getStore();
			  Ext.Ajax.request({
					url:'admin/Student_deleteByList.action',
					method:'post',
					params:{
						'idList':idList
					},
					success:function(response){
						var json = response.responseText;
						var json = Ext.util.JSON.decode(json);
						Ext.Msg.alert('提示','成功'+json.success);
					},
					failure:function(response){
						Ext.Msg.alert('提示',"failure");
					}
				})
		    //   store.on('beforewrite',function(){alert("开始删除");})
		    //   store.on('remove',function(){alert("删除成功");}) 
		       store.remove(records);
		  
		  //console.log(store.save());
		   } }),
		   new Ext.Button({ id:'addLog', text:'新增',
				  handler:function(){ 
						var win=Ext.getCmp('msgwin');
						if(win)win.close();
					 new MsgInfo('新增').show(Ext.getBody());
				   } }), 
		new Ext.Button({ id:'modifyLog', text:'修改',
						  handler:function(){
								var win=Ext.getCmp('msgwin');
								if(win)win.close();
							  var grid=Ext.getCmp('Loggrid') 
							  var record=grid.getSelectionModel().getSelected(); 
							  var formwin=new MsgInfo("修改").show(Ext.getBody()); 
							  var form=Ext.getCmp('msginfoform'); 
							  form.getForm().setValues(record.data); 
							  } })
		 ],
		bbar : [ new Ext.PagingToolbar({
			pageSize : 10,// 每页显示数
			displayInfo : true,
			store : panel.LogStore,// 数据源
			displayMsg : '本页显示 {0} - {1} 条 共 {2} 条',
			emptyMsg : '没有记录'
		}), new Ext.Button({
			iconCls : 'exportexcel',
			text : '导出EXCL',
			handler : function() {
				if (panel.LogStore.getCount() == 0) {
					Ext.Msg.alert(tip, "目前没有数据!");
					return;
				}

				var url = "";
				window.location.href = url;
			}
		})

		],
		viewConfig : {
			forceFit : true
		},
		listeners : {
			'dblclick' : function(e) {
				var win=Ext.getCmp('msgwin');
				if(win)win.close();
				var record = this.getSelectionModel().getSelected();
				var formwin = new MsgInfo("详情").show(Ext.getBody());
				var form = Ext.getCmp('msginfoform');
				form.getForm().setValues(record.data)
			}
		}
	});
	//this.Loggrid.relayEvents(this.LogStore,['destroy', 'save', 'update']);
	LogPanel.superclass.constructor.call(this, {
		id : ids,
		height : 340,
		renderTo : Ext.getBody(),
		title : '路径规划',
		buttonAlign : 'center',
		layout : 'fit',
		border : false,
		items : [ panel.Loggrid ]
	})
};
Ext.extend(LogPanel, Ext.Panel)