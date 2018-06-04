

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
            title: {
                text:''
            },
            tooltip: {},
            legend: {},
            grid: {
                top: '10%',
                left: '10%',
                bottom: '20%',
                right: '10%'
            },
            xAxis: {
                type: 'category',
                data:['自产矿','国内矿','外购粗铜']
            },
            yAxis: {
                type: 'value',
            },
            series: [{
                type: 'bar',
                name: '数量',
                data: ['147747','84502','13901'],
                barMaxWidth:getPx(150)
            }]
        }
    }


    ret.draw = function () {

        ret.chart = echarts.init(document.getElementById('chart1'));

        var option = ret.getOption();

        option = putOn.bar1(option);

        ret.chart.setOption(option);

    }

    return ret;

})





















