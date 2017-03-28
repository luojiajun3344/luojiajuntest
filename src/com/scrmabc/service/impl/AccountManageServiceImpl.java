package com.scrmabc.service.impl;
import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.LZwebgis.mapper.AccountMapper2;
import com.scrmabc.mapper.AccountMapper;
import com.scrmabc.mapper.BaseSqlMapper;
import com.scrmabc.pojo.Account;
import com.scrmabc.service.AccountManageService;

@Service
public class AccountManageServiceImpl extends BaseServiceImpl<Account> implements AccountManageService{
  
  
  @Resource
	private AccountMapper accountMapper; 
  
	
   @Resource
	private AccountMapper2 accountMapper2;
  
	public BaseSqlMapper getMapper(){
		return this.accountMapper;
	}
	
	@Override
	@Transactional
	public boolean add(Account entity) throws Exception {
			// TODO Auto-generated method stub
		com.scrmabc.pojo2.Account account2=new com.scrmabc.pojo2.Account();
		account2.setEmail(entity.getEmail());
		account2.setAccount_id(1);
		Account edit2=new Account();
		edit2.setAccount_id("2");
		edit2.setEmail("luojiajun4");
		edit(edit2);
		accountMapper2.add(account2);
			boolean  result= super.add(entity);
			return result;
		}
	
  
}
