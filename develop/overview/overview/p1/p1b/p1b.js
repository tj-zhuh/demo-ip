

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



var DATA = function () {
    return [
        {
            name: '计划量',
            type: 'bar',
            data: [getRandom(0, 2000), getRandom(2000, 6000), getRandom(2000, 10000)]
        }, {
            name: '入库量',
            type: 'bar',
            data: [getRandom(0, 2000), getRandom(2000, 6000), getRandom(2000, 10000)]
        }, {
            name: '在途量',
            type: 'bar',
            data: [getRandom(0, 2000), getRandom(2000, 6000), getRandom(2000, 10000)]
        }, {
            name: '待发量',
            type: 'bar',
            data: [getRandom(0, 2000), getRandom(2000, 6000), getRandom(2000, 10000)]
        },

    ]
}










window.onload = function () {

    var chart1 = echarts.init(document.getElementById('chart1'));

    var option = {
        color:['#1b7411','#7d1d84','#ad7d00','#127293'],
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',

            }
        },
        legend: {
            show: true,
            data: ['计划量', '入库量', '在途量', '待发量'],
            textStyle: { color: '#fff' },
            orient: 'vertical',
            right: '1%',
            top:'20%'
        },
        xAxis: {
            type: 'category',
            data: ['铜精矿', '石英砂', '粗铜'],
            axisLine: {
                lineStyle: {
                    color: '#032D7C'
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#032D7C'
                }, length: 12
            },
            axisLabel: {
                textStyle: {
                    color: '#bababa',
                    fontSize: 12
                }, interval: 0
            },
            splitLine: { show: 0, lineStyle: { color: '#00449f', width: 1 } },
        },
        grid: {
            left: '12%',
            top: '10%',
            right:'20%',
            bottom:'12%'
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 10000,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#032D7C'
                }, show: true,
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 12,
                    color: '#ccc'
                },
              
            },
            splitLine: { lineStyle: { color: '#00449f', width: 1 } },
        },
        series:DATA()

    }



    chart1.setOption(option);

}