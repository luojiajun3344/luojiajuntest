package com.scrmabc.action;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import javax.annotation.Resource;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import com.opensymphony.xwork2.ActionSupport;
import com.scrmabc.pojo.Module;
import com.core.util.page.PageSelect;
import com.scrmabc.service.ModuleManageService;
import com.core.util.PrintLinger;
@Scope("prototype")
@Controller
public class ModuleManageAction extends ActionSupport {
    @Resource
	private Module module;
	@Resource
	private ModuleManageService moduleManageService;
	
	private List<Module> modulelist;
	
	private String actionMsg;
	@Resource
	private PageSelect pageSelect;
	
	private List<String> idList;
	
	private String sortname;
	
	private String sortorder;
   
	
	public String delete() throws Exception {
		boolean result = moduleManageService.removeById(String.valueOf(module.getModule_id()));
		if (result == true) {
			actionMsg = "0";
		} else {
			actionMsg = "1";
		}
		PrintLinger.printMsg(actionMsg);
		return null;
	}
public String add() throws Exception {
		boolean result = moduleManageService.add(module);
		if (result == true) {
			actionMsg = "0";
		} else {
			actionMsg = "1";
		}
		PrintLinger.printMsg(actionMsg);
		return null;
	}
	public String edit() throws Exception {
		boolean result = moduleManageService.edit(module);
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
		if(module!=null)
		{
					
				filter.put("module_id", module.getModule_id());
					
				filter.put("module_name", module.getModule_name());
					
				filter.put("parent_module_id", module.getParent_module_id());
					
				filter.put("control1", module.getControl1());
					
				filter.put("control2", module.getControl2());
					
				filter.put("control3", module.getControl3());
					
				filter.put("control4", module.getControl4());
					
				filter.put("remarks", module.getRemarks());
					
				filter.put("module_type", module.getModule_type());
		}
		if(!"moduleId".equals(sortname))
		filter.put("sortname", sortname);
		else
		filter.put("sortname", "Module_id");
		filter.put("sortorder", sortorder);
		pageSelect.setFilter(filter);
		modulelist = moduleManageService.getByPage(pageSelect);
		int total= moduleManageService.countAll(pageSelect);
	    PrintLinger.printLinger(total, modulelist);
		return null;
	}
public String deleteByList() throws Exception {
		
		 boolean result=false;
		 int count1 =0;
		 int count2 =0;
		 for(String questionid: idList){
		 if(questionid!=null) result=moduleManageService.removeById(questionid);
		 if(result==true){
			 count1++;
		 }
		 else count2++;
		 }
			 actionMsg="{\"success\":"+count1+",\"fail\":"+count2+"}";
		 PrintLinger.printMsg(actionMsg);
	 	return null;
	}

	public Module getModule() {
		return module;
	}

	public void setModule(Module module) {
		this.module = module;
	}

	public ModuleManageService getModuleManageService() {
		return moduleManageService;
	}

	public void setModuleManageService(ModuleManageService userManageService) {
		this.moduleManageService = moduleManageService;
	}
	public List getModulelist() {
		return modulelist;
	}
	public void setModulelist(List modulelist) {
		this.modulelist = modulelist;
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