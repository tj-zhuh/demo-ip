

define(function (require) {

    var echarts = require('echarts');
    var dao = require('dao');

    var ret = {
        chart: null
    };

    //取随机数组工具函数
    var getRadomNums = function (nums, min, max) {
        var _temp = [];

        for (var i = 0; i < nums; i++) {
            var __temp__ = (min + (max - min) * Math.random()).toFixed(2);

            _temp.push(__temp__);
        }

        return _temp;
    }

    //
    ret.getOption = function () {
        return {
            title: {
                text: ''
            },
            tooltip: {
                show: true
            },
            legend: {
                data: ['阴极铜', '黄金', '白银'],
                right: '3%',
                top: '5%',
                textStyle: {
                    color: 'white'
                },
                orient: 'vertical'
            },
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
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
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
                type: 'line',
                name: '阴极铜',
                itemStyle: {
                    normal: {
                        color: '#60ABC1',
                    }
                },
                data: getRadomNums(12, 0, 1500),
                barMaxWidth: getPx(80)
            }, {
                type: 'line',
                name: '黄金',
                //itemStyle: {
                //    normal: {
                //        color: '#60ABC1',
                //    }
                //},
                data: getRadomNums(12, 0, 1500),
                barMaxWidth: getPx(80)
            }, {
                type: 'line',
                name: '白银',
                //itemStyle: {
                //    normal: {
                //        color: '#60ABC1',
                //    }
                //},
                data: getRadomNums(12, 0, 1500),
                barMaxWidth: getPx(80)
            }]
        }
    }


    ret.draw = function () {

        ret.chart = echarts.init(document.getElementById('chart4'));

        var option = ret.getOption();

        ret.chart.setOption(option);

    }

    return ret;

})
