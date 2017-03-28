package com.scrmabc.action;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import javax.annotation.Resource;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import com.opensymphony.xwork2.ActionSupport;
import com.scrmabc.pojo.Message;
import com.core.util.page.PageSelect;
import com.scrmabc.service.MessageManageService;
import com.core.util.PrintLinger;
@Scope("prototype")
@Controller
public class MessageManageAction extends ActionSupport {
    @Resource
	private Message message;
	@Resource
	private MessageManageService messageManageService;
	
	private List<Message> messagelist;
	
	private String actionMsg;
	@Resource
	private PageSelect pageSelect;
	
	private List<String> idList;
	
	private String sortname;
	
	private String sortorder;
   
	
	public String delete() throws Exception {
		boolean result = messageManageService.removeById(String.valueOf(message.getMessage_id()));
		if (result == true) {
			actionMsg = "0";
		} else {
			actionMsg = "1";
		}
		PrintLinger.printMsg(actionMsg);
		return null;
	}
public String add() throws Exception {
		boolean result = messageManageService.add(message);
		if (result == true) {
			actionMsg = "0";
		} else {
			actionMsg = "1";
		}
		PrintLinger.printMsg(actionMsg);
		return null;
	}
	public String edit() throws Exception {
		boolean result = messageManageService.edit(message);
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
		if(message!=null)
		{
					
				filter.put("message_id", message.getMessage_id());
					
				filter.put("content", message.getContent());
					
				filter.put("admin_id", message.getAdmin_id());
					
				filter.put("vehicle_id", message.getVehicle_id());
					
				filter.put("optime", message.getOptime());
					
				filter.put("type", message.getType());
		}
		if(!"messageId".equals(sortname))
		filter.put("sortname", sortname);
		else
		filter.put("sortname", "Message_id");
		filter.put("sortorder", sortorder);
		pageSelect.setFilter(filter);
		messagelist = messageManageService.getByPage(pageSelect);
		int total= messageManageService.countAll(pageSelect);
	    PrintLinger.printLinger(total, messagelist);
		return null;
	}
public String deleteByList() throws Exception {
		
		 boolean result=false;
		 int count1 =0;
		 int count2 =0;
		 for(String questionid: idList){
		 if(questionid!=null) result=messageManageService.removeById(questionid);
		 if(result==true){
			 count1++;
		 }
		 else count2++;
		 }
			 actionMsg="{\"success\":"+count1+",\"fail\":"+count2+"}";
		 PrintLinger.printMsg(actionMsg);
	 	return null;
	}

	public Message getMessage() {
		return message;
	}

	public void setMessage(Message message) {
		this.message = message;
	}

	public MessageManageService getMessageManageService() {
		return messageManageService;
	}

	public void setMessageManageService(MessageManageService userManageService) {
		this.messageManageService = messageManageService;
	}
	public List getMessagelist() {
		return messagelist;
	}
	public void setMessagelist(List messagelist) {
		this.messagelist = messagelist;
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