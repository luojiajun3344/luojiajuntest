package com.scrmabc.mapper;
import java.util.List;
import org.springframework.stereotype.Component;
import com.scrmabc.pojo.Vehicle;

@Component
public interface VehicleMapper<T extends Vehicle> extends BaseSqlMapper<T> {
	
	public List<T> getAllAccount();
}
