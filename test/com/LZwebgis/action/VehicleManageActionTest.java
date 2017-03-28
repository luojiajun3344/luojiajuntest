package com.LZwebgis.action;

import javax.annotation.Resource;

import org.junit.Test;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;

import com.scrmabc.pojo.Account;
import com.scrmabc.service.AccountManageService;

@ContextConfiguration(locations = "applicationContext.xml")
public class VehicleManageActionTest extends AbstractTransactionalJUnit4SpringContextTests{
	@Resource
	AccountManageService accountService;

	@Test
	public void testAddCount() throws Exception {
		Account account =new Account();
		account.setEmail("email@");
        accountService.add(account);
	}
}
