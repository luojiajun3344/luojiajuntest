
var sendmessage = function() {
	var win=Ext.getCmp('sendmessagewindow');
	if(win) win.close();
	var send = new SendPanel();
	var grid = send.findById('presavegrid2');
	grid.purgeListeners();
	grid.on('dblclick', function(e) {
		// console.log(e);
		// console.log(this);
		var record = grid.getSelectionModel().getSelected()
		send.findById('messagecontent').setRawValue(record.data.content)
	})
	var formwin = new Ext.Window({
		id:'sendmessagewindow',
		title : '发送短信',
		width : 610,
		height : 440,
		bodyStyle : "padding: 5px",
		maximizable : true,
		layout : 'fit',
		items : [send]
	}).show(Ext.getBody());
};

var receivedetail=function(){
	var win=Ext.getCmp('MsgInfoWin');
	if(win) win.close();
var grid=Ext.getCmp('receivemessagegrid');
var selModel=grid.getSelectionModel()
if(selModel.hasSelection()){ 
var record=selModel.getSelected();
record.beginEdit();
var formwin=new MsgInfo("详情").show(Ext.getBody());
var form=Ext.getCmp('msginfoform');
//console.log(record);
    form.getForm().setValues(record.data);
}
else{
	Ext.Msg.alert('','请选择行');}
};
var deletereceive=function(){
	var grid=Ext.getCmp('receivemessagegrid')
	var selModel=grid.getSelectionModel()
	if(selModel.hasSelection()){ 
          Ext.Msg.confirm("确认", "您确定要删除选择的记录吗?", 
      function(btn){ 
            if(btn == "yes"){ 
            	var records=selModel.getSelections();
            	var store=grid.getStore();
	    		store.remove(records);
            }
            
            })
            }
	else{
		Ext.Msg.alert('','请选择行');}
	
};
var ReceivePanel = function(ids) {
	var panel = this;
	this.search1 = new MyComboBox([ [ 1, '所有' ], [ 2, '已阅' ], [ 3, '未阅' ] ],
			'状态', {
				id : 'receivestate',
				width : 100
			})
	this.search2 = new Ext.form.DateField({
		id : 'receivesearch2',
		format : 'Y-m-d',
		emptyText : '开始时间'

	});
	this.search3 = new Ext.form.DateField({
		id : 'receivesearch3',
		format : 'Y-m-d',
		emptyText : '结束时间'
	});
	this.sm = new Ext.grid.CheckboxSelectionModel({
//		listeners : {
//			'rowselect' : function(m) {
//				console.log(Ext.getCmp('deletemessage'));
//				if (Ext.getCmp('deletemessage').disabled == true)
//					Ext.getCmp('deletemessage').setDisabled(false)
//			},
//			'rowdeselect' : function(m) {
//				if (m.getCount() < 1)
//					Ext.getCmp('deletemessage').setDisabled(true)
//			}
//
//		}

	});
	this.messageStore = new messageStore({
		// all actions except the following will use above url
		read : 'admin/Message_getByPage.action',
		create : 'data/message.json',
		update : 'data/updatemessage.json',
		destory : 'data/message.json'
	}, {});

	this.messageColumnModel = new Ext.grid.ColumnModel(
			[
					panel.sm,
					{
						dataIndex : 'messageId',
						header : '短信ID',
						hidden : true,
						sortable : true,
						width : 50
					},
					{
						dataIndex : 'optime',
						header : '接收时间',
						format : "Y-m-d",
						sortable : true,
						width : 50
					},
					{
						dataIndex : 'plateNumber',
						header : '车辆',
						sortable : true,
						width : 50
					},
					{
						dataIndex : 'organization',
						header : '车辆所在单位',
						sortable : true,
						width : 50
					},
					{
						dataIndex : 'content',
						header : '短信内容',
						sortable : true,
						width : 50
					},
					{
						dataIndex : 'state',
						header : '状态',
						sortable : true,
						width : 50
					},
					{
						header : "操作",
						width : 100,
						dataIndex : 'operate',
						menuDisabled : true,
						renderer : function(v) {
							return "<span style='margin-right:10px'><a href='javascript:void(0)' onclick=receivedetail()>详情</a></span><span style='margin-right:10px'><a href='javascript:void(0)' onclick=deletereceive()>删除</a></span><span style='margin-right:10px'><a href='javascript:void(0)' onclick='sendmessage()'>回复</a></span>";
						}
					}

			]);

	this.receivemessagegrid = new Ext.grid.GridPanel({
		id : 'receivemessagegrid',
		title : '已收短信',
		frame : true,
		store : panel.messageStore,
		bodyStyle : 'background-color:#dfe8f6',
		border : false,
		sm : panel.sm,
		cm : panel.messageColumnModel,
		tbar : [ panel.search1, panel.search2, panel.search3, new Ext.Button({
			
			text : '搜索',
			iconCls : 'icon-search',
			handler : function() {
				/*
				 * var a = Ext.getCmp('search1').getValue(); var b =
				 * Ext.getCmp('search2').getValue(); var c =
				 * Ext.getCmp('search3').getValue();
				 */
			}
		}), new Ext.Button({
			text : '详情',
			iconCls : 'icon-detail',
			handler : receivedetail
		}), new Ext.Button({
			id : 'deletemessage',
			text : '删除',
			iconCls : 'icon-delete',
			handler : deletereceive
		}) ],
		bbar : [ new Ext.PagingToolbar({
			pageSize : 10,// 每页显示数
			displayInfo : true,
			store : panel.messageStore,// 数据源
			displayMsg : '本页显示 {0} - {1} 条 共 {2} 条',
			emptyMsg : '没有记录'
		})

		],
		viewConfig : {
			forceFit : true
		},
		listeners : {
			'dblclick' :receivedetail
		}

	});

	ReceivePanel.superclass.constructor.call(this, {
		id : ids,
		buttonAlign : 'center',
		layout : 'fit',
		border : false,
		items : [ panel.receivemessagegrid ]
	})
}
Ext.extend(ReceivePanel, Ext.Panel)