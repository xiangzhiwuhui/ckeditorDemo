<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- 第一步：加入两个标签库引用 -->
<%@ taglib uri="http://ckeditor.com" prefix="ckeditor" %>
<%@ taglib uri="http://cksource.com/ckfinder"  prefix="ckfinder"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>CKEditor和CKFinder集成</title>

<!-- 导入js -->
<script type="text/javascript" src="${pageContext.request.contextPath }/script/jquery-1.8.2.js"></script>

<script type="text/javascript" src="${pageContext.request.contextPath }/ckeditor/ckeditor.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/ckfinder/ckfinder.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/script/ckeditor1.js"></script>

</head>
<body>
<!-- 第一种集成ckfinder的方法 -->
<div style="width: 65%;margin:0 auto;">
	<form id="editorForm" name="editorForm" method="post" action="show.jsp" target="_blank">
	    <textarea name="editor1" id="editor1"></textarea>
	    <!-- <textarea name="editor1" id="editor1" rows="10" cols="80"></textarea> -->
	    <input type="submit" name="show" id="show" value="展示">
	</form>
</div>
<!-- 第二种集成ckfinder的方法 -->
<!-- 
第二种方法集成分两步：
第一步：加入两个标签库引用
第二步：加入集成标签
 -->
<!-- 第二步：加入集成标签 -->
<!--  

<form action="getContent" method="get">
	<textarea cols="80" id="editor2" name="editor2" rows="10"></textarea>				
	<input type="submit" value="Submit" />
</form>
<ckfinder:setupCKEditor basePath="/ckeditorDemo/ckfinder/" editor="editor2" />
<ckeditor:replace replace="editor2" basePath="/ckeditorDemo/ckeditor/" />

-->

</body>
</html>