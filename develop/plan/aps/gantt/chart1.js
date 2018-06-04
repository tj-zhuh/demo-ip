

define(function (require) {

    var echarts = require('echarts');
    var dao = require('dao');

    var ret = {
        chart:null
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
            color:['#61BCFD','#87F0FE','#CD93FF','#9EEC75','#FF9193','#FEEB7D'],
            title: {
                text:'2014年排产情况甘特图展示'
            },
            tooltip: {
                trigger: 'axis',
                
            },
            legend: {
                data: ['任务1', '任务2', '任务3']
            },
            yAxis: {
                type: 'category',
                data: ['1车间', '2车间', '3车间', '4车间', '5车间', '6车间', '7车间', '8车间', '9车间', '10车间', '11车间', '12车间']
            },
            xAxis: {
                type: 'value',
                min: 0,
                max: 12,
                interval:1,
                axisLabel: {
                    formatter: function (x) {
                        if (x === 0)
                            return '开始'

                        return x+'日'
                    },
                    
                }
            },
            series: [{
                type: 'bar',
                name: '任务1',
                stack: '主题1',
                data: getRadomNums(12, 0, 4)
            }, {
                type: 'bar',
                name: '任务2',
                stack: '主题1',
                data: getRadomNums(12, 0, 4)
            }, {
                type: 'bar',
                name: '任务3',
                stack: '主题1',
                data: getRadomNums(12, 0, 4)
            }]
        }
    }


    ret.draw = function (type) {

        if (ret.chart)
            ret.chart.clear();

        ret.chart = echarts.init(document.getElementById('chart1'));

        var option = ret.getOption(type);

        ret.chart.setOption(option,true);

    }

    return ret;

})





















