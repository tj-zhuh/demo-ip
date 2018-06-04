; (function (root, factory) {
    if (typeof define == 'function' && define.amd) {
        define(function (require) { return factory(); })
    }
    else {
        root.putOn = factory()
    }
}(this, function () {

    var ret = {};

    //返回一个日期数组
    ret.getDate = function (obj) {

        var __temp__ = [];
        var i = 0;

        for (; i < (obj.endDay - obj.startDay+1) ; i++) {
            __temp__.push(obj.month + (obj.startDay+i).toString() + obj.faller);
        }

        return __temp__;

    }
    

    //nums:产生个数
    //timeA:前置数字
    //timeB:后置数字
    //linker:连接符
    ret.getConstantTimes = function (obj) {

        var __temp__ = [];
        var i = 0;

        for (; i < obj.nums; i++) {
            __temp__.push(obj.timeA + obj.linker + (obj.timeB+i));

        }

        return __temp__;

    }



    return ret;
}))