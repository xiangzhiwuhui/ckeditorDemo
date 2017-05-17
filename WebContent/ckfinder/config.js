/*
Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
For licensing, see license.txt or http://cksource.com/ckfinder/license
*/

CKFinder.customConfig = function( config )
{
	// Define changes to default configuration here.
	// For the list of available options, check:
	// http://docs.cksource.com/ckfinder_2.x_api/symbols/CKFinder.config.html

	// Sample configuration options:
//	 config.uiColor = '#0AD4EB';
	// config.language = 'fr';
	// config.removePlugins = 'basket';
	config.skin = 'bootstrap';//设置皮肤
	//设置ckfinder的宽度和高度
//	config.width = '100px';
//	config.height = '600px';
	
	//配置文件上的缩略图标，图片位于 skins/[skinname]/images/icons文件夹下.下面的字母就是对应每个图片的名称
	config.fileIcons = 'ai|avi|bmp|cs|dll|doc|exe|fla|gif|jpg|js|mdb|mp3|ogg|pdf|ppt|rdp|swf|swt|txt|vsd|xls|xml|zip|mp4';
	
//	//当上传的文件没有所用的缩略图标时，使用本地操作系统的图标
//	config.useNativeIcons = true;
	
	
};
