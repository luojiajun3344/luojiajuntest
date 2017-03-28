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


	<!-- 导入属性配置文件 -->
	<context:property-placeholder
		location="classpath:mysql.properties" />

	<!-- <bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource"> 
		<property name="driverClassName" value="<#noparse>${jdbc.driverClassName}</#noparse>" /> <property 
		name="url" value="<#noparse>${jdbc.url}</#noparse>" /> </bean> -->

	<bean id="dataSource" class="org.logicalcobwebs.proxool.ProxoolDataSource">
		<property name="driver" value=<#noparse>"${driver}" </#noparse>/>
		<property name="driverUrl" value=<#noparse>"${url}"</#noparse> />
		<property name="user" value=<#noparse>"${username}"</#noparse>/>
		<property name="password" value=<#noparse>"${password}"</#noparse> />
		<property name="houseKeepingTestSql">
			<value>select 1</value>
		</property>
		<property name="prototypeCount">
			<value>5</value>
		</property>
		<property name="maximumConnectionCount">
			<value>100</value>
		</property>
		<property name="minimumConnectionCount">
			<value>10</value>
		</property>
		<property name="trace">
			<value>true</value>
		</property>
		<property name="verbose">
			<value>true</value>
		</property>
	</bean>

	<!--<bean id="dataSource1" class="com.mchange.v2.c3p0.ComboPooledDataSource"
		destroy-method="close">
		<property name="driverClass" value="" />
		<property name="jdbcUrl" value="" />
		<property name="user" value="" />
		<property name="password" value="" />
		 设置数据库连接池的最大连接数 
		<property name="maxPoolSize">
			<value>30</value>
		</property>
		 设置数据库连接池的最小连接数 
		<property name="minPoolSize">
			<value>5</value>
		</property>
		 设置数据库连接池的初始化连接数 
		<property name="initialPoolSize">
			<value>5</value>
		</property>

		 最大空闲时间,60秒内未使用则连接被丢弃 
		<property name="maxIdleTime">
			<value>70</value>
		</property>
		<property name="idleConnectionTestPeriod">
			<value>70</value>
		</property>
	</bean>

	--><bean id="sqlSessionFactory"
		class="org.mybatis.spring.SqlSessionFactoryBean">
		<property name="configLocation" value="classpath:mybatis-config.xml" />
		<property name="typeAliasesPackage" value="${beanpackage}" />
		
		<property name="mapperLocations"
			value="classpath*:/${rootClass}/mapper/*Mapper.xml" />
		<property name="dataSource" ref="dataSource" />
	</bean>

	<!-- ================================= 事务控制相关 ============================================= -->
	<bean name="transactionManager"
		class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
		<property name="dataSource" ref="dataSource"></property>
	</bean>

	<!-- 配置事务的传播特性 -->
	<tx:advice id="txAdvice" transaction-manager="transactionManager">
		<tx:attributes>
			<tx:method name="delete*" propagation="REQUIRED" />
			<tx:method name="update*" propagation="REQUIRED" />
			<tx:method name="register*" propagation="REQUIRED" />
			<tx:method name="add*" propagation="REQUIRED" />
			<tx:method name="save*" propagation="REQUIRED" />
			<tx:method name="insert*" propagation="REQUIRED" />
			<tx:method name="modify*" propagation="REQUIRED" />
			<tx:method name="add*" propagation="REQUIRED" />
			<tx:method name="*lock*" propagation="REQUIRED" />
			<tx:method name="reset*" propagation="REQUIRED" />
			<tx:method name="clear*" propagation="REQUIRED" />
			<tx:method name="login*" propagation="REQUIRED" />
			<tx:method name="login*" propagation="REQUIRED" />
			<tx:method name="bindCar" propagation="REQUIRED" />

			<!-- 将save、delete、modify开头的事务之外的事务全部设置 为只读事务，这样也可以在一定程序上提高系统性能 -->
			<tx:method name="find*" read-only="true" />
			<tx:method name="get*" read-only="true" />
			<tx:method name="query*" read-only="true" />
			<tx:method name="is*" read-only="true" />
		</tx:attributes>
	</tx:advice>

	<!-- 配置那些类的那些方法参与事务 -->
	<aop:config>
		<!-- <aop:pointcut>标签指的是一个范围 -->
		<aop:pointcut id="allMagangerMethod"
			expression="execution(* ${rootpackage}.service.BaseService.*(..))" />
		<!-- <aop:pointcut id="allMagangerMethod1" expression="execution(* com.chinaGPS.driverBook.service.impl.*Service.*(..))" 
			/> -->
		<aop:pointcut id="allMagangerMethod2"
			expression="execution(* ${rootpackage}.service.serviceImpl.*.*(..))" />
		<!-- <aop:advisor>标签相当于Aspect -->
		<aop:advisor pointcut-ref="allMagangerMethod" advice-ref="txAdvice" />
		<!-- <aop:advisor pointcut-ref="allMagangerMethod1" advice-ref="txAdvice" 
			/> -->
		<aop:advisor pointcut-ref="allMagangerMethod2" advice-ref="txAdvice" />
	
	</aop:config>

	<!-- AOP 日志 -->
	
	<!-- 邮件配置 -->
	<!-- 注意:这里的参数(如用户名、密码)都是针对邮件发送者的 -->
	<!--<bean id="mailSender" class="org.springframework.mail.javamail.JavaMailSenderImpl">
		<property name="host">
			<value>smtp.163.com</value>
		</property>
		<property name="javaMailProperties">
			<props>
				<prop key="mail.smtp.auth">true</prop>
				<prop key="mail.smtp.timeout">25000</prop>
			</props>
		</property>
		<property name="username">
			<value>cheshengbaodian@163.com</value>
		</property>
		<property name="password">
			<value>chinagps</value>
		</property>
	</bean>
	<bean id="freeMarker"
		class="org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer">
		<property name="templateLoaderPaths" value="classpath:mailTemplate" />指定模板文件目录 
		<property name="freemarkerSettings"> 设置FreeMarker环境属性 
			<props>
				<prop key="template_update_delay">1800</prop>刷新模板的周期，单位为秒 
				<prop key="default_encoding">UTF-8</prop>模板的编码格式 
				<prop key="locale">zh_CN</prop> 本地化设置 
			</props>
		</property>
	</bean>
	--><!-- ************************ Email Service配置 ********************************* -->
	



	<!-- 对象缓存管理 -->

</beans>  
