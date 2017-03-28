package com.scrmabc.service.impl;
import javax.annotation.Resource;
import com.scrmabc.mapper.RolemoduleMapper;
import com.scrmabc.mapper.BaseSqlMapper;
import org.springframework.stereotype.Service;
import com.scrmabc.pojo.Rolemodule;
import com.scrmabc.mapper.RolemoduleMapper;
import com.scrmabc.service.RolemoduleManageService;

@Service
public class RolemoduleManageServiceImpl extends BaseServiceImpl<Rolemodule> implements RolemoduleManageService{
  
  
  @Resource
	private RolemoduleMapper rolemoduleMapper; 
	
	public BaseSqlMapper getMapper(){
		return this.rolemoduleMapper;
	}
	
	
  
}
