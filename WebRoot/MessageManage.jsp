<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ include file="top.jsp"  %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<title>短信管理</title>
  <head>
    <base href="<%=basePath%>">
    
	<script type="text/javascript" src="js/msg/messageStore.js"></script>
	<script type="text/javascript" src="js/msg/msgInfo.js"></script>
	<script type="text/javascript" src="js/msg/sendpanel.js"></script>
	<script type="text/javascript" src="js/msg/sendgridpanel.js"></script>
	<script type="text/javascript" src="js/msg/receivepanel.js"></script>
	<script type="text/javascript" src="js/msg/presavepanel.js"></script>
	
	<script type="text/javascript" src="js/msg/msgmanage.js"></script>
  </head>
  
  <body>
  	<div id="index"></div>
  </body>
</html>
