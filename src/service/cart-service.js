/*
* @Author: ASUS
* @Date:   2018-11-05 00:22:12
* @Last Modified by:   ASUS
* @Last Modified time: 2018-11-05 00:27:10
*/
var _mm = require('util/mm.js');
var _cart = {
    
    //获取购物车数量
    getCartCount  :   function(resolve,reject){
        _mm.request({
                url :   _mm.getServerUrl('/cart/get_cart_product_count.do'),
                success     :  resolve,
                error   :       reject,
        });
    }
}
module.exports = _cart;