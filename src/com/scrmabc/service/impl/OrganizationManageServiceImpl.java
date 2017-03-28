package com.scrmabc.service.impl;
import javax.annotation.Resource;
import com.scrmabc.mapper.OrganizationMapper;
import com.scrmabc.mapper.BaseSqlMapper;
import org.springframework.stereotype.Service;
import com.scrmabc.pojo.Organization;
import com.scrmabc.mapper.OrganizationMapper;
import com.scrmabc.service.OrganizationManageService;

@Service
public class OrganizationManageServiceImpl extends BaseServiceImpl<Organization> implements OrganizationManageService{
  
  
  @Resource
	private OrganizationMapper organizationMapper; 
	
	public BaseSqlMapper getMapper(){
		return this.organizationMapper;
	}
	
	
  
}
