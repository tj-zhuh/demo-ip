

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
                show: false,
                text: '生产进度展示'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: []
            },
            grid: {
                top: '3%',
                left: '3%',
                right: '4%',
                bottom: '13%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    textStyle: {
                        color: 'white'
                    }
                },
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                axisLabel: {
                    textStyle: {
                        color: 'white'
                    }
                },
                data: ['粗铜(生产)', '粗铜(销售)', '阳极铜(生产)', '阳极铜(销售)', '阴极铜(生产)', '阴极铜(销售)', '黄金(生产)', '黄金(销售)', '白银(生产)', '白银(销售)', '硫酸(生产)', '硫酸(销售)']
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    barWidth: '15px',
                    itemStyle: {
                        normal: {
                            color: '#60ABC1',
                        }
                    },
                    data: ['90', '55', '85', '95', '73', '80', '30', '40', '50', '50', '30', '60']
                }
            ]
        };


    }


    ret.draw = function () {

        ret.chart = echarts.init(document.getElementById('chart1'));

        var option = ret.getOption();

        ret.chart.setOption(option);

    }

    return ret;

})





















