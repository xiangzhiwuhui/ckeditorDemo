<%@ page language="java" contentType="text/html; charset=UTF-8" 
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>显示ckeditor中的信息</title>
<!-- 
要想使文本中的代码高亮需要两步：
第一步：必须插入对应的js和css文件
第二步：初始化

详细用法参见：http://docs.ckeditor.com/#!/guide/dev_codesnippet
设置代码颜色可参见：http://sdk.ckeditor.com/samples/codesnippet.html
 -->
 
<!-- 第一步：必须插入对应的js和css文件 -->
<script type="text/javascript" src="${pageContext.request.contextPath }/ckeditor/plugins/codesnippet/lib/highlight/highlight.pack.js"></script>
<!-- 下面代码颜色样式文件，要和ckeditor中配置的一样，这样才能使后台编辑界面和前台显示结果一样 -->
<link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath }/ckeditor/plugins/codesnippet/lib/highlight/styles/monokai_sublime.css">

</head>
<body>
	<!-- 第二步：初始化 -->
	<script>hljs.initHighlightingOnLoad();</script>
	
	<%
	request.setCharacterEncoding("UTF-8"); 
	%>
	<div style="width:1100px;margin:0 auto;"><%=request.getParameter("editor1") %></div>
	
	
	
	<!-- 单篇文章使用文章中插入的分页符分页显示：代码开始 -->
	<div style="width:1100px; margin:0 auto;font-size:40px; color:red; text-align: center;">@下面是对上面文章分页显示(前提：上面的文章中有分页符)@</div>
	<%
	//文章中插入的分页符，使用该分页符作为字符串分割符
	String pageBreak = "<div style=\"page-break-after:always\"><span style=\"display:none\">&nbsp;</span></div>";
	String content = request.getParameter("editor1");//获取文章内容
	String[] newContent = content.split(pageBreak);//按照文章中插入的分页符对文章进行分割
	%>
	
	<%for(int i = 0; i < newContent.length; i++){ %>
	<div style="width:1100px;margin:0 auto;background:#ccc">第<%=i+1 %>页内容为：<%=newContent[i]%></div>
	<%} %>
	<!-- 单篇文章使用文章中插入的分页符分页显示：代码结束 -->
</body>
</html>



