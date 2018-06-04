


define(function (require) {

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
                Id: 11, aaaa: '1', bbbb: '厂级', cccc: '生产', dddd: '产品', eeee: '年度', ffff: '有效', gggg: '年度生产计划达标', hhhh: '电解车间', iiii: '159', jjjj: '生产管理部', kkkk: '95', llll: '95', mmmm: '3.0', nnnn: '3.01', oooo: '合格', pppp: '3', qqqq: ''
            }, {
                Id: 12, aaaa: '2', bbbb: '厂级', cccc: '生产', dddd: '产品', eeee: '年度', ffff: '有效', gggg: '年度生产计划达标', hhhh: '电解车间', iiii: '159', jjjj: '生产管理部', kkkk: '95', llll: '95', mmmm: '3.0', nnnn: '3.01', oooo: '合格', pppp: '1', qqqq: ''
            }, {
                Id: 13, aaaa: '3', bbbb: '厂级', cccc: '生产', dddd: '产品', eeee: '年度', ffff: '有效', gggg: '年度生产计划达标', hhhh: '电解车间', iiii: '159', jjjj: '生产管理部', kkkk: '95', llll: '95', mmmm: '3.0', nnnn: '3.01', oooo: '合格', pppp: '2', qqqq: ''
            }, {
                Id: 13, aaaa: '3', bbbb: '厂级', cccc: '生产', dddd: '产品', eeee: '年度', ffff: '有效', gggg: '年度生产计划达标', hhhh: '电解车间', iiii: '159', jjjj: '生产管理部', kkkk: '95', llll: '95', mmmm: '3.0', nnnn: '3.01', oooo: '合格', pppp: '2', qqqq: ''
            }, {
                Id: 13, aaaa: '3', bbbb: '厂级', cccc: '生产', dddd: '产品', eeee: '年度', ffff: '有效', gggg: '年度生产计划达标', hhhh: '电解车间', iiii: '159', jjjj: '生产管理部', kkkk: '95', llll: '95', mmmm: '3.0', nnnn: '3.01', oooo: '合格', pppp: '2', qqqq: ''
            }, {
                Id: 13, aaaa: '3', bbbb: '厂级', cccc: '生产', dddd: '产品', eeee: '年度', ffff: '有效', gggg: '年度生产计划达标', hhhh: '电解车间', iiii: '159', jjjj: '生产管理部', kkkk: '95', llll: '95', mmmm: '3.0', nnnn: '3.01', oooo: '合格', pppp: '2', qqqq: ''
            }, {
                Id: 13, aaaa: '3', bbbb: '厂级', cccc: '生产', dddd: '产品', eeee: '年度', ffff: '有效', gggg: '年度生产计划达标', hhhh: '电解车间', iiii: '159', jjjj: '生产管理部', kkkk: '95', llll: '95', mmmm: '3.0', nnnn: '3.01', oooo: '合格', pppp: '2', qqqq: ''
            }
            //, {
            //    Id: 14, aaaa: '4', bbbb: '厂级', cccc: '生产', dddd: '产品', eeee: '年度', ffff: '有效', gggg: '年度生产计划达标', hhhh: '电解车间', iiii: '159', jjjj: '生产管理部', kkkk: '95', llll: '95', mmmm: '3.0', nnnn: '3.01', oooo: '合格', pppp: '4', qqqq: ''
            //}, {
            //    Id: 14, aaaa: '', bbbb: '', cccc: '', dddd: '', eeee: '', ffff: '', gggg: '', hhhh: '', iiii: '', jjjj: '', kkkk: '', llll: '', mmmm: '', nnnn: '', oooo: '', pppp: '', qqqq: ''
            //}, {
            //    Id: 14, aaaa: '', bbbb: '', cccc: '', dddd: '', eeee: '', ffff: '', gggg: '', hhhh: '', iiii: '', jjjj: '', kkkk: '', llll: '', mmmm: '', nnnn: '', oooo: '', pppp: '', qqqq: ''
            //}, {
            //    Id: 14, aaaa: '', bbbb: '', cccc: '', dddd: '', eeee: '', ffff: '', gggg: '', hhhh: '', iiii: '', jjjj: '', kkkk: '', llll: '', mmmm: '', nnnn: '', oooo: '', pppp: '', qqqq: ''
            //}
         ]

    }

    //
    ret.getGridData2 = function () {

        return [
            {
                Id: 11, aaaa: '熔炼车间', bbbb: getRandom(90, 100), cccc: getRandom(90, 100), dddd: 1, eeee: '年度', ffff: '有效'
            }, {
                Id: 12, aaaa: '电解车间', bbbb: getRandom(90, 100), cccc: getRandom(90, 100), dddd: 2, eeee: '年度', ffff: '有效'
            }, {
                Id: 13, aaaa: '倾动炉', bbbb: getRandom(90, 100), cccc: getRandom(90, 100), dddd: 3, eeee: '年度', ffff: '有效'
            }, {
                Id: 13, aaaa: '硫酸车间', bbbb: getRandom(90, 100), cccc: getRandom(90, 100), dddd: 4, eeee: '年度', ffff: '有效'
            }
            //, {
            //    Id: 14, aaaa: '4', bbbb: '厂级', cccc: '生产', dddd: '产品', eeee: '年度', ffff: '有效'
            //}, {
            //    Id: 14, aaaa: '', bbbb: '', cccc: '', dddd: '', eeee: '', ffff: ''
            //}, {
            //    Id: 14, aaaa: '', bbbb: '', cccc: '', dddd: '', eeee: '', ffff: ''
            //}, {
            //    Id: 14, aaaa: '', bbbb: '', cccc: '', dddd: '', eeee: '', ffff: ''
            //}
        ]

    }

    //
    ret.getGridData3 = function () {

        return [
            {
                Id: 11, aaaa: '2016-1', bbbb: '0.00', cccc: '744.00', dddd: '1', eeee: getRandom(0, 1), ffff: getRandom(0, 5), gggg: '年度生产计划达标', hhhh: '电解车间', iiii: '159', jjjj: '生产管理部', kkkk: '95', llll: '95', mmmm: '3.0', nnnn: '3.01', oooo: '合格', pppp: '3', qqqq: ''
            }, {
                Id: 12, aaaa: '2016-2', bbbb: '12.00', cccc: '744.00', dddd: '1', eeee: getRandom(0, 1), ffff: getRandom(0, 5), gggg: '年度生产计划达标', hhhh: '电解车间', iiii: '159', jjjj: '生产管理部', kkkk: '95', llll: '95', mmmm: '3.0', nnnn: '3.01', oooo: '合格', pppp: '1', qqqq: ''
            }, {
                Id: 13, aaaa: '2016-3', bbbb: '13.00', cccc: '744.00', dddd: '1', eeee: getRandom(0, 1), ffff: getRandom(0, 5), gggg: '年度生产计划达标', hhhh: '电解车间', iiii: '159', jjjj: '生产管理部', kkkk: '95', llll: '95', mmmm: '3.0', nnnn: '3.01', oooo: '合格', pppp: '2', qqqq: ''
            }
            //, {
            //    Id: 14, aaaa: '4', bbbb: '厂级', cccc: '生产', dddd: '产品', eeee: '年度', ffff: '有效', gggg: '年度生产计划达标', hhhh: '电解车间', iiii: '159', jjjj: '生产管理部', kkkk: '95', llll: '95', mmmm: '3.0', nnnn: '3.01', oooo: '合格', pppp: '4', qqqq: ''
            //}, {
            //    Id: 14, aaaa: '', bbbb: '', cccc: '', dddd: '', eeee: '', ffff: '', gggg: '', hhhh: '', iiii: '', jjjj: '', kkkk: '', llll: '', mmmm: '', nnnn: '', oooo: '', pppp: '', qqqq: ''
            //}, {
            //    Id: 14, aaaa: '', bbbb: '', cccc: '', dddd: '', eeee: '', ffff: '', gggg: '', hhhh: '', iiii: '', jjjj: '', kkkk: '', llll: '', mmmm: '', nnnn: '', oooo: '', pppp: '', qqqq: ''
            //}, {
            //    Id: 14, aaaa: '', bbbb: '', cccc: '', dddd: '', eeee: '', ffff: '', gggg: '', hhhh: '', iiii: '', jjjj: '', kkkk: '', llll: '', mmmm: '', nnnn: '', oooo: '', pppp: '', qqqq: ''
            //}
        ]

    }












    ret.getChartData1 = function () {
        return {
            s1: [
                { name: '指标1', value: getRandom(10, 50) },
                { name: '指标2', value: getRandom(10, 50) },
                { name: '指标3', value: getRandom(10, 50) },
                { name: '指标4', value: getRandom(10, 50) },
                { name: '指标5', value: getRandom(10, 50) },
                { name: '指标6', value: getRandom(10, 50) }
            ],
            s2: [
                { name: '指标1', value: getRandom(10, 50) },
                { name: '指标2', value: getRandom(10, 50) },
                { name: '指标3', value: getRandom(10, 50) },
                { name: '指标4', value: getRandom(10, 50) },
                { name: '指标5', value: getRandom(10, 50) },
                { name: '指标6', value: getRandom(10, 50) }
            ]
        }
    }

    ret.getChartData2 = function () {
        return []
    }





    ret.reGetGridData = function () {

        return [
            { Id: 11, aaaa: 'zzbc', bbbb: '企业一部', cccc: '所有数据', dddd: '机密', eeee: '增删改查' },
            { Id: 12, aaaa: 'zhuh', bbbb: '企业一部', cccc: '所有数据', dddd: '机密', eeee: '增删改查' },
            { Id: 13, aaaa: 'zrd', bbbb: '企业一部', cccc: '所有数据', dddd: '机密', eeee: '增删改查' },
            { Id: 14, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 15, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 16, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 17, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 18, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 19, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 20, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 21, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 22, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' }
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



















