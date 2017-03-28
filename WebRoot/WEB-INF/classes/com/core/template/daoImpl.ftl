package ${package};
import javax.annotation.PostConstruct;
import org.springframework.stereotype.Repository;
import ${beanpackage}.${beanName};
import ${rootpackage}.mapper.${beanName}Mapper;
import ${rootpackage}.dao.${beanName}Dao;
@Repository
public class ${beanName}DaoImpl extends BaseMapperDaoImpl<${beanName}> implements ${beanName}Dao {

	@PostConstruct  
    public void injectSessionFactory() {  
        setMapperClass(${beanName}Mapper.class);  
    }  
}
