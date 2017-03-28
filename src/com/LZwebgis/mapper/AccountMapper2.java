package com.LZwebgis.mapper;
import java.util.List;
import org.springframework.stereotype.Component;

import com.scrmabc.pojo2.Account;

@Component
public interface AccountMapper2<T extends Account> extends BaseSqlMapper2<T> {
	
	public List<T> getAllAccount();
}
