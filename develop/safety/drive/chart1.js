

define(function (require) {

    var echarts = require('echarts');

    var ret = {
        chart:null
    };


    //
    ret.getOption = function () {
        return {
            color: ['#61A0A8'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                bottom: '15%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['安全事故及时处理率', '安全培训覆盖率'],
                    axisLabel: {
                        //rotate: 90,
                        //interval: 0,
                        textStyle: {
                            color: 'white'
                        }
                    },
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        //rotate: 90,
                        //interval: 0,
                        textStyle: {
                            color: 'white'
                        }
                    },
                    splitLine: {
                        show: false,
                    },
                    max: 120
                }
            ],
            series: [
                {
                    name: '数据',
                    type: 'bar',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    markLine: {
                        data: [{
                            name: '目标值',
                            yAxis: 100
                        }],
                        label: {
                            normal: {
                                position: 'middle',
                                formatter: "{b}: {c}%"
                            }
                        },
                        textStyle: {
                            normal: {
                                color: 'white'
                            }
                        }
                    },
                    barWidth: '40%',
                    data: [ 99, 99]
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





















