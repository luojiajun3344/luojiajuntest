package com.core.util;

import org.springframework.dao.DataAccessException;

public class myException extends DataAccessException{

	public myException(String msg) {
		super(msg);
		
	}

}
