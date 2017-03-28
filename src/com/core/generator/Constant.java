package com.core.generator;

public class Constant {
	public  final static String PROJECT="scrmabc";
	public  final static String FTLPATH="src/com/core/template";
	public  final static String ClASSPATH=("src/com/"+PROJECT+"/").replaceAll("\\.", "/");
	public  final static String ROOTPACKAGE="com."+PROJECT;
	public  final static String BEANPACKAGE=ROOTPACKAGE+".pojo";
	
}