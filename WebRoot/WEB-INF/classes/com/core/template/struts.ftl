<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE struts PUBLIC "-//Apache Software Foundation//DTD Struts Configuration 2.1//EN" "http://struts.apache.org/dtds/struts-2.1.dtd">
<struts>
<package name="admin" extends="struts-default">
<#list beanList as bean>
<action name="${bean}_*" class="${bean?uncap_first}ManageAction" method="{1}"></action>
</#list>

</package>
</struts>    
