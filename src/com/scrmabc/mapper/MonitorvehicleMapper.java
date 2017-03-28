package com.scrmabc.mapper;
import java.util.List;
import org.springframework.stereotype.Component;
import com.scrmabc.pojo.Monitorvehicle;

@Component
public interface MonitorvehicleMapper<T extends Monitorvehicle> extends BaseSqlMapper<T> {
	
	public List<T> getAllAccount();
}
