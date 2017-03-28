MsgInfo=function(title){

ob={
id:'msginfoform',
url: "admin/Student_add.action", 
//baseParams: {method: "add"}, 
method: "post", 
items:[
	{xtype:'textfield',name:'studentId',fieldLabel:'车牌号'
	},
	{xtype:'textfield',name:'sa',fieldLabel:'车辆所在单位'
	},
	{xtype:'textfield',name:'sn',fieldLabel:'孙辈',width:140},
	{xtype:'datefield',name:'birthday',fieldLabel:'时间', format:'Y-m-d'},
	],
	buttons:[
	    	 {text:'保存',action:'save',handler:function(){
	    		 var json = { 
	    		          success: function(f, action){ 
	    		            Ext.Msg.alert("成功",action.result.msg);
	    		        	var win=Ext.getCmp('msgwin');
	    					if(win)win.close();
	    		            Ext.getCmp('Loggrid').getStore().reload();
	    		           
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
if(title=='详情')
	ob.buttons=null;
if(title=='修改')
	ob.url='admin/Student_edit.action'
var windowPanel=new Ext.form.FormPanel(ob);
MsgInfo.superclass.constructor.call(this,{
title:title,
id:'msgwin',
width: 380, 
height: 250,
bodyStyle: "padding: 5px",
maximizable:true,
layout:'fit',
items:[windowPanel]
});
};
Ext.extend(MsgInfo,Ext.Window);
