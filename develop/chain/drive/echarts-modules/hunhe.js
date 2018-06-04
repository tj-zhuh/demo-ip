//用法:
//
//window.zhexian({
//    El: 'chart1',
//    legend: ['工厂一', '工厂二', '工厂三'],
//    xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
//    title: '标题1',
//    yAxis:{max:250,min:0,text:'万'},
//    orient: 'horizontal',
//    color: ['rgb(137,189,27)', 'rgb(0,136,212)', 'yellow'],
//    grid:[]
//    data: [[96.3, 96.4, 97.5, 95.6, 98.1, 94.8, 89.6, 94.1, 80.1, 52.4, 75.8, 94.7], [97.3, 99.2, 99.3, 100.0, 99.6, 90.6, 80.0, 91.5, 69.8, 67.5, 90.4, 84.9], [84.2, 81.0, 67.5, 72.1, 43.7, 88.5, 91.9, 101.8, 79.7, 87.6, 92.9, 0]]
//});
//
//其中data、orient可选,其他必填,oirent默认是垂直


; (function (root, factory) {
    if (typeof define == 'function' && define.amd) {
        define(function (require) {
            var jquery = require('jquery');
            return factory(jquery);
        })
    }
    else {
        root.hunhe = factory(echarts)
    }
}(this, function (echarts) {

    if (typeof echarts !== 'object')
        throw new Error('echarts插件没获取到!')

    var draw_inLine = function (obj) {

        var getOption = function () {
            return {
                color:obj.color,
                backgroundColor: 'transparent',
                title: {
                    text: obj.title||'',
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 16,
                        color: '#F1F1F3'
                    },
                    //left: '6%'
                },
                
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    }
                },
                legend: {
                    //icon: 'arrow',
                    //backgroundColor: 'transparent',
                    //borderWidth:4,
                    itemWidth: 20,
                    itemHeight: 8,
                    //itemGap: 13,
                    data: obj.legend,
                    right: '1%',
                    top:'3%',
                    textStyle: {
                        fontSize: 12,
                        color: '#F1F1F3'
                    },
                    show: true,
                    orient: obj.orient||'vertical'
                },
                grid: {
                    top: obj.grid[0] || '10%',
                    bottom: obj.grid[1] || '10%',
                    left: obj.grid[2] || '10%',
                    right: obj.grid[3] || '10%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: true,
                    axisLine: {
                        lineStyle: {
                            color: '#032D7C'
                        }
                    },
                    axisTick: {
                        lineStyle: {
                            color: '#032D7C'
                        },length:12
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#bababa'
                        }
                    },
                    data: obj.xAxis
                }],
                yAxis: [{          
                    type: 'value',
                    max: obj.yAxis.max,
                    min:obj.yAxis.min,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#032D7C'
                        }, show: false,
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            fontSize: 14,
                            color: '#ccc'
                        },
                        formatter:function(v){return v+obj.yAxis.text||''}
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#032D7C'
                        }
                    }
                }],
                series: []
            };
        };

        var option = getOption();

        //几个series
        for (var i = 0; i < obj.data.length; i++) {

            //
            option.series.push({
                name: obj.legend[i],
                type: 'line',
                symbolSize: 1,
                smooth: false,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                smooth: obj.data[i].smooth,
                areaStyle: obj.data[i].areaStyle,
                itemStyle: {
                    normal: {
                        //color: obj.color[2],
                        //borderColor: obj.color[2],
                        borderWidth: 1
                    },
                    emphasis: { borderWidth: 1 }
                },
                data: obj.data[i].data 
            })
        }

        var chart = echarts.init(document.getElementById(obj.El));

        chart.setOption(option);

    }




    return draw_inLine;


}))