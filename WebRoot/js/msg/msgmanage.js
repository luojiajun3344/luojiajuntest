function init() {
	var win = this;
	var panelIdPre = 'aa';
	var sysPanels = ["sendManage","receiveManage","presaveManage"];
	var sysPanelNames =["MsgManagePanel","ReceivePanel","PreSavePanel"] ;
	
	var url = window.location.search;
	var index = getComponentIndex(url);
	var item = new newComponent(sysPanelNames[index]);
	
	var sendManage = new Ext.Toolbar.Button({text:"已发短信管理", toggleGroup:"menu", handler:function (btn) {
		var win=Ext.getCmp('MsgInfoWin');
		if(win) win.close();
		var win2=Ext.getCmp('sendmessagewindow');
		if(win2) win2.close();
		showWindow("sendManage");
	}});
	var receiveManage = new Ext.Toolbar.Button({text:"已收短信管理", toggleGroup:"menu", handler:function (btn) {
		var win=Ext.getCmp('MsgInfoWin');
		if(win) win.close();
		var win2=Ext.getCmp('sendmessagewindow');
		if(win2) win2.close();
		showWindow("receiveManage");
	}});
	var presaveManage = new Ext.Toolbar.Button({text:"预存短信管理", toggleGroup:"menu", handler:function (btn) {
		var win=Ext.getCmp('MsgInfoWin');
		if(win) win.close();
		
		showWindow("presaveManage");
	}});
	
	
			var tbar = [];
			//tbar.push(departManager);
			//tbar.push('-');
			tbar.push(sendManage);
			tbar.push('-');
			tbar.push(receiveManage);
			
			tbar.push('-');
			tbar.push(presaveManage);
			
			var sysCardPanel = new Ext.Panel({
						layout : 'card',
						activeItem : 0,
						deferredRender : false,
						border : false,
						//items : [item]
						items:[item]
					});

			// =======主框架
			view = new Ext.Viewport({
						layout : 'border',
						items : [{
									region : 'center',
									layout : 'fit',
									tbar : tbar,
									items : [sysCardPanel]
								}]

			});
	
		
	function showWindow(key) {
		for (var i = 0; i < sysPanels.length; i++) {
			if (sysPanels[i] == key) {
				var panelName = sysPanelNames[i];
				var ids = panelIdPre + panelName;
				var index = getPanelTabIndex(ids);
					// alert("panelName:::::"+panelName);
				if (index == -1) {
					var item = newComponent(panelName);
					sysCardPanel.add(item);
					sysCardPanel.getLayout().setActiveItem(sysCardPanel.items.getCount() - 1);
					item.doLayout();//当有新组建加入容器时，重新布局容器
				} else {
					sysCardPanel.getLayout().setActiveItem(index);
				}
				return;
			}
		}
	}

function getPanelTabIndex(ids) {
	
	var items = sysCardPanel.items;
	for (var i = 0; i < items.getCount(); i++) {
		if (items.get(i).getId() == ids) {
			return i;
		}
	}

	return -1;
}

function getComponentIndex(url) {
	var src = url.substr(1, url.length);
	for (var i = 0; i < sysPanels.length; i++) {
//		alert(src+"==="+dutyPanels[i]);
		if (sysPanels[i] == src) {
			return i;
		}
	}
	return 0;
}

function newComponent(panelName) {
	var ids = panelIdPre + panelName;
	var comp;
	eval("comp = new " + panelName + "('"+ids+"')");
	return comp;
}
}
Ext.onReady(init);

