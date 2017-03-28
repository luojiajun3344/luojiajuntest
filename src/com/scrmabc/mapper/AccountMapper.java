package com.scrmabc.mapper;
import java.util.List;
import org.springframework.stereotype.Component;
import com.scrmabc.pojo.Account;

@Component
public interface AccountMapper<T extends Account> extends BaseSqlMapper<T> {
	
	public List<T> getAllAccount();
}
