

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
            color:['#009e82'],
            title: {
                text: ''
            },
            tooltip: {},
            legend: {},
            xAxis: {
                type: 'category',
                data: dao.getChartData6()["xaxisData"]
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 120,
                spliNumber: 6
            },
            series: [{
                type: 'line',
                name: '非计划停机时间',
                data: dao.getChartData6()["data"],
               
            }]
        }
    }


    ret.draw = function () {

        ret.chart = echarts.init(document.getElementById('chart6'));

        var option = ret.getOption();

        option = putOn.line2(option);
        option = putOn.getAllDarked(option, true);

        ret.chart.setOption(option);

    }

    return ret;

})





















