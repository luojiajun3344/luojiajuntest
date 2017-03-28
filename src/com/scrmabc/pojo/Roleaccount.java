package com.scrmabc.pojo;
import java.io.Serializable;
import java.util.Date;

import org.springframework.stereotype.Component;
import org.springframework.context.annotation.Scope;
@Component
@Scope("prototype")
public class Roleaccount implements Serializable {
private String account_id;
private String role_id;
public String getAccount_id() {
	return account_id;
}
public void setAccount_id(String account_id) {
	this.account_id = account_id;
}


public String getRole_id() {
	return role_id;
}
public void setRole_id(String role_id) {
	this.role_id = role_id;
}


}
