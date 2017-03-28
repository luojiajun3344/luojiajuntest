
//登录名，姓名，操作人所属机构，操作时间，操作类别，操作内容
	var LogInfo = new Ext.data.Record.create([
	'studentId','sa','sn','birthday'
	]);
LogStore=function(api,baseParams){

	LogStore.superclass.constructor.call(this,{
		id:'logstore',
	reader:new Ext.data.JsonReader({
					totalProperty:'total',
					root:'resultList'
				},LogInfo), 
    writer :new Ext.data.JsonWriter({
    encode: true,
    writeAllFields: true // write all fields, not just those that changed
}),
	proxy:new Ext.data.HttpProxy({ method: 'POST',
    api:api
}),
	baseParams:baseParams,
	autoLoad: {params:{start:0,limit: 10}}
	})
	
	}
	Ext.extend(LogStore,Ext.data.Store);
	Ext.data.DataProxy.addListener('beforewrite', function(proxy, action) {
	   alert("beforewrite1");
	});
	Ext.data.DataProxy.addListener('exception', function(proxy, type, action, options, res) {
	    if (type === 'remote') {
	        Ext.Msg.show({
	            title: 'REMOTE EXCEPTION',
	            msg: res.message,
	            icon: Ext.MessageBox.ERROR,
	            buttons: Ext.Msg.OK
	        });
	    }
	});
	////
	// all write events
	//
	Ext.data.DataProxy.addListener('write', function(proxy, action, result, res, rs) {
	   alert('afterWriter');
	});
