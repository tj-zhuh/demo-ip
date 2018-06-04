

define(function (require) {

    var echarts = require('echarts');
    var dao = require('dao');

    var ret = {
        chart: null
    };

    var dataCore = ['FF平均日处理精矿量', 'FF作业率', '平均日产阳极铜', 'EF、FF渣含铜', '固铍发生率', '转炉炉龄', '重油单耗', '液化气单耗', '熔炼窑烟尘排放浓度', '阳极铜合格率', '物理合格率']
    //
    ret.getOption = function () {
        return {
            color: ['#1c8ee7', '#8fc6ef', '#6fc6d3', '#bc6ec1', '#63e691', '#ffaf0f', '#fdd441'],
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'item',
                formatter: function (p) {

                    var _temp = '';

                    _temp = p.name + ':<br/>';
                    for (var i = 0; i < dataCore.length; i++) {
                        if (p.value[i] >= 0) {
                            _temp += dataCore[i] + '&nbsp;:&nbsp;' + p.value[i] + '<br />';
                        }
                        else {
                            _temp += '<p style="font-size:0.14rem;color:yellow;float:left;">' + dataCore[i] + '&nbsp;:&nbsp;' + p.value[i] + '</p>' + '<br />'
                        }
                    }


                    return _temp;
                }
            },
            legend: {
                //data: dataCore,
                bottom: '1%'
            },
            radar: {
                center: ['50%', '50%'],
                axisLine: {},
                indicator: [
                    { name: 'FF平均日处理精矿量', max: 30, min: -30 },
                    { name: 'FF作业率', max: 30, min: -30 },
                    { name: '平均日产阳极铜', max: 30, min: -30 },
                    { name: 'EF、FF渣含铜', max: 30, min: -30 },
                    { name: '固铍发生率', max: 30, min: -30 },
                    { name: '转炉炉龄', max: 30, min: -30 },
                    { name: '重油单耗', max: 30, min: -30 },
                    { name: '液化气单耗', max: 30, min: -30 },
                    { name: '熔炼窑烟尘排放浓度', max: 30, min: -30 },
                    { name: '阳极铜合格率', max: 30, min: -30 },
                    { name: '物理合格率', max: 30, min: -30 }
                ]
            },
            series: [
            {
                name: 'jj',
                type: 'radar',
                //center:['75%','50%'],
                data: [
                    { name: '实际线', value: [0.26, 4.1, 1.2, -14.44, -3.07, 19.23, 2, 1.833, -18.75, 0, 2.04] },
                    {
                        name: '零刻度线', value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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

        ret.chart.setOption(option, true);

    }

    return ret;

})





















