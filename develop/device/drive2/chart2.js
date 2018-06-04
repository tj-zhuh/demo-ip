

define(function (require) {

    var echarts = require('echarts');
    var dao = require('dao');
    var putOn = require('putOn');

    var ret = {
        chart:null
    };


    //
    ret.getOption = function () {
        return {
            //color:['#60abc1'],
            title: {
                text:''
            },
            tooltip: {},
            legend:{},
            xAxis: {
                type: 'category',
                data:dao.getChartData2()["xaxisData"]
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 120,
                spliNumber:6
            },
            series: [{
                type: 'bar',
                name: '标准能耗',
                data: dao.getChartData2()["data"],
                barMaxWidth:getPx(40)
            }]
        }
    }


    ret.draw = function () {

        ret.chart = echarts.init(document.getElementById('chart2'));

        var option = ret.getOption();

        option = putOn.bar1(option);

        ret.chart.setOption(option);

    }

    return ret;

})





















