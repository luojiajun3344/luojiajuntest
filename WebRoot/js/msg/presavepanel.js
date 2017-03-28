  var modifypre=function(){
		var win=Ext.getCmp('MsgInfoWin');
		if(win) win.close();
		
   var grid=Ext.getCmp('presavemessagegrid')
   var selModel=grid.getSelectionModel()
if(selModel.hasSelection()){ 
   var record=grid.getSelectionModel().getSelected();
   record.beginEdit();
    var formwin=new MsgInfo("修改").show(Ext.getBody());
    var form=Ext.getCmp('msginfoform');
//console.log(record);
        form.getForm().setValues(record.data)
}else{
	Ext.Msg.alert('','请选择行');} 
	};
var deletepre=function(){ 
	var win=Ext.getCmp('msgwin');
	if(win)win.close();
  var grid=Ext.getCmp('presavemessagegrid') 
  var selModel=grid.getSelectionModel();
   
  if(selModel.hasSelection()){ 
      Ext.Msg.confirm("确认", "您确定要删除选择的记录吗?", 
  function(btn){ 
        if(btn == "yes"){ 
        	var records=selModel.getSelections();
        	  var idList=[];
        	  for(var i = 0; i < records.length; i ++){ 
        		  idList.push(records[i].get("studentId")); 
        	      }
        	  var store=grid.getStore();
        	  Ext.Ajax.request({
        			url:'admin/Message_deleteByList.action',
        			method:'post',
        			params:{
        				'idList':idList
        			},
        			success:function(response){
        				var json = response.responseText;
        				var json = Ext.util.JSON.decode(json);
        				Ext.Msg.alert('提示','成功'+json.success);
        				store.reload();
        			},
        			failure:function(response){
        				Ext.Msg.alert('提示',"failure");
        			}
        		});
        }
        
        })
        }
else{Ext.Msg.alert('','请选择行');}

//   store.on('beforewrite',function(){alert("开始删除");})
//   store.on('remove',function(){alert("删除成功");}) 

//console.log(store.save());
}
PreSavePanel = function(ids){
	var panel = this;
	this.search2 = new Ext.form.DateField({
		id:'presavesearch2',
		format:'Y-m-d',
		emptyText:'开始时间'
	});
	this.search3 = new Ext.form.DateField({
		id:'presavesearch3',
		emptyText:'结束时间',
		format:'Y-m-d'
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
        read:'admin/Message_getByPage.action',
        create  : 'data/message.json',
        update  : 'data/updatemessage.json',
        destory : 'data/message.json'
    },{});
	
	this.messageColumnModel = new Ext.grid.ColumnModel([panel.sm,{
		dataIndex : 'messageId',
		header : '短信ID',
		hidden:true,
		sortable : true,
		width : 50
	},{
		dataIndex : 'optime',
		header : '保存时间',
		format: "Y-m-d",
		sortable : true,
		width : 50
	},
	{
		dataIndex : 'content',
		header : '短信内容',
		sortable : true,
		width : 50
	},{header: "操作", width: 100, dataIndex: 'operate', menuDisabled:true, renderer:function(v){
	return "<span style='margin-right:10px'><a href='javascript:void(0)' onclick='modifypre();'> 修改</a></span><span style='margin-right:10px'><a href='javascript:void(0)' onclick='deletepre();'>删除</a></span>";}
	}
	
]);

	this.presavemessagegrid = new Ext.grid.GridPanel({
		id : 'presavemessagegrid',
		title:'预存短信',
		store : panel.messageStore,
		bodyStyle : 'background-color:#dfe8f6',
		border : false,
		frame:true,
		sm:panel.sm,
		cm:panel.messageColumnModel,
		tbar:[panel.search2,panel.search3,new Ext.Button({
			iconCls: 'icon-search',
			text:'搜索',
			handler:function(){
				/*var a = Ext.getCmp('search1').getValue();
				var b = Ext.getCmp('search2').getValue();
				var c = Ext.getCmp('search3').getValue();*/		
			}}),
			new Ext.Button({
			    iconCls: 'icon-modify',
				text:'修改',
				handler:modifypre
			}),new Ext.Button({
				text:'新增',
				iconCls: 'icon-add',
				handler:function(){
					var win=Ext.getCmp('MsgInfoWin');
					if(win) win.close();
              var formwin=new MsgInfo("新增").show(Ext.getBody());
				}
			}),new Ext.Button({
			   id:'deletemessage',
				text:'删除',
				iconCls: 'icon-delete',
				handler:deletepre
			})],
			bbar:[new Ext.PagingToolbar({
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
		listeners:{
		'dblclick':function(e){
			var win=Ext.getCmp('MsgInfoWin');
			if(win) win.close();
        var record=this.getSelectionModel().getSelected();
        var formwin=new MsgInfo("修改").show(Ext.getBody());
        var form=Ext.getCmp('msginfoform');
         // console.log(record);
         form.getForm().setValues(record.data)
                    }
		}
		
	});
	
	PreSavePanel.superclass.constructor.call(this,{
		id:ids,
		
		//title:'车辆档案管理',
		buttonAlign : 'center',
		layout:'fit',
		border:false,
		items:[panel.presavemessagegrid]
	})
}
Ext.extend(PreSavePanel,Ext.Panel)