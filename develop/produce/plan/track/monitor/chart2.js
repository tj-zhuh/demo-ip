

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
                data: dao.getChartData2()["legendData"]
            },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: dao.getChartData2()["xaxisData"],
                axisLabel: {
                    interval: 0,
                    rotate: 35
                }
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 90000,
                splitNumber: 10
            },
            grid: {
                top: '10%',
                bottom: '30%'
            },
            series: [{
                type: 'bar',
                name: '计划完成',
                data: dao.getChartData2()["data"][0]
            }, {
                type: 'bar',
                name: '月累计完成',
                data: dao.getChartData2()["data"][1]
            }, {
                type: 'bar',
                name: '月计划',
                data: dao.getChartData2()["data"][2]
            }]

        };

        __option__ = putOn.bar2(__option__);

        return __option__;
    }

    //
    ret.draw = function () {

        ret.chart = echarts.init(document.getElementById('chart2'));

        ret.chart.setOption(ret.getOption());

    }

    return ret;

})





















