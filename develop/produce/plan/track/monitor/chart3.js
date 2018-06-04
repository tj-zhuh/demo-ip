

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
                data: dao.getChartData3()["legendData"],
                //textStyle: { color: '#fff' }
            },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: dao.getChartData3()["xaxisData"],
                axisLabel: {
                    interval: 0,
                    rotate: 35,
                    //textStyle: {
                    //    color: '#fff'
                    //}
                },
                axisLine: {
                    //lineStyle: { color: '#fff' }
                }
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 120,
                splitNumber: 10,
                axisLabel: {
                    //textStyle: {
                    //    color: '#fff'
                    //}
                },
                axisLine: {
                    //lineStyle: { color: '#fff' }
                },
            },
            grid: {
                top: '10%',
                bottom: '20%'
            },
            series: [{
                type: 'line',
                name: '干精矿品位(%)',
                data: dao.getChartData3()["data"][0]
            }, {
                type: 'line',
                name: '冰铜品位(%)',
                data: dao.getChartData3()["data"][1]
            }, {
                type: 'line',
                name: 'FF作业率(%)',
                data: dao.getChartData3()["data"][2]
            }, {
                type: 'line',
                name: '稀酸浓度(%)',
                data: dao.getChartData3()["data"][2]
            }]

        };

        __option__ = putOn.line1(__option__);

        return __option__;
    }

    //
    ret.draw = function () {

        ret.chart = echarts.init(document.getElementById('chart3'));


        var option = ret.getOption();
        option = putOn.getAllDarked(option, true);

        ret.chart.setOption(option);

    }

    return ret;

})





















