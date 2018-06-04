
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


var DATA_pie1 = function () {
    return [
       {
           name: '名称1',
           blocks: [
               //{ name: '核心客户', value: 120, label: { normal: { show: true } }, labelLine: { normal: { show: true, lineStyle: { color: '#127293' } } } },
               { name: '核心客户', value: 120 },
               { name: '重要客户', value: 25 },
               { name: '普通客户', value: 20 },
               { name: '小客户', value: 15 },
               //{ name: '锢铍', value: 10 },
               { name: '其它', value: 5 }
           ],
           total: 185,

           //radius: ['0%', '65%'],
           center: ['70%', '50%'],
       }
    ]
}


DATA_pie1 = DATA_pie1();













window.onload = function () {

    drawPie({
    	El: document.getElementById('echarts2'),
        data: DATA_pie1,
        labelshow: { normal: { show:false } },
        color: ['#127293', '#cb6621', '#1b7411', '#c7ab09', '#1b4573', '#7d1d84'],
        legend: {
            show: true,
            data: ['核心客户', '重要客户', '普通客户', '小客户', '其它'],
            formatter: function (e) {
                for (var i = 0; i < DATA_pie1[0].blocks.length; i++) {
                    if (e === DATA_pie1[0].blocks[i].name) {
                        return e + ': ' + (100*(DATA_pie1[0].blocks[i].value) / DATA_pie1[0].total).toFixed(2)+'%'
                    }
                }

            },
            orient: 'vertical',
            left: '10%',
            top: '20%',
            textStyle:{color:'#fff',fontSize:16}
        }
    });










}