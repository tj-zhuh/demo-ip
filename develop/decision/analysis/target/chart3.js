

define(function (require) {

    var echarts = require('echarts');
    var util = require('util');
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
            color: ['#61BCFD', '#87F0FE', '#CD93FF', '#9EEC75', '#FF9193', '#FEEB7D'],
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis',

            },
            legend: {
                data: ['熔炼车间', '倾动炉', '硫酸车间', '电解车间']
            },
            xAxis: {
                type: 'category',
                data: util.getMonths(11,1)
            },
            yAxis: {
                type: 'value',
                min: 2.0,
                max: 3.8,
                //interval:1,
                //axisLabel: {
                //    formatter: function (x) {
                //        if (x === 0)
                //            return '开始'

                //        return x+'日'
                //    },

                //}
            },
            grid: {
                top: '12%',
                bottom:'10%'
            },
            series: [{
                type: 'line',
                name: '熔炼车间',
                data: getRadomNums(11, 2.6, 3.8)
            }, {
                type: 'line',
                name: '倾动炉',
                data: getRadomNums(11, 2.6, 3.8)
            }, {
                type: 'line',
                name: '硫酸车间',
                data: getRadomNums(11, 2.6, 3.8)
            }, {
                type: 'line',
                name: '电解车间',
                data: getRadomNums(11, 2.6, 3.8)
            }]
        }
    }


    ret.draw = function (type) {

        if (ret.chart)
            ret.chart.clear();

        ret.chart = echarts.init(window.parent.document.getElementById('chart2'));

        var option = ret.getOption(type);
        option = putOn.getAllDarked(option, true);

        ret.chart.setOption(option, true);

    }

    return ret;

})





















