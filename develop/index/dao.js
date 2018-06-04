
define(function (require) {

    var $ = require('jquery');
    var menuData = require('./fake/menu'); 

    var ret = {};

    ret.getMenu = function (callback) {
        callback(menuData);
    } 

    return ret;

})
