

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

	var chart1 = echarts.init(document.getElementById('echarts1'));

    var option = function () {
        return {
            color: ['#f70240', '#fd9800', '#15b900', '#00b4fe'],
            tooltip: {},
            legend: {
                data: [
                    { name: '京明桥', icon: 'rect' },
                    { name: '商桥', icon: 'rect' },
                    { name: '玉桥', icon: 'rect' },
                    { name: '宏发', icon: 'rect' }
                ],
                textStyle: { color: '#fff' },
                orient: 'vertical',
                right: '2%',
                bottom: '5%'
            },
            radar: {
                // shape: 'circle',
                radius: '60%',
                center: ['45%', '50%'],
                indicator: [
                   { name: '价格', max: 50000 },
                   { name: '质量', max: 50000 },
                   { name: '交期', max: 50000 },
                   { name: '研发', max: 50000 },
                   { name: '服务', max: 50000 },
                ],
                axisLine: {
                    show: true,
                    lineStyle: { color: '#027191' }
                },
                axisTick: {},
                axisLabel: { textStyle: { fontSize: 24 } },
                splitLine: { lineStyle: { color: '#027191' } },
                splitArea: {
                    areaStyle: { color: "transparent" }
                }
            },
            series: [{
                name: '京明桥',
                type: 'radar',
                // areaStyle: {normal: {}},
                data: [
                    {
                        value: getRadomNums(6, 0, 50000),
                        name: '京明桥'
                    }
                ]
            }, {
                name: '商桥',
                type: 'radar',
                // areaStyle: {normal: {}},
                data: [
                    {
                        value: getRadomNums(6, 0, 50000),
                        name: '商桥'
                    }
                ]
            }, {
                name: '玉桥',
                type: 'radar',
                // areaStyle: {normal: {}},
                data: [
                    {
                        value: getRadomNums(6, 0, 50000),
                        name: '玉桥'
                    }
                ]
            }, {
                name: '宏发',
                type: 'radar',
                // areaStyle: {normal: {}},
                data: [
                    {
                        value: getRadomNums(6, 0, 50000),
                        name: '宏发'
                    }
                ]
            }]

        }
    }

    function loopIt() {

        chart1.setOption(option());


        setTimeout(loopIt, 3000);

    }

    loopIt();
    

}