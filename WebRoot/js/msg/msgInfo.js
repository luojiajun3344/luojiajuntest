MsgInfo=function(title){
if(title=="详情")
ob={
id:'msginfoform',
items:[
	{xtype:'textfield',name:'plateNumber',fieldLabel:'车牌号'
	},
	{xtype:'textfield',name:'organization',fieldLabel:'车辆所在单位'
	},
	{xtype:'datefield',name:'optime',fieldLabel:'发送时间',width:140,format:"Y-m-d"},
	{xtype:'textarea',name:'content',fieldLabel:'内容',style:{width:'99%',height:'128px'}}	
	]
}
else if(title=='发送短信')
ob={
id:'msginfoform',
items:[
    {xtype:'datefield',name:'optime',fieldLabel:'发送时间',width:140,format:"Y-m-d"},
	{xtype:'textarea',name:'content',fieldLabel:'内容',style:{width:'99%',height:'128px'}}	
	],
buttons:[
	 {text:'发送',action:'save',handler:function(){
					var grid=Ext.getCmp('messagegrid');
					var form=Ext.getCmp('msginfoform');
					var value=form.getForm().getValues();
				//	console.log(value);
					//var field=form.getForm.findField('optime').getValue();
					//console.log(field);
					//var field2=form.getForm.getFieldValue('content');
					//console.log(field2);
					record.set('optime',value.optime);
					record.set('content',value.content);
					record.commit();
					var store=grid.getStore();
					store.on('update',function(){alert("更新成功");})
					//form.getForm().updateRecord(record);
					record.endEdit();
					//store.save();
				}},
	{text: '设为预存',scope: this,handler: this.close},
	{text: '预存',scope: this,handler: this.close}	,		
	{text: '取消',scope: this,handler: this.close}
	]	
	
}
else 
ob={
url:'admin/Message_add.action',
id:'msginfoform',
items:[
	{xtype:'textarea',name:'content',fieldLabel:'内容',style:{width:'99%',height:'128px'}}	
	],
buttons:[
	 {text:'保存',action:'save',handler:function(){
		 var json = { 
		          success: function(f, action){ 
		            Ext.Msg.alert("成功",action.result.msg);
		        	var win=Ext.getCmp('msgwin');
					if(win)win.close();
		            Ext.getCmp('presavemessagegrid').getStore().load({start:0,limit:10});
		          }, 
		          failure: function(){ 
		            Ext.Msg.alert("失败","对不起，操作失败，请检查数据是否完整！"); 
		          } 
		        }; 
		 windowPanel.getForm().submit(json); 
		      
				}},
	{text: '取消',scope: this,handler: this.close}
	]	
	
}
if(title='修改')
	{ob.url='admin/Message_edit.action'
	 ob.items.push({xtype:'hidden',name:'messageId'})	}
var windowPanel=new Ext.form.FormPanel(ob);
MsgInfo.superclass.constructor.call(this,{
	id:'MsgInfoWin',
title:title,
width: 380, 
height: 250,
bodyStyle: "padding: 5px",
maximizable:true,
layout:'fit',
items:[windowPanel]
})
}
Ext.extend(MsgInfo,Ext.Window
		)
