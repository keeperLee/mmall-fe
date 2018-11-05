/*
* @Author: ASUS
* @Date:   2018-11-05 20:51:41
* @Last Modified by:   ASUS
* @Last Modified time: 2018-11-05 21:48:13
*/
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
    var type = _mm.getUrlParam('type') || 'default',
    $element = $('.'+type+'-success');
    //显示对应的提示元素
    $element.show();
});