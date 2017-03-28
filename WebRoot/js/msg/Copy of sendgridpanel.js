MsgManagePanel = function(ids){
	var panel = this;
	this.search1 = new Ext.form.TextField({
		id:'search1',
		emptyText:'车牌号码'
	});
	this.search2 = new Ext.form.TextField({
		id:'search2',
		emptyText:'开始时间'
	});
	this.search3 = new Ext.form.TextField({
		id:'search3',
		emptyText:'结束时间'
	});
	this.messageInfo = new Ext.data.Record.create([{
		name: 'messageId'
	},{
		name : 'content'
	}, {
		name : 'plateNumber'
	},{
		name : 'optime'
	},{
		name : 'person'
	},{
		name : 'Type'//1发送，2接收，3预存（到是可以单独）
	}
	]);
//	this.messageStore = new messageStore('sdf',{});
	this.messageStore=new Ext.data.Store({
	reader:new Ext.data.JsonReader({
					totalProperty:'total',
					root:'resultList'
				}, panel.messageinfo), 
	
	url:'',
	baseParams:{}
	});
	this.messageColumnModel = new Ext.grid.ColumnModel([{
		dataIndex : 'messageId',
		header : '短信ID',
		hidden:true,
		sortable : true,
		width : 50
	},{
		dataIndex : 'plateNumber',
		header : '收信车牌',
		sortable : true,
		width : 50
	},{
		dataIndex : 'optime',
		header : '发送时间',
		sortable : true,
		width : 50
	},{
		dataIndex : 'person',
		header : '收信人',
		sortable : true,
		width : 50
	},
	{
		dataIndex : 'content',
		header : '短信内容',
		sortable : true,
		width : 50
	}, 
	{header: "操作", width: 100, dataIndex: 'operate', menuDisabled:true, renderer:function(v){
	return "<span style='margin-right:10px'><a href='#' onclick=updateunit()> 修改</a></span><span style='margin-right:10px'><a href='#' onclick=deleteunit()>删除</a></span><span><a href='#' onclick=modifydepart()>修改所属机构</a></span>";}
	}
]);

	this.messagegrid = new Ext.grid.GridPanel({
		id : 'messagegrid',
		title:'车辆信息',
		store : panel.messageStore,
		bodyStyle : 'background-color:#dfe8f6',
		border : false,
		cm:panel.messageColumnModel,
		tbar:[panel.search1,panel.search2,,panel.search3,new Ext.Button({
			iconCls: 'icon-search',
			text:'搜索',
			handler:function(){
				/*var a = Ext.getCmp('search1').getValue();
				var b = Ext.getCmp('search2').getValue();
				var c = Ext.getCmp('search3').getValue();*/
				
		
				//panel.messageStore.reload({
				//	params : {
				//		start : 0,
				//		limit : 2
				//	}

				//});
			}
			}),
			new Ext.Button({
				text:'删除',
				handler:function(){
					
				}
			})],	
		bbar:[new Ext.PagingToolbar({
							pageSize : 2,// 每页显示数
							displayInfo : true,
							store : panel.messageStore,// 数据源
							displayMsg : '本页显示 {0} - {1} 条 共 {2} 条',
							emptyMsg : '没有记录'
						}),new Ext.Button({
							iconCls:'exportexcel',
							text:'导出EXCL',
							handler:function(){
								if (panel.messageStore.getCount() == 0) {  
							            Ext.Msg.alert(tip,"目前没有数据!");  
							            return;  
							    }
							  
								var url="";
							    window.location.href = url;  
							}
						})
						
				],
		viewConfig : {
			forceFit : true
		},
		listeners : {
		}
	});
	
	MsgManagePanel.superclass.constructor.call(this,{
		id:ids,
		//title:'车辆档案管理',
		buttonAlign : 'center',
		layout:'fit',
		border:false,
		items:[panel.messagegrid]
	})
}
Ext.extend(MsgManagePanel,Ext.Panel)