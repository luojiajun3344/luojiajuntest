package ${package};
import java.util.List;
import org.springframework.stereotype.Component;
import ${beanpackage}.${beanName};

@Component
public interface ${beanName}Mapper<T extends ${beanName}> extends BaseSqlMapper<T> {
	
	public List<T> getAllAccount();
}
