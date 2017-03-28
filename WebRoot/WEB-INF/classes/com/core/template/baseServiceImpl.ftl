package ${rootpackage}.service.impl;

import java.util.List;
import org.apache.log4j.Logger;
import org.springframework.dao.DataAccessException;


import ${rootpackage}.service.BaseService;
import ${rootpackage}.mapper.BaseSqlMapper;
import com.core.util.myException;
import com.core.util.page.PageSelect;

public abstract class BaseServiceImpl<T> implements BaseService<T>{
    
	 private Logger logger=Logger.getLogger(this.getClass());
	
	private BaseSqlMapper<T> mapper;
	
	protected abstract  BaseSqlMapper<T> getMapper();
	
	@Override
	public boolean add(T entity) {
		// TODO Auto-generated method stub
		if(entity==null) throw new myException(entity.getClass().getName()+"对象参数信息为Empty！");
	 boolean flag=false;
	       try{
	    	   getMapper().add(entity);
			flag=true;
	       }catch(Exception e){
	    	   logger.error("添加数据失败"+e.getMessage());
	       }
		return flag;
	}


	@Override
	public boolean removeById(String id)  {
		 boolean flag=false;
	       try{
	    	   getMapper().removeById(id);
			flag=true;
	       }catch(Exception e){
	    	   logger.error("删除数据库是失败"+e.getMessage());
	       }
		return flag;
		
	}

	@Override
	public T getById(int id) {
		
		T entity = null;
		try {
			
			entity  = (T) getMapper().getById(id);
		}  catch (Exception e) {
			  logger.error("通过id获取数据失败"+e.getMessage());
		}
		return entity;

	}

	

	@Override
	public List<T> getByPage(PageSelect page) {
		// TODO Auto-generated method stub
		return getMapper().getByPage(page);
	}

	@Override
	public int countAll(PageSelect pageRequest){
		// TODO Auto-generated method stub
		return getMapper().countAll(pageRequest);
	}


	@Override
	public boolean edit(T entity)  {
		 boolean flag=false;
	       try{
	    	   getMapper().edit(entity);
			flag=true;
	       }catch(Exception e){
	    	   logger.error("更新数据失败"+e.getMessage());
	       }
		return flag;
	}

    public List<T> getList(T entity){
          return  getMapper().getList(entity);
    }
	
}
