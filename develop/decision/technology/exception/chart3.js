

define(function (require) {

    var echarts = require('echarts');
    var util = require('util');
    var dao = require('dao');
    var putOn = require('putOn');

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

    //
    ret.getOption = function () {
        return {
            color: ['#61BCFD', '#87F0FE', '#CD93FF', '#9EEC75', '#FF9193', '#FEEB7D'],
            title: {
                text: '管路消耗量'
            },
            tooltip: {
                trigger: 'axis',

            },
            legend: {
                //data: ['管路1', '管路2', '管路3', '管路4', '管路5', '管路6', '管路7', '管路8', '管路9']
            },
            xAxis: {
                type: 'category',
                data: ['管路1', '管路2', '管路3', '管路4', '管路5', '管路6', '管路7', '管路8', '管路9']
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 300,
                //interval:1,
                //axisLabel: {
                //    formatter: function (x) {
                //        if (x === 0)
                //            return '开始'

                //        return x+'日'
                //    },

                //}
            },
            series: [{
                type: 'bar',
                name: '消耗量',
                data: [207.5, 19.5, 45.3, 269.5, 23.4, 101.8, 285.3, 47.4, 20.8]
            }]
        }
    }


    ret.draw = function (type) {

        if (ret.chart)
            ret.chart.clear();

        ret.chart = echarts.init(window.parent.document.getElementById('chart3'));

        var option = ret.getOption(type);
        option = putOn.getAllDarked(option, true);

        ret.chart.setOption(option, true);

    }

    return ret;

})





















