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

//*****************************************自定义假数据变量专区***************************************

var bar1DATA = function () {
    return [{
        name: '上月',
        data: getRadomNums(5, 20, 60)
    }, {
        name: '下月',
        data: getRadomNums(5, 20, 60)
    }]
}

var bar2DATA = function () {
    return [{
        name: '综合效率',
        data: getRadomNums(3, 20, 60)
    }, {
        name: '完好率',
        data: getRadomNums(3, 20, 60)
    }, {
        name: '可利用率',
        data: getRadomNums(3, 20, 60)
    }, {
        name: '失效率',
        data: getRadomNums(3, 20, 60)
    }]
}

var DATA_pie1 = function () {
    return [
   {
       name: '名称1',
       blocks: [
           { name: '原料', value: getRandom(100, 400) },
           { name: '设备', value: getRandom(100, 400) },
           { name: '安环', value: getRandom(100, 400) },
           { name: '质量', value: getRandom(100, 400) },
           { name: '人工', value: getRandom(100, 400) }
       ],
       radius: ['0%', '65%'], labelshow: true
       //center: ['50%', '55%'],
   }, {
       name: '',
       blocks: [{ name: '', value: 1 }],
       radius: ['70%', '71%'],
   }
    ]
}

var DATA_pie2 = function () {
    return [
   {
       name: '名称1',
       blocks: [
     { name: '精矿', value: getRandom(100, 400) },
           { name: '燃料', value: getRandom(100, 400) },
           { name: '石英砂', value: getRandom(100, 400) },
           { name: '活性焦', value: getRandom(100, 400) },
           { name: '硫酸钡', value: getRandom(100, 400) }
       ],
       radius: ['0%', '65%'], labelshow: true
       //center: ['50%', '55%'],
   }, {
       name: '',
       blocks: [{ name: '', value: 1 }],
       radius: ['70%', '71%'],
   }
    ]
}

var DATA_gauge1 = function () {
    return {
        name: '',
        value: getRandom(10, 100)
    }
}

var DATA_gauge2 = function () {
    return {
        name: '',
        value: getRandom(10, 100)
    }
}

var DATA_gauge3 = function () {
    return {
        name: '',
        value: getRandom(10, 100)
    }
}

var DATA_gauge4 = function () {
    return {
        name: '',
        value: getRandom(10, 100)
    }
}

//****************************************************************************************************

function Let_it_Go() {


    function loopIt() {


        //左柱1
        zhuzi({
            El: document.getElementById('bar1'),
            xAxis: ['阴极板', '阳极板', '粗铜', '冰铜', '铜精矿库存'],
            xRotate: 25,
            yAxis: { max: 60, min: 10, text: '' },
            //title: '标题1',
            legend: ['上月', '下月'],
            grid: ['25%', '10%', '5%', '10%'],
            color: ['#00a1ae', '#936aff'],
            series: bar1DATA()
        });

        //左柱2
        zhuzi({
            El: document.getElementById('bar2'),
            xAxis: ['2014/4/11', '2014/4/13', '2014/4/15'],
            xRotate: 0,
            yAxis: { max: 60, min: 10, text: '' },
            //title: '标题1',
            legend: ['综合效率', '完好率', '可利用率', '失效率'],
            legendPs: ['12%', '', '', '0%'],
            grid: ['35%', '12%', '5%', '10%'],
            color: ['#3bb102', '#6c49c4', '#01af6b', '#ff6e16'],
            series: bar2DATA()
        });

        //中间饼1
        drawPie({
            El: document.getElementById('pie1'),
            data: DATA_pie1(),
            color: ['#e826ab', '#99ce01', '#c71b46', '#0067cb', '#ff9a00', '#0062c3'],
            legend: ['原料', '设备', '安环', '质量', '人工']
        })

        //中间饼2
        //drawPie({
        //    El: document.getElementById('pie2'),
        //    data: DATA_pie2(),
        //    color: ['#e826ab', '#99ce01', '#c71b46', '#0067cb', '#ff9a00', '#0062c3'],
        //    legend: ['原料', '设备', '安环', '质量', '人工']
        //})

        //仪表盘1
        gauge({
            El: document.getElementById('gaoge1'),
            data: DATA_gauge1(),
            animationDuration: 5000,
            color: [[0.2, '#f90000'], [0.8, '#fe9900'], [1, '#137400']],
        })

        //仪表盘2
        gauge({
            El: document.getElementById('gaoge2'),
            data: DATA_gauge2(),
            animationDuration: 5000,
            color: [[0.2, '#f90000'], [0.8, '#fe9900'], [1, '#137400']],
        })

        //仪表盘3
        //gauge({
        //    El: document.getElementById('gaoge3'),
        //    data: DATA_gauge3(),
        //    animationDuration: 5000,
        //    color: [[0.2, '#f90000'], [0.8, '#fe9900'], [1, '#137400']],

        //})

        //仪表盘4
        //gauge({
        //    El: document.getElementById('gaoge4'),
        //    data: DATA_gauge4(),
        //    animationDuration: 5000,
        //    color: [[0.2, '#f90000'], [0.8, '#fe9900'], [1, '#137400']],

        //})
        setTimeout(loopIt, 3000);
    }

    loopIt();

}

Let_it_Go();