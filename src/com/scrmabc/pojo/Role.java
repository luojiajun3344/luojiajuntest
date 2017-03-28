package com.scrmabc.pojo;
import java.io.Serializable;
import java.util.Date;

import org.springframework.stereotype.Component;
import org.springframework.context.annotation.Scope;
@Component
@Scope("prototype")
public class Role implements Serializable {
private String role_id;
private String role_name;
private Float role_type;
private Float super_role_id;
private Float account_id;
private Date create_time;
private String remarks;
private String ispublic;
public String getRole_id() {
	return role_id;
}
public void setRole_id(String role_id) {
	this.role_id = role_id;
}


public String getRole_name() {
	return role_name;
}
public void setRole_name(String role_name) {
	this.role_name = role_name;
}


public Float getRole_type() {
	return role_type;
}
public void setRole_type(Float role_type) {
	this.role_type = role_type;
}


public Float getSuper_role_id() {
	return super_role_id;
}
public void setSuper_role_id(Float super_role_id) {
	this.super_role_id = super_role_id;
}


public Float getAccount_id() {
	return account_id;
}
public void setAccount_id(Float account_id) {
	this.account_id = account_id;
}


public Date getCreate_time() {
	return create_time;
}
public void setCreate_time(Date create_time) {
	this.create_time = create_time;
}


public String getRemarks() {
	return remarks;
}
public void setRemarks(String remarks) {
	this.remarks = remarks;
}


public String getIspublic() {
	return ispublic;
}
public void setIspublic(String ispublic) {
	this.ispublic = ispublic;
}


}
