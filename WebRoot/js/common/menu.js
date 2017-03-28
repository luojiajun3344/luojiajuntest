CommMenu = function(str){
	var win = this;
	var command = [];
	if(str == 'command'){
			command = [];
			this.modelSet = new Ext.menu.Item({
				text : '模式切换',
				menu : [  {
							text : 'GPS模块定位方式',
							group : 'commandType',
							checked : true,
							handler : function() {
					//			changeCommandType(1);
							}
						},
						{
							text : '北斗模块定位方式',
							group : 'commandType',
							checked : false,
							handler : function() {
							//	changeCommandType(2);
							}
						}]
			});
			
			this.vehicleGZ = new Ext.menu.Item({
				text:'车辆跟踪',
				handler:function(){
					var gzwin = new CommWindow('vehiclegz');
					gzwin.setSize(300,150);
					gzwin.show();
				}
			})
			
			this.vehicleDM = new Ext.menu.Item({
				text:'车辆点名',
				handler:function(){
					
				}	
			})
			
			this.vehicleJT = new Ext.menu.Item({
				text:'车辆监听',
				handler:function(){
					
				}	
			})
			this.vehicleGZ = new Ext.menu.Item({
				text:'车辆跟踪',
				handler:function(){
					var gzlwin = new CommWindow('vehiclegz');
					gzlwin.setSize(300,150)
					gzlwin.show();
				}	
			})
			
			this.sendalarmlist = new Ext.menu.Item({
				text:'警单下发',
				handler:function(){
					var alwin = new CommWindow('alarmlist');
					alwin.show();
				}	
			})
			
			this.vehicleDJSB = new Ext.menu.Item({
				text:'车辆定距上报',
				handler:function(){
					var diszwin = new CommWindow('vehicledjsb');
					diszwin.setSize(300,150);
					diszwin.show();
				}	
			})
			
			this.historytrack = new Ext.menu.Item({
				text:'历史轨迹回放',
				handler:function(){
					var hwin = new CommWindow('historytrack');
					//hwin.histrack.setTitle('车牌号码：湘A0001');
					hwin.setSize(300,250);
					hwin.show();
				}	
			})
			
			this.addmonitorlist = new Ext.menu.Item({
				text:'加入监控列表',
				handler:function(){
					Ext.getCmp('lefttabpanel').setActiveTab(2);
					notice('提示信息','<font color="red",size="2">该车辆已在监控列表中！</font>','', false);
				}	
			})
			this.GPRSparam = new Ext.menu.Item({
				text:'GPRS参数设置',
				handler:function(){
					var gprswin = new CommWindow('gprsparam')
					gprswin.setSize(300,300);
					gprswin.show();
				}	
			})
			this.takePictures = new Ext.menu.Item({
				text:'拍照',
				handler:function(){
					var tprswin = new CommWindow('takepictures')
					tprswin.setSize(300,300);
					tprswin.show();
				}	
			})
			
			this.sendmessage = new Ext.menu.Item({
				text:'发送短信',
				handler:function(){
					var send=new SendPanel();
					var grid=send.findById('presavegrid2');
					grid.purgeListeners();
					grid.on('dblclick',function(e){
						var record=grid.getSelectionModel().getSelected()
						send.findById('messagecontent').setRawValue(record.data.content)
					})
					var formwin=new Ext.Window({
        				title:'发送短信',
       					width: 610, 
        				height: 440,
        				bodyStyle: "padding: 5px",
        				maximizable:true,
        				layout:'fit',
        				items:[send]
        			}).show(Ext.getBody())
				}
	   		});
			command.push(win.takePictures);
			command.push(win.modelSet);
			command.push(win.vehicleGZ);
			command.push(win.vehicleDM);
			command.push(win.vehicleJT);
			command.push(win.vehicleGZ);
			command.push(win.sendmessage);
			command.push(win.sendalarmlist);
			command.push(win.vehicleDJSB);
			command.push(win.historytrack);
			command.push(win.addmonitorlist);
			command.push(win.GPRSparam);
	}
	CommMenu.superclass.constructor.call(this,{
		//title:title,
		width:140,
		items:command
	});
}
Ext.extend(CommMenu,Ext.menu.Menu)