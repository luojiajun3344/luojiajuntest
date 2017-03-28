function notice(win, title, msg, success) {
	var notice = new Ext.ux.Notification({
				listeners : {
					'beforerender' : function() {
						//playSound('sound/notify.wav');
					}
				}
			});
	notice.showMessage(win, '<h1>' + title + '</h1>' + msg, success);
	return notice;
}
var MyComboBox=Ext.extend(Ext.form.ComboBox,{
	  constructor:function(data,label,config){
	  config=Ext.apply({
	          id:'selectRange',
			  triggerAction: "all", 
	          store: new Ext.data.ArrayStore({
	          id: 0,
	          fields: [
	            'myId',
	            'displayText'
	          ],
	         data: data
	         }),
	          listeners: {  
	          beforeRender: function(combo) { 
	        	  var firstValue = combo.store.data.items[0].data.displayText;  
	          combo.setValue(firstValue);// 同时下拉框会将与name为firstValue值对应的 text显示
	          }    
	      } ,
	         displayField: "displayText", 
	          valueField: "myId", 
	          mode: "local", 
	          fieldLabel:label
			  
			  },config);
	  MyComboBox.superclass.constructor.call(this,config)
	  }

	})