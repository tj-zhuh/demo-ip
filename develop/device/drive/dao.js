


define(function (require) {

    var tool = require('tool');
    var util = require('util');


    var ret = {};

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
    ret.getChartData1 = function () {

        return getRandom(0, 100)

    }

    ret.getChartData2 = function () {

        return {
            //legendData: ['看不清1', '看不清2'],
            xaxisData: tool.getDate({
                month: '6月',
                startDay: 1,
                endDay: 15,
                faller:'日'
            }),
            data: getRadomNums(15,10,100)
        }

    }


    ret.getChartData3 = function () {
        return {
            legendData: ['设备一数量', '设备二数量', '设备三数量', '设备四数量'],
            xaxisData: util.getArray(14, 1),
            data: [getRadomNums(14, 0, 30), getRadomNums(14, 20, 50), getRadomNums(14, 30, 80), getRadomNums(14, 0, 120)]
        }
    }

    ret.getChartData4 = function () {

        return {
            //legendData: ['看不清1', '看不清2'],
            xaxisData: tool.getDate({
                month: '6月',
                startDay: 1,
                endDay: 15,
                faller: '日'
            }),
            data: getRadomNums(15, 10, 100)
        }

    }

    ret.getChartData5 = function () {

        return getRandom(0, 100)

    }

    ret.getChartData6 = function () {

        return {
            //legendData: ['看不清1', '看不清2'],
            xaxisData: tool.getDate({
                month: '6月',
                startDay: 1,
                endDay: 15,
                faller: '日'
            }),
            data: getRadomNums(15, 10, 100)
        }

    }

    ret.getGridData1 = function () {
        return [
         { Id: 11, aaaa: '1', bbbb: '维修中', cccc: '可以', dddd: '2017/8/9', eeee: '2017/5/9', ffff: '一级', gggg: 'GT-UI8977', hhhh: '设备一', iiii: '型号一', jjjj: '部门一', kkkk: '项目一', llll: '统一标准' },
         { Id: 11, aaaa: '2', bbbb: '维修中', cccc: '可以', dddd: '2017/8/9', eeee: '2017/5/19', ffff: '三级', gggg: 'GT-UI7977', hhhh: '设备二', iiii: '型号二', jjjj: '部门二', kkkk: '项目二', llll: '统一标准' },
         { Id: 11, aaaa: '3', bbbb: '待维修', cccc: '可以', dddd: '2017/8/19', eeee: '2017/5/19', ffff: '三级', gggg: 'GT-UI8017', hhhh: '设备三', iiii: '型号三', jjjj: '部门三', kkkk: '项目三', llll: '统一标准' },
         { Id: 11, aaaa: '4', bbbb: '已修缮', cccc: '可以', dddd: '2017/8/19', eeee: '2017/5/19', ffff: '二级', gggg: 'GT-UI8327', hhhh: '设备四', iiii: '型号四', jjjj: '部门四', kkkk: '项目四', llll: '统一标准' },
         { Id: 11, aaaa: '5', bbbb: '已修缮', cccc: '不可', dddd: '2017/8/29', eeee: '2017/5/29', ffff: '一级', gggg: 'GT-UI6677', hhhh: '设备五', iiii: '型号五', jjjj: '部门五', kkkk: '项目五', llll: '统一标准' },
         { Id: 11, aaaa: '6', bbbb: '已修缮', cccc: '可以', dddd: '2017/8/19', eeee: '2017/5/19', ffff: '二级', gggg: 'GT-UI8327', hhhh: '设备四', iiii: '型号四', jjjj: '部门四', kkkk: '项目四', llll: '统一标准' },
         { Id: 11, aaaa: '7', bbbb: '已修缮', cccc: '不可', dddd: '2017/8/29', eeee: '2017/5/29', ffff: '一级', gggg: 'GT-UI6677', hhhh: '设备五', iiii: '型号五', jjjj: '部门五', kkkk: '项目五', llll: '统一标准' },
         { Id: 11, aaaa: '8', bbbb: '已修缮', cccc: '可以', dddd: '2017/8/19', eeee: '2017/5/19', ffff: '二级', gggg: 'GT-UI8327', hhhh: '设备四', iiii: '型号四', jjjj: '部门四', kkkk: '项目四', llll: '统一标准' },
         { Id: 11, aaaa: '9', bbbb: '已修缮', cccc: '不可', dddd: '2017/8/29', eeee: '2017/5/29', ffff: '一级', gggg: 'GT-UI6677', hhhh: '设备五', iiii: '型号五', jjjj: '部门五', kkkk: '项目五', llll: '统一标准' }

        ]
    }






    ret.loadSelect = function (id, data) {

        for (var i = 0; i < data.length; i++) {
            var op = document.createElement('option');
            op.innerHTML = data[i];
            id.appendChild(op);
        }
    }

    ret.selectData1 = function () {
        return ['2011', '2012', '2013', '2014', '2015', '2016', '2017']
    }

    ret.selectData2 = function () {
        return ['按仓库', '按库房', '按地区', '按类型', '按负责人']
    }

    ret.selectData3 = function () {
        return ['原料仓库', '物资仓库', '大仓库1', '仓库2']
    }

    ret.selectData4 = function () {
        return ['柱状图', '折线图']
    }


    return ret;

})



















