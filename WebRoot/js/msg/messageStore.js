function plate(u,r){
	console.log(r);
	return r.vehicle.plateNumber;
	}

messageStore=function(api,baseParams){
	var messageInfo = new Ext.data.Record.create([{
		name: 'messageId',type:'string',mapping:'messageId'
	},{
		name : 'state',type:'string',mapping:'state'
	},{
		name : 'content',type:'string',mapping:'content'
	}, {
		name : 'plateNumber',convert:plate
	},{
		name : 'optime',type:'string',mapping:'optime',dateFormat: 'Y-m-d'
	},{
		name : 'organization',type:'string',mapping:'vehicle.organizarion.organization'
	},{
		name : 'Type',type:'string',mapping:'Type'//1发送，2接收，3预存（到是可以单独）
	}
	]);
	messageStore.superclass.constructor.call(this,{
	reader:new Ext.data.JsonReader({
					totalProperty:'total',
					root:'resultList'
				},messageInfo), 
    writer :new Ext.data.JsonWriter({
    encode: true,
    writeAllFields: true // write all fields, not just those that changed
}),

				
	proxy:new Ext.data.HttpProxy({ method: 'POST',
    
    api:api
}),
	
	
	baseParams:baseParams,
	autoLoad: {params:{start: 0, limit: 10}}
	
	})
	
	}
	Ext.extend(messageStore,Ext.data.Store);
/*[{
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
	]*/