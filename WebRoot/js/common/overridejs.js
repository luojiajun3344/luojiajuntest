//提示
Ext.QuickTips.init();
Ext.form.Field.prototype.msgTarget= "title";//提示的方式，枚举值
//重写RadioGroup和CheckboxGroup setValue(),getValue()
Ext.override(Ext.form.CheckboxGroup, { getValue: function() { var v = []; this.items.each(function(item) { if (item.getValue()) { v.push(item.getRawValue()); } else { v.push(''); } }); return v; }, setValue: function(vals) { var a = []; if (Ext.isArray(vals)) { a = vals; } else { a = [vals]; } this.items.each(function(item) { item.setValue(false); for ( var i = 0 ; i < a.length ; i ++ ) { var val = a[i]; if ( val == item.getRawValue() ) { item.setValue(true); } }; }); } });
Ext.override(Ext.form.RadioGroup, { getValue: function() { var v; this.items.each(function(item) { if ( item.getValue() ) { v = item.getRawValue(); return false; } }); return v; }, setValue: function(v) { if(this.rendered) this.items.each(function(item) { item.setValue(item.getRawValue() == v); }); else for(k in this.items) this.items[k].checked = this.items[k].inputValue == v; } }); 

var tip="提示";
var tip4FormSubMsg="抱歉，请输入有效数据!";
var tip4MustInput="*";
//判断是否为空
String.prototype.Trim = function() 
{  
    var m = this.match(/^\s*(\S+(\s+\S+)*)\s*$/);  
    return (m == null) ? "" : m[1];  
}
String.prototype.isMobile = function() 
{  
    return (/^((\+86)|(86))?(1)\d{10}$/.test(this.Trim()));  
}
String.prototype.isTel = function()
{   
    return (/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(this.Trim()));
}
String.prototype.isMobileTel = function()
{
    return (this.isTel()||this.isMobile());
}
String.prototype.isEmail = function()
{
    return (/^(\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)$/.test(this.Trim()));
}
String.prototype.isNumber = function()
{
    return (!isNaN(this.Trim()));
}
String.prototype.isInt = function()
{
    return (/^(-?[0-9]\d*)$/.test(this.Trim()));
}
String.prototype.isFloat = function()
{
    return (/^(-?([0-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0))$/.test(this.Trim()));
}
String.prototype.isPwd = function()
{
     return (/^[\w+]{6,20}$/.test(this.Trim()));
}
String.prototype.isChineseFirstName = function()
{
    return (/^[\u4e00-\u9fa5]{1,2}$/.test(this.Trim()));
}
String.prototype.isChineseLastName = function()
{
     return (/^[\u4e00-\u9fa5]{1,15}$/.test(this.Trim()));
}
String.prototype.isEmpty = function()
{
     return (this.Trim()==""||this==null);
}
String.prototype.isDate = function()
{
     return /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/.test(this.Trim());
}
String.prototype.isMoney = function()
{
    return (/^(-?\d+)(\.\d+)?$/.test(this.Trim()));
}
function isNumber(s)
{
     return (!isNaN(s.Trim()));
}
function isDate(str)
{ 
    var reg = /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/
    if (reg.test(str)) return true;
    return false;
}
function isOx(v){
           var pre="0x";
			if(v.indexOf(pre)>-1){
                pre="";
             }
			var n = Number(pre+v);
			if (!isNaN(n))
			{   
			    return true;
			}else{
			    return false;
			}
}
//扩展Ext验证的方法
Ext.apply(Ext.form.VTypes, {
	isIpPort: function(v,field) {
        if(v.isEmpty()){
           return true;
        }else{
        	  var patrn =/^([1-9]{1,2}|1\d\d|1\d|2[0-4]\d|25[0-5])\.([1-9]{1,2}|1\d\d|2[0-4]\d|25[0-5])\.([1-9]{1,2}|1\d\d|2[0-4]\d|25[0-5])\.([1-9]{1,2}|1\d\d|2[0-4]\d|25[0-5])\:(\d{1,6})$/;
             if(patrn.exec(v)){ 
        	   return true;
             }else{
               return false;
             }
        }
    },
    isIpPortText: '请输入有效的IP和端口组合！',
	isContain0x: function(v,field) {
        if(v.isEmpty()){
           return true;
        }else{
        	if(v.indexOf("---")>-1){
        	  var array=v.split("---");
        	  if(isOx(array[0])&&isOx(array[1])){
        	  	return true;
        	  }else{
        	  	return false;
        	  }
        	  
        	}else{
        	  return false;
        	}
        	
        }
    },
    isContain0xText: '请输入符合格式的字符！',
	is0x: function(v,field) {
        if(v.isEmpty()){
           return true;
        }else{
        	var pre="0x";
			if(v.indexOf(pre)>-1){
                pre="";
             }
            var maxVal;
            if(field){
            	if(field.condition){
            	   maxVal=field.condition.maxVal;
            	}
            }
             var minVal;
            if(field){
            	if(field.condition){
            	   minVal=field.condition.minVal;
            	}
            }
            var byteLength;
            if(field){
            	if(field.condition){
            	   byteLength=field.condition.byteLength;
            	}
            }
			var n = Number(pre+v);
			if (!isNaN(n))
			{   
				if(byteLength>0){
					//v.replace(/[^\x00-\xff]/g, "**").length; //得到输入的字节数
				   if(v.replace(/[^\x00-\xff]/g, "**").length<byteLength){
				      return false;
				   }
				
				}
				if(maxVal>0){
				   if(n>maxVal){
				      return false;
				   }
				}
				if(minVal){
				   if(n<minVal){
				      return false;
				   }
				}
			    return true;
			}else{
			    return false;
			}
        }
    },
    is0xText: '请输入16进制数字！',
     isNum: function(v,field) {
        if(v.isEmpty()){
           return true;
        }else{
        	 var maxVal;
            if(field){
            	if(field.condition){
            	   maxVal=field.condition.maxVal;
            	}
            }
             var minVal;
            if(field){
            	if(field.condition){
            	   minVal=field.condition.minVal;
            	}
            }
            if (!isNaN(v))
			{   
				if(maxVal>0){
				   if(v>maxVal){
				      return false;
				   }
				}
				if(minVal){
				   if(v<minVal){
				      return false;
				   }
				}
			    return true;
			}else{
			    return false;
			}
        }
    },
    isNumText: '请输入数字！',
    tel: function(v) {
        if(v.isEmpty()){
           return true;
        }else{
          return /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(v);
        }
    },
    telText: '请输入有效的固定电话号码！',
    mobile:  function(v) {
        if(v.isEmpty()){
           return true;
        }else{
          return /^((\+86)|(86))?(1)\d{10}$/.test(v);
        }
      
    },
    mobileText: '请输入有效的手机号码！',
    mobileOrTel:function(v) {
        if(v.isEmpty()){
           return true;
        }else{
           if(/^((\+86)|(86))?(1)\d{10}$/.test(v)||/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(v)){
             return true;
           }else{
             return false;
           }
        }
      
    },
    mobileOrTelText: '请输入有效的手机号码或者座机号码！',
    isPostId:function(v) {
        if(v.isEmpty()){
           return true;
        }else{
           if(/^\d{6}$/.test(v)){
             return true;
           }else{
             return false;
           }
        }
      
    },
    isPostIdText: '请输入有效的邮政编码！',
    isInteger:function(v) {
        if(v.isEmpty()){
           return true;
        }else{
           if(/^\+?[1-9][0-9]*$/.test(v)){
             return true;
           }else{
             return false;
           }
        }
      
    },
    isIntegerText: '请输入正整数！',
    compareDate: function(val, field) {     //返回true，则验证通过，否则验证失败  
         if (field.condition) {               //如果表单有使用condition配置，condition配置是一个JSON对象，该对象提供了一个名为targetCmpId的字段，该字段指定了需要进行比较的另一个组件ID。  
             var cmp = Ext.getCmp(field.condition.targetCmpId);   //通过targetCmpId的字段查找组件  
             if (Ext.isEmpty(cmp)) {      //如果组件（表单）不存在，提示错误  
                 Ext.MessageBox.show({  
                     title: '错误',  
                     msg: '发生异常错误，指定的组件未找到',  
                     icon: Ext.Msg.ERROR,  
                     buttons: Ext.Msg.OK  
                 });  
                 return false;  
             } 
             if((!Ext.isEmpty(val))&&(!Ext.isEmpty(cmp.getValue()))){
	            if(val<cmp.getValue().format("Y-m-d")){
					 return false;
				}
			}
            return true;
         }  
     },  
     compareDateText: '抱歉，行驶证过期日期需在行驶证发证日期之后!'  
});

  //Extjs.form.TextField的默认在输入框后面是不能加入文字 ,unitText加上单位,sideText一般用于验证,*
     /** 
     * 适用于TextField、NumberField(转自互联网) 
     */  
    Ext.override(Ext.form.TextField, {  
                sideText : '',  
                unitText : '',   
                onRender : function(ct, position) {  
                    Ext.form.TextField.superclass.onRender.call(this, ct, position);  
                    //Extjs.form.TextField的默认在输入框后面是不能加入文字。在网上找到此方法以备查用。
		           // 如果单位字符串已定义 则在后方增加单位对象   
		            if (this.unitText != '') {   
		              this.unitEl = ct.createChild({   
		                tag : 'div',   
		                html : this.unitText   
		             });   
		              this.unitEl.addClass('x-form-unit');   
		                  // 增加单位名称的同时 按单位名称大小减少文本框的长度 初步考虑了中英文混排 未考虑为负的情况   
		              this.width = this.width - (this.unitText.replace(/[^\x00-\xff]/g, "xx").length * 6 + 2);   
		                  // 同时修改错误提示图标的位置   
		              this.alignErrorIcon = function() {   
		              this.errorIcon.alignTo(this.unitEl, 'tl-tr', [2, 0]);   
		              };   
		            }  
		             //加星号
                    if (this.sideText != '' && !this.triggerAction) {  
                        this.sideEl = ct.createChild({  
                                    tag : 'font',
                                    style:'color:red',
                                    html : this.sideText  
                                });  
                        //this.sideEl.addClass('x-form-sideText');  
                    } 
                }  
            });  
    /** 
     * 适用于ComboBox 
     */
    Ext.override(Ext.form.ComboBox, {  
                sideText : '',  
                onRender : function(ct, position) {  
                    Ext.form.ComboBox.superclass.onRender.call(this, ct, position);  
                    if (this.sideText != '') {  
                        this.sideEl = ct.first('div').createChild({  
                                    tag : 'font',  
                                    style : 'padding-left:17px;color:red',  
                                    html : this.sideText  
                                });  
                       // this.sideEl.addClass('x-form-sideText');  
                    }  
                    if (this.hiddenName) {  
                        this.hiddenField = this.el.insertSibling({  
                                    tag : 'input',  
                                    type : 'hidden',  
                                    name : this.hiddenName,  
                                    id : (this.hiddenId || this.hiddenName)  
                                }, 'before', true);  
      
                        // prevent input submission  
                        this.el.dom.removeAttribute('name');  
                    }  
                    if (Ext.isGecko) {  
                        this.el.dom.setAttribute('autocomplete', 'off');  
                    }  
      
                    if (!this.lazyInit) {  
                        this.initList();  
                    } else {  
                        this.on('focus', this.initList, this, {  
                                    single : true  
                                });  
                    }  
                }  
            });  
           
/**          
 * TextField添加size属性,用法：可控制file类型的"浏览"按钮前文本框的长度
 * @type Number

Ext.form.TextField.prototype.size = 20;
Ext.form.TextField.prototype.initValue = function()
{
    if(this.value !== undefined){
        this.setValue(this.value);
    }else if(this.el.dom.value.length > 0){
        this.setValue(this.el.dom.value);
    }
    this.el.dom.size = this.size;
    if (!isNaN(this.maxLength) && (this.maxLength *1) > 0 && (this.maxLength != Number.MAX_VALUE)) {
        this.el.dom.maxLength = this.maxLength *1;
    }
    
        
}; */