package com.scrmabc.pojo2;
import java.io.Serializable;
import java.util.Date;

import org.springframework.stereotype.Component;
import org.springframework.context.annotation.Scope;
@Component
@Scope("prototype")
public class Account implements Serializable {
private Integer account_id;
private String depart_id;
private String loginname;
private String password;
private String username;
private String tel_phone_number;
private String mobile_phone_number;
private String email;
private String police_no;
private String id_number;
private Integer isonline;
private Integer aproval_status;
private Integer police_type;
private Date last_logintime;
private Date stamp;
public Integer getAccount_id() {
	return account_id;
}
public void setAccount_id(Integer account_id) {
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


public Integer getIsonline() {
	return isonline;
}
public void setIsonline(Integer isonline) {
	this.isonline = isonline;
}


public Integer getAproval_status() {
	return aproval_status;
}
public void setAproval_status(Integer aproval_status) {
	this.aproval_status = aproval_status;
}


public Integer getPolice_type() {
	return police_type;
}
public void setPolice_type(Integer police_type) {
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


}
