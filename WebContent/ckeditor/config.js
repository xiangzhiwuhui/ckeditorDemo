/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	 config.uiColor = '#0AD4EB';
	config.skin = 'kama';//定义界面的皮肤
	config.font_names='正文/正文;宋体/宋体;黑体/黑体;仿宋/仿宋_GB2312;楷体/楷体_GB2312;隶书/隶书;幼圆/幼圆;微软雅黑/微软雅黑;华文行楷/华文行楷 ;'+config.font_names; 
	
	//设置编辑器宽度和高度
	config.width = 1000;        //1000 pixels.
	config.height = 500;        // 500 pixels.
	
	//添加插件
	//代码片段，行高，单词计数，图表,图片旋转,界面颜色,html5播放器,公式编辑器
	config.extraPlugins = 'codesnippet,lineheight,wordcount,chart,imagerotate,uicolor,html5video,texzilla';
	
	//移除插件
	//保存按钮
	config.removePlugins = 'save'; 
	
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
    //overflow:auto;max-height:300px;
    
    
    
    
//	 //编辑器中回车产生的标签
//	config.enterMode = CKEDITOR.ENTER_P; //可选：CKEDITOR.ENTER_BR或CKEDITOR.ENTER_DIV
	
	//默认的字体名 plugins/font/plugin.js
//	config.font_defaultLabel = '华文行楷';
	
	 //字体默认大小 plugins/font/plugin.js
	config.fontSize_defaultLabel = '20px';
	
	//页面载入时，编辑框是否立即获得焦点 plugins/editingblock/plugin.js plugins/editingblock/plugin.js.
	config.startupFocus = true;
	
	 //当用户键入TAB时，编辑器走过的空格数，( ) 当值为0时，焦点将移出编辑框 plugins/tab/plugin.js
//	config.tabSpaces = 0;
	
	 //撤销的记录步数 plugins/undo/plugin.js
//	config.undoStackSize =20;
	
};
