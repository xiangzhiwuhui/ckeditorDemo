/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	
	
//	//配置工具栏按钮
//	config.plugins = 'dialogui,dialog,a11yhelp,about,basicstyles,bidi,blockquote,clipboard,button,panelbutton,panel,floatpanel,colorbutton,colordialog,menu,contextmenu,copyformatting,dialogadvtab,div,elementspath,enterkey,entities,popup,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,format,forms,horizontalrule,htmlwriter,iframe,image,indent,indentblock,indentlist,justify,menubutton,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastefromword,pastetext,preview,print,removeformat,resize,save,scayt,selectall,showblocks,showborders,smiley,sourcearea,specialchar,stylescombo,tab,table,tabletools,templates,toolbar,undo,wsc,wysiwygarea';
	
	config.uiColor = '#0AD4EB';
	config.skin = 'kama';//定义界面的皮肤
	config.font_names='正文/正文;宋体/宋体;黑体/黑体;仿宋/仿宋_GB2312;楷体/楷体_GB2312;隶书/隶书;幼圆/幼圆;微软雅黑/微软雅黑;华文行楷/华文行楷 ;'+config.font_names; 
	
	//设置编辑器宽度和高度
	config.width = 1100;        //1000 pixels.
	config.height = 500;        // 500 pixels.
	
	//添加插件
	//代码片段，行高，单词计数，图表,图片旋转,界面颜色,html5播放器,公式编辑器,网页截图工具
	config.extraPlugins = 'codesnippet,lineheight,wordcount,chart,imagerotate,uicolor,html5video,texzilla,page2images';
	
	//移除插件,多个插件之间逗号分隔
	//移除语言按钮
	config.removePlugins = 'language'; 
	
	//移除工具栏上的按钮
	//单个插件可能定义了一组按钮，使用下面的方式可以只移除该插件中的几个按钮。例如移除forms插件中的表单按钮
	//移除按钮的具体名称，可参看①
	config.removeButtons = 'Form';
	
//	//①下面为工具栏中按钮的名称
	
//	config.toolbar = 'Full';
//
//	config.toolbar_Full =
//
//	[
//
//	    { name: 'document', items : [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },
//
//	    { name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
//
//	    { name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
//
//	    { name: 'forms', items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 
//
//	        'HiddenField' ] },
//
//	    '/',
//
//	    { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
//
//	    { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv',
//
//	    '-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
//
//	    { name: 'links', items : [ 'Link','Unlink','Anchor' ] },
//
//	    { name: 'insert', items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ] },
//
//	    '/',
//
//	    { name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
//
//	    { name: 'colors', items : [ 'TextColor','BGColor' ] },
//
//	    { name: 'tools', items : [ 'Maximize', 'ShowBlocks','-','About' ] }
//
//	];
	
	
	
	
	//自定义表情
	//自定义表情的放置目录  
	config.smiley_path= 'ckeditor/plugins/smiley/paopao/';
    //设置对话框一行显示几个表情  
    config.smiley_columns = 4;  
    //设置对话框表情  每一个表情的名字 
    config.smiley_images = ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png'
                            ,'9.png','10.png','11.png','12.png','13.png','14.png','15.png','16.png'
                            ,'17.png','18.png','19.png','20.png','21.png','22.png','23.png','24.png'
                            ,'25.png','26.png','27.png','28.png','29.png','30.png','31.png','32.png'
                            ,'33.png','34.png','35.png','36.png','37.png','38.jpg','39.png','40.png'
                            ,'41.png','42.png','43.png','44.png','45.png','46.png','47.png','48.png'];
	
    config.smiley_descriptions = [
                                  '1','2','3','4','5','6','7','8',
                                  '9','10','11','12','13','14','15','16',
                                  '17','18','19','20','21','22','23','23',
                                  '25','25','27','28','29','30','31','32',
                                  '33','34','35','36','37','38','39','40',
                                  '41','42','43','44','45','46','47','48'
                              ];
    //注意：当表情过多时，一次就会显示不下，这样需要设置/ckeditor/ckeditor.js文件，找到cke_dialog_body属性，添加属性值
    //overflow:auto;max-height:300px;由于所有的对话框都这个样式，所以要设置下最大宽度和最大高度。例如本项目中设置为：
    //overflow:auto;max-height:500px;max-width:500px;
    
//    /*将word中的文档粘贴到ckeditor中，保留格式设置*/
//	 //是否强制复制来的内容去除格式 plugins/pastetext/plugin.js
//	 config.forcePasteAsPlainText =false;//不去除
//	 //是否使用等标签修饰或者代替从word文档中粘贴过来的内容 plugins/pastefromword/plugin.js
//	 config.pasteFromWordKeepsStructure = false;
//	 //从word中粘贴内容时是否移除格式 plugins/pastefromword/plugin.js
//	 config.pasteFromWordRemoveStyle = false;
//	 config.pasteFromWordRemoveFontStyles = false;
//
//	 //将Word中的文档粘贴到ckeditor中后，没有了段首缩进效果格式解决办法
//	 config.allowedContent = true;
//	 config.format_p = { element: 'p', attributes: { 'class': 'normalPara' } };
    
    
//    config.enterMode = CKEDITOR.ENTER_BR;//  屏蔽换行符<br> 
//	config.shiftEnterMode = CKEDITOR.ENTER_P;//屏蔽段落<p>
    
    
//	 //编辑器中回车产生的标签
//	config.enterMode = CKEDITOR.ENTER_P; //可选：CKEDITOR.ENTER_BR或CKEDITOR.ENTER_DIV
	
	//默认的字体名 plugins/font/plugin.js
//	config.font_defaultLabel = '华文行楷';
	
	 //字体默认大小 plugins/font/plugin.js
//	config.fontSize_defaultLabel = '20px';
	
	//页面载入时，编辑框是否立即获得焦点 plugins/editingblock/plugin.js plugins/editingblock/plugin.js.
	config.startupFocus = true;
	
	 //当用户键入TAB时，编辑器走过的空格数，( ) 当值为0时，焦点将移出编辑框 plugins/tab/plugin.js
//	config.tabSpaces = 0;
	
	 //撤销的记录步数 plugins/undo/plugin.js
//	config.undoStackSize =20;
	
};
