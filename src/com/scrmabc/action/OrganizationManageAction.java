package com.scrmabc.action;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import javax.annotation.Resource;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import com.opensymphony.xwork2.ActionSupport;
import com.scrmabc.pojo.Organization;
import com.core.util.page.PageSelect;
import com.scrmabc.service.OrganizationManageService;
import com.core.util.PrintLinger;
@Scope("prototype")
@Controller
public class OrganizationManageAction extends ActionSupport {
    @Resource
	private Organization organization;
	@Resource
	private OrganizationManageService organizationManageService;
	
	private List<Organization> organizationlist;
	
	private String actionMsg;
	@Resource
	private PageSelect pageSelect;
	
	private List<String> idList;
	
	private String sortname;
	
	private String sortorder;
   
	
	public String delete() throws Exception {
		boolean result = organizationManageService.removeById(String.valueOf(organization.getOrganization_id()));
		if (result == true) {
			actionMsg = "0";
		} else {
			actionMsg = "1";
		}
		PrintLinger.printMsg(actionMsg);
		return null;
	}
public String add() throws Exception {
		boolean result = organizationManageService.add(organization);
		if (result == true) {
			actionMsg = "0";
		} else {
			actionMsg = "1";
		}
		PrintLinger.printMsg(actionMsg);
		return null;
	}
	public String edit() throws Exception {
		boolean result = organizationManageService.edit(organization);
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
		if(organization!=null)
		{
					
				filter.put("organization_id", organization.getOrganization_id());
					
				filter.put("organization", organization.getOrganization());
		}
		if(!"organizationId".equals(sortname))
		filter.put("sortname", sortname);
		else
		filter.put("sortname", "Organization_id");
		filter.put("sortorder", sortorder);
		pageSelect.setFilter(filter);
		organizationlist = organizationManageService.getByPage(pageSelect);
		int total= organizationManageService.countAll(pageSelect);
	    PrintLinger.printLinger(total, organizationlist);
		return null;
	}
public String deleteByList() throws Exception {
		
		 boolean result=false;
		 int count1 =0;
		 int count2 =0;
		 for(String questionid: idList){
		 if(questionid!=null) result=organizationManageService.removeById(questionid);
		 if(result==true){
			 count1++;
		 }
		 else count2++;
		 }
			 actionMsg="{\"success\":"+count1+",\"fail\":"+count2+"}";
		 PrintLinger.printMsg(actionMsg);
	 	return null;
	}

	public Organization getOrganization() {
		return organization;
	}

	public void setOrganization(Organization organization) {
		this.organization = organization;
	}

	public OrganizationManageService getOrganizationManageService() {
		return organizationManageService;
	}

	public void setOrganizationManageService(OrganizationManageService userManageService) {
		this.organizationManageService = organizationManageService;
	}
	public List getOrganizationlist() {
		return organizationlist;
	}
	public void setOrganizationlist(List organizationlist) {
		this.organizationlist = organizationlist;
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