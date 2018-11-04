/*
* @Author: ASUS
* @Date:   2018-11-05 00:04:23
* @Last Modified by:   ASUS
* @Last Modified time: 2018-11-05 00:17:07
*/
var _mm = require('util/mm.js');
var _user = {
     //检查登录状态
    logout  :   function(resolve,reject){
        _mm.request({
                url :   _mm.getServerUrl('/user/get_user_info.do'),
                method :  'POST',
                success     :  resolve,
                error   :       reject,
        });
    },
    //登出
    logout  :   function(resolve,reject){
        _mm.request({
                url :   _mm.getServerUrl('/user/logout.do'),
                method :  'POST',
                success     :  resolve,
                error   :       reject,
        });
    }
}
module.exports = user;