/*
* @Author: ASUS
* @Date:   2018-11-03 10:36:56
* @Last Modified by:   ASUS
* @Last Modified time: 2018-11-11 10:44:50
*/
require('./index.css');
require('page/common/nav-simple/index.js');
var _user = require('service/user-service.js');
var _mm = require('util/mm.js');

//表单里面的错误提示
var formEorror = {
        show  :function(errMsg){
            $('.error-item').show().find('.err-msg').text(errMsg);
        },
         hide  :function(errMsg){
            $('.error-item').hide().find('.err-msg').text('');
        }
};

//page逻辑部分
var page = {
    init : function(){
            this.bindEvent();
    },
    bindEvent : function(){

            var _this = this;
            //登录按钮的点击
            $('#submit').click(function(){
                    _this.submit();
            });
            //如果按下回车，也进行提交
            $('.user-content').keyup(function(e){
                    if(keyCode === 13){
                        _this.submit();
                    }
            });
    },
    //提交表单
    submit  : function(){
            var formData = {
                username  :  $.trim($('#username').val()),
                password  :  $.trim($('#password').val())
            },
            //表单验证结果
            validateResult = this.formValidate(formData);

            //验证成功
            if(validateResult.status){
                //提交
                _user.login(formData,function(res){
                    window.location.href = _mm.getUrlParam('redirect') || './index.html';
                },function(errMsg){
                    formEorror.show(errMsg);
                });
            }//验证失败
            else{
                    //错误提示
                     formEorror.show(validateResult.msg);
            }
    },
    //表单字段的验证
    formValidate  : function(formData){
            var result = {
                status : false,
                msg    : ' '
            };
            if(!_mm.validata(formmData.username,'require')){
                    result.msg = '用户名不能为空';
                    return result;
            }
            if(!_mm.validata(formmData.password,'require')){
                    result.msg = '密码不能为空';
                    return result;
            }

            //通过验证返回正确提示
            result.status = true;
            result.msg = '验证通过';
            return result;
    }
};
$(function(){
    page.init();
});
