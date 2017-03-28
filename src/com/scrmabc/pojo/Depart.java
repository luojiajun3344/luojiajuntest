package com.scrmabc.pojo;
import java.io.Serializable;
import java.util.Date;

import org.springframework.stereotype.Component;
import org.springframework.context.annotation.Scope;
@Component
@Scope("prototype")
public class Depart implements Serializable {
private String depart_id;
private String depart_no;
private String depart_name;
private String super_depart_id;
private String manager_name;
private String manager_phone;
private String email;
private Float account_id;
private String receive_person_name;
private String receive_person_phone;
private Float depart_type;
private Float is_delete;
private String remark;
private Date stamp;
private String depart_sequence;
public String getDepart_id() {
	return depart_id;
}
public void setDepart_id(String depart_id) {
	this.depart_id = depart_id;
}


public String getDepart_no() {
	return depart_no;
}
public void setDepart_no(String depart_no) {
	this.depart_no = depart_no;
}


public String getDepart_name() {
	return depart_name;
}
public void setDepart_name(String depart_name) {
	this.depart_name = depart_name;
}


public String getSuper_depart_id() {
	return super_depart_id;
}
public void setSuper_depart_id(String super_depart_id) {
	this.super_depart_id = super_depart_id;
}


public String getManager_name() {
	return manager_name;
}
public void setManager_name(String manager_name) {
	this.manager_name = manager_name;
}


public String getManager_phone() {
	return manager_phone;
}
public void setManager_phone(String manager_phone) {
	this.manager_phone = manager_phone;
}


public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}


public Float getAccount_id() {
	return account_id;
}
public void setAccount_id(Float account_id) {
	this.account_id = account_id;
}


public String getReceive_person_name() {
	return receive_person_name;
}
public void setReceive_person_name(String receive_person_name) {
	this.receive_person_name = receive_person_name;
}


public String getReceive_person_phone() {
	return receive_person_phone;
}
public void setReceive_person_phone(String receive_person_phone) {
	this.receive_person_phone = receive_person_phone;
}


public Float getDepart_type() {
	return depart_type;
}
public void setDepart_type(Float depart_type) {
	this.depart_type = depart_type;
}


public Float getIs_delete() {
	return is_delete;
}
public void setIs_delete(Float is_delete) {
	this.is_delete = is_delete;
}


public String getRemark() {
	return remark;
}
public void setRemark(String remark) {
	this.remark = remark;
}


public Date getStamp() {
	return stamp;
}
public void setStamp(Date stamp) {
	this.stamp = stamp;
}


public String getDepart_sequence() {
	return depart_sequence;
}
public void setDepart_sequence(String depart_sequence) {
	this.depart_sequence = depart_sequence;
}


}
