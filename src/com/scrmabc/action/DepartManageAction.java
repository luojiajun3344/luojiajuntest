package com.scrmabc.action;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import javax.annotation.Resource;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import com.opensymphony.xwork2.ActionSupport;
import com.scrmabc.pojo.Depart;
import com.core.util.page.PageSelect;
import com.scrmabc.service.DepartManageService;
import com.core.util.PrintLinger;
@Scope("prototype")
@Controller
public class DepartManageAction extends ActionSupport {
    @Resource
	private Depart depart;
	@Resource
	private DepartManageService departManageService;
	
	private List<Depart> departlist;
	
	private String actionMsg;
	@Resource
	private PageSelect pageSelect;
	
	private List<String> idList;
	
	private String sortname;
	
	private String sortorder;
   
	
	public String delete() throws Exception {
		boolean result = departManageService.removeById(String.valueOf(depart.getDepart_id()));
		if (result == true) {
			actionMsg = "0";
		} else {
			actionMsg = "1";
		}
		PrintLinger.printMsg(actionMsg);
		return null;
	}
public String add() throws Exception {
		boolean result = departManageService.add(depart);
		if (result == true) {
			actionMsg = "0";
		} else {
			actionMsg = "1";
		}
		PrintLinger.printMsg(actionMsg);
		return null;
	}
	public String edit() throws Exception {
		boolean result = departManageService.edit(depart);
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
		if(depart!=null)
		{
					
				filter.put("depart_id", depart.getDepart_id());
					
				filter.put("depart_no", depart.getDepart_no());
					
				filter.put("depart_name", depart.getDepart_name());
					
				filter.put("super_depart_id", depart.getSuper_depart_id());
					
				filter.put("manager_name", depart.getManager_name());
					
				filter.put("manager_phone", depart.getManager_phone());
					
				filter.put("email", depart.getEmail());
					
				filter.put("account_id", depart.getAccount_id());
					
				filter.put("receive_person_name", depart.getReceive_person_name());
					
				filter.put("receive_person_phone", depart.getReceive_person_phone());
					
				filter.put("depart_type", depart.getDepart_type());
					
				filter.put("is_delete", depart.getIs_delete());
					
				filter.put("remark", depart.getRemark());
					
				filter.put("stamp", depart.getStamp());
					
				filter.put("depart_sequence", depart.getDepart_sequence());
		}
		if(!"departId".equals(sortname))
		filter.put("sortname", sortname);
		else
		filter.put("sortname", "Depart_id");
		filter.put("sortorder", sortorder);
		pageSelect.setFilter(filter);
		departlist = departManageService.getByPage(pageSelect);
		int total= departManageService.countAll(pageSelect);
	    PrintLinger.printLinger(total, departlist);
		return null;
	}
public String deleteByList() throws Exception {
		
		 boolean result=false;
		 int count1 =0;
		 int count2 =0;
		 for(String questionid: idList){
		 if(questionid!=null) result=departManageService.removeById(questionid);
		 if(result==true){
			 count1++;
		 }
		 else count2++;
		 }
			 actionMsg="{\"success\":"+count1+",\"fail\":"+count2+"}";
		 PrintLinger.printMsg(actionMsg);
	 	return null;
	}

	public Depart getDepart() {
		return depart;
	}

	public void setDepart(Depart depart) {
		this.depart = depart;
	}

	public DepartManageService getDepartManageService() {
		return departManageService;
	}

	public void setDepartManageService(DepartManageService userManageService) {
		this.departManageService = departManageService;
	}
	public List getDepartlist() {
		return departlist;
	}
	public void setDepartlist(List departlist) {
		this.departlist = departlist;
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