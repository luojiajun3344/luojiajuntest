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
		select * from ${beanName?uncap_first} 
	</select>

	<select id="${beanName?uncap_first}All" parameterType="com.core.util.page.PageSelect" resultType="list" resultMap="${beanName?uncap_first}ResultMap">
		select * from ${beanName?uncap_first} a
		
	</select>
<select id="countAll" parameterType="com.core.util.page.PageSelect" resultType="_int" >
		select count(*) from ${beanName?uncap_first} a
		
	</select>
	<!-- ${beanName?uncap_first}ResultMap是${beanName?uncap_first}-resultmap.xml中定义的resultmap -->
	<select id="get" parameterType="${beanName}" resultType="${beanName}"
		resultMap="${beanName?uncap_first}ResultMap">
		<![CDATA[
			select * from ${beanName?uncap_first} where ${beanName?uncap_first}_id = <#noparse>#{</#noparse>${beanName?uncap_first}Id<#noparse>}</#noparse>
        ]]>
	</select>

<select id="getById" parameterType="java.lang.Integer" resultType="${beanName}"
		resultMap="${beanName?uncap_first}ResultMap">
		<![CDATA[
			select * from ${beanName?uncap_first} where ${beanName?uncap_first}_id =<#noparse>#{id}</#noparse> 
        ]]>
	</select>

	<!-- 自动生成id策略 -->
	<insert id="add" useGeneratedKeys="true" keyProperty="${beanName?uncap_first}_id"
		parameterType="${beanName}">
		insert into ${beanName?uncap_first}
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
		<selectKey resultType="int" keyProperty="${beanName?uncap_first}_id">
   SELECT LAST_INSERT_ID()
  </selectKey>
	</insert>


	<update id="edit" parameterType="${beanName}">
		update ${beanName?uncap_first} set
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
		where ${beanName?uncap_first}_id = <#noparse>#{</#noparse>${beanName?uncap_first}Id<#noparse>}</#noparse>
	</update>

	<delete id="remove" parameterType="${beanName}">
		delete from ${beanName?uncap_first} where
		${beanName?uncap_first}_id = <#noparse>#{</#noparse>${beanName?uncap_first}Id <#noparse>}</#noparse>
	</delete>

   <delete id="removeById" parameterType="java.lang.Integer">
		delete from ${beanName?uncap_first} where
		${beanName?uncap_first}_id = <#noparse>#{id}</#noparse>
	</delete>
	<select id="getByPage" parameterType="com.core.util.page.PageSelect" resultType="list" resultMap="${beanName?uncap_first}ResultMap">
		SELECT
		*
		FROM
		${beanName?uncap_first} a
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
	      	 <if test="@Ognl@isNotBlank(filter.sortname)">
		<if test="@Ognl@isNotBlank(filter.sortorder)">
		 order by <#noparse>#{filter.sortname} #{filter.sortorder}</#noparse>
		</if>
      </if>	
		LIMIT <#noparse>#{offset}</#noparse>,<#noparse>#{pageSize}</#noparse> 
	</select>

</mapper>
