

define(function (require) {

    var echarts = require('echarts');
    var dao = require('dao');

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
                axisLabel: {
                    textStyle: {
                        color: 'white'
                    }
                },
                data: ['精矿', '氧化矿', '石英砂', '石灰石粉', '杂铜', '活性焦']
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    textStyle: {
                        color: 'white'
                    }
                },
            },
            series: [{
                type: 'bar',
                name: '存量',
                itemStyle: {
                    normal: {
                        color: '#60ABC1',
                    }
                },
                data: [1200,1500,1800,1000,1400,1700],
                barMaxWidth:getPx(80)
            }]
        }
    }


    ret.draw = function () {

        ret.chart = echarts.init(document.getElementById('chart2'));

        var option = ret.getOption();

        ret.chart.setOption(option);

    }

    return ret;

})
