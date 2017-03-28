package com.core.generator;

public class TypeHandler {

	public static String handleType(String jdbcType){
		String result=null;
	if("CHAR".equalsIgnoreCase(jdbcType)||"VARCHAR".equalsIgnoreCase(jdbcType)||"VARCHAR2".equalsIgnoreCase(jdbcType))
		result="String";
	if("DOUBLE".equalsIgnoreCase(jdbcType))
		result="double";
	if("FLOAT".equalsIgnoreCase(jdbcType))
		result="float";
	if("decimal".equalsIgnoreCase(jdbcType))
		result="Float";
	if("INTEGER".equalsIgnoreCase(jdbcType)||"INT".equalsIgnoreCase(jdbcType)||"NUMBER".equalsIgnoreCase(jdbcType))
		result="Integer";
	if("DATETIME".equalsIgnoreCase(jdbcType)||"TIME".equalsIgnoreCase(jdbcType)||"DATE".equalsIgnoreCase(jdbcType)||"TIMESTAMP".equalsIgnoreCase(jdbcType))
		result="Date";
	return result;
	}
	//BIGINT 
	//BINARY 
	//BIT 
	//CHAR 
	//DATE 
	//DECIMAL 
	//DOUBLE 
	//FLOAT 
	//INTEGER 
	//LONGVARBINARY 
	//LONGVARCHAR 
	//NULL 
	//NUMERIC 
	//OTHER 
	//REAL 
	//SMALLINT 
	//TIME 
	//TIMESTAMP 
	//TINYINT 
	//VARBINARY 
	//VARCHAR 
}