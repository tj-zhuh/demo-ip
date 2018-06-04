

define(function (require) {

    var echarts = require('echarts');
    var putOn = require('putOn');
    var dao = require('dao');

    var ret = {
        chart: null
    };

    ret.getOption = function () {

        var __option__ = {

            title: '',
            legend: {
                data: dao.getChartData1()["legendData"]
            },
            tooltip:{},
            xAxis: {
                type: 'category',
                data: dao.getChartData1()["xaxisData"],
                axisLabel: {
                    interval: 0,
                    rotate:35
                }
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 3500,
                splitNumber:8
            },
            grid: {
                top:'10%',
                bottom:'30%'
            },
            series: [{
                type: 'bar',
                name: '日实际完成',
                data: dao.getChartData1()["data"][0]
            }, {
                type: 'bar',
                name: '日计划',
                data: dao.getChartData1()["data"][1]
            }]

        };

        __option__ = putOn.bar1(__option__);

        return __option__;
    }

    //
    ret.draw = function () {

        ret.chart = echarts.init(document.getElementById('chart1'));

        ret.chart.setOption(ret.getOption());

    }

    return ret;

})





















