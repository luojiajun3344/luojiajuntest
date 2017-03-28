package com.scrmabc.mapper;
import java.util.List;
import org.springframework.stereotype.Component;
import com.scrmabc.pojo.Depart;

@Component
public interface DepartMapper<T extends Depart> extends BaseSqlMapper<T> {
	
	public List<T> getAllAccount();
}
