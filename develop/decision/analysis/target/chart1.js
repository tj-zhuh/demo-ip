

define(function (require) {

    var echarts = require('echarts');
    var dao = require('dao');
    var putOn = require('putOn');

    var ret = {
        chart:null
    };

    var dataCore = ['电解车间', '熔炼车间', '倾动炉车间', '硫酸车间', '动力车间', '新材料车间', '选矿车间']
    //
    ret.getOption = function () {
        return {
            color: ['#1c8ee7', '#8fc6ef', '#6fc6d3', '#bc6ec1', '#63e691', '#ffaf0f','#fdd441'],
            title: {
                text:''
            },
            tooltip: {
                trigger: 'item',
                formatter: function (p) {

                    var _temp = '';
                    if (p.seriesType === 'radar') {
                        _temp = p.name + '<br/>';
                        for (var i = 0; i < dataCore.length; i++) {
                            if (p.value[i] >= 3) {
                                _temp += dataCore[i] + '&nbsp;:&nbsp;' + p.value[i] + '<br />';
                            }
                            else {
                                _temp += '<p style="font-size:0.14rem;color:yellow;float:left;">' + dataCore[i]  + '&nbsp;:&nbsp;' + p.value[i] + '</p>'+'<br />'
                            }
                        }
                    }

                    if (p.seriesType === 'pie') {
                        _temp += p.seriesName + '&#12288;' + p.name + '<br />';
                        _temp += '值为&nbsp;:&nbsp;' + p.value + '<br />';
                        _temp += '占比&nbsp;:&nbsp;' + p.percent+'%';
                    }

                    return _temp;
                }
            },
            legend: {
                data: dataCore,
                bottom:'1%'
            },
            radar: {
                center: ['75%', '50%'],
                axisLine: {},
                indicator: [
                    { name: '电解车间', max: 4, min: 0 },
                    { name: '熔炼车间', max: 4, min: 0 },
                    { name: '倾动炉车间', max: 4, min: 0 },
                    { name: '硫酸车间', max: 4, min: 0 },
                    { name: '动力车间', max: 4, min: 0 },
                    { name: '新材料车间', max: 4, min: 0 },
                    { name: '选矿车间', max: 4, min: 0 }
                ]
            },
            series: [{
                type: 'pie',
                name: '任务1',
                center: ['25%', '50%'],
                radius:['40%','70%'],
                //roseType:1,
                data: dao.getChartData1()['s1']
            },
            //{
            //    type: 'pie',
            //    name: '任务2',
            //    radius: ['40%', '70%'],
            //    //roseType: 1,
            //    center: ['75%', '50%'],
            //    data: dao.getChartData1()['s2']
            //},
            {
                type: 'pie',
                name: '',
                radius: ['40%', '50%'],
                silent: 1,
                data: [1],
                center: ['25%', '50%'],
                labelLine: {
                    normal: {show:0}
                },
                itemStyle: {
                    normal: {
                        color: '#000',
                        opacity: 0.3
                    }
                }
            }, {
                name: 'jj',
                type: 'radar',
                //center:['75%','50%'],
                data: [
                    { name: '实际线', value: [3.01, 3.5, 3.1, 2.98, 3.2, 3.05, 3.14] },
                    {
                        name: '标准线', value: [3, 3, 3, 3, 3, 3, 3],
                        itemStyle: { normal: { color: 'transparent' } },
                        lineStyle: { normal: { color: 'red', type: 'dotted' } },
                    }
                ]
            }]
        }
    }


    ret.draw = function (type) {

        if (ret.chart)
            ret.chart.clear();

        ret.chart = echarts.init(document.getElementById('chart1'));

        var option = ret.getOption(type);
        option = putOn.getAllDarked(option, false);

        ret.chart.setOption(option,true);

    }

    return ret;

})





















