package com.scrmabc.pojo;
import java.io.Serializable;
import java.util.Date;

import org.springframework.stereotype.Component;
import org.springframework.context.annotation.Scope;
@Component
@Scope("prototype")
public class Monitorvehicle implements Serializable {
private Float monitor_id;
private Float account_id;
private String call_letter;
private Float position_mode;
private String number_plate;
public Float getMonitor_id() {
	return monitor_id;
}
public void setMonitor_id(Float monitor_id) {
	this.monitor_id = monitor_id;
}


public Float getAccount_id() {
	return account_id;
}
public void setAccount_id(Float account_id) {
	this.account_id = account_id;
}


public String getCall_letter() {
	return call_letter;
}
public void setCall_letter(String call_letter) {
	this.call_letter = call_letter;
}


public Float getPosition_mode() {
	return position_mode;
}
public void setPosition_mode(Float position_mode) {
	this.position_mode = position_mode;
}


public String getNumber_plate() {
	return number_plate;
}
public void setNumber_plate(String number_plate) {
	this.number_plate = number_plate;
}


}
