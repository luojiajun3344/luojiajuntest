package com.scrmabc.action;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import javax.annotation.Resource;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import com.opensymphony.xwork2.ActionSupport;
import com.scrmabc.pojo.Vehicle;
import com.core.util.page.PageSelect;
import com.scrmabc.service.VehicleManageService;
import com.core.util.PrintLinger;
@Scope("prototype")
@Controller
public class VehicleManageAction extends ActionSupport {
    @Resource
	private Vehicle vehicle;
	@Resource
	private VehicleManageService vehicleManageService;
	
	private List<Vehicle> vehiclelist;
	
	private String actionMsg;
	@Resource
	private PageSelect pageSelect;
	
	private List<String> idList;
	
	private String sortname;
	
	private String sortorder;
   
	
	public String delete() throws Exception {
		boolean result = vehicleManageService.removeById(String.valueOf(vehicle.getVehicle_id()));
		if (result == true) {
			actionMsg = "0";
		} else {
			actionMsg = "1";
		}
		PrintLinger.printMsg(actionMsg);
		return null;
	}
public String add() throws Exception {
		boolean result = vehicleManageService.add(vehicle);
		if (result == true) {
			actionMsg = "0";
		} else {
			actionMsg = "1";
		}
		PrintLinger.printMsg(actionMsg);
		return null;
	}
	public String edit() throws Exception {
		boolean result = vehicleManageService.edit(vehicle);
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
		if(vehicle!=null)
		{
					
				filter.put("vehicle_id", vehicle.getVehicle_id());
					
				filter.put("platenumber", vehicle.getPlatenumber());
					
				filter.put("miletotal", vehicle.getMiletotal());
					
				filter.put("oiltotal", vehicle.getOiltotal());
					
				filter.put("organization_id", vehicle.getOrganization_id());
		}
		if(!"vehicleId".equals(sortname))
		filter.put("sortname", sortname);
		else
		filter.put("sortname", "Vehicle_id");
		filter.put("sortorder", sortorder);
		pageSelect.setFilter(filter);
		vehiclelist = vehicleManageService.getByPage(pageSelect);
		int total= vehicleManageService.countAll(pageSelect);
	    PrintLinger.printLinger(total, vehiclelist);
		return null;
	}
public String deleteByList() throws Exception {
		
		 boolean result=false;
		 int count1 =0;
		 int count2 =0;
		 for(String questionid: idList){
		 if(questionid!=null) result=vehicleManageService.removeById(questionid);
		 if(result==true){
			 count1++;
		 }
		 else count2++;
		 }
			 actionMsg="{\"success\":"+count1+",\"fail\":"+count2+"}";
		 PrintLinger.printMsg(actionMsg);
	 	return null;
	}

	public Vehicle getVehicle() {
		return vehicle;
	}

	public void setVehicle(Vehicle vehicle) {
		this.vehicle = vehicle;
	}

	public VehicleManageService getVehicleManageService() {
		return vehicleManageService;
	}

	public void setVehicleManageService(VehicleManageService userManageService) {
		this.vehicleManageService = vehicleManageService;
	}
	public List getVehiclelist() {
		return vehiclelist;
	}
	public void setVehiclelist(List vehiclelist) {
		this.vehiclelist = vehiclelist;
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