package com.scrmabc.mapper;
import java.util.List;
import org.springframework.stereotype.Component;
import com.scrmabc.pojo.Roleaccount;

@Component
public interface RoleaccountMapper<T extends Roleaccount> extends BaseSqlMapper<T> {
	
	public List<T> getAllAccount();
}
