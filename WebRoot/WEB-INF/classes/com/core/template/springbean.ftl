<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
	xmlns:aop="http://www.springframework.org/schema/aop" xmlns:tx="http://www.springframework.org/schema/tx"
	xsi:schemaLocation="http://www.springframework.org/schema/beans   
           http://www.springframework.org/schema/beans/spring-beans-3.0.xsd   
           http://www.springframework.org/schema/context 
           http://www.springframework.org/schema/context/spring-context-3.0.xsd   
           http://www.springframework.org/schema/aop 
           http://www.springframework.org/schema/aop/spring-aop-3.0.xsd   
           http://www.springframework.org/schema/tx 
           http://www.springframework.org/schema/tx/spring-tx-3.0.xsd"
	>
<context:component-scan base-package="${rootpackage}.action"/>
<context:component-scan base-package="${rootpackage}.service"/>
<context:component-scan base-package="com.core.util.page"/>
<context:component-scan base-package="${beanpackage}"/>
<bean id="sqlSessionTemplate" class="org.mybatis.spring.SqlSessionTemplate">
<constructor-arg ref="sqlSessionFactory"></constructor-arg>
</bean>
<bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
		<property name="basePackage" value="${rootpackage}.mapper"/>
		<property name="markerInterface" value="${rootpackage}.mapper.SqlMapper"/>
	</bean>
</beans>  
