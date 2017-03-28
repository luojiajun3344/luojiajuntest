package ${beanpackage};
import java.io.Serializable;
import java.util.Date;

import org.springframework.stereotype.Component;
import org.springframework.context.annotation.Scope;
@Component
@Scope("prototype")
public class ${beanName?cap_first} implements Serializable {
<#list fieldMap as field>
<#if field.value !="${beanName}_id">
private ${field.type} ${field.value?lower_case};
     <#else> 
private ${field.type} ${beanName}Id;
             </#if>
			</#list>
<#list fieldMap as field>
<#if field.value !="${beanName}_id">
public ${field.type} get${field.value?lower_case?cap_first}() {
	return ${field.value?lower_case};
}
public void set${field.value?lower_case?cap_first}(${field.type} ${field.value?lower_case}) {
	this.${field.value?lower_case} = ${field.value?lower_case};
}
     <#else> 

public ${field.type} get${beanName?cap_first}Id() {
	return ${beanName}Id;
}
public void set${beanName?cap_first}Id(${field.type} ${beanName}Id) {
	this.${beanName}Id = ${beanName}Id;
}             </#if>

			</#list>			
}
