package com.scrmabc.action;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import javax.annotation.Resource;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import com.opensymphony.xwork2.ActionSupport;
import com.scrmabc.pojo.Account;
import com.core.util.page.PageSelect;
import com.scrmabc.service.AccountManageService;
import com.core.util.PrintLinger;
@Scope("prototype")
@Controller
public class AccountManageAction extends ActionSupport {
    @Resource
	private Account account;
	@Resource
	private AccountManageService accountManageService;
	
	private List<Account> accountlist;
	
	private String actionMsg;
	@Resource
	private PageSelect pageSelect;
	
	private List<String> idList;
	
	private String sortname;
	
	private String sortorder;
   
	
	public String delete() throws Exception {
		boolean result = accountManageService.removeById(String.valueOf(account.getAccount_id()));
		if (result == true) {
			actionMsg = "0";
		} else {
			actionMsg = "1";
		}
		PrintLinger.printMsg(actionMsg);
		return null;
	}
public String add() throws Exception {
		boolean result = accountManageService.add(account);
		if (result == true) {
			actionMsg = "0";
		} else {
			actionMsg = "1";
		}
		PrintLinger.printMsg(actionMsg);
		return null;
	}
	public String edit() throws Exception {
		boolean result = accountManageService.edit(account);
		if (result == true) {
			actionMsg = "0";
		} else {
			actionMsg = "1";
		}
		PrintLinger.printMsg(actionMsg);
		return null;
	}
	public String getByPage() throws Exception {
	    Map filter= new HashMap();
		if(account!=null)
		{
					
				filter.put("account_id", account.getAccount_id());
					
				filter.put("depart_id", account.getDepart_id());
					
				filter.put("loginname", account.getLoginname());
					
				filter.put("password", account.getPassword());
					
				filter.put("username", account.getUsername());
					
				filter.put("tel_phone_number", account.getTel_phone_number());
					
				filter.put("mobile_phone_number", account.getMobile_phone_number());
					
				filter.put("email", account.getEmail());
					
				filter.put("police_no", account.getPolice_no());
					
				filter.put("id_number", account.getId_number());
					
				filter.put("isonline", account.getIsonline());
					
				filter.put("aproval_status", account.getAproval_status());
					
				filter.put("police_type", account.getPolice_type());
					
				filter.put("last_logintime", account.getLast_logintime());
					
				filter.put("stamp", account.getStamp());
					
				filter.put("login_type", account.getLogin_type());
					
				filter.put("usbkey_id", account.getUsbkey_id());
					
				filter.put("is_lock", account.getIs_lock());
					
				filter.put("is_delete", account.getIs_delete());
					
				filter.put("headship", account.getHeadship());
					
				filter.put("sex", account.getSex());
		}
		if(!"accountId".equals(sortname))
		filter.put("sortname", sortname);
		else
		filter.put("sortname", "Account_id");
		filter.put("sortorder", sortorder);
		pageSelect.setFilter(filter);
		accountlist = accountManageService.getByPage(pageSelect);
		int total= accountManageService.countAll(pageSelect);
	    PrintLinger.printLinger(total, accountlist);
		return null;
	}
public String deleteByList() throws Exception {
		
		 boolean result=false;
		 int count1 =0;
		 int count2 =0;
		 for(String questionid: idList){
		 if(questionid!=null) result=accountManageService.removeById(questionid);
		 if(result==true){
			 count1++;
		 }
		 else count2++;
		 }
			 actionMsg="{\"success\":"+count1+",\"fail\":"+count2+"}";
		 PrintLinger.printMsg(actionMsg);
	 	return null;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	public AccountManageService getAccountManageService() {
		return accountManageService;
	}

	public void setAccountManageService(AccountManageService userManageService) {
		this.accountManageService = accountManageService;
	}
	public List getAccountlist() {
		return accountlist;
	}
	public void setAccountlist(List accountlist) {
		this.accountlist = accountlist;
	}
	
	public PageSelect getPageSelect() {
		return pageSelect;
	}
	public void setPageSelect(PageSelect pageSelect) {
		this.pageSelect = pageSelect;
	}
	public List<String> getIdList() {
		return idList;
	}
	public void setIdList(List<String> idList) {
		this.idList = idList;
	}
		public String getSortname() {
		return sortname;
	}
	public void setSortname(String sortname) {
		this.sortname = sortname;
	}
	public String getSortorder() {
		return sortorder;
	}
	public void setSortorder(String sortorder) {
		this.sortorder = sortorder;
	}
}