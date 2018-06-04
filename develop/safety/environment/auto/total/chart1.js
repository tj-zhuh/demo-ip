/*成本*/

define(function (require) {
    var $ = require('jquery');
    var dao = require("dao");
    var echarts = require("echarts");

    var ret = {};

    ret.drawCharts = function() {
        var mychart = echarts.init(document.getElementById('chart1'));

        var option = {
            title: {
                show: false,
                text: '',
            },
            tooltip: {
                trigger: 'axis',
                formatter: '{b}<br />{a0}: {c0}吨<br /> {a1}: {c1}吨'
            },
            legend: {
                data: ['二氧化硫排放总量', '氮氧化物排放总量'],
                textStyle: {
                    color: 'white'
                },
                right: '5%'
            },
            toolbox: {
                show: false,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    //rotate: 90,
                    //interval: 0,
                    textStyle: {
                        color: 'white'
                    }
                },
                data: ['6月19日', '6月20日', '6月21日', '6月22日', '6月23日', '6月24日', '6月25日', '6月26日', '6月27日', '6月28日']
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    //rotate: 90,
                    //interval: 0,
                    textStyle: {
                        color: 'white'
                    }
                },
            },
            series: [
                {
                    name: '二氧化硫排放总量',
                    type: 'line',
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: 'blue',
                        }
                    },
                    data: ['0.592767', '0.606135', '0.762485', '0.656684', '0.555508', '0.681067', '0.660712', '0.415296', '0.65998', '0.668577'],
                },
                {
                    name: '氮氧化物排放总量',
                    type: 'line',
                    symbol: 'circle',
                    itemStyle: {
                        normal: {
                            color: 'red',
                        }
                    },
                    data: ['0.193507', '0.183269', '0.186913', '0.177118', '0.143768', '0.198353', '0.200184', '0.177879', '0.139209', '0.231766'],
                }
            ]
        };

        mychart.clear();
        mychart.setOption(option);
    }



    return ret;
})