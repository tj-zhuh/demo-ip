

define(function (require) {

    var echarts = require('echarts');
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

    //
    ret.getOption = function () {
        return {
            title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data: ['设备一', '设备二']
            },
            xAxis: {
                type: 'category',
                data:['新能源事业部','某某股份','某某化工']
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 160,
                //splitNumber:6
            },
            grid: [{
                left: '6%',
                right:'32%'
            }],
            series: [{
                name: '设备一',
                type: 'bar',
                data: getRadomNums(3, 80, 160),
                barMaxWidth: 40,
                itemStyle: { normal: { color: "#00ecfc" } }

            }, {
                name: '设备二',
                type: 'bar',
                data: getRadomNums(3, 80, 160),
                barMaxWidth: 40,
                itemStyle: { normal: { color: "#a0fd00" } }

            },
            {
                type: 'pie',
                name: 'ad',
                center: ['85%', '50%'],
                radius: ['30%', '40%'],
                data: [
                    { name: 'ervzr', value: 13, labelLine: { normal: { show: 0 } }, label: { normal: { show: 0} }, itemStyle: { normal: { color: 'transparent' } } },
                    { name: '92%', value: 123, label: { normal: { textStyle: { fontSize: 18 } } } }
                ],
                silent: true
                
            },
            {
                type: 'pie',
                name: 'aasdd',
                center: ['85%', '50%'],
                radius: ['40%', '50%'],
                data: [
                    { name: 'gkjerr', value: 4, labelLine: { normal: { show: 0 } }, label: { normal: { show: 0 } }, itemStyle: { normal: { color: 'transparent' } } },
                    { name: '96%', value: 123, label: { normal: { textStyle: { fontSize: 18 } } } }
                ],
                silent: true
            },
            {
                type: 'pie',
                name: 'afqwd',
                center: ['85%', '50%'],
                radius: ['50%', '60%'],
                data: [
                    { name: 'eqwfrr', value: 10, labelLine: { normal: { show: 0 } }, label: { normal: { show: 0 } }, itemStyle: { normal: { color: 'transparent' } } },
                    { name: '89%', value: 123, label: { normal: { textStyle: { fontSize: 18 } } } }
                ],
                silent: true
            }
            ]
        }
    }

    ret.draw = function () {

        ret.chart = echarts.init(document.getElementById('chart1'));

        var option = ret.getOption();

        option = putOn.getAllDarked(option,true);

        ret.chart.setOption(option);

    }

    return ret;

})





















