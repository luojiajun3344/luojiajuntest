package com.core.util;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;

public class PrintLinger {
public static void printLinger(int total,List list) throws IOException{
	HttpServletResponse response = ServletActionContext.getResponse();
    response.setContentType("Application/json;charset=utf-8");
	response.setCharacterEncoding("UTF-8");
	JSONObject jo=new JSONObject();
	String target=DateUtils.renderJson(list);
    jo.put("resultList",target);
    jo.put("total", total);
    jo.put("succuss", true);
    PrintWriter out = response.getWriter();
    		out.write(jo.toString());
    		out.close();
}
public static void printExt(boolean result,String msg) throws IOException{
	HttpServletResponse response = ServletActionContext.getResponse();
    response.setContentType("Application/json;charset=utf-8");
	response.setCharacterEncoding("UTF-8");
	JSONObject jo=new JSONObject();
    jo.put("success", result);
    jo.put("msg", msg);
    PrintWriter out = response.getWriter();
    		out.write(jo.toString());
    		out.close();
}
public static void printMsg(String actionMsg) throws IOException{
	HttpServletResponse response = ServletActionContext.getResponse();
	response.setContentType("html/text; charset=utf-8");
	response.setHeader("cache-control", "no-cache"); 
	PrintWriter out = response.getWriter();
	out.print(actionMsg);
	out.close();
}
}
