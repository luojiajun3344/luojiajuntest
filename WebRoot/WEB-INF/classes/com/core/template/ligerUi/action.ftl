package ${package};
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import javax.annotation.Resource;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import com.opensymphony.xwork2.ActionSupport;
import ${beanpackage}.${beanName};
import com.core.util.page.PageSelect;
import ${rootpackage}.service.${beanName}ManageService;
import com.core.util.PrintLinger;
@Scope("prototype")
@Controller
public class ${beanName}ManageAction extends ActionSupport {
    @Resource
	private ${beanName} ${beanName?uncap_first};
	@Resource
	private ${beanName}ManageService ${beanName?uncap_first}ManageService;
	
	private List<${beanName}> ${beanName?uncap_first}list;
	
	private String actionMsg;
	@Resource
	private PageSelect pageSelect;
	
	private List<String> idList;
	
	private String sortname;
	
	private String sortorder;
   
	
	public String delete() throws Exception {
		boolean result = ${beanName?uncap_first}ManageService.removeById(String.valueOf(${beanName?uncap_first}.get${beanName}_id()));
		if (result == true) {
			actionMsg = "0";
		} else {
			actionMsg = "1";
		}
		PrintLinger.printMsg(actionMsg);
		return null;
	}
public String add() throws Exception {
		boolean result = ${beanName?uncap_first}ManageService.add(${beanName?uncap_first});
		if (result == true) {
			actionMsg = "0";
		} else {
			actionMsg = "1";
		}
		PrintLinger.printMsg(actionMsg);
		return null;
	}
	public String edit() throws Exception {
		boolean result = ${beanName?uncap_first}ManageService.edit(${beanName?uncap_first});
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
		if(${beanName?uncap_first}!=null)
		{
		<#list fieldname as name>
					
				filter.put("${name}", ${beanName?uncap_first}.get${name?cap_first}());
			</#list>
		}
		if(!"${beanName?uncap_first}Id".equals(sortname))
		filter.put("sortname", sortname);
		else
		filter.put("sortname", "${beanName}_id");
		filter.put("sortorder", sortorder);
		pageSelect.setFilter(filter);
		${beanName?uncap_first}list = ${beanName?uncap_first}ManageService.getByPage(pageSelect);
		int total= ${beanName?uncap_first}ManageService.countAll(pageSelect);
	    PrintLinger.printLinger(total, ${beanName?uncap_first}list);
		return null;
	}
public String deleteByList() throws Exception {
		
		 boolean result=false;
		 int count1 =0;
		 int count2 =0;
		 for(String questionid: idList){
		 if(questionid!=null) result=${beanName?uncap_first}ManageService.removeById(questionid);
		 if(result==true){
			 count1++;
		 }
		 else count2++;
		 }
			 actionMsg="{\"success\":"+count1+",\"fail\":"+count2+"}";
		 PrintLinger.printMsg(actionMsg);
	 	return null;
	}

	public ${beanName} get${beanName}() {
		return ${beanName?uncap_first};
	}

	public void set${beanName}(${beanName} ${beanName?uncap_first}) {
		this.${beanName?uncap_first} = ${beanName?uncap_first};
	}

	public ${beanName}ManageService get${beanName}ManageService() {
		return ${beanName?uncap_first}ManageService;
	}

	public void set${beanName}ManageService(${beanName}ManageService userManageService) {
		this.${beanName?uncap_first}ManageService = ${beanName?uncap_first}ManageService;
	}
	public List get${beanName}list() {
		return ${beanName?uncap_first}list;
	}
	public void set${beanName}list(List ${beanName?uncap_first}list) {
		this.${beanName?uncap_first}list = ${beanName?uncap_first}list;
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