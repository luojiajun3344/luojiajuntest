package com.scrmabc.pojo;
import java.io.Serializable;
import java.util.Date;

import org.springframework.stereotype.Component;
import org.springframework.context.annotation.Scope;
@Component
@Scope("prototype")
public class Module implements Serializable {
private Float module_id;
private String module_name;
private Float parent_module_id;
private String control1;
private String control2;
private String control3;
private String control4;
private String remarks;
private Float module_type;
public Float getModule_id() {
	return module_id;
}
public void setModule_id(Float module_id) {
	this.module_id = module_id;
}


public String getModule_name() {
	return module_name;
}
public void setModule_name(String module_name) {
	this.module_name = module_name;
}


public Float getParent_module_id() {
	return parent_module_id;
}
public void setParent_module_id(Float parent_module_id) {
	this.parent_module_id = parent_module_id;
}


public String getControl1() {
	return control1;
}
public void setControl1(String control1) {
	this.control1 = control1;
}


public String getControl2() {
	return control2;
}
public void setControl2(String control2) {
	this.control2 = control2;
}


public String getControl3() {
	return control3;
}
public void setControl3(String control3) {
	this.control3 = control3;
}


public String getControl4() {
	return control4;
}
public void setControl4(String control4) {
	this.control4 = control4;
}


public String getRemarks() {
	return remarks;
}
public void setRemarks(String remarks) {
	this.remarks = remarks;
}


public Float getModule_type() {
	return module_type;
}
public void setModule_type(Float module_type) {
	this.module_type = module_type;
}


}
