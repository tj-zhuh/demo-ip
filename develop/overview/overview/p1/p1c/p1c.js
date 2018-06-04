

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



var DATA_line2 = function () {
    return [{
        name:'委外加工量',
        data: getRadomNums(12, 3500, 5000),
        smooth: true,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#1b7411'
                }, {
                    offset: 0.8,
                    color: '#1b7411'
                }], false),
                shadowColor: '#1b7411',
                shadowBlur: 10
            }
        }
    }, {
        name:'受托加工量',
        data: getRadomNums(12, 2000, 4000),
        smooth: true,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#127293'
                }, {
                    offset: 0.8,
                    color: '#127293'
                }], false),
                shadowColor: '#127293',
                shadowBlur: 10
            }
        }
    }]
}










window.onload = function () {

    zhexian({
        El: chart1,
        legend: ['委外加工量', '受托加工量'],
        initLegend: {
            show: true,
            data: ['委外加工量', '受托加工量'],
            textStyle: { color:'#fff',fontSize:18},
        },
        xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        //title: '标题1',
        yAxis: { max: 5000, min: 0, text: '' },
        orient: 'vertical',
        color: ['#1b7411', '#127293'],
        grid: ['25%', '', '3%', '3%'],
        data: DATA_line2()
    });









}