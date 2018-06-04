
; (function (root, factory) {
    if (typeof define == 'function' && define.amd) {
        define(function (require) {
            var jquery = require('jquery');
            return factory(jquery);
        })
    }
    else {
        root.drawPie = factory(echarts)
    }
}(this, function (echarts) {

    if (typeof echarts !== 'object')
        throw new Error('echarts插件没获取到!')


    var draw = function (data) {

        var mychart = echarts.init(data.El);

        var getOption = function () {
            return {
                color:data.color,
                legend: data.legend || { show: false },
                tooltip: {
                    show:data.tooltip?data.tooltip.show:{show:true},
                    textStyle: { fontSize: (12), color: '#fff' },
                    formatter: function (e) {
                        //console.log(e);
                        var _temp = e.name + ':<br/>&nbsp&nbsp';
                        _temp += (data.tooltipnames ? data.tooltipnames[0] : '数值:&nbsp') + e.value + '<br/>&nbsp&nbsp';
                        _temp += (data.tooltipnames ? data.tooltipnames[1] : '占比:&nbsp') + e.percent + ' % ';
                        return _temp;
                    }
                },
                title: data.title || {},
                series: [],
                animation:data.animation?data.animation.show:true
            }
        }

        var option = getOption();

        //对option进行数据填充
        //有几个series
        for (var i = 0; i < data.data.length; i++) {

            option.series.push({
                type: 'pie',
                name: data.data[i].name,
                data: data.data[i].blocks,
                center: (data.data[i].center ? data.data[i].center : ['50%', '50%']),
                radius: (data.data[i].radius ? data.data[i].radius : ['0%', '75%']),
                startAngle: data.data[i].startAngle || 90,
                animationDuration: data.data[i].animationDuration || 1000,
                roseType: data.data[i].ifRose || false,
                label: data.labelshow||{ normal: { textStyle: { fontSize: (12), color: '#fff' } } },
                labelLine: { normal: { lineStyle: { color: '#fff' }}}
            })
          
        }

        mychart.setOption(option);

    }

    return draw;

}))