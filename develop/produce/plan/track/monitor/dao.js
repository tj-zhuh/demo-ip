


define(function (require) {

    var tool = require('tool');

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
    ret.getGridData = function () {

        return [
            {
                Id: 11, aaaa: '1', bbbb: 'GT678778', cccc: '未知', dddd: '13', eeee: '无', ffff: '增删改查', gggg: '增删改查', hhhh: '增删改查', iiii: '增删改查', jjjj: '增删改查', kkkk: '增删改查', llll: '增删改查', mmmm: '增删改查', nnnn: '增删改查', oooo: '增删改查',
                ecolor: 'red', fcolor: 'red', gcolor: 'yellow', hcolor: 'green', icolor: 'red', jcolor: 'blue', kcolor: 'red', lcolor: 'red', mcolor: 'red'
            }, {
                Id: 11, aaaa: '2', bbbb: 'GT66777', cccc: '未知', dddd: '12', eeee: '无', ffff: '增删改查', gggg: '增删改查', hhhh: '增删改查', iiii: '增删改查', jjjj: '增删改查', kkkk: '增删改查', llll: '增删改查', mmmm: '增删改查', nnnn: '增删改查', oooo: '增删改查',
                ecolor: 'red', fcolor: 'red', gcolor: 'green', hcolor: 'green', icolor: 'green', jcolor: 'blue', kcolor: 'red', lcolor: 'blue', mcolor: 'red'
            }, {
                Id: 11, aaaa: '3', bbbb: 'GF8888', cccc: '未知', dddd: '1', eeee: '无', ffff: '增删改查', gggg: '增删改查', hhhh: '增删改查', iiii: '增删改查', jjjj: '增删改查', kkkk: '增删改查', llll: '增删改查', mmmm: '增删改查', nnnn: '增删改查', oooo: '增删改查',
                ecolor: 'yellow', fcolor: 'yellow', gcolor: 'yellow', hcolor: 'yellow', icolor: 'red', jcolor: 'red', kcolor: 'red', lcolor: 'red', mcolor: 'red'
            }
            
            //{ Id: 14, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            //{ Id: 15, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            //{ Id: 16, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            //{ Id: 17, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            //{ Id: 18, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            //{ Id: 19, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            //{ Id: 20, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            //{ Id: 21, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            //{ Id: 22, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' }
         ]

    }

    ret.getChartData1 = function () {
        return {
            legendData: ['日实际完成','日计划'],
            xaxisData: ['铜精矿处理量(吨)', '矿铜量(吨)', '渣精矿(吨)', '石英砂(吨)', '合格阳极铜(吨)', '国内粗铜(吨)', '进口粗铜(吨)', '国内铜精矿(吨)', '紫金山铜精矿(吨)', '进口铜精矿(吨)', '硫酸100%(吨)', '动力发电量(万千瓦时)', '阴极铜(吨)', '选矿处理(吨)', '阳极泥处理量(干量)(吨)'],
            data: [getRadomNums(15, 0, 3200), getRadomNums(15, 0, 3200)]
        }
    }

    ret.getChartData2 = function () {
        return {
            legendData: ['计划完成', '月累计完成', '月计划'],
            xaxisData: ['铜精矿处理量(吨)', '矿铜量(吨)', '渣精矿(吨)', '石英砂(吨)', '合格阳极铜(吨)', '国内粗铜(吨)', '进口粗铜(吨)', '国内铜精矿(吨)', '紫金山铜精矿(吨)', '进口铜精矿(吨)', '硫酸100%(吨)', '动力发电量(万千瓦时)', '阴极铜(吨)', '选矿处理(吨)', '阳极泥处理量(干量)(吨)'],
            data: [getRadomNums(15, 0, 90000), getRadomNums(15, 0, 90000), getRadomNums(15, 0, 90000)]
        }
    }

    ret.getChartData3 = function () {
        return {
            legendData: ['干精矿品位(%)', '冰铜品位(%)', 'FF作业率(%)', '稀酸浓度(%)'],
            xaxisData: tool.getDate({
                month: '6月',
                startDay: 1,
                endDay: 25,
                faller:'日'
            }),
            data: [getRadomNums(25, 0, 30), getRadomNums(25, 20, 50), getRadomNums(25, 30, 80), getRadomNums(25, 0, 120)]
        }
    }








    
    ret.loadSelect = function (id, data) {

        for (var i = 0; i < data.length; i++) {
            var op = document.createElement('option');
            op.innerHTML = data[i];
            id.appendChild(op);
        }
    }

    ret.selectData1 = function () {
        return ['领料']
    }

    ret.selectData2 = function () {
        return ['法兰盖ghd67']
    }

    ret.selectData3 = function () {
        return ['电焊车间']
    }

    ret.selectData4 = function () {
        return ['刘呵呵']
    }

    ret.selectData5 = function () {
        return ['生产部']
    }

    return ret;

})



















