

define(function (require) {

    var echarts = require('echarts');
    var dao = require('dao');
    var putOn = require('putOn');

    var ret = {
        chart: null
    };
    function getRadomNums(nums, min, max) {
        var _temp = [];

        for (var i = 0; i < nums; i++) {
            var __temp__ = (min + (max - min) * Math.random()).toFixed(2);

            _temp.push(__temp__);
        }

        return _temp;
    }


    //
    ret.getOption = function () {
        return {
            color: ['#44B7D3', '#E42B6D', '#F2E89B'],
            title: {
                text: ''
            },
            tooltip: {},
            legend: {},
            xAxis: {
                type: 'category',
                data: ['各种因素', '各种因素', '各种因素', '各种因素', '各种因素', '各种因素', '各种因素', '各种因素', '各种因素']
            },
            yAxis: [{
                type: 'value',
                min: 0,
                max: 40000,
            }],
            series: [{
                type: 'bar',
                name: '停机时间',
                data: getRadomNums(10, 10000, 40000),
                barMaxWidth: getPx(40)
            }, {
                type: 'bar',
                name: '停机次数',
                data: getRadomNums(10, 10000, 40000),
                barMaxWidth: getPx(40)
            }, {
                type: 'line',
                name: '累计百分比',
                data: getRadomNums(10, 10000, 40000),
                barMaxWidth: getPx(40),
                smooth:0.5
            }]
        }
    }


    ret.draw = function (x) {

        ret.chart = echarts.init(x);

        var option = ret.getOption();

        option = putOn.bar1(option);

        ret.chart.setOption(option);

    }

    return ret;

})





















