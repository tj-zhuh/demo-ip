

define(function (require) {

    var echarts = require('echarts');
    var util = require('util');
    var dao = require('dao');
    var putOn = require('putOn');

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

    //
    ret.getOption = function () {
        return {
            color: ['#1c8ee7', '#8fc6ef', '#6fc6d3', '#bc6ec1', '#63e691', '#ffaf0f'],
            title: {
                text: '异常曲线',
                textAlign: 'center',
                left:'50%'
            },
            tooltip: {
                trigger: 'axis',
                
            },
            legend: {
                //data: ['指标1', '指标2', '指标3', '指标4', '指标5', '指标6'],
                //bottom:'1%'
            },
            xAxis: {
                type: 'category',
                data: util.getArray(30, 29),
                splitLine: {interval:0}
            },
            yAxis: [{
                name: '单位:Nm2',
                type: 'value',
                min: 0,
                max: 100,
                splitLine: {}
            }, {
                name: '单位:%',
                type: 'value',
                min: 0,
                max: 100,
                axisLabel: {
                    formatter: function (x) {
                        if (x === 0)
                            return '-200%'
                        else if (x === 20)
                            return '0%'
                        else if (x === 40)
                            return '200%'
                        else if (x === 60)
                            return '400%'
                        else if (x === 80)
                            return '600%'
                        else if (x === 100)
                            return '800%'
                    }
                }
            }],
            //series: [{
            //    name: '',
            //    type: 'line',
            //    data: getRadomNums(30, 20, 100),

            //}]
        }
    }

    ret.getOptionData = function () {
        return {

            xAxis: {
                splitLine: { interval: 1 }
            },
            series: [{
                name: 's',
                type: 'line',
                data: getRadomNums(30, 10, 30),
                smooth: 0.5
            }, {
                name: 'ss',
                type: 'line',
                data: getRadomNums(30, 20, 40),
                smooth: 0.5,
                lineStyle: { normal: {type:'dotted'}}
            }, {
                type: 'line',
                name: '标线',
                data: util.getSameArray(30, 34),
                symbolSize:0,
                lineStyle: {
                    normal: {color:'transparent'}
                },
                markLine: {
                    
                    data: [{
                        type: 'average',
                        value:23.5
                    }]
                }
            }]
        }
    }

    ret.draw = function (type) {

        if (ret.chart)
            ret.chart.clear();

        ret.chart = echarts.init(window.parent.document.getElementById('chart3-2'));

        var option = ret.getOption(type);
        option = putOn.getAllDarked(option, true);

        ret.chart.setOption(option);

    }


    ret.drawLine = function () {

        var option = ret.getOptionData();

        ret.chart.setOption(option);
    }

    return ret;

})





















