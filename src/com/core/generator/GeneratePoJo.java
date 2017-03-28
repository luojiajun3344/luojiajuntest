package com.core.generator;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;

public class GeneratePoJo {

	public static void getFromDB(Configuration cfg,String db) throws IOException, SQLException, TemplateException{
	 	Template template =cfg.getTemplate("bean.ftl");
		Template template2= cfg.getTemplate(db+"mapper.ftl");
		Properties p= new Properties();
		
		p.load(Generate.class.getResourceAsStream("/mysql.properties"));
		
		Connection cnn=getConnect(p);
		//Statement st=cnn.createStatement();
//		ResultSet rs=st.executeQuery("select * from "+rs.getString(3));
		DatabaseMetaData dbma=cnn.getMetaData();
		
		ResultSet rs = dbma.getTables(null,"GIS", null,new String[]{"TABLE"});
		//rs.
		Map root =new HashMap();
		
		//List<String> tableNames=new ArrayList<String>();
		
		while(rs.next()){
			//tableNames.add(rs.getString(3));
			
			Statement st=cnn.createStatement();
//			System.out.println(rs.getString(3));
//			System.out.println(rs.getString(1));
//			System.out.println(rs.getString(2));
//			System.out.println(rs.getString(4));
//			System.out.println(rs.getString(5));
			System.out.println(rs.getString("TABLE_NAME"));
			System.out.println(rs.getString("TABLE_SCHEM"));
			//System.out.println(rs.getString("TABLE_TYPE"));
			ResultSet rs2=st.executeQuery("select * from "+rs.getString(3));
			
			ResultSetMetaData rsmd=rs2.getMetaData();
			String[] beanname=rs.getString(3).split("_");
			String bean=null;
			if (beanname.length==1)
				bean=beanname[0].substring(0, 1).toUpperCase()+beanname[0].substring(1).toLowerCase();;
			if(beanname.length==2)
			bean=beanname[1].substring(0, 1).toUpperCase()+beanname[1].substring(1).toLowerCase();	
			if(beanname.length==3)
			bean=beanname[2].substring(0, 1).toUpperCase()+beanname[2].substring(1).toLowerCase();
			else if(beanname.length==4)
				bean=(beanname[2]+beanname[3]).substring(0, 1).toUpperCase()+(beanname[2]+beanname[3]).substring(1).toLowerCase()	;
			root.put("beanName",bean );
				root.put("tableName", rs.getString(3));
			List fiList =new ArrayList();
			List beanlist=new ArrayList();
			//Map fieldMap=new HashMap<String,String>();
			for(int i=1; i<=rsmd.getColumnCount(); i++)
			{
				
				TypeUtil tu=new TypeUtil();
				tu.setType(""+TypeHandler.handleType(rsmd.getColumnTypeName(i)));
				tu.setValue(rsmd.getColumnName(i));
				fiList.add(tu);
				beanlist.add(rsmd.getColumnName(i));
				
			}
			root.put("beanpackage", Constant.BEANPACKAGE);
			root.put("beanpackage", Constant.BEANPACKAGE);
			root.put("package", Constant.ROOTPACKAGE+".mapper");
			root.put("fieldname", beanlist);
			root.put("fieldMap", fiList);
			
			File  file =new File("src/"+new String(Constant.BEANPACKAGE).replaceAll("\\.", "/")+"/"+bean+".java");
			File file2=new File(Constant.ClASSPATH+"mapper\\" +bean+"Mapper.xml");
			if (!file.exists())
				file.getParentFile().mkdirs();
			if (!file2.exists())
				file2.getParentFile().mkdirs();
			Writer out = new OutputStreamWriter(new FileOutputStream(file));
			Writer out2 = new OutputStreamWriter(new FileOutputStream(file2));
			template.process(root, out);
			template2.process(root, out2);
			out.flush();
			out.close();
			out2.flush();
			out2.close();
		}
		
	}

	public static Connection getConnect(Properties p) throws SQLException{
		Connection cnn=null;
		
		   String driver=p.getProperty("driver");
		  try {
			
		    Class.forName(driver);
			//  java.sql.DriverManager.registerDriver(new oracle.jdbc.driver.OracleDriver());

			String url=p.getProperty("url");
			String username=p.getProperty("username");
			String password=p.getProperty("password");
			cnn=DriverManager.getConnection(url, username, password);
		
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return cnn;
		
		
	}
}