<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" 
	"http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<!-- namespace和定义的Mapper接口对应，并实现其中的方法 -->
<mapper namespace="${package}.${beanName}Mapper">
<resultMap id="${beanName?uncap_first}ResultMap" type="${beanpackage}.${beanName}"> 
<id property="${beanName?uncap_first}Id" column="${beanName?uncap_first}_id" /> 
  <#list fieldname as name>
  <#if name !="${beanName?uncap_first}Id">
                        <result property="${name}" column="${name}"/> 
             </#if>
                          </#list>
                           


</resultMap> 
	<select id="getList" parameterType="${beanpackage}.${beanName}"
		resultType="list" resultMap="${beanName?uncap_first}ResultMap">
		select * from ${beanName?uncap_first} 
	</select>

	<select id="${beanName?uncap_first}All" parameterType="${rootpackage}.util.page.PageSelect" resultType="list" resultMap="${beanName?uncap_first}ResultMap">
		select * from ${beanName?uncap_first} a
		
	</select>
<select id="countAll" parameterType="${rootpackage}.util.page.PageSelect" resultType="_int" >
		select count(*) from ${beanName?uncap_first} a
		
	</select>
	<!-- ${beanName?uncap_first}ResultMap是${beanName?uncap_first}-resultmap.xml中定义的resultmap -->
	<select id="get" parameterType="${beanpackage}.${beanName}" resultType="${beanpackage}.${beanName}"
		resultMap="${beanName?uncap_first}ResultMap">
		<![CDATA[
			select * from ${beanName?uncap_first} where ${beanName?uncap_first}_id = <#noparse>#{</#noparse>${beanName?uncap_first}Id<#noparse>}</#noparse>
        ]]>
	</select>

<select id="getById" parameterType="java.lang.Integer" resultType="${beanpackage}.${beanName}"
		resultMap="${beanName?uncap_first}ResultMap">
		<![CDATA[
			select * from ${beanName?uncap_first} where ${beanName?uncap_first}_id =<#noparse>#{id}</#noparse> 
        ]]>
	</select>

	<!-- 自动生成id策略 -->
	<insert id="add" useGeneratedKeys="true" keyProperty="${beanName?uncap_first}_id"
		parameterType="${beanpackage}.${beanName}">
		insert into ${beanName?uncap_first}
         <trim prefix="(" suffix=")" suffixOverrides="," >
		<#list fieldname as name>
		<if test="@Ognl@isNotBlank(${name})" >
		<#if name !="${beanName?uncap_first}Id">
        ${name},
       <#else> ${beanName?uncap_first}_id
        </#if>
          </if>
         </#list>
         </trim>
		<trim prefix="values (" suffix=")" suffixOverrides="," > 
		<#list fieldname as name>
		<if test="@Ognl@isNotBlank(${name})" >
                    <#noparse>#{</#noparse>${name}<#noparse>}</#noparse>,
         </if>
         </#list>
         </trim>
		<selectKey resultType="int" keyProperty="${beanName?uncap_first}_id">
   SELECT LAST_INSERT_ID()
  </selectKey>
	</insert>


	<update id="edit" parameterType="${beanpackage}.${beanName}">
		update ${beanName?uncap_first} set
		<#list fieldname as name>
		<#if name !="${beanName?uncap_first}Id">
                       ${name}=<#noparse>#{</#noparse>${name}<#noparse>}</#noparse>
                       <#else> ${beanName?uncap_first}_id=<#noparse>#{</#noparse>${name}<#noparse>}</#noparse>
             </#if>
                    <#if name_has_next>,</#if>
         </#list>
		
		where ${beanName?uncap_first}_id = <#noparse>#{</#noparse>${beanName?uncap_first}Id<#noparse>}</#noparse>
	</update>

	<delete id="remove" parameterType="${beanpackage}.${beanName}">
		delete from ${beanName?uncap_first} where
		${beanName?uncap_first}_id = <#noparse>#{</#noparse>${beanName?uncap_first}Id <#noparse>}</#noparse>
	</delete>

   <delete id="removeById" parameterType="java.lang.Integer">
		delete from ${beanName?uncap_first} where
		${beanName?uncap_first}_id = <#noparse>#{id}</#noparse>
	</delete>
	<select id="getByPage" parameterType="${rootpackage}.util.page.PageSelect" resultType="list" resultMap="${beanName?uncap_first}ResultMap">
		SELECT
		*
		FROM
		${beanName?uncap_first} a
		<where>
		 	<if test="@Ognl@isNotBlank(${beanName?uncap_first}name)" >
	      	  a.name  =  <#noparse>#{</#noparse>${beanName?uncap_first}name<#noparse>}</#noparse>
	     	 </if>
        </where>
	      	 order by ${beanName?uncap_first}_id desc
		LIMIT <#noparse>#{offset}</#noparse>,<#noparse>#{pageSize}</#noparse> 
	</select>

</mapper>
