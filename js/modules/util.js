; (function (root, factory) {
    if (typeof define == 'function' && define.amd) {
        //require.config({
        //    paths: {
        //        "utilAlert": "../../../../../../js/modules/utilFuncs/utilAlert",

        //    }
        //})
        define(function (require) {
            //var utilAlert = require('utilAlert');

            return factory();
        })
    }
    else {
        root.util = factory()
    }
}(this, function (utilAlert) {

    var __theWantedFunction__ = {};

    //统合alert方法
    //__theWantedFunction__.alert = utilAlert;

    //返回一个日期数组
    __theWantedFunction__.getDate = function (obj) {

        var __temp__ = [];
        var i = 0;

        for (; i < (obj.endDay - obj.startDay + 1) ; i++) {
            __temp__.push(obj.month + (obj.startDay + i).toString() + obj.faller);
        }

        return __temp__;

    }


    //nums:产生个数
    //timeA:前置数字
    //timeB:后置数字
    //linker:连接符
    __theWantedFunction__.getConstantTimes = function (obj) {

        var __temp__ = [];
        var i = 0;

        for (; i < obj.nums; i++) {
            __temp__.push(obj.timeA + obj.linker + (obj.timeB + i));

        }

        return __temp__;

    }


    //nums:几个
    //x:什么
    __theWantedFunction__.getSameArray = function (nums, x) {
        var _temp = [];
        var i=0;
        for (; i < nums; i++) {
            _temp.push(x)
        }
        return _temp;
    }

    //nums:几个
    //起始月份
    __theWantedFunction__.getMonths = function (nums, startM) {

        var _temp = [];
        var i = 0,j;

        for (; i < nums; i++) {
            j = startM + i;
            if (j <= 12) {
                _temp.push(j + '月');
            }

            else {
                j = j - 12;
                _temp.push(j + '月');
            }
        }
        return _temp;
    }

    //返回一个数组
    //
    //
    __theWantedFunction__.getArray = function (nums, start) {

        var _temp = [];
        var j = start;

        for (var i = 0; i < nums; i++) {
            
            if (j>nums) {
                j = j - nums;
                _temp.push(j);
            }
            else {
                _temp.push(j);
            }

            j++;
        }

        return _temp;

    }






    return __theWantedFunction__;

}))