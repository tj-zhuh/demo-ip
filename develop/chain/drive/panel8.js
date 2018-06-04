//取随机数组工具函数
var getRadomNums = function (nums, min, max) {
    var _temp = [];

    for (var i = 0; i < nums; i++) {
        var __temp__ = (min + (max - min) * Math.random()).toFixed(2);

        _temp.push(__temp__);
    }

    return _temp;
}
//获得一个随机数工具函数
function getRandom(min, max) {
    var __temp__ = (min + (max - min) * Math.random()).toFixed(1);
    return __temp__;
}
$(function () {

    var myChart = echarts.init(document.getElementById('chart8'));

    var xAxis = [];
    var data1 = [];
    var data2 = [];
    var data3 = [];



    for (var i = 0; i < 12; i++) {
        xAxis.push((i + 1).toString() + '月');
    }

    data1 = function () { return [2.0, 4.9, 7.0, getRandom(10, 25), getRandom(20, 40), getRandom(50, 90), getRandom(100, 150), getRandom(100, 150), getRandom(10, 25), 20.0, 6.4, 3.3] }
    data2 = function () { return [2.5, 5.4, 7.3, getRandom(10, 25), getRandom(20, 40), getRandom(50, 90), getRandom(100, 150), getRandom(100, 150), getRandom(10, 25), 21.0, 6.6, 3.5] }
    data3 = function () { return [2.0, 2.2, 3.3, getRandom(10, 25), getRandom(20, 40), getRandom(50, 90), getRandom(100, 150), getRandom(100, 150), getRandom(10, 25), 16.5, 12.0, 6.2] };

    var option = function () {
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                textStyle: {
                    fontSize: getPx(12)
                },
                formatter: '{b}<br/>{a0}: {c0}<br />{a1}: {c1}'
            },
            legend: {
                data: ['水耗', '电耗'],
                textStyle: {
                    color: '#fff',
                    fontSize: getPx(12)
                },
                right: getPx(20),
                top: getPx(20),
                itemWidth: getPx(25),
                itemHeight: getPx(14),
                itemGap: getPx(15)
            },
            grid: {
                left: '3%',
                right: '10%',
                bottom: '3%',
                top: '3%',
                containLabel: true
            },
            color: ["#e81600", "#419d05", "#00fafe"],
            xAxis: {
                type: 'category',
                data: xAxis,
                splitLine: { show: false },
                axisTick: {
                    show: true,
                    length: getPx(20)
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize: getPx(12)
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#004eff',
                        width: getPx(1)
                    }
                }
            },
            yAxis: [{
                type: 'value',
                splitLine: { show: false },
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: { show: false }
            }, {
                type: 'value',
                splitLine: { show: false },
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: { show: false }
            }],
            series: [
                {
                    name: '水耗',
                    type: 'bar',
                    data: data1()

                },
                {
                    name: '电耗',
                    type: 'bar',
                    data: data2(),
                }, {
                    name: '',
                    type: 'line',
                    data: data3(),
                    yAxisIndex: 1,
                    symbol: 'circle'
                }
            ]
        }
    };


    function loopIt(){
        myChart.setOption(option());
        setTimeout(loopIt, 5000);
    }
    loopIt();
   
})