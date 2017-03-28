package com.core.generator;

import java.io.File;

import freemarker.template.Configuration;
import freemarker.template.DefaultObjectWrapper;





//import java.io.File;
//
//import freemarker.template.Configuration;
//import freemarker.template.DefaultObjectWrapper;


public class Generate {



public static void main(String[] args) throws Exception {
/* 一般在应用的整个生命周期中你仅需要执行一下代码一次*/
/* 创建一个合适的configuration */
Configuration cfg = new Configuration();
cfg.setDirectoryForTemplateLoading(new
File(Constant.FTLPATH));
cfg.setObjectWrapper(new DefaultObjectWrapper());
/* 而以下代码你通常会在一个应用生命周期中执行多次*/
/*获取或创建一个模版*/
;
//连接数据库后先运行这个方法 ，成功后刷新scr目录 然后注释这个方法运行下面那个方法
GeneratePoJo.getFromDB(cfg,"mysql");
//生成页面 service action等文件
//GenerateWeb.generatorHtml(cfg,"ligerui");
}


}