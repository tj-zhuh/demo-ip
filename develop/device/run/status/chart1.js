

define(function (require) {

    var echarts = require('echarts');
    var dao = require('dao');
    var $ = require('jquery');

    var ret = {
        chart:null
    };

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

    //
    ret.getOption = function () {
        return {
            title: {
                text:''
            },
            tooltip:{},
            xAxis: {
                type: 'category',
                data: ['1月', '2月'],
                axisLine:{show:0}
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 10,
                splitLine: {
                    show:0
                },
                axisLine: { show: 0 },
                axisTick: { show: 0 },
                axisLabel: {show:0}
            },
            grid: {
                top: '10%',
                bottom:'0%'
            },
            series: [{
                type: 'bar',
                stack:'hehe',
                name: 'n1',
                data: getRadomNums(2, 1, 6),
                label: {
                    normal: {
                        show: 1,
                        offset:[30,40]
                    }
                }
            }, {
                type: 'bar',
                stack: 'hehe',
                name: 'n2',
                data: [getRandom(2, 3), 0],
                label: {
                    normal: {
                        show: 1,
                        offset: [30, 40]
                    }
                }
            }, {
                type: 'bar',
                stack: 'hehe',
                name: 'n3',
                data: [getRandom(2, 3), 0],
                label: {
                    normal: {
                        show: 1,
                        offset: [30, 40]
                    }
                }
            }]

        }
    }


    ret.draw = function (body) {

        var container = body;

        var Div1 = $('<div class="barContainer"></div>');

        container.append(Div1);

        var Div2 = $('<div class="barContainer"></div>');

        container.append(Div2);

        //第一条
        var div11 = $('<div class="bar"></div>');
        div11.css('background-color', 'transparent');
        div11.css('height', '28%');
        Div1.append(div11);

        var div12 = $('<div class="bar">68</div>');
        div12.css('background-color', 'red');
        //div12.css('color', '#fff');
        div12.css('height', '12%');
        div12.css('lineHeight', '12%');
        Div1.append(div12);

        var div13 = $('<div class="bar">57</div>');
        div13.css('background-color', 'yellow');
        div13.css('height', '24%');
        div13.css('lineHeight', '24%');
        Div1.append(div13);

        var div14 = $('<div class="bar">36</div>');
        div14.css('background-color', 'green');
        //div14.css('color', '#fff');
        div14.css('height', '36%');
        div14.css('lineHeight', '36%');
        Div1.append(div14);


        //第二条
        var div21 = $('<div class="bar"></div>');
        div21.css('background-color', 'transparent');
        div21.css('height','88%');
        Div2.append(div21);

        var div22 = $('<div class="bar snd"><p>12</p></div>');
        div22.css('background-color', 'green');
        //div22.css('color', '#fff');
        div22.css('height', '12%');
        Div2.append(div22);








    }

    return ret;

})





















