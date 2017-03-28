package ${rootpackage}.service;

import java.util.List;

import com.core.util.page.PageSelect;

public interface BaseService<T>{
	
   public boolean add(T entity) throws Exception;
	
	public boolean edit(T entity) throws Exception;
	
	public boolean removeById(String id) throws Exception;
	
	public T getById(int id) throws Exception;
	
	public List<T> getList(T entity) throws Exception;
	
	public List<T> getByPage(PageSelect page)throws Exception;
	
	public int countAll(PageSelect pageRequest)throws Exception;
}
