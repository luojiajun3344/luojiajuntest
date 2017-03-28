package com.scrmabc.service.impl;
import javax.annotation.Resource;
import com.scrmabc.mapper.MonitorvehicleMapper;
import com.scrmabc.mapper.BaseSqlMapper;
import org.springframework.stereotype.Service;
import com.scrmabc.pojo.Monitorvehicle;
import com.scrmabc.mapper.MonitorvehicleMapper;
import com.scrmabc.service.MonitorvehicleManageService;

@Service
public class MonitorvehicleManageServiceImpl extends BaseServiceImpl<Monitorvehicle> implements MonitorvehicleManageService{
  
  
  @Resource
	private MonitorvehicleMapper monitorvehicleMapper; 
	
	public BaseSqlMapper getMapper(){
		return this.monitorvehicleMapper;
	}
	
	
  
}
