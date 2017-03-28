var senddetail=function(){
	var win=Ext.getCmp('MsgInfoWin');
	if(win) win.close();
var grid=Ext.getCmp('messagegrid');
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
var deletesend=function(){
	var grid=Ext.getCmp('messagegrid')
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

MsgManagePanel = function(ids){
	var panel = this;
	this.search1 = new Ext.form.TextField({
		id:'search1',
		emptyText:'车牌号码'
	});
	this.search2 = new Ext.form.DateField({
		id:'search2',
		format:'Y-m-d',
		emptyText:'开始时间'
		
	});
	this.search3 = new Ext.form.DateField({
		id:'search3',
		format:'Y-m-d',
		emptyText:'结束时间'
	});
	this.sm= new Ext.grid.CheckboxSelectionModel({
//	listeners:{
//	'rowselect':function(m){console.log(Ext.getCmp('deletemessage'));if(Ext.getCmp('deletemessage').disabled==true)Ext.getCmp('deletemessage').setDisabled(false)},
//	'rowdeselect':function(m){if(m.getCount()<1)Ext.getCmp('deletemessage').setDisabled(true)}
//	
//	
//	}
	
	
	});
this.messageStore = new messageStore( {
        // all actions except the following will use above url
        read    : 'data/message.json',
        create  : 'data/message.json',
        update  : 'data/message.json',
        destory : 'data/updatemessage.json'
    },{});
	
	this.messageColumnModel = new Ext.grid.ColumnModel([panel.sm,{
		dataIndex : 'messageId',
		header : '短信ID',
		hidden:true,
		sortable : true,
		width : 50
	},{
		dataIndex : 'plateNumber',
		header : '车辆',
		sortable : true,
		width : 50
	},{
		dataIndex : 'optime',
		header : '发送时间',
		sortable : true,
		width : 50
	},{
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
	},{header: "操作", width: 100, dataIndex: 'operate', menuDisabled:true, renderer:function(v){
	return "<span style='margin-right:10px'><a href='javascript:void(0)' onclick=senddetail()> 详情</a></span><span style='margin-right:10px'><a href='javascript:void(0);' onclick=deletesend()>删除</a></span>";}
	}
	
]);

	this.messagegrid = new Ext.grid.GridPanel({
		id : 'messagegrid',
		title:'已发短信信息',
		frame:true,
		store : panel.messageStore,
		bodyStyle : 'background-color:#dfe8f6',
		border : false,
		sm:panel.sm,
		cm:panel.messageColumnModel,
		
		tbar:[panel.search1,panel.search2,panel.search3,new Ext.Button({
			iconCls: 'icon-search',
			text:'搜索',
			handler:function(){
				/*var a = Ext.getCmp('search1').getValue();
				var b = Ext.getCmp('search2').getValue();
				var c = Ext.getCmp('search3').getValue();*/		
			}}),
			new Ext.Button({
				text:'详情',
				iconCls:'icon-detail',
				handler:senddetail
			}),new Ext.Button({
			   id:'deletemessage',
				text:'删除',
				iconCls:'icon-delete',
				handler:deletesend
			})],
			bbar:[new Ext.PagingToolbar({
							pageSize : 10,// 每页显示数
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
		listeners:{
		'dblclick':senddetail
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