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
import com.opensymphony.xwork2.ModelDriven;
@Scope("prototype")
@Controller
public class ${beanName}ManageAction extends BaseAction implements ModelDriven<${beanName}> {
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
   
    private int start;
	
	private int limit;
	
	private static Logger logger=Logger.getLogger(${beanName}ManageAction.class);
	public String delete(){
		boolean result;
		try {
			result = ${beanName?uncap_first}ManageService.removeById(String.valueOf(${beanName?uncap_first}.getId()));
			renderExtMesssageJson(result, "删除成功");
		} catch (Exception e) {
			
		}
		
		return null;
	}
public String add() throws Exception {
			boolean result;
		try {
			result = ${beanName?uncap_first}ManageService.add(${beanName?uncap_first});
			renderExtMesssageJson(result, "添加成功");
		} catch (Exception e) {
			logger.error("添加异常"+e.getMessage());
		}
			
		return null;
	}
	public String edit() throws Exception {
	boolean result;
		try {
			result = ${beanName?uncap_first}ManageService.edit(${beanName?uncap_first});
			renderExtMesssageJson(result, "修改成功");
		} catch (Exception e) {
			logger.error("修改异常"+e.getMessage());
		}
		
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
		pageSelect.setOffset(start);
		pageSelect.setPageSize(limit);
		
		try {
			${beanName?uncap_first}list = ${beanName?uncap_first}ManageService.getByPage(pageSelect);
			 int total= ${beanName?uncap_first}ManageService.countAll(pageSelect);
			 renderExtJson(total, ${beanName?uncap_first}list);
		} catch (Exception e) {
			logger.error("获取分页异常"+e.getMessage());
		}
		return null;
	}
public String deleteByList() throws Exception {
		
		
	 	
	 	 boolean result=false;
		 int count1 =0;
		 int count2 =0;
		 try{
		 for(String questionid: idList){
		 if(questionid!=null) result=${beanName?uncap_first}ManageService.removeById(questionid);
		 if(result==true){
			 count1++;
		 }
		 else count2++;
		 }
			 actionMsg="{\"success\":"+count1+",\"fail\":"+count2+"}";
		 renderText(actionMsg,null);
		 }catch (Exception e) {
			 logger.error("批量异常"+e.getMessage());
		}
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
	public int getLimit() {
		return limit;
	}
	public void setLimit(int limit) {
		this.limit = limit;
	}
	public int getStart() {
		return start;
	}
	public void setStart(int start) {
		this.start = start;
	}
	@Override
	public ${beanName} getModel(){
		return ${beanName?uncap_first};
	}
}