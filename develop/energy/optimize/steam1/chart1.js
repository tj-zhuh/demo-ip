

define(function (require) {

    var echarts = require('echarts');
    var util = require('util');
    var putOn = require('putOn');
    var dao = require('dao');

    var ret = {
        chart:null
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
                text:''
            },
            tooltip: {},
            legend: {
                data:['用电','发电','购电','上网']
            },
            xAxis: {
                type: 'category',
                data: util.getConstantTimes({
                    timeA: 6,
                    timeB: 1,
                    linker: ':',
                    nums: 20
                })
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 1000
            },
            grid: {
                bottom: '10%',
                top:'10%'
            },
            series: [{
                type: 'line',
                name: '用电',
                data: getRadomNums(12, 100, 1000),
                smooth:0.5
            }, {
                type: 'line',
                name: '发电',
                data: getRadomNums(12, 100, 1000),
                smooth: 0.5
            }, {
                type: 'line',
                name: '购电',
                data: getRadomNums(12, 100, 1000),
                smooth: 0.5
            }, {
                type: 'line',
                name: '上网',
                data: getRadomNums(12, 100, 1000),
                smooth: 0.5
            }]
        }
    }


    ret.draw = function () {

        if (ret.chart)
            ret.chart.clear();

        ret.chart = echarts.init(document.getElementById('chart1'));

        var option = ret.getOption();
        option = putOn.getAllDarked(option, true);

        ret.chart.setOption(option);

    }

    return ret;

})





















