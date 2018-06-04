

define(function (require) {

    var echarts = require('echarts');
    var dao = require('dao');
    var putOn = require('putOn');

    var ret = {
        chart:null
    };


    ret.getOption = function () {
        return {
            title: {
                show: false,
                text: '',
                x: 'left'
            },
            color: ['#749F83', '#CA8622'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                right: '10%',
                top: '10%',
                data: ['新产品', '传统产品' ]
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '80%'],
                    center: ['50%', '50%'],
                    data: [
                        { value: 56040, name: '新产品' },
                        { value: 83291, name: '传统产品' },
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                },
                {
                    type: 'pie',
                    name: '',
                    radius: ['40%', '50%'],
                    labelLine: {
                        normal: {
                            show: 0
                        }
                    },
                    silent: 1,
                    data: [1],
                    itemStyle: {
                        normal: {
                            color: '#000',
                            opacity: 0.3
                        }
                    }
                }
            ]
        };

    }


    ret.draw = function () {

        ret.chart = echarts.init(document.getElementById('chart3'));

        var option = ret.getOption();
        option = putOn.getAllDarked(option, 0);

        ret.chart.setOption(option);

    }

    return ret;

})





















