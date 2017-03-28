package com.core.generator;


import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;

import com.scrmabc.pojo.Account;
import com.scrmabc.service.AccountManageService;

@ContextConfiguration(locations = "classpath:applicationContext.xml")
public class VehicleManageActionTest extends AbstractTransactionalJUnit4SpringContextTests{
	@Autowired
	AccountManageService accountService;

	@Test
	public void testAddCount() throws Exception {
		Account account =new Account();
		account.setEmail("email@");
        accountService.add(account);
	}
}
