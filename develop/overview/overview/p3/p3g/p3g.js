
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









window.onload = function () {

    var option = function(){return{
            color:['#00ae30','#7601fb'],
            legend: {
            data: ['二氧化硫排放浓度(mg/m3)', '氮氧化物排放浓度(mg/m3)'],
            textStyle: { color: '#fff', fontSize: 6 },
            orient: 'vertical',
            right: '5%',
            top:'0%',
            },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                        color: '#57617B'
                }
            }, textStyle: { fontSize: 12, color: '#fff' }
        },
        xAxis: {
            type: 'category',
            data: ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日', ],
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
                }, interval: 5
            },
            splitLine: { show: 0, lineStyle: { color: '#00449f', width: 1 } },
            },
        yAxis: {
            type: 'value',
            min: 0,
            max: 250,
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
                formatter: function (v) { return v }
            },
            splitLine: { lineStyle: { color: '#00449f', width: 1 } },
            },
        grid: {
            top: '25%',
            bottom:'20%'
        },
        series: [{
            type: 'line',
            name: '二氧化硫排放浓度(mg/m3)',
            data: getRadomNums(31, 0, 250),
            symbol:'circle'
        }, {
            type: 'line',
            name: '氮氧化物排放浓度(mg/m3)',
            data: getRadomNums(31, 0, 250),
            symbol: 'circle'
        }]
    }}

    var option2 = function () {
        return {
            color: ['#006cb0', '#fe5600', '#816a05'],
            legend: {
                data: ['发现隐患数', '整改比例', '整改隐患数'],
                textStyle: { color: '#fff', fontSize: 6 },
                //orient: 'vertical',
                right: '0%',
                top: '0%',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    lineStyle: {
                        color: '#57617B'
                    }
                }, textStyle: { fontSize: 12, color: '#fff' }
            },
            xAxis: {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
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
            yAxis: [{
                type: 'value',
                min: 0,
                max: 250,
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
                    formatter: function (v) { return v }
                },
                splitLine: { lineStyle: { color: '#00449f', width: 1 } },
            }, {
                type: 'value',
                min: 0,
                max: 20,

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
                    formatter: function (e) { return e + '%' },
                },
                splitLine: { lineStyle: { color: '#00449f', width: 1 }, show: 0 },
            }],
            grid: {
                top: '20%',
                bottom: '15%'
            },
            series: [{
                type: 'bar',
                name: '发现隐患数',
                data: getRadomNums(7, 0, 250),
                //symbol: 'circle'
            }, {
                type: 'bar',
                name: '整改比例',
                data: getRadomNums(7, 0, 250),
                //symbol: 'circle'
            }, {
                type: 'line',
                name: '整改隐患数',
                data: getRadomNums(7, 0, 250),
                symbol: 'circle',
                smooth: 1
            }]
        }
    }











    var chart1 = echarts.init(document.getElementById('echarts7'));
    

    var chart2 = echarts.init(document.getElementById('echarts8'));
    
    function loopIt() {
        chart1.setOption(option());
        chart2.setOption(option2());
        setTimeout(loopIt, 3000);
    }
    loopIt();


}