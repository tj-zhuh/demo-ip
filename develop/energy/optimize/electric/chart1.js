

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
                text: '1#总降',
                textAlign: 'center',
                left:'50%'
            },
            tooltip: {
                trigger:'axis'
            },
            xAxis: {
                type: 'category',
                data: util.getConstantTimes({
                    timeA: 6,
                    timeB: 1,
                    linker: ':',
                    nums:20
                })
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 120
            },
            grid: {
                left: '5%',
                right: '5%',
                top: '12%',
                bottom:'12%'
            },
            series: [{
                type: 'line',
                name: '',
                data: getRadomNums(20, 10, 120),
                smooth: 0.5
            }]
        }
    }


    ret.draw = function () {

        if (ret.chart)
            ret.chart.clear();

        ret.chart = echarts.init(document.getElementById('chart1'));

        var option = ret.getOption();

        option = putOn.getAllDarked(option,true);

        ret.chart.setOption(option);

    }

    return ret;

})





















