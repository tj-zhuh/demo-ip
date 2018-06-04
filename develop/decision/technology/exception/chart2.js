

define(function (require) {

    var echarts = require('echarts');
    var util = require('util');
    var putOn = require('putOn');
    var dao = require('dao');

    var ret = {
        chart: null
    };

    //取随机数组工具函数(获得固定数量的数组型数据)
    function getRadomNums(nums, min, max) {
        var _temp = [];

        for (var i = 0; i < nums; i++) {
            var __temp__ = (min + (max - min) * Math.random()).toFixed(2);

            _temp.push(__temp__);
        }

        return _temp;
    }

    //获得一个随机数工具函数
    function getRandom(min, max) {
        var __temp__ = (min + (max - min) * Math.random()).toFixed(2);
        return __temp__;
    }

    var dataCore = ['FF平均日处理精矿量', 'FF作业率', '平均日产阳极铜', 'EF、FF渣含铜', '固铍发生率', '转炉炉龄', '重油单耗', '液化气单耗', '熔炼窑烟尘排放浓度', '阳极铜合格率', '物理合格率']

    //
    ret.getOption = function () {
        return {
            color: ['#61BCFD', '#87F0FE', '#CD93FF', '#9EEC75', '#FF9193', '#FEEB7D'],
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis',

            },
            legend: {
               
            },
            xAxis: {
                type: 'category',
                data: dataCore,
                axisLabel: {
                    interval: 0,
                    rotate:45
                }
            },
            yAxis: {
                type: 'value',
                min: -20,
                max: 20,
                //interval:1,
                //axisLabel: {
                //    formatter: function (x) {
                //        if (x === 0)
                //            return '开始'

                //        return x+'日'
                //    },

                //}
            },
            grid: {
                bottom:'30%'
            },
            series: [{
                type: 'bar',
                name: '..',
                data: [0.26, 4.1, 1.2, -14.44, -3.07, 19.23, 2, 1.833, -18.75, 0, 2.04]
            }]
        }
    }


    ret.draw = function (type) {

        if (ret.chart)
            ret.chart.clear();

        ret.chart = echarts.init(document.getElementById('chart2'));

        var option = ret.getOption(type);
        option = putOn.getAllDarked(option, true);

        ret.chart.setOption(option, true);

    }

    return ret;

})





















