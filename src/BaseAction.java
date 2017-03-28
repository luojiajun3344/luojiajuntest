

import java.io.IOException;
import java.util.Date;
import java.util.Enumeration;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONSerializer;
import net.sf.json.JsonConfig;

import org.apache.commons.lang.StringUtils;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.config.DefaultSettings;
import org.apache.struts2.util.TokenHelper;

import com.core.util.DateJsonValueProcessor;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.util.logging.Logger;
import com.opensymphony.xwork2.util.logging.LoggerFactory;

/**
 * 基于struts2的Action基类,可供所有Action继承以简化子类行为
 * 
 * @author chenzhihua
 * @version 1.0
 * @see com.opensymphony.xwork2.ActionSupport
 */
public abstract class BaseAction extends ActionSupport {

	private static final long serialVersionUID = -1596478659902003403L;

	// Action 定义
	public static final String INVALID_TOKEN = "invalid.token";
	public static final String INDEX = "index";
	public static final String HINT = "hint";
	public static final String ACTION = "action";
	public static final String REDIRECT = "redirect";
	public static final String CUSTOM = "custom";

	// -- header 常量定义 --//
	private static final String HEADER_ENCODING = "encoding";
	private static final String HEADER_NOCACHE = "no-cache";
	private static final String DEFAULT_ENCODING = "UTF-8";
	private static final boolean DEFAULT_NOCACHE = true;

	// -- Content Type 定义 --//
	public static final String TEXT_TYPE = "text/plain";
	public static final String JSON_TYPE = "application/json";
	public static final String XML_TYPE = "text/xml";
	public static final String HTML_TYPE = "text/html";
	public static final String JS_TYPE = "text/javascript";
	public static final String EXCEL_TYPE = "application/vnd.ms-excel";
	public static final String DEFAULT_DATE_PATTERN = "yyyy-MM-dd hh:mm:ss";

	private static final String SESSION_VALIDATACODE = "validcheckcode";
	private static final String DEFAULT_ACTION_EXT = "action";

	protected static final Logger log = LoggerFactory
			.getLogger(BaseAction.class);

	private String message;// 返回的消息
	private String title;// 页面显示标题
	private String target; // 自定义目标
	private String nextAction;// 下一个Action
	private String template;
	private String redirect;
	private String backPath; // 请求的上个路径
	
	protected String render(String target) {
		setTarget(target);
		return CUSTOM;
	}

	protected String chain(String nextAction) {
		setNextAction(nextAction);
		return ACTION;
	}

	protected String freemarker(String template) {
		setTemplate(template);
		return "freemarker";
	}

	protected String redirect(String redirect) {
		setRedirect(redirect);
		return REDIRECT;
	}

	public boolean validToken() {
		return (TokenHelper.getTokenName() == null) || TokenHelper.validToken();
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getNextAction() {
		return nextAction;
	}

	public void setNextAction(String nextAction) {
		this.nextAction = nextAction;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getTarget() {
		return target;
	}

	public void setTarget(String target) {
		this.target = target;
	}

	public String getRedirect() {
		return redirect;
	}

	public void setRedirect(String redirect) {
		this.redirect = redirect;
	}

	public String getTemplate() {
		return template;
	}

	public void setTemplate(String template) {
		this.template = template;
	}

	



	/**
	 * 获取应用路径
	 * 
	 * @return {@link String}
	 */
	public String getCtxPath() {
		return getRequest().getContextPath();
	}

	/**
	 * 获取struts2默认请求后缀名
	 * 
	 * @return {@link String}
	 * @deprecated Since Struts 2.1.2
	 */
	public String getExtension() {
		if (DefaultSettings.isSet("struts.action.extension")) {
			return DefaultSettings.get("struts.action.extension");
		}
		return DEFAULT_ACTION_EXT;
	}

	/**
	 * 获取struts2默认请求后缀名
	 * 
	 * @return {@link String}
	 */
	public String getDefaultExt() {
		String[] sa = getExtension().split(",");
		return sa.length > 0 ? sa[0] : DEFAULT_ACTION_EXT;
	}

	/**
	 * 获取请求对象.
	 * 
	 * @return {@link javax.servlet.http.HttpServletRequest}
	 */
	public static HttpServletRequest getRequest() {
		return ServletActionContext.getRequest();
	}

	/**
	 * 获取response对象
	 * 
	 * @return {@link javax.servlet.http.HttpServletResponse}
	 */
	public static HttpServletResponse getResponse() {
		return ServletActionContext.getResponse();
	}

	/**
	 * 获取session对象
	 * 
	 * @return {@link javax.servlet.http.HttpSession}
	 */
	public static HttpSession getSession() {
		return getRequest().getSession();
	}

	/**
	 * 读取表单参数
	 * 
	 * @param name
	 *            表单参数名
	 * @return
	 */
	public String getParameter(String name) {
		return getRequest().getParameter(name);
	}

	/**
	 * @param name
	 * @return
	 */
	public String getQueryString(String name) {
		return getRequest().getQueryString();
	}

	/**
	 * 将表单参数作为整数返回.
	 * 
	 * @param name
	 *            表单参数名
	 * @return int
	 */
	public int getParameterInt(String name) {
		String s = getParameter(name);

		if (s == null) {
			return 0;
		} else {
			try {
				return Integer.parseInt(s);
			} catch (NumberFormatException e) {
				e.printStackTrace();
			}
		}
		return 0;
	}

	/**
	 * 将表单参数作为长整数返回.
	 * 
	 * @param name
	 *            表单参数名
	 * @return long
	 */
	public long getParameterLong(String name) {
		String s = getParameter(name);

		if (s == null) {
			return 0L;
		} else {
			try {
				return Long.parseLong(s);
			} catch (NumberFormatException e) {
				e.printStackTrace();
			}
		}

		return 0L;
	}

	/**
	 * 设置 request 的属性.
	 * 
	 * @param name
	 *            属性名
	 * @param value
	 *            属性值
	 */
	public void setAttribute(String name, Object value) {
		getRequest().setAttribute(name, value);
	}

	/**
	 * 获取 request 的属性.
	 * 
	 * @param name
	 *            属性名
	 */
	public Object getAttribute(String name) {
		return getRequest().getAttribute(name);
	}

	/**
	 * 读取 session 中的属性值
	 * 
	 * @param name
	 * @return
	 */
	public Object getSession(String name) {
		HttpSession session = getSession();
		return (session != null ? session.getAttribute(name) : null);
	}

	/**
	 * 向 session 设置属性值
	 * 
	 * @param name
	 * @param value
	 */
	public void setSession(String name, Object value) {
		HttpSession session = getSession();
		if (session != null) {
			session.setAttribute(name, value);
		}
	}

	/**
	 * 获取 application 对象.
	 * 
	 * @return
	 */
	public ServletContext getApplication() {
		return ServletActionContext.getServletContext();
	}

	/**
	 * 将所有URL参数合并成一个URL字符串(page参数除外), 提供分页时显示.
	 * 
	 * @return 字符串, 如: para1=11&para2=bb
	 */
	public String mergeParamsAsURI() {
		Map<String, String[]> params = getRequest().getParameterMap();
		StringBuffer sb = new StringBuffer();
		Set<String> keys = params.keySet();// 列出所有表单参数
		for (String key : keys) {
			if (!"page".equals(key)) {
				String[] values = params.get(key);// 尝试获取多个参数
				// 不管单个参数还是多个参数统一转成了数组
				/*if (values.length > 1) {
					values = getRequest().getParameterValues(key);
				} else {
					values = new String[] { getParameter(key) };
				}*/
				try {
					for (String value : values) {

						sb.append(java.net.URLEncoder.encode(key, "UTF-8")
								+ "=");
						sb.append(java.net.URLEncoder.encode(value, "UTF-8")
								+ "&");
						// key=value&
					}

				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}

		// 删除末尾多余的 & 字符
		if (sb.toString().endsWith("&")) {
			sb.deleteCharAt(sb.length() - 1);
		}
		return sb.toString();
	}

	/**
	 * 将所有URL参数合并成一个URL字符串(指定的参数数组除外), 提供分页时显示.
	 * 
	 * @param noParams
	 * @return 字符串, 如: para1=11&para2=bb
	 */

	public String mergeParamsAsURI(String... noParams) {
		Map<String, String[]> params = getRequest().getParameterMap();
		StringBuffer sb = new StringBuffer();
		Set<String> keys = params.keySet();// 列出所有表单参数
		boolean bool = false;
		for (String key : keys) {

			// 过滤不追加的参数
			bool = false;
			for (String p : noParams) {
				if (p.equals(key)) {
					bool = true;
				}
			}
			if (bool) {
				continue;
			}

			String[] values = params.get(key);// 尝试获取多个参数
			// 不管单个参数还是多个参数统一转成了数组
			if (values.length > 1) {
				values = getRequest().getParameterValues(key);
			} else {
				values = new String[] { getParameter(key) };
			}
			try {
				for (String value : values) {

					sb.append(java.net.URLEncoder.encode(key, "UTF-8") + "=");
					sb.append(java.net.URLEncoder.encode(value, "UTF-8") + "&");
					// key=value&
				}

			} catch (Exception e) {
				e.printStackTrace();
			}

		}

		// 删除末尾多余的 & 字符
		if (sb.toString().endsWith("&")) {
			sb.deleteCharAt(sb.length() - 1);
		}
		return sb.toString();
	}

	/**
	 * 获取struts2 Action Context环境
	 * 
	 * @return {@link com.opensymphony.xwork2.ActionContext}
	 */
	public ActionContext getContext() {
		return ActionContext.getContext();
	}

	/**
	 * 设置struts2值栈中对象值
	 * 
	 * @param key
	 * @param value
	 */
	public void setStackValue(String key, Object value) {
		getContext().getValueStack().setValue(key, value);
	}

	/**
	 * 获取struts2值栈中对象值
	 * 
	 * @param key
	 * @param value
	 */
	public Object getStackValue(String key) {
		return getContext().getValueStack().findValue(key);
	}

	/**
	 * 清空request中Attribute参数
	 */
	@SuppressWarnings("rawtypes")
	protected void clearRequestAllAttribute() {
		HttpServletRequest req = getRequest();
		Enumeration e = req.getAttributeNames();
		Object key;
		while (e.hasMoreElements()) {
			key = e.nextElement();
			req.removeAttribute(key.toString());
		}
	}

	/**
	 * 清空session中Attribute参数
	 */
	@SuppressWarnings("rawtypes")
	protected void clearSessionAllAttribute() {
		HttpSession session = getSession();
		Enumeration e = session.getAttributeNames();
		Object key;
		while (e.hasMoreElements()) {
			key = e.nextElement();
			session.removeAttribute(key.toString());
		}
	}

	/**
	 * 验证码是否非法
	 * 
	 * @param vCode
	 *            验证码
	 * @return boolean true:合法 false:非法
	 */
	protected boolean validateCode(String vCode) {

		HttpSession session = getSession();
		String code = (String) session.getAttribute(SESSION_VALIDATACODE);
		if (code == null) {
			addFieldError("errorMsg", "验证码超时！");
			// throw new RuntimeException("验证码超时！");
		}
		if (code.equalsIgnoreCase(vCode)) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 无条件跳转HINT
	 * 
	 * @param hintMsg
	 * @param hintUrl
	 * @throws IOException
	 * @throws ServletException
	 */
	protected void toHINT(String hintMsg, String hintUrl)
			throws ServletException, IOException {

		setAttribute("ctxPath", getCtxPath());
		setAttribute("hintMsg", hintMsg);
		setAttribute("hintUrl", hintUrl);
		getRequest().getRequestDispatcher("hint.jsp").forward(getRequest(),
				getResponse());
	}

	/**
	 * 获取当前应用URL地址
	 * 
	 * @return {@link String}
	 */
	public String getContextURI() {
		HttpServletRequest request = getRequest();
		return request.getScheme() + "://" + request.getServerName() + ":"
				+ request.getServerPort() + request.getContextPath();
	}

	/**
	 * 获取ROOT应用URL地址
	 * 
	 * @return {@link String}
	 */
	public String getContextRootURI() {
		HttpServletRequest request = getRequest();
		return request.getScheme() + "://" + request.getServerName() + ":"
				+ request.getServerPort();
	}

	// -- 绕过jsp/freemaker直接输出文本的函数 --//
	/**
	 * 直接输出内容的简便函数.
	 * 
	 * eg. render("text/plain", "hello", "encoding:GBK"); render("text/plain",
	 * "hello", "no-cache:false"); render("text/plain", "hello", "encoding:GBK",
	 * "no-cache:false");
	 * 
	 * @param headers
	 *            可变的header数组，目前接受的值为"encoding:"或"no-cache:",默认值分别为UTF-8和true.
	 */
	public static void render(final String contentType, final String content,
			final String... headers) {
		HttpServletResponse response = initResponseHeader(contentType, headers);
		try {
			response.getWriter().write(content);
			response.getWriter().flush();
		} catch (IOException e) {
			throw new RuntimeException(e.getMessage(), e);
		}
	}

	/**
	 * 直接输出文本.
	 * 
	 * @see #render(String, String, String...)
	 */
	public static void renderText(final String text, final String... headers) {
		render(TEXT_TYPE, text, headers);
	}

	/**
	 * 直接输出HTML.
	 * 
	 * @see #render(String, String, String...)
	 */
	public static void renderHtml(final String html, final String... headers) {
		render(HTML_TYPE, html, headers);
	}

	/**
	 * 直接输出XML.
	 * 
	 * @see #render(String, String, String...)
	 */
	public static void renderXml(final String xml, final String... headers) {
		render(XML_TYPE, xml, headers);
	}

	/**
	 * 直接输出JSON.
	 * 
	 * @param jsonString
	 *            json字符串.
	 * @see #render(String, String, String...)
	 */
	public static void renderJson(final String jsonString,
			final String... headers) {
		render(JSON_TYPE, jsonString, headers);
	}

	/**
	 * 直接输出JSON,使用Jackson转换Java对象.
	 * 
	 * @param data
	 *            可以是List<POJO>, POJO[], POJO, 也可以Map名值对.
	 * @see #render(String, String, String...)
	 */
	public static void renderJson(final Object data, final String... headers) {
		HttpServletResponse response = initResponseHeader(JSON_TYPE, headers);
		try {
			JsonConfig jsonConfig = new JsonConfig();
			jsonConfig.registerJsonValueProcessor(Date.class,
					new DateJsonValueProcessor(DEFAULT_DATE_PATTERN));
			response.getWriter().write(
					JSONSerializer.toJSON(data, jsonConfig).toString());
		} catch (IOException e) {
			throw new IllegalArgumentException(e);
		}
	}

	/**
	 * 直接输出支持跨域Mashup的JSONP.
	 * 
	 * @param callbackName
	 *            callback函数名.
	 * @param object
	 *            Java对象,可以是List<POJO>, POJO[], POJO ,也可以Map名值对, 将被转化为json字符串.
	 */
	public static void renderJsonp(final String callbackName,
			final Object object, final String... headers) {

		JsonConfig jsonConfig = new JsonConfig();
		jsonConfig.registerJsonValueProcessor(Date.class,
				new DateJsonValueProcessor(DEFAULT_DATE_PATTERN));
		String jsonString = JSONSerializer.toJSON(object, jsonConfig)
				.toString();

		String result = new StringBuilder().append(callbackName).append("(")
				.append(jsonString).append(");").toString();

		// 渲染Content-Type为javascript的返回内容,输出结果为javascript语句,
		// 如callback197("{html:'Hello World!!!'}");
		render(JS_TYPE, result, headers);
	}

	/**
	 * 分析并设置contentType与headers.
	 */
	private static HttpServletResponse initResponseHeader(
			final String contentType, final String... headers) {
		// 分析headers参数
		String encoding = DEFAULT_ENCODING;
		boolean noCache = DEFAULT_NOCACHE;
		for (String header : headers) {
			String headerName = StringUtils.substringBefore(header, ":");
			String headerValue = StringUtils.substringAfter(header, ":");

			if (StringUtils.equalsIgnoreCase(headerName, HEADER_ENCODING)) {
				encoding = headerValue;
			} else if (StringUtils.equalsIgnoreCase(headerName, HEADER_NOCACHE)) {
				noCache = Boolean.parseBoolean(headerValue);
			} else {
				throw new IllegalArgumentException(headerName
						+ "不是一个合法的header类型");
			}
		}

		HttpServletResponse response = getResponse();

		// 设置headers参数
		String fullContentType = contentType + ";charset=" + encoding;
		response.setContentType(fullContentType);
		if (noCache) {
			// Http 1.0 header
			response.setDateHeader("Expires", 1L);
			response.addHeader("Pragma", "no-cache");
			// Http 1.1 header
			response.setHeader("Cache-Control", "no-cache, no-store, max-age=0");
		}

		return response;
	}

}
