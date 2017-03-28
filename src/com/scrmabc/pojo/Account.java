package com.scrmabc.pojo;
import java.io.Serializable;
import java.util.Date;

import org.springframework.stereotype.Component;
import org.springframework.context.annotation.Scope;
@Component
@Scope("prototype")
public class Account implements Serializable {
private String account_id;
private String depart_id;
private String loginname;
private String password;
private String username;
private String tel_phone_number;
private String mobile_phone_number;
private String email;
private String police_no;
private String id_number;
private Float isonline;
private Float aproval_status;
private Float police_type;
private Date last_logintime;
private Date stamp;
private Float login_type;
private String usbkey_id;
private Float is_lock;
private Float is_delete;
private String headship;
private Float sex;
public String getAccount_id() {
	return account_id;
}
public void setAccount_id(String account_id) {
	this.account_id = account_id;
}


public String getDepart_id() {
	return depart_id;
}
public void setDepart_id(String depart_id) {
	this.depart_id = depart_id;
}


public String getLoginname() {
	return loginname;
}
public void setLoginname(String loginname) {
	this.loginname = loginname;
}


public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}


public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}


public String getTel_phone_number() {
	return tel_phone_number;
}
public void setTel_phone_number(String tel_phone_number) {
	this.tel_phone_number = tel_phone_number;
}


public String getMobile_phone_number() {
	return mobile_phone_number;
}
public void setMobile_phone_number(String mobile_phone_number) {
	this.mobile_phone_number = mobile_phone_number;
}


public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}


public String getPolice_no() {
	return police_no;
}
public void setPolice_no(String police_no) {
	this.police_no = police_no;
}


public String getId_number() {
	return id_number;
}
public void setId_number(String id_number) {
	this.id_number = id_number;
}


public Float getIsonline() {
	return isonline;
}
public void setIsonline(Float isonline) {
	this.isonline = isonline;
}


public Float getAproval_status() {
	return aproval_status;
}
public void setAproval_status(Float aproval_status) {
	this.aproval_status = aproval_status;
}


public Float getPolice_type() {
	return police_type;
}
public void setPolice_type(Float police_type) {
	this.police_type = police_type;
}


public Date getLast_logintime() {
	return last_logintime;
}
public void setLast_logintime(Date last_logintime) {
	this.last_logintime = last_logintime;
}


public Date getStamp() {
	return stamp;
}
public void setStamp(Date stamp) {
	this.stamp = stamp;
}


public Float getLogin_type() {
	return login_type;
}
public void setLogin_type(Float login_type) {
	this.login_type = login_type;
}


public String getUsbkey_id() {
	return usbkey_id;
}
public void setUsbkey_id(String usbkey_id) {
	this.usbkey_id = usbkey_id;
}


public Float getIs_lock() {
	return is_lock;
}
public void setIs_lock(Float is_lock) {
	this.is_lock = is_lock;
}


public Float getIs_delete() {
	return is_delete;
}
public void setIs_delete(Float is_delete) {
	this.is_delete = is_delete;
}


public String getHeadship() {
	return headship;
}
public void setHeadship(String headship) {
	this.headship = headship;
}


public Float getSex() {
	return sex;
}
public void setSex(Float sex) {
	this.sex = sex;
}


}
