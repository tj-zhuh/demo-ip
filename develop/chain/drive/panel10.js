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

    var myChart = echarts.init(document.getElementById('chart10'));

    var option = function () {
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
                textStyle: {
                    fontSize: getPx(12)
                }
            },
            legend: {
                data: ['安全', '环保', '健康'],
                textStyle: {
                    color: '#fff',
                    fontSize: getPx(12)
                },
                bottom: getPx(10),
                itemWidth: getPx(25),
                itemHeight: getPx(14),
                itemGap: getPx(15)
            },
            grid: {
                left: '3%',
                right: '10%',
                bottom: '20%',
                top: '10%',
                containLabel: true
            },
            color: ["#FE1989", "#1881FE", "#32CD00"],
            xAxis: {
                type: 'value',
                splitLine: {
                    show: false
                },
                axisTick: { show: false },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize: getPx(12)
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#00439D',
                        width: getPx(1)
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月'],
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#00439D',
                        width: getPx(1)
                    }
                },
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize: getPx(12)
                    }
                }
            },
            series: [
                {
                    name: '安全',
                    type: 'bar',
                    stack: 'x',
                    data: getRadomNums(5, 300, 400)

                },
                {
                    name: '环保',
                    type: 'bar',
                    stack: 'x',
                    data: getRadomNums(5, 90, 150)
                },
                {
                    name: '健康',
                    type: 'bar',
                    stack: 'x',
                    data: getRadomNums(5, 150, 300),
                    barWidth: '50%'
                }
            ]
        }
    };

    function loopIt() {
        myChart.setOption(option());
        setTimeout(loopIt,5000)
    }

    loopIt();

    
})