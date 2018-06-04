


define(function (require) {

    var tool = require('tool');

    var ret = {};

    //取随机数组工具函数(获得固定数量的数组型数据)
    function getRadomNums(nums, min, max) {
        var _temp = [];

        for (var i = 0; i < nums; i++) {
            var __temp__ = (min + (max - min) * Math.random()).toFixed(2);

            _temp.push(__temp__);
        }

        return _temp;
    }

    //获得一个随机数工具函数
    function getRandom(min, max) {
        var __temp__ = (min + (max - min) * Math.random()).toFixed(2);
        return __temp__;
    }

    //
    ret.getChartData1 = function () {

        return getRandom(0, 100)

    }

    ret.getChartData2 = function () {

        return {
            //legendData: ['看不清1', '看不清2'],
            xaxisData: tool.getDate({
                month: '6月',
                startDay: 1,
                endDay: 15,
                faller:'日'
            }),
            data: getRadomNums(15,10,100)
        }

    }

    ret.getChartData3 = function () {

        return getRandom(0, 100)

    }

    ret.getChartData4 = function () {

        return {
            //legendData: ['看不清1', '看不清2'],
            xaxisData: tool.getDate({
                month: '6月',
                startDay: 1,
                endDay: 15,
                faller: '日'
            }),
            data: getRadomNums(15, 10, 100)
        }

    }

    ret.getChartData5 = function () {

        return getRandom(0, 100)

    }

    ret.getChartData6 = function () {

        return {
            //legendData: ['看不清1', '看不清2'],
            xaxisData: tool.getDate({
                month: '6月',
                startDay: 1,
                endDay: 15,
                faller: '日'
            }),
            data: getRadomNums(15, 10, 100)
        }

    }








    ret.loadSelect = function (id, data) {

        for (var i = 0; i < data.length; i++) {
            var op = document.createElement('option');
            op.innerHTML = data[i];
            id.appendChild(op);
        }
    }

    ret.selectData1 = function () {
        return ['2011', '2012', '2013', '2014', '2015', '2016', '2017']
    }

    ret.selectData2 = function () {
        return ['按仓库', '按库房', '按地区', '按类型', '按负责人']
    }

    ret.selectData3 = function () {
        return ['原料仓库', '物资仓库', '大仓库1', '仓库2']
    }

    ret.selectData4 = function () {
        return ['柱状图', '折线图']
    }


    return ret;

})



















