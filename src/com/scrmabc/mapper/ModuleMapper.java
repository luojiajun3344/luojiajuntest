package com.scrmabc.mapper;
import java.util.List;
import org.springframework.stereotype.Component;
import com.scrmabc.pojo.Module;

@Component
public interface ModuleMapper<T extends Module> extends BaseSqlMapper<T> {
	
	public List<T> getAllAccount();
}
