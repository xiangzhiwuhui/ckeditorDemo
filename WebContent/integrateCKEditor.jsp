<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
	 <form>
	    <textarea name="editor1" id="editor1" rows="10" cols="80"></textarea>
	</form>
</body>
</html>