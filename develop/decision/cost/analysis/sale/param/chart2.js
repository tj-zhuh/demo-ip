

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
                data:['阳极铜','阴极铜','硫酸','矿产粗铜','黄金','白银','其他']
            },
            yAxis: {
                type: 'value',
            },
            series: [{
                type: 'bar',
                name: '金额',
                data: ['535', '432', '228', '245', '250', '453', '58'],
                barMaxWidth:getPx(80)
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





















