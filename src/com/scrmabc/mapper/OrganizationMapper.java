package com.scrmabc.mapper;
import java.util.List;
import org.springframework.stereotype.Component;
import com.scrmabc.pojo.Organization;

@Component
public interface OrganizationMapper<T extends Organization> extends BaseSqlMapper<T> {
	
	public List<T> getAllAccount();
}
