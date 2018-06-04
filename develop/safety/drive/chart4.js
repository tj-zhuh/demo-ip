

define(function (require) {

    var echarts = require('echarts');

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
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['作业活动', '设备实施', '工艺过程','场所环境'],
                textStyle: {
                    color: 'white'
                },
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '10%',
                top: '5%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    axisLabel: {
                        textStyle: {
                            color: 'white'
                        }
                    },
                    data: ['熔炼车间', '电解车间', '硫酸车间', '动力车间', '选矿车间']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'white'
                        }
                    },
                }
            ],
            series: [
                {
                    name: '作业活动',
                    type: 'bar',
                    barWidth: 50,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    stack: '车间',
                    data: [5, 3, 2, 3, 4]
                },
                {
                    name: '设备实施',
                    type: 'bar',
                    barWidth: 50,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    stack: '车间',
                    data: [6,4,4,2,5]
                },
                {
                    name: '工艺过程',
                    type: 'bar',
                    barWidth: 50,

                    label: {
                        normal: {
                            show: true
                        }
                    },
                    stack: '车间',
                    data: [3,2,3,1,2]
                },
                {
                    name: '场所环境',
                    type: 'bar',
                    barWidth: 50,

                    label: {
                        normal: {
                            show: true
                        }
                    },
                    stack: '车间',
                    data: [3,2,1,1,1]
                }
            ]
        };

    }


    ret.draw = function () {

        ret.chart = echarts.init(document.getElementById('chart4'));

        var option = ret.getOption();

        ret.chart.setOption(option);

    }

    return ret;

})
