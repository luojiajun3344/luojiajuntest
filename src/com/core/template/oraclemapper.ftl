<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" 
	"http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<!-- namespace和定义的Mapper接口对应，并实现其中的方法 -->
<mapper namespace="${package}.${beanName}Mapper">
<cache/>
<resultMap id="${beanName?uncap_first}ResultMap" type="${beanName}"> 
<id property="${beanName?uncap_first}_id" column="${beanName?uncap_first}_id" /> 
  <#list fieldname as name>
  <#if name !="${beanName?uncap_first}Id">
                        <result property="${name?lower_case}" column="${name}"/> 
             </#if>
                          </#list>
                           


</resultMap> 
	<select id="getList" parameterType="${beanName}"
		resultType="list" resultMap="${beanName?uncap_first}ResultMap">
		select * from ${tableName} 
	</select>

	<select id="${beanName?uncap_first}All" parameterType="PageSelect" resultType="list" resultMap="${beanName?uncap_first}ResultMap">
		select * from ${tableName} a
		
	</select>
<select id="countAll" parameterType="PageSelect" resultType="_int" >
		select count(*) from ${tableName} a
			<where>
		<#list fieldname as name>
					<if test="@Ognl@isNotBlank(filter.${name?lower_case})">
		
			 <#if name!="${beanName?uncap_first}Id">a.${name}=<#noparse>#{</#noparse>filter.${name?lower_case}<#noparse>}</#noparse>
			 <#else>a.${beanName?uncap_first}_id=<#noparse>#{</#noparse>filter.${name?lower_case}<#noparse>}</#noparse>
			 </#if>
			 <#if name_has_next>and </#if>
		</if>
		</#list>
		</where>
	</select>
	<!-- ${beanName?uncap_first}ResultMap是${beanName?uncap_first}-resultmap.xml中定义的resultmap -->
	<select id="get" parameterType="${beanName}" resultType="${beanName}"
		resultMap="${beanName?uncap_first}ResultMap">
		<![CDATA[
			select * from ${tableName} where ${beanName?uncap_first}_id = <#noparse>#{</#noparse>${beanName?uncap_first}Id<#noparse>}</#noparse>
        ]]>
	</select>

<select id="getById" parameterType="java.lang.Integer" resultType="${beanName}"
		resultMap="${beanName?uncap_first}ResultMap">
		<![CDATA[
			select * from ${tableName} where ${beanName?uncap_first}_id =<#noparse>#{id}</#noparse> 
        ]]>
	</select>

	<!-- 自动生成id策略 -->
	<insert id="add" 
		parameterType="${beanName}">
		insert into ${tableName}
         <trim prefix="(" suffix=")" suffixOverrides="," >
		<#list fieldname as name>
		<if test="@Ognl@isNotBlank(${name?lower_case})" >
		<#if name !="${beanName?uncap_first}Id">
        ${name},
       <#else> ${beanName?uncap_first}_id,
        </#if>
          </if>
         </#list>
         </trim>
		<trim prefix="values (" suffix=")" suffixOverrides="," > 
		<#list fieldname as name>
		<if test="@Ognl@isNotBlank(${name?lower_case})" >
                    <#noparse>#{</#noparse>${name?lower_case}<#noparse>}</#noparse>,
         </if>
         </#list>
         </trim>
		
	</insert>


	<update id="edit" parameterType="${beanName}">
		update ${tableName} set
		<trim  suffixOverrides=",">
		<#list fieldname as name>
		<#if name !="${beanName?uncap_first}Id">
		
		    <if test="@Ognl@isNotBlank(${name?lower_case})" >
                       ${name}=<#noparse>#{</#noparse>${name?lower_case}<#noparse>}</#noparse>
                        <#if name_has_next>,</#if>
                       </if>
             </#if>
         </#list>
         </trim>
		where ${beanName?uncap_first}_id = <#noparse>#{</#noparse>${beanName?uncap_first}_id<#noparse>}</#noparse>
	</update>

	<delete id="remove" parameterType="${beanName}">
		delete from ${tableName} where
		${beanName?uncap_first}_id = <#noparse>#{</#noparse>${beanName?uncap_first}Id <#noparse>}</#noparse>
	</delete>

   <delete id="removeById" parameterType="java.lang.Integer">
		delete from ${tableName} where
		${beanName?uncap_first}_id = <#noparse>#{id}</#noparse>
	</delete>
	<select id="getByPage" parameterType="PageSelect" resultType="list" resultMap="${beanName?uncap_first}ResultMap">
			select * from (select t1.*,rownum rn from (SELECT * FROM
		    ${tableName} a 
				<where>
		   <#list fieldname as name>
		<if test="@Ognl@isNotBlank(filter.${name?lower_case})">
			  <#if name_has_next>and </#if> <#if name!="${beanName?uncap_first}Id">a.${name}=<#noparse>#{</#noparse>filter.${name?lower_case}<#noparse>}</#noparse>
			 <#else>a.${beanName?uncap_first}_id=<#noparse>#{</#noparse>filter.${name?lower_case}<#noparse>}</#noparse>
			 </#if>
			
		</if>
		</#list>
		</where>) t1  <![CDATA[
       where rownum<=<#noparse>#{offset}</#noparse>+<#noparse>#{pageSize}</#noparse> 
      ]]>) t2<![CDATA[where t2.rn>=<#noparse>#{offset}</#noparse>]]>
	
	</select>

</mapper>
