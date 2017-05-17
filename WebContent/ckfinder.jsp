<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <!-- 第一步：添加ckfinder标签库引用 -->
 <%@ taglib uri="http://cksource.com/ckfinder"  prefix="ckfinder"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<!-- 
创建ckfinder浏览器只需两步：
第一步：添加ckfinder标签库引用：<%@ taglib uri="http://cksource.com/ckfinder"  prefix="ckfinder"%>

第二步：在正文中添加标签：<ckfinder:ckfinder basePath="/ckeditorDemo/ckfinder/" />
其中，basePath值为ckfinder所在项目中的路径。

 -->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>CKFinder例子--文件浏览器</title>
</head>
<body>
<!-- 第二步：在正文中添加标签 -->
<ckfinder:ckfinder basePath="/ckeditorDemo/ckfinder/" />
</body>
</html>