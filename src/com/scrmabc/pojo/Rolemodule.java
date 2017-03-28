package com.scrmabc.pojo;
import java.io.Serializable;
import java.util.Date;

import org.springframework.stereotype.Component;
import org.springframework.context.annotation.Scope;
@Component
@Scope("prototype")
public class Rolemodule implements Serializable {
private Float role_id;
private Float module_id;
public Float getRole_id() {
	return role_id;
}
public void setRole_id(Float role_id) {
	this.role_id = role_id;
}


public Float getModule_id() {
	return module_id;
}
public void setModule_id(Float module_id) {
	this.module_id = module_id;
}


}
