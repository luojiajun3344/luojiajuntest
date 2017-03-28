package ${rootpackage}.dao;

import java.util.List;

import ${rootpackage}.mapper.BaseSqlMapper;
import com.core.util.page.PageSelect;

public interface BaseMapperDao<T> {
	
	@SuppressWarnings("unchecked")
	public void setMapperClass(Class<? extends BaseSqlMapper> mapperClass);
	
	public BaseSqlMapper<T> getMapper();
	
	public boolean add(T entity) throws Exception;
	
	public boolean edit(T entity) throws Exception;
	
	public boolean remove(T entity) throws Exception;
	
	public boolean removeById(String id) throws Exception;
	
	public T get(T entity) throws Exception;
	
	public T getById(Integer id) throws Exception;
	
	public int countAll(PageSelect pageRequest);
	
	public List<T> getAll(T entity) throws Exception;
	
	public List getByPage(PageSelect page);
}
