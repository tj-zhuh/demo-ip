
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


var DATA_gauge1 = function () {
    return {
        name: '',
        value: getRandom(10, 100)
    }
}










window.onload = function () {


    //仪表盘1
    var option1 = function(){return{

        tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
            {
                name: '业务指标',
                type: 'gauge',
                radius: '100%',
                center: ['50%', '80%'],
                detail: { formatter: '{value}%' },
                data: [{ value: getRandom(79,96), name: '' }],
                startAngle: 180,
                endAngle: 0,
                axisLine: { lineStyle: { color: [[0.2, '#AC0506'], [1, '#012A4D']] } },
                detail: {
                    offsetCenter: ['0%', '23%'],
                    textStyle: { fontSize: (15), color: '#bababa' },
                    formatter: function (e) {
                        return 'OEE: '+e + '%'
                    }
                },
                splitLine: { show: 1, lineStyle: {width:1}},
                axisLabel: { show: 0, textStyle: { fontSize: (12) } },
            }
        ]
    }}

    var option2 = function () {
        return {
            tooltip: {
                formatter: function (e) {
                    //console.log(e);
                    var _temp = e.name + ':<br/>&nbsp&nbsp';
                    _temp += '数值:&nbsp' + e.value + '<br/>&nbsp&nbsp';
                    _temp += '占比:&nbsp' + e.percent + ' % ';
                    return _temp;
                }
            },
            title: {
                text: '设备能力损失分析',
                textStyle: {
                    color: '#bababa',
                    fontSize: 15,
                    fontWeight: 'normal'
                },
                bottom: '0%',
                left: '20%'
            },
            color: ['#06427c', '#cf5f4a', '#b9516f', '#82812c', '#692a5c', '#449985'],
            series: [{
                type: 'pie',
                name: '',
                data: [
                    //{ name: 'OEE', value: getRandom(20, 100) },
                    { name: '故障损失', value: getRandom(20, 100) },
                    { name: '速度低下损失', value: getRandom(20, 100) },
                    { name: '瞬间停止损失', value: getRandom(20, 100) },
                    { name: '不良修正损失', value: getRandom(20, 100) },
                    { name: '其它', value: getRandom(20, 100) },
                ],
                center: ['50%', '50%'],
                radius: '60%',
                startAngle: 90,
                animationDuration: 1000,
                roseType: false,
                label: { normal: { show: false, textStyle: { fontSize: (12), color: '#fff' } } },
                labelLine: { normal: { show: false, lineStyle: { color: '#fff' } } }
            }]
        }
    }






    var chart1 = echarts.init(document.getElementById('echarts6'));

    

    var chart2 = echarts.init(document.getElementById('echarts7'));

    


    function loopIt() {

        chart1.setOption(option1())
        chart2.setOption(option2());
        setTimeout(loopIt, 3000);

    }

    loopIt();

}





