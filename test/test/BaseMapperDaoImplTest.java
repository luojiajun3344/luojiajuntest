package test;


import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.core.util.page.PageSelect;
import com.scrmabc.pojo.Account;
import com.scrmabc.service.AccountManageService;

public class BaseMapperDaoImplTest {
	
	private AccountManageService accountManageService;
	

	@Before
	public void init() {
		 ApplicationContext context = new ClassPathXmlApplicationContext(  
	             new String[] {"spring/ApplicationContext.xml","spring/ApplicationContext-bean.xml"});  
	   
		 accountManageService =(AccountManageService)context.getBean("accountManageServiceImpl");
	}
	@Test
	public void testGet() throws Exception {
		Account acc = new Account();
		acc.setEmail("adfadf@qq.com");
		acc.setAccount_id("1");
		accountManageService.add(acc);
	}
	@Test
	public void testAdd() throws Exception {
		init();
		Account account = new Account();
		account.setUsername("temp@156.com");
		account.setPassword("abc");
	}
  public static void main(String[] args) throws Exception {
	  ApplicationContext context = new ClassPathXmlApplicationContext(  
			             new String[] {"spring/ApplicationContext.xml","spring/ApplicationContext-bean.xml"});  
//	  BaseSqlMapper<Account> myBaseSqlMapper =(BaseSqlMapper<Account>)context.getBean("BaseSqlMapperImpl");
//	  AccountManageAction accountaction=(AccountManageAction)context.getBean("accountManageAction");
	  AccountManageService accountservice=(AccountManageService)context.getBean("accountManageServiceImpl");
	 // BaseSqlMapper<Account> myBaseSqlMapper =(BaseSqlMapper)context.getBean("baseDao");
	 // SqlSessionFactory sqlSessionFactory=(SqlSessionFactory)context.getBean("sqlSessionFactory");
//	  BaseSqlMapper<Account> myBaseSqlMapper =new BaseSqlMapperImpl<Account>(sqlSessionFactory);
//	  myBaseSqlMapper.setMapperClass(AccountMapper.class);
	    Account account = new Account();
		account.setUsername("temp@156.com");
		account.setPassword("abc");
//		System.out.println(accountaction);
		PageSelect pageSelect=new PageSelect();
		pageSelect.setPageNo(1);
		pageSelect.setPageSize(3);
		//System.out.println(accountservice.removeById(5));
		System.out.println(accountservice.getByPage(pageSelect));

}
}
