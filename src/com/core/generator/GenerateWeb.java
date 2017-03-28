package com.core.generator;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;

public class GenerateWeb {
	

	public static void generatorHtml(Configuration cfg,String style) throws IOException,
			ClassNotFoundException, InstantiationException, IllegalAccessException,
			FileNotFoundException, TemplateException {
		List<Template> templates =new ArrayList<Template>();
		
		if(style.equals("extjs")){
			templates.add( cfg.getTemplate("htmltest.ftl"));
			templates.add(cfg.getTemplate("action.ftl"));	
		}
			
		if(style.equals("ligerui")){
			templates.add( cfg.getTemplate("ligerUi\\htmltest.ftl"));
			templates.add(cfg.getTemplate("ligerUi\\action.ftl"));
		}
			
//		templates.add( cfg.getTemplate("dao.ftl"));
	  //templates.add(cfg.getTemplate("daoImpl.ftl"));
		
		templates.add(cfg.getTemplate("service.ftl"));
		templates.add(cfg.getTemplate("serviceImpl.ftl"));
		
		templates.add(cfg.getTemplate("mapperInterface.ftl"));
		//templates.add(cfg.getTemplate("mapper.ftl"));
		/*创建一个数据模型Create a data model */
		/* 合并数据模型和模版*/
		
		List beanlist=getModel("src/"+Constant.BEANPACKAGE.replaceAll("\\.", "/"));
		List beanlist2=new ArrayList();
		for(Object ob:beanlist){
			Map root=getHtml(ob);
			String beanname=ob.getClass().getName().substring(ob.getClass().getName().lastIndexOf(".")+1);
			beanlist2.add(beanname);
		List<File> files=new ArrayList<File>();
		List<String> packageName=new ArrayList<String>();
		files.add(new File("WebRoot/admin/"+ beanname+".jsp"));
		packageName.add(Constant.ROOTPACKAGE+"");
		files.add(new File(Constant.ClASSPATH+"action\\" + beanname+"ManageAction.java"));
		packageName.add(Constant.ROOTPACKAGE+".action");
		//files.add(new File(ClASSPATH+"dao\\" + beanname+"Dao.java"));
		//packageName.add(ROOTPACKAGE+".dao");
		//files.add(new File(ClASSPATH+"dao\\impl\\" + beanname+"DaoImpl.java"));
		//packageName.add(ROOTPACKAGE+".dao.impl");
		files.add(new File(Constant.ClASSPATH+"service\\" + beanname+"ManageService.java"));
		packageName.add(Constant.ROOTPACKAGE+".service");
		files.add(new File(Constant.ClASSPATH+"service\\impl\\" + beanname+"ManageServiceImpl.java"));
		packageName.add(Constant.ROOTPACKAGE+".service.impl");
		files.add(new File(Constant.ClASSPATH+"mapper\\" + beanname+"Mapper.java"));
		packageName.add(Constant.ROOTPACKAGE+".mapper");
		//files.add(new File(ClASSPATH+"mapper\\" + beanname+"Mapper.xml"));
//		packageName.add(ROOTPACKAGE+".mapper");
		//产生文件夹
		for(int i=0;i<files.size();i++){
		if (!files.get(i).exists())
			files.get(i).getParentFile().mkdirs();
		root.put("beanName",beanname);
		root.put("package", packageName.get(i));
		root.put("beanpackage", Constant.BEANPACKAGE);
		root.put("rootpackage", Constant.ROOTPACKAGE);
		Writer out = new OutputStreamWriter(new FileOutputStream(files.get(i)));
		templates.get(i).process(root, out);
		out.flush();
		out.close();
		}
		}
		List<Template> templateConfig =new ArrayList<Template>();
		templateConfig.add(cfg.getTemplate("struts.ftl"));
		templateConfig.add(cfg.getTemplate("springcore.ftl"));
		templateConfig.add(cfg.getTemplate("springbean.ftl"));
		templateConfig.add(cfg.getTemplate("sqlMapper.ftl"));
		templateConfig.add(cfg.getTemplate("baseSqlMapper.ftl"));
		//templateConfig.add(cfg.getTemplate("baseMapperDao.ftl"));
		//templateConfig.add(cfg.getTemplate("baseMapperDaoImpl.ftl"));
		templateConfig.add(cfg.getTemplate("baseService.ftl"));
		templateConfig.add(cfg.getTemplate("baseServiceImpl.ftl"));
		List<File> filescfg=new ArrayList<File>();
		filescfg.add(new File("src/struts/struts.xml"));
		filescfg.add(new File("src/spring/applicationContext.xml"));
		filescfg.add(new File("src/spring/applicationContext-bean.xml"));
		filescfg.add(new File(Constant.ClASSPATH+"/mapper/SqlMapper.java"));
		filescfg.add(new File(Constant.ClASSPATH+"/mapper/BaseSqlMapper.java"));
		//filescfg.add(new File(ClASSPATH+"/dao/BaseMapperDao.java"));
//		filescfg.add(new File(ClASSPATH+"/dao/impl/BaseMapperDaoImpl.java"));
		filescfg.add(new File(Constant.ClASSPATH+"/service/BaseService.java"));
		filescfg.add(new File(Constant.ClASSPATH+"/service/impl/BaseServiceImpl.java"));
		for(int i=0;i<templateConfig.size();i++){
		Map root =new HashMap();
		root.put("beanList", beanlist2);
		root.put("beanpackage", Constant.BEANPACKAGE);
		root.put("rootpackage", Constant.ROOTPACKAGE);
		
		root.put("rootClass", new String(Constant.ROOTPACKAGE).replaceAll("\\.", "/"));
		//File  file =new File("src/struts/struts.xml");
		if (!filescfg.get(i).exists())
			filescfg.get(i).getParentFile().mkdirs();
		Writer out = new OutputStreamWriter(new FileOutputStream(filescfg.get(i)));
		templateConfig.get(i).process(root, out);
		out.flush();
		out.close();
		}
		
	}
	public static List getModel(String path) throws ClassNotFoundException, InstantiationException, IllegalAccessException{
		File file = new File(path);
		String[] files=file.list();
		//String packagename=path.substring(path.indexOf("/")+1,path.lastIndexOf("/")+1).replaceAll("/", ".");
	  String packagename=path.substring(path.indexOf("/")+1).replaceAll("/", ".");
		if(files.length==0)return null;
		else {
			List beanlist=new ArrayList();
			for(String filename:files){
				String beanname=filename.substring(0,filename.indexOf("."));
				
				beanlist.add(Class.forName(packagename+"."+beanname).newInstance());
			}
			return beanlist;
		}
	}
	public static Map getHtml(Object ob) throws IllegalArgumentException, IllegalAccessException{
		Map root = new HashMap();
		List list = new ArrayList();

		Field[] fields=ob.getClass().getDeclaredFields();
		List fieldname=new ArrayList();
		List fieldvalue=new ArrayList();
		for (Field field : fields) {
			field.setAccessible(true);
			Class fieldType = field.getType();
			fieldname.add(field.getName());
			fieldvalue.add(field.get(ob));
			//field.set(o,child);
			
		}
		list.add(ob);
		root.put("list", list);
		root.put("fieldname", fieldname);
		root.put("fieldvalue", fieldvalue);
		return root;
	}

}