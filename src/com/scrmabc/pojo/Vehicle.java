package com.scrmabc.pojo;
import java.io.Serializable;
import java.util.Date;

import org.springframework.stereotype.Component;
import org.springframework.context.annotation.Scope;
@Component
@Scope("prototype")
public class Vehicle implements Serializable {
private String vehicle_id;
private String platenumber;
private Integer miletotal;
private Integer oiltotal;
private String organization_id;
public String getVehicle_id() {
	return vehicle_id;
}
public void setVehicle_id(String vehicle_id) {
	this.vehicle_id = vehicle_id;
}


public String getPlatenumber() {
	return platenumber;
}
public void setPlatenumber(String platenumber) {
	this.platenumber = platenumber;
}


public Integer getMiletotal() {
	return miletotal;
}
public void setMiletotal(Integer miletotal) {
	this.miletotal = miletotal;
}


public Integer getOiltotal() {
	return oiltotal;
}
public void setOiltotal(Integer oiltotal) {
	this.oiltotal = oiltotal;
}


public String getOrganization_id() {
	return organization_id;
}
public void setOrganization_id(String organization_id) {
	this.organization_id = organization_id;
}


}
