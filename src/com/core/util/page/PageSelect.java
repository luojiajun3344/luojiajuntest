package com.core.util.page;

import java.util.Map;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
@Component
@Scope("prototype")
public class PageSelect {
 private String username;
 private int pageNo;
 private int pageSize;
 private int offset;
 private Map filter;
 private String order;
 public String getOrder() {
	return order;
}
public void setOrder(String order) {
	this.order = order;
}
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public int getPageNo() {
	return pageNo;
}
public void setPageNo(int pageNo) {
	this.pageNo = pageNo;
}
public int getPageSize() {
	return pageSize;
}
public void setPageSize(int pageSize) {
	this.pageSize = pageSize;
}
public int getOffset(){
	return offset;
}
public void setOffset(int offset) {
	this.offset = offset;
}
public Map getFilter() {
	return filter;
}
public void setFilter(Map filter) {
	this.filter = filter;
}

}
