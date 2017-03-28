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
     <script type="text/javascript" src="js/msg/presavepanel.js"></script>
    <script type="text/javascript" src="js/msg/sendpanel.js"></script>
    <script type="text/javascript" src="js/msg/messageStore.js"></script>
    <script type="text/javascript" src="js/reportform/warnstatisticpanel.js"></script>
	 <script type="text/javascript" src="js/routing/RoutingStore.js"></script>
    <script type="text/javascript" src="js/routing/routingpanel.js"></script>
	
	<script type="text/javascript" src="js/toolbar.js"></script>
	<script type="text/javascript" src="js/eastpanel.js"></script>
	<script type="text/javascript" src="js/northpanel.js"></script>
	<script type="text/javascript" src="js/southpanel.js"></script>
	<script type="text/javascript" src="js/westpanel.js"></script>
	<script type="text/javascript" src="js/centerpanel.js"></script>
	<script type="text/javascript" src="js/index.js"></script>
  </head>
  
  <body>
  	<div id="index"></div>
  </body>
</html>
