package ${package};
import javax.annotation.Resource;
import ${rootpackage}.mapper.${beanName}Mapper;
import ${rootpackage}.mapper.BaseSqlMapper;
import org.springframework.stereotype.Service;
import ${beanpackage}.${beanName};
import ${rootpackage}.mapper.${beanName}Mapper;
import ${rootpackage}.service.${beanName}ManageService;

@Service
public class ${beanName}ManageServiceImpl extends BaseServiceImpl<${beanName}> implements ${beanName}ManageService{
  
  
  @Resource
	private ${beanName}Mapper ${beanName?uncap_first}Mapper; 
	
	public BaseSqlMapper getMapper(){
		return this.${beanName?uncap_first}Mapper;
	}
	
	
  
}
