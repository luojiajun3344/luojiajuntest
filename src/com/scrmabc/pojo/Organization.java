package com.scrmabc.pojo;
import java.io.Serializable;
import java.util.Date;

import org.springframework.stereotype.Component;
import org.springframework.context.annotation.Scope;
@Component
@Scope("prototype")
public class Organization implements Serializable {
private String organization_id;
private String organization;
public String getOrganization_id() {
	return organization_id;
}
public void setOrganization_id(String organization_id) {
	this.organization_id = organization_id;
}


public String getOrganization() {
	return organization;
}
public void setOrganization(String organization) {
	this.organization = organization;
}


}
