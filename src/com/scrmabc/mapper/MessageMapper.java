package com.scrmabc.mapper;
import java.util.List;
import org.springframework.stereotype.Component;
import com.scrmabc.pojo.Message;

@Component
public interface MessageMapper<T extends Message> extends BaseSqlMapper<T> {
	
	public List<T> getAllAccount();
}
