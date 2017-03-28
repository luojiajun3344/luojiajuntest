package com.scrmabc.pojo;
import java.io.Serializable;
import java.util.Date;

import org.springframework.stereotype.Component;
import org.springframework.context.annotation.Scope;
@Component
@Scope("prototype")
public class Message implements Serializable {
private String message_id;
private String content;
private String admin_id;
private String vehicle_id;
private Date optime;
private String type;
public String getMessage_id() {
	return message_id;
}
public void setMessage_id(String message_id) {
	this.message_id = message_id;
}


public String getContent() {
	return content;
}
public void setContent(String content) {
	this.content = content;
}


public String getAdmin_id() {
	return admin_id;
}
public void setAdmin_id(String admin_id) {
	this.admin_id = admin_id;
}


public String getVehicle_id() {
	return vehicle_id;
}
public void setVehicle_id(String vehicle_id) {
	this.vehicle_id = vehicle_id;
}


public Date getOptime() {
	return optime;
}
public void setOptime(Date optime) {
	this.optime = optime;
}


public String getType() {
	return type;
}
public void setType(String type) {
	this.type = type;
}


}
