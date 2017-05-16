
$(function(){

	 var editor = null;
	 
	//参数‘editor1’是textarea元素的name属性值，而非id属性值
	 editor = CKEDITOR.replace('editor1',
	    {//width:1000, 
		 //height:500,
		 //extraPlugins: 'codesnippet,lineheight',
		 codeSnippet_theme: 'monokai_sublime'}); 
	 
	 //config.language = 'zh-cn';//定义编辑器界面显示的语言
	 editor.setUiColor('#0AD4EB');//设置界面颜色
	 //为编辑器中的内容设定初始值
	 //editor.setData('智德电子有限公司');
	 
	 //获取编辑器中的值
	 //editor.getData();
	 
 	 //将editor中的值放入textarea中,因为在editor中编辑 的值
	 //并没有放在textarea中，用此方法将编辑器中的值放入textare中
//	 editor.updateElement(); 
	 
	 //设置UI颜色为黄色
//	 editor.setUiColor('#BDE31E');
	 
	 CKFinder.setupCKEditor( editor, '/ckeditorDemo/ckfinder/' );
	 
});