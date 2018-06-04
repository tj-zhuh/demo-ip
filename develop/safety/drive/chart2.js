

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
            title: {
                text: '',
                show: false
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '15%',
                top: '20%',
                //containLabel: true
            },
            toolbox: {
                show: false
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    animation: false,
                    label: {
                        backgroundColor: '#505765'
                    }
                }
            },
            legend: {
                //data: ['二氧化碳排放总量（吨）', '氮氧化物排放总量（吨）', '二氧化硫排放占比（%）', '氮氧化物排放总量（%）'],
                data: [{
                    name: '二氧化碳排放总量（吨）',
                    icon: 'circle',
                }, {
                    name: '氮氧化物排放总量（吨）',
                    icon: 'circle',
                }, {
                    name: '二氧化硫排放占比（%）',
                    icon: 'reac',
                }, {
                    name: '氮氧化物排放总量（%）',
                    icon: 'reac',
                }],
                textStyle: {
                    color: 'white'
                },
                x: 'center'
            },
            xAxis: [
                {
                    type: 'category',
                    axisLabel: {
                        //rotate: 90,
                        //interval: 0,
                        textStyle: {
                            color: 'white'
                        }
                    },
                    //boundaryGap : false,
                    //axisLine: {onZero: false},
                    data: ['6月19日', '6月20日', '6月21日', '6月22日', '6月23日', '6月24日', '6月25日', '6月26日', '6月27日', '6月28日']
                }
            ],
            yAxis: [
                {
                    name: '排放总量(吨)',
                    type: 'value',
                    nameTextStyle :{
                        color: 'white'
                    },
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            color: 'white'
                        }
                    },
                    max: 1
                },
                {
                    name: '排放占比(%)',
                    nameTextStyle: {
                        color: 'white'
                    },
                    //nameLocation: 'start',
                    max: 100,
                    axisLabel: {
                        textStyle: {
                            color: 'white'
                        }
                    },
                    type: 'value',
                    //inverse: false
                }
            ],
            series: [
                {
                    name: '二氧化碳排放总量（吨）',
                    type: 'line',
                    animation: false,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    data: ['0.592767', '0.606135', '0.762485', '0.656684', '0.555508', '0.681067', '0.660712', '0.415296', '0.65998', '0.668577']
                },
                {
                    name: '氮氧化物排放总量（吨）',
                    type: 'line',
                    animation: false,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    data: ['0.193507', '0.183269', '0.186913', '0.177118', '0.143768', '0.198353', '0.200184', '0.177879', '0.139209', '0.231766']
                },
                {
                    name: '二氧化硫排放占比（%）',
                    type: 'bar',
                    animation: false,
                    yAxisIndex: 1,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    data: ['75.39', '76.78', '80.31', '78.76', '79.44', '77.45', '76.75', '70.01', '82.58', '74.26']
                },
                {
                    name: '氮氧化物排放总量（%）',
                    type: 'bar',
                    animation: false,
                    yAxisIndex: 1,
                    lineStyle: {
                        normal: {
                            width: 1
                        }
                    },
                    data: ['24.61', '23.22', '19.69', '21.24', '20.56', '22.55', '23.25', '29.99', '17.42', '25.74']
                }
            ]
        };

    }


    ret.draw = function () {

        ret.chart = echarts.init(document.getElementById('chart2'));

        var option = ret.getOption();

        ret.chart.setOption(option);

    }

    return ret;

})
