

define(function (require) {

    var echarts = require('echarts');
    var putOn = require('putOn');
    var dao = require('dao');

    var ret = {
        chart: null
    };

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
    ret.getOption = function () {
        return {
            title: {
                text: ''
            },
            tooltip: {},
            series: [{
                name: '设备利用率',
                type: 'gauge',
                data: [{
                    name: "",
                    value: dao.getChartData1()
                }],
                min: 0,
                max: 100
            }]
        }
    }

    ret.draw = function () {

        ret.chart = echarts.init(document.getElementById('chart5'));

        var option = ret.getOption();

        option = putOn.gauge1(option);

        ret.chart.setOption(option);

    }

    return ret;

})





















