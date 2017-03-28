SendPanel = function(ids) {
	var panel = this;
	var search2 = new Ext.form.DateField({
		id : 'presavesearch4',
		format : 'Y-m-d',
		emptyText : '开始时间'
	});
	var search3 = new Ext.form.DateField({
		id : 'presavesearch5',
		emptyText : '结束时间',
		format : 'Y-m-d'
	});
	this.messageStore = new messageStore({
		// all actions except the following will use above url
		read : 'data/message.json',
		create : 'data/message.json',
		update : 'data/updatemessage.json',
		destory : 'data/message.json'
	}, {});
	var messageColumnModel = new Ext.grid.ColumnModel([ {
		dataIndex : 'messageId',
		header : '短信ID',
		hidden : true,
		sortable : true,
		width : 50
	}, {
		dataIndex : 'optime',
		header : '保存时间',
		format : "Y-m-d",
		sortable : true,
		width : 50
	}, {
		dataIndex : 'content',
		header : '短信内容',
		sortable : true,
		width : 50
	}

	]);
	this.presavegrid = new Ext.grid.GridPanel({
		id : 'presavegrid2',
		title : '预存短信',
		height:230,
		store : panel.messageStore,
		cm : messageColumnModel,
		tbar : [ search2, search3, new Ext.Button({
			iconCls : 'icon-search',
			text : '搜索',
			handler : function() {
				/*
				 * var a = Ext.getCmp('search1').getValue(); var b =
				 * Ext.getCmp('search2').getValue(); var c =
				 * Ext.getCmp('search3').getValue();
				 */
			}
		}) ],
		bbar : [ new Ext.PagingToolbar({
			pageSize : 10,// 每页显示数
			displayInfo : true,
			store : panel.messageStore,// 数据源
			displayMsg : '本页显示 {0} - {1} 条 共 {2} 条',
			emptyMsg : '没有记录'
		})],
		viewConfig : {
			forceFit : true
		}

	});
	this.formpanel = new Ext.form.FormPanel({
		id : 'msginfoform',

		frame : true,
		items : [ {
			id : 'messagecontent',
			xtype : 'textarea',
			name : 'content',
			fieldLabel : '内容',
			style : {
				width : '99%',
				height : '120px'
			}
		} ],
		buttons : [ {
			text : '发送',
			action : 'save',
			handler : function() {
				// var grid=Ext.getCmp('messagegrid');
				// var form=Ext.getCmp('msginfoform');
				Ext.Msg.alert('提示', '发送短信成功');
			}
		}, {
			text : '设为预存',
			scope : this,
			handler : this.close
		}, {
			text : '取消',
			scope : this,
			handler : this.close
		} ]

	});

	SendPanel.superclass.constructor.call(this, {
		id : ids,
		// title:'车辆档案管理',
		buttonAlign : 'center',
		border : false,
		layout : 'form',
		items : [ panel.formpanel, panel.presavegrid ]
	});
};
Ext.extend(SendPanel, Ext.Panel);