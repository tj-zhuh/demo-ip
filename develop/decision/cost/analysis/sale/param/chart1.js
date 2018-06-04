

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
                show: false,
                text: '',
                x: 'left'
            },
            //color: ['red', 'blue', 'yellow', 'black', 'green', 'gray', 'purple'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                right: '10%',
                data: ['客户A', '客户B', '客户C', '客户D', '客户E', '客户F', '客户G',]
            },
            series: [
                {
                    name: 'TOP10客户',
                    type: 'pie',
                    radius: [ '40%', '80%'],
                    center: ['50%', '50%'],
                    data: [
                        { value: 535, name: '客户A' },
                        { value: 432, name: '客户B' },
                        { value: 228, name: '客户C' },
                        { value: 245, name: '客户D' },
                        { value: 250, name: '客户E' },
                        { value: 453, name: '客户F' },
                        { value: 508,  name: '客户G' }
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
                    silent: 1,
                    labelLine: {
                        normal: {
                            show: 0
                        }
                    },
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

        ret.chart = echarts.init(document.getElementById('chart1'));

        var option = ret.getOption();
        option = putOn.getAllDarked(option, 0);

        ret.chart.setOption(option);

    }

    return ret;

})





















