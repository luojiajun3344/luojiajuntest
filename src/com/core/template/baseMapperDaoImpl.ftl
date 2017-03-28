package ${rootpackage}.dao.impl;
import java.util.List;

import javax.inject.Inject;

import org.mybatis.spring.SqlSessionTemplate;

import ${rootpackage}.dao.BaseMapperDao;
import ${rootpackage}.mapper.BaseSqlMapper;
import com.core.util.page.PageSelect;


@SuppressWarnings("unchecked")
public class BaseMapperDaoImpl<T> implements BaseMapperDao<T> {
	@Inject
	private SqlSessionTemplate sqlSessionTemplate;
////	@Resource
	
//	   @PostConstruct  
//	  public void injectSessionFactory() {  
//	 	        super(sqlSessionFactory);  
//	 	    }

	private Class<? extends BaseSqlMapper> mapperClass;
	
	public void setMapperClass(Class<? extends BaseSqlMapper> mapperClass) {
		this.mapperClass = mapperClass;
	}

	public BaseSqlMapper<T> getMapper() {
		return sqlSessionTemplate.getMapper(mapperClass);
	}
	
	public boolean add(T entity) throws Exception {
		boolean flag = false;
		try {
			this.getMapper().add(entity);
			flag = true;
		} catch (Exception e) {
			flag = false;
			throw e;
		}
		return flag;
	}

	public boolean edit(T entity) throws Exception {
		boolean flag = false;
		try {
			this.getMapper().edit(entity);
			flag = true;
		} catch (Exception e) {
			flag = false;
			throw e;
		}
		return flag;
	}

	public T get(T entity) throws Exception {
		return this.getMapper().get(entity);
	}

	

	public boolean remove(T entity) throws Exception {
		boolean flag = false;
		try {
			this.getMapper().remove(entity);
			flag = true;
		} catch (Exception e) {
			flag = false;
			throw e;
		}
		return flag;
	}

	@Override
	public List<T> getAll(T entity) throws Exception {
		 return this.getMapper().getList(null);
	}
	
	public List<T> getByPage(PageSelect pageRequest) {

		return this.getMapper().getByPage(pageRequest);
	}

	@Override
	public int countAll(PageSelect pageRequest) {
		// TODO Auto-generated method stub
		return this.getMapper().countAll(pageRequest);
	}

	@Override
	public boolean removeById(String id) throws Exception {
		boolean flag = false;
		try {
			this.getMapper().removeById(id);
			flag = true;
		} catch (Exception e) {
			flag = false;
			throw e;
		}
		return flag;
	}
	

	@Override
	public T getById(Integer id) throws Exception {
		// TODO Auto-generated method stub
		return this.getMapper().getById(id);
	}
}
