package com.scrmabc.mapper;
import java.util.List;
import org.springframework.stereotype.Component;
import com.scrmabc.pojo.Role;

@Component
public interface RoleMapper<T extends Role> extends BaseSqlMapper<T> {
	
	public List<T> getAllAccount();
}
