package com.scrmabc.service.impl;
import javax.annotation.Resource;
import com.scrmabc.mapper.RoleaccountMapper;
import com.scrmabc.mapper.BaseSqlMapper;
import org.springframework.stereotype.Service;
import com.scrmabc.pojo.Roleaccount;
import com.scrmabc.mapper.RoleaccountMapper;
import com.scrmabc.service.RoleaccountManageService;

@Service
public class RoleaccountManageServiceImpl extends BaseServiceImpl<Roleaccount> implements RoleaccountManageService{
  
  
  @Resource
	private RoleaccountMapper roleaccountMapper; 
	
	public BaseSqlMapper getMapper(){
		return this.roleaccountMapper;
	}
	
	
  
}
