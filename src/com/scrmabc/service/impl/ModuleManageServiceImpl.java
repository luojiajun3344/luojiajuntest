package com.scrmabc.service.impl;
import javax.annotation.Resource;
import com.scrmabc.mapper.ModuleMapper;
import com.scrmabc.mapper.BaseSqlMapper;
import org.springframework.stereotype.Service;
import com.scrmabc.pojo.Module;
import com.scrmabc.mapper.ModuleMapper;
import com.scrmabc.service.ModuleManageService;

@Service
public class ModuleManageServiceImpl extends BaseServiceImpl<Module> implements ModuleManageService{
  
  
  @Resource
	private ModuleMapper moduleMapper; 
	
	public BaseSqlMapper getMapper(){
		return this.moduleMapper;
	}
	
	
  
}
