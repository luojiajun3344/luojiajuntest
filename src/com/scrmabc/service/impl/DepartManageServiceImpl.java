package com.scrmabc.service.impl;
import javax.annotation.Resource;
import com.scrmabc.mapper.DepartMapper;
import com.scrmabc.mapper.BaseSqlMapper;
import org.springframework.stereotype.Service;
import com.scrmabc.pojo.Depart;
import com.scrmabc.mapper.DepartMapper;
import com.scrmabc.service.DepartManageService;

@Service
public class DepartManageServiceImpl extends BaseServiceImpl<Depart> implements DepartManageService{
  
  
  @Resource
	private DepartMapper departMapper; 
	
	public BaseSqlMapper getMapper(){
		return this.departMapper;
	}
	
	
  
}
