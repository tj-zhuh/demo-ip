/*成本*/

define(function (require) {
    var $ = require('jquery');
    var dao = require("dao");
    var echarts = require("echarts");

    var ret = {};

    ret.drawCharts = function() {
        var mychart = echarts.init(document.getElementById('chart-bubble'));

        var option = {
            title: {
                show: false,
                text: '',
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['蒸汽温度', '蒸汽压力', '给水温度','给水压力','蒸汽总流量','焦炉煤气总流量','高炉煤气总流量','转炉煤气总流量'],
                right: '5%',
                textStyle: {
                    color: 'white'
                },
            },
            toolbox: {
                show: false,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: 'white'
                    }
                },
                data: ['2016/11/18-12:00', '2016/11/18-13:00', '2016/11/18-14:00', '2016/11/18-15:00', '2016/11/18-16:00', '2016/11/18-17:00', '2016/11/18-18:00']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: 'white'
                    }
                },
            },
            series: [
                {
                    name: '蒸汽温度',
                    type: 'line',
                    symbol: 'circle',
                    smooth: 0.5,
                    data: [520, 531, 540, 526, 550, 535, 527],
                },
                {
                    name: '蒸汽压力',
                    type: 'line',
                    symbol: 'circle',
                    smooth: 0.5,
                    data: [8.8, 9.5, 9.0, 10, 8.6, 9.0, 9.8],
                },
                {
                    name: '给水温度',
                    type: 'line',
                    symbol: 'circle',
                    smooth: 0.5,
                    data: [190, 220, 205, 210, 194, 224, 215],
                },
                {
                    name: '给水压力',
                    type: 'line',
                    symbol: 'circle',
                    smooth: 0.5,
                    data: [9.0, 9.3, 9.8, 9.1, 8.9, 9.5, 9.2],
                },
                {
                    name: '蒸汽总流量',
                    type: 'line',
                    symbol: 'circle',
                    smooth: 0.5,
                    data: [210, 220, 205, 210, 204, 219, 205],
                },
                {
                    name: '焦炉煤气总流量',
                    type: 'line',
                    symbol: 'circle',
                    smooth: 0.5,
                    data: [],
                },
                {
                    name: '高炉煤气总流量',
                    type: 'line',
                    symbol: 'circle',
                    smooth: 0.5,
                    data: [13, 15, 17, 14, 18, 12, 16],
                },
                {
                    name: '转炉煤气总流量',
                    type: 'line',
                    symbol: 'circle',
                    smooth: 0.5,
                    data: [1.3, 1.5, 1.4, 1.8, 1.2, 1.9, 1.7],
                }
            ]
        };

        mychart.clear();
        mychart.setOption(option);
    }



    return ret;
})