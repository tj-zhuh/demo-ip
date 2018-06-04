var panel = window.parent.document.getElementById('win1');
var mo = window.parent.document.getElementById('mo');
var chart = window.parent.document.getElementById('chart');
var wt = window.parent.document.getElementById('winTitle1');

$(mo).click(function () {
    $(mo).addClass('hide');
    $(panel).addClass('hide');
})

function showWin(x,callback) {
    $(wt).html(x)
    $(mo).toggleClass('hide');
    $(panel).toggleClass('hide');

    callback(chart);

}

function draw1(x) {
    $('#winTitle').html('<p>原料进厂情况</p>');

    var chart = echarts.init(x);

    var option = {
        color: ['#219fa8', '#ccc13e', '#f9422d', '#c5771e', '#69960c', '#8f1417', '#a20756', '#403397', '#f9422d', '#8f1417'],
        title: {
            text: ''
        },
        tooltip: {},

        series: [{
            name: '精矿进厂量（日）',
            type: 'pie',
            data: [
                { name: '铜精矿进厂总计(吨)', value: 6331.98 },
                { name: '德兴矿进厂量(吨)', value: 3531.76 },
                { name: '永平矿进厂量(吨)', value: 0 },
                { name: '银山矿进厂量(吨)', value: 114.25 },
                { name: '东乡矿进厂量(吨)', value: 0 },
                { name: '武山矿进厂量(吨)', value: 0 },
                { name: '城门山矿进厂量(吨)', value: 675.77 },
                { name: '进口矿进厂量(吨)', value: 1411.72 },
                { name: '地方矿进厂量(吨)', value: 567.95 },
                { name: '粗杂铜进厂量(吨)', value: 1172.06 }
            ]
        }]
    }
    chart.setOption(option);
}

function draw2(x) {
    $('#winTitle').html('<p>原料库存情况</p>');

    var chart = echarts.init(x);

    var option = {
        color: ['#219fa8', '#ccc13e', '#f9422d', '#c5771e', '#69960c', '#8f1417', '#a20756', '#403397'],

        title: {

        },
        tooltip: {},

        series: [{
            name: '铜精矿库存(吨)',
            type: 'pie',
            center: ['25%', '50%'],
            data: [
                { name: '铜精矿总库存(吨)', value: 121338.72 },
                { name: '一系统精矿库存(吨)', value: 78153.76 },
                { name: '二系统精矿库存(吨)', value: 43184.93 }
            ]
        }, {
            name: '杂铜库存(吨)',
            type: 'pie',
            center: ['75%', '50%'],
            data: [
                { name: '杂铜总库存(吨)', value: 12554.72 },
                { name: '一系统杂铜库存(吨)', value: 4116.76 },
                { name: '二系统杂铜库存(吨)', value: 8437.93 }
            ]
        }]
    }
    chart.setOption(option);
}

function draw3(x) {
    $('#winTitle').html('<p>原料投料情况</p>');

    var chart = echarts.init(x);

    var option = {
        color: ['#219fa8', '#ccc13e', '#f9422d', '#c5771e', '#69960c', '#8f1417', '#a20756', '#403397'],

        title: {

        },
        tooltip: {},

        series: [{
            name: 'FF精矿处理量日(吨)',
            type: 'pie',
            center: ['25%', '50%'],
            data: [
                { name: 'FF精矿处理量合计(吨)', value: 6343.72 },
                { name: '1#FF精矿处理量(吨)', value: 3385.76 },
                { name: '2#FF精矿处理量(吨)', value: 2958.93 }
            ]
        }, {
            name: '杂铜库存(吨)',
            type: 'pie',
            center: ['75%', '50%'],
            data: [
                { name: '杂铜处理量合计(吨)', value: 1045.72 },
                { name: '转炉Ⅰ杂铜处理量(吨)', value: 207.76 },
                { name: '转炉Ⅱ杂铜处理量(吨)', value: 253.93 },
                { name: '倾动炉杂铜处理量(吨)', value: 329.93 },
                { name: '反射炉杂铜处理量(吨)', value: 0.93 },
                { name: 'KF杂铜处理量(吨)', value: 256.93 }
            ]
        }]
    }
    chart.setOption(option);
}

function draw4(x) {
    $('#winTitle').html('<p>产品产量情况</p>');

    var chart = echarts.init(x);

    var option = {
        color: ['#219fa8', '#ccc13e', '#f9422d', '#c5771e', '#69960c', '#8f1417', '#a20756', '#403397'],

        title: {

        },
        tooltip: {},

        series: [{
            name: '阴极铜产量日(吨)',
            type: 'pie',
            center: ['25%', '50%'],
            data: [
                { name: '阴极铜总产量(吨)', value: 3149.72 },
                { name: '一系列阴极铜产量(吨)', value: 989.76 },
                { name: '二系列阴极铜产量(吨)', value: 1005.93 },
                { name: '三系列阴极铜产量(吨)', value: 1154.93 }
            ]
        }, {
            name: '阳极铜产量(吨)',
            type: 'pie',
            center: ['75%', '50%'],
            data: [
                { name: '杂铜处理量合计(吨)', value: 3627.72 },
                { name: '阳极浇铸量合计(吨)', value: 3627.76 },
                { name: '熔炼Ⅰ阳极浇铸量(吨)', value: 1399.93 },
                { name: '熔炼Ⅱ阳极浇铸量(吨)', value: 1813.93 },
                { name: '倾动炉阳极浇铸量(吨)', value: 414.93 },
                { name: '反射炉阳极浇铸量(吨)', value: 0.93 },
                { name: '阳极铜净产量(吨)', value: 3004.93 }
            ]
        }]
    }
    chart.setOption(option);
}

function draw5(x) {
    $('#winTitle').html('<p>产品库存情况</p>');

    var chart = echarts.init(x);

    var option = {

        title: {

        },
        tooltip:{},
        series: [{
            name: '阴极铜库存(吨)',
            type: 'gauge',
            min:0,
            max:5000,
            center:['25%','50%'],
            data: [3533.778],
            axisLine: {
                lineStyle: {
                    color: [
                        [0.33, '#3373c8'],
                        [0.67, '#e2630f'],
                        [1, '#9d0c06'],
                    ]
                }
            }
        }, {
            name: '硫酸库存(吨)',
            center: ['75%', '50%'],
            min: 0,
            max: 15000,
            type: 'gauge',
            data: [11950.84],
            axisLine: {
                lineStyle: {
                    color: [
                        [0.33, '#3373c8'],
                        [0.67, '#e2630f'],
                        [1, '#9d0c06'],
                    ]
                }
            }
        }]
    }
    chart.setOption(option);
}

function draw6(x) {
    $('#winTitle').html('<p>阴极铜销售情况</p>');

    var chart = echarts.init(x);

    var option = {
        color: ['#a0fd00'],

        title: {

        },
        tooltip: {
            trigger:'axis'
        },

        xAxis: {
            type: 'category',
            data: util.getConstantTimes({
                timeA: '2017/4',
                timeB: 1,
                nums: 19,
                linker:'/'
            })
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 5000
        },
        series: [{
            name: '阴极铜销售(吨)',
            type: 'bar',
            data: [2961.108, 2868.075, 2545.25, 737.768, 4693.746, 3168.591, 1959.15, 2577.031, 1665.096, 2976.45, 2770.878, 2021.132, 2624.087, 2711.532, 0, 560.001, 4627.897, 1743.118, 2646.876]
        }]
    }
    option = putOn.getAllDarked(option, true);
    chart.setOption(option);
}

function draw7(x) {
    $('#winTitle').html('<p>原料库存情况</p>');

    var chart = echarts.init(x);

    var option = {

        title: {

        },
        series: [{
            name: '',
            type: 'pie',
            data: [
                { name: '铜精矿进厂总计(吨)', value: 6331.98 },
                { name: '德兴矿进厂量(吨)', value: 3531.76 },
                { name: '永平矿进厂量(吨)', value: 0 },
                { name: '银山矿进厂量(吨)', value: 114.25 },
                { name: '东乡矿进厂量(吨)', value: 0 },
                { name: '武山矿进厂量(吨)', value: 0 },
                { name: '城门山矿进厂量(吨)', value: 675.77 },
                { name: '进口矿进厂量(吨)', value: 1411.72 },
                { name: '地方矿进厂量(吨)', value: 567.95 },
                { name: '粗杂铜进厂量(吨)', value: 1172.06 }
            ]
        }]
    }
    chart.setOption(option);
}

function draw8(x) {
    $('#winTitle').html('<p>原料库存情况</p>');

    var chart = echarts.init(x);

    var option = {

        title: {

        },
        series: [{
            name: '',
            type: 'pie',
            data: [
                { name: '铜精矿进厂总计(吨)', value: 6331.98 },
                { name: '德兴矿进厂量(吨)', value: 3531.76 },
                { name: '永平矿进厂量(吨)', value: 0 },
                { name: '银山矿进厂量(吨)', value: 114.25 },
                { name: '东乡矿进厂量(吨)', value: 0 },
                { name: '武山矿进厂量(吨)', value: 0 },
                { name: '城门山矿进厂量(吨)', value: 675.77 },
                { name: '进口矿进厂量(吨)', value: 1411.72 },
                { name: '地方矿进厂量(吨)', value: 567.95 },
                { name: '粗杂铜进厂量(吨)', value: 1172.06 }
            ]
        }]
    }
    chart.setOption(option);
}

function draw9(x) {
    $('#winTitle').html('<p>原料库存情况</p>');

    var chart = echarts.init(x);

    var option = {

        title: {

        },
        series: [{
            name: '',
            type: 'pie',
            data: [
                { name: '铜精矿进厂总计(吨)', value: 6331.98 },
                { name: '德兴矿进厂量(吨)', value: 3531.76 },
                { name: '永平矿进厂量(吨)', value: 0 },
                { name: '银山矿进厂量(吨)', value: 114.25 },
                { name: '东乡矿进厂量(吨)', value: 0 },
                { name: '武山矿进厂量(吨)', value: 0 },
                { name: '城门山矿进厂量(吨)', value: 675.77 },
                { name: '进口矿进厂量(吨)', value: 1411.72 },
                { name: '地方矿进厂量(吨)', value: 567.95 },
                { name: '粗杂铜进厂量(吨)', value: 1172.06 }
            ]
        }]
    }
    chart.setOption(option);
}

function draw10(x) {
    $('#winTitle').html('<p>原料库存情况</p>');

    var chart = echarts.init(x);

    var option = {

        title: {

        },
        series: [{
            name: '',
            type: 'pie',
            data: [
                { name: '铜精矿进厂总计(吨)', value: 6331.98 },
                { name: '德兴矿进厂量(吨)', value: 3531.76 },
                { name: '永平矿进厂量(吨)', value: 0 },
                { name: '银山矿进厂量(吨)', value: 114.25 },
                { name: '东乡矿进厂量(吨)', value: 0 },
                { name: '武山矿进厂量(吨)', value: 0 },
                { name: '城门山矿进厂量(吨)', value: 675.77 },
                { name: '进口矿进厂量(吨)', value: 1411.72 },
                { name: '地方矿进厂量(吨)', value: 567.95 },
                { name: '粗杂铜进厂量(吨)', value: 1172.06 }
            ]
        }]
    }
    chart.setOption(option);
}


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
















$(function () {

    for (var i = 1; i < 9; i++) {
        $('#btn' + i).animate({
            width:getRandom(1,3.8)+'rem'
        })
    }




    $('.stores cite').click(function () {



        if ($(this).attr('id') === 'btn1') {
            showWin('<p>原料进厂情况</p>', function (x) {
                draw1(x);
            });
           
        }


        else if ($(this).attr('id') === 'btn2') {
            showWin('<p>原料库存情况</p>', function (x) {
                draw2(x);
            });
        }


        else if ($(this).attr('id') === 'btn3') {
            showWin('<p>原料投料情况</p>', function (x) {
                draw3(x);
            });
        }


        else if ($(this).attr('id') === 'btn4') {
            showWin('<p>产品产量情况</p>', function (x) {
                draw4(x);
            });
        }


        else if ($(this).attr('id') === 'btn5') {
            showWin('<p>产品库存情况</p>', function (x) {
                draw5(x);
            });
        }


        else if ($(this).attr('id') === 'btn6') {
            showWin('<p>阴极铜销售情况</p>', function (x) {
                draw6(x);
            });
        }


        else if ($(this).attr('id') === 'btn7') {
            return 
            showWin(function (x) {
                draw1(x);
            });
        }


        else if ($(this).attr('id') === 'btn8') {
            return
            showWin(function (x) {
                draw1(x);
            });
        }


        else if ($(this).attr('id') === 'btn9') {
            return
            showWin(function (x) {
                draw1(x);
            });
        }

        else if ($(this).attr('id') === 'btn10') {
            return
            showWin();
            draw1();
        }

    })

    //$('.mo').click(function () {
    //    showWin();
    //})

























})

































