package com.scrmabc.service.impl;
import javax.annotation.Resource;
import com.scrmabc.mapper.RoleMapper;
import com.scrmabc.mapper.BaseSqlMapper;
import org.springframework.stereotype.Service;
import com.scrmabc.pojo.Role;
import com.scrmabc.mapper.RoleMapper;
import com.scrmabc.service.RoleManageService;

@Service
public class RoleManageServiceImpl extends BaseServiceImpl<Role> implements RoleManageService{
  
  
  @Resource
	private RoleMapper roleMapper; 
	
	public BaseSqlMapper getMapper(){
		return this.roleMapper;
	}
	
	
  
}
