
//取随机数组工具函数
var getRadomNums = function (nums, min, max) {
    var _temp = [];

    for (var i = 0; i < nums; i++) {
        var __temp__ = (min + (max - min) * Math.random()).toFixed(2);

        _temp.push(__temp__);
    }

    return _temp;
}
//获得一个随机数工具函数
function getRandom(min, max) {
    var __temp__ = (min + (max - min) * Math.random()).toFixed(1);
    return __temp__;
}
var DATA_line1 = function () {
    return [{
        data: getRadomNums(7, 40, 100),
        lineStyle: {}
    }]
}

var Data_for_line1 = function () {
    return ['设备OEE趋势', '设备故障率:' + getRandom(0, 10) + '%', '同比:-' + getRandom(0, 10) + '% &nbsp;环比:' + getRandom(0, 10) + '%', '' + getRandom(10, 40) + '%', '#cf0d47']
}

function draw_rightBar(data) {
    $('#right-text-bar').empty();

    var container = $('#right-text-bar');

    var p1 = $('<p class="title" style="color:' + data[4] + '">' + data[0] + '</p>');
    var p2 = $('<p class="text-content" style="color:' + data[4] + '">' + data[1] + '</p>');
    var p3 = $('<nobr><p class="text-content" style="color:' + data[4] + '">' + data[2] + '</p></nobr>');

    var bar = $('<div class="right-content"></div>');
    var initBar = $('<div class="init-bar" style="width:0;background-color:' + data[4] + '"></div>');

    initBar.animate({'width':data[3]})
    bar.append(initBar);
    container.append(p1, p2, p3, bar);
}



window.onload = function () {

 


   

    function loopIt() {

        zhexian({
            El: document.getElementById('chart1'),
            legend: ['合格率趋势'],
            xAxis: ['1', '2', '3', '4', '5', '6', '7'],
            //title: '标题1',
            yAxis: { max: 100, min: 0, text: '' },
            orient: 'horizontal',
            color: ['#cf0d47'],
            grid: ['15%', '1%', '3%', '-5%'],
            data: DATA_line1()
        });

        draw_rightBar(Data_for_line1())

        setTimeout(loopIt, 3000);

    }

    loopIt();


















}





























