; (function (root, factory) {
    if (typeof define == 'function' && define.amd) {
        define(function (require) {
            var jquery = require('jquery');
            return factory(jquery);
        })
    }
    else {
        root.gauge = factory(echarts)
    }
}(this, function (echarts) {
    if (typeof echarts !== 'object')
        throw new Error('echarts插件没获取到!')

    var draw = function (data) {
        var mychart = echarts.init(data.El);

        var getOption = function () {
            return {
                color: data.color,
                legend: { show: false },
                tooltip: { show: false },
                title: data.title || {},
                series: [],
                //polar: {center:['50%','50%']}
            }
        }

        var option = getOption();

        //对option进行数据填充
        //有几个series
        //for (var i = 0; i < data.data.length; i++) {
        option.series.push({
            type: 'gauge',
            radius: '100%',
            center: ['50%', '75%'],
            name: data.data.name,
            data: data.data.value,
            startAngle: 180,
            endAngle: 0,
            animationDuration: data.animationDuration || 1000,
            axisLine: { lineStyle: { color: data.color } },
            axisLabel: { textStyle: { fontSize: getPx(12) } },
            detail: {
                offsetCenter: ['0%', '18%'],
                textStyle: { fontSize: getPx(15), color: '#fff' },
                formatter: function (e) {
                    return e + '%'
                }
            },
            //roseType:true
        })

        //}

        mychart.setOption(option);
    }

    return draw;
}))