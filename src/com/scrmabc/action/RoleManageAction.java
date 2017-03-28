package com.scrmabc.action;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import javax.annotation.Resource;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import com.opensymphony.xwork2.ActionSupport;
import com.scrmabc.pojo.Role;
import com.core.util.page.PageSelect;
import com.scrmabc.service.RoleManageService;
import com.core.util.PrintLinger;
@Scope("prototype")
@Controller
public class RoleManageAction extends ActionSupport {
    @Resource
	private Role role;
	@Resource
	private RoleManageService roleManageService;
	
	private List<Role> rolelist;
	
	private String actionMsg;
	@Resource
	private PageSelect pageSelect;
	
	private List<String> idList;
	
	private String sortname;
	
	private String sortorder;
   
	
	public String delete() throws Exception {
		boolean result = roleManageService.removeById(String.valueOf(role.getRole_id()));
		if (result == true) {
			actionMsg = "0";
		} else {
			actionMsg = "1";
		}
		PrintLinger.printMsg(actionMsg);
		return null;
	}
public String add() throws Exception {
		boolean result = roleManageService.add(role);
		if (result == true) {
			actionMsg = "0";
		} else {
			actionMsg = "1";
		}
		PrintLinger.printMsg(actionMsg);
		return null;
	}
	public String edit() throws Exception {
		boolean result = roleManageService.edit(role);
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
		if(role!=null)
		{
					
				filter.put("role_id", role.getRole_id());
					
				filter.put("role_name", role.getRole_name());
					
				filter.put("role_type", role.getRole_type());
					
				filter.put("super_role_id", role.getSuper_role_id());
					
				filter.put("account_id", role.getAccount_id());
					
				filter.put("create_time", role.getCreate_time());
					
				filter.put("remarks", role.getRemarks());
					
				filter.put("ispublic", role.getIspublic());
		}
		if(!"roleId".equals(sortname))
		filter.put("sortname", sortname);
		else
		filter.put("sortname", "Role_id");
		filter.put("sortorder", sortorder);
		pageSelect.setFilter(filter);
		rolelist = roleManageService.getByPage(pageSelect);
		int total= roleManageService.countAll(pageSelect);
	    PrintLinger.printLinger(total, rolelist);
		return null;
	}
public String deleteByList() throws Exception {
		
		 boolean result=false;
		 int count1 =0;
		 int count2 =0;
		 for(String questionid: idList){
		 if(questionid!=null) result=roleManageService.removeById(questionid);
		 if(result==true){
			 count1++;
		 }
		 else count2++;
		 }
			 actionMsg="{\"success\":"+count1+",\"fail\":"+count2+"}";
		 PrintLinger.printMsg(actionMsg);
	 	return null;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public RoleManageService getRoleManageService() {
		return roleManageService;
	}

	public void setRoleManageService(RoleManageService userManageService) {
		this.roleManageService = roleManageService;
	}
	public List getRolelist() {
		return rolelist;
	}
	public void setRolelist(List rolelist) {
		this.rolelist = rolelist;
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