package com.scrmabc.mapper;
import java.util.List;
import org.springframework.stereotype.Component;
import com.scrmabc.pojo.Rolemodule;

@Component
public interface RolemoduleMapper<T extends Rolemodule> extends BaseSqlMapper<T> {
	
	public List<T> getAllAccount();
}
