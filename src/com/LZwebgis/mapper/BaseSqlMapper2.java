package com.LZwebgis.mapper;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.core.util.page.PageSelect;


public interface BaseSqlMapper2<T> extends SqlMapper {
	
	public void add(T entity) throws DataAccessException;
	
	public void edit(T entity) throws DataAccessException;
	
	public void editByid(int id) throws DataAccessException;
	
	public void remove(T entity) throws DataAccessException;
	
	public void removeById(int id) throws DataAccessException;
	
	public T get(T entity) throws DataAccessException;
	
	public T getById(int id) throws DataAccessException;
	
	public List<T> getList(T entity) throws DataAccessException;
	
	public List<T> getByPage(PageSelect page);
	
	public int countAll(PageSelect pageRequest);
}
