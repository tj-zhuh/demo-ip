/*成本*/

define(function (require) {
    var $ = require('jquery');
    var dao = require("dao");
    var putOn = require('putOn');
    var echarts = require("echarts");

    var ret = {};

    ret.drawCharts = function() {
        var mychart = echarts.init(document.getElementById('chart2'));

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
                    data: [214.48,211.108,208.109,205.441],
                },
                {
                    name: '二氧化碳排放量',
                    type: 'line',
                    data: [441.937,430.482,423.143,175.327],
                },
                {
                    name: '氮氧化物浓度',
                    type: 'line',
                    data: [6.81,7.53,5.809,5.98],
                },
                {
                    name: '氮氧化物排放量',
                    type: 'line',
                    data: [14.031,15.355,11.811,5.104],
                },
                {
                    name: '烟尘浓度',
                    type: 'line',
                    data: [6.898,9.008,8.768,8.97],
                },
                {
                    name: '含氧量',
                    type: 'line',
                    data: [12.815,12.988,13.748,14.135],
                }
            ]
        };
        option = putOn.getAllDarked(option, true);

        mychart.clear();
        mychart.setOption(option);
    }



    return ret;
})