package com.scrmabc.service.impl;
import javax.annotation.Resource;
import com.scrmabc.mapper.MessageMapper;
import com.scrmabc.mapper.BaseSqlMapper;
import org.springframework.stereotype.Service;
import com.scrmabc.pojo.Message;
import com.scrmabc.mapper.MessageMapper;
import com.scrmabc.service.MessageManageService;

@Service
public class MessageManageServiceImpl extends BaseServiceImpl<Message> implements MessageManageService{
  
  
  @Resource
	private MessageMapper messageMapper; 
	
	public BaseSqlMapper getMapper(){
		return this.messageMapper;
	}
	
	
  
}
