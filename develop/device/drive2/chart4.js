

define(function (require) {

    var echarts = require('echarts');
    var dao = require('dao');
    var putOn = require('putOn');

    var ret = {
        chart: null
    };


    //
    ret.getOption = function () {
        return {
            color:['#d2b061'],
            title: {
                text: ''
            },
            tooltip: {},
            legend: {},
            xAxis: {
                type: 'category',
                data: dao.getChartData4()["xaxisData"]
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 120,
                spliNumber: 6
            },
            series: [{
                type: 'bar',
                name: '维修成本(月)',
                data: dao.getChartData4()["data"],
                barMaxWidth: getPx(40)
            }]
        }
    }


    ret.draw = function () {

        ret.chart = echarts.init(document.getElementById('chart4'));

        var option = ret.getOption();

        option = putOn.bar1(option);

        ret.chart.setOption(option);

    }

    return ret;

})





















