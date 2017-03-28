package com.scrmabc.service.impl;
import javax.annotation.Resource;
import com.scrmabc.mapper.VehicleMapper;
import com.scrmabc.mapper.BaseSqlMapper;
import org.springframework.stereotype.Service;
import com.scrmabc.pojo.Vehicle;
import com.scrmabc.mapper.VehicleMapper;
import com.scrmabc.service.VehicleManageService;

@Service
public class VehicleManageServiceImpl extends BaseServiceImpl<Vehicle> implements VehicleManageService{
  
  
  @Resource
	private VehicleMapper vehicleMapper; 
	
	public BaseSqlMapper getMapper(){
		return this.vehicleMapper;
	}
	
	
  
}
