/*成本*/

define(function (require) {
    var $ = require('jquery');
    var dao = require("dao");
    var echarts = require("echarts");
    var putOn = require('putOn');

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
            },
            legend: {
                data: ['二氧化碳浓度', '二氧化碳排放量', '氮氧化物浓度', '氮氧化物排放量', '氮氧化物排放量', '含氧量'],
                right: '5%'
            },
            toolbox: {
                show: false,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2017/6/27', '2017/6/28', '2017/6/29', '2017/6/30']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '二氧化碳浓度',
                    type: 'line',
                    data: [30.383,20.29,29.66],
                },
                {
                    name: '二氧化碳排放量',
                    type: 'line',
                    data: [173.039, 194.25,167.359],
                },
                {
                    name: '氮氧化物浓度',
                    type: 'line',
                    data: [15.932,19.238,14.508],
                },
                {
                    name: '氮氧化物排放量',
                    type: 'line',
                    data: [90.74,184.176,81.861],
                },
                {
                    name: '烟尘浓度',
                    type: 'line',
                    data: [5.397,5.019,4.342],
                },
                {
                    name: '含氧量',
                    type: 'line',
                    data: [20.165,20.211,20.056],
                }
            ]
        };
        option = putOn.getAllDarked(option, true);

        mychart.clear();
        mychart.setOption(option);
    }



    return ret;
})