<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ include file="top.jsp"  %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
     <script type="text/javascript" src="js/student/studentstore.js"></script>
    <script type="text/javascript" src="js/student/msgInfo.js"></script>
    
    <script type="text/javascript" src="js/student/studentgrid.js"></script>
  <script type="text/javascript">
  Ext.onReady(function(){
	(new LogPanel()).render(Ext.getBody());
	  
  })
  
  </script>
  </head>
  
  <body>
  	
  </body>
</html>
