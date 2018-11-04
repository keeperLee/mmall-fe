/*
* @Author: ASUS
* @Date:   2018-11-04 17:06:39
* @Last Modified by:   ASUS
* @Last Modified time: 2018-11-04 18:57:52
*/
'use strict';
var conf = {
    serverHost  : ''
};
var _mm = {
    //网络请求
        request : function(param){
            var _this = this;
                $.ajax({
                        type :          param.method      || 'get',
                        url :             param.url              || ' ',
                        dataType :  param.type            || 'json',
                        data  :         param.data           || ' ',
                        success : function(res){
                                //请求成功
                                if(0===res.status){
                                        typeof param.success === 'function' && param.success(res.data,res.msg);
                                }//没有登录状态，需要强制登录
                                else if(10===res.status){
                                        _this.doLogin();
                                } else if(1===res.status){
                                        typeof param.error === 'function' && param.error(res.msg);
                                }
                        },
                        error   : function(err){
                                   typeof param.error === 'function' && param.error(err.statusText);
                        }
                });
        },
        //获取服务器地址
        getServerUrl  : function(path){
                return conf.serverHost + path;
        },
        //获取url参数
        getUrlParam :function(name){
                //happymmall.com/product/list?keyword=xxx&page=1
                var reg = new  RegExp('(^|&)' + name + '=([^&]*)(&|$)');
                var result = window.location.search.substr(1).match(reg);
                return result ? decodeURIComponent(result[2]) : null;
        },
        //统一登录处理
        doLogin     : function(){
                window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
        }
};
module.exports = _mm;