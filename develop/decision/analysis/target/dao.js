


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

        var i = 0;
        var j = 97;
        var _temp = [];

        for (; i < 17; i++) {
            
            _temp.push((String.fromCharCode(j) + String.fromCharCode(j) + String.fromCharCode(j) + String.fromCharCode(j)))
            j++;
        }

        var __temp = [
            ['1', '厂级', '生产', '产品', '年度', '有效', '年度生产计划达标率', '电解车间', '159', '生产管理部', '95', '95', '3.0', '3.01', '合格', '3', ''],
            ['2', '厂级', '生产', '产品', '年度', '有效', '年度生产计划达标率', '熔炼车间', '120', '生产管理部', '95', '95', '3.0', '3.5', '合格', '1', ''],
            ['3', '厂级', '生产', '产品', '年度', '有效', '年度生产计划达标率', '倾动炉车间', '123', '生产管理部', '95', '95', '3.0', '3.1', '合格', '4', ''],
            ['4', '厂级', '生产', '产品', '年度', '有效', '年度生产计划达标率', '硫酸车间', '108', '生产管理部', '95', '95', '3.0', '2.98', '不合格', '6', '设备故障'],
            ['5', '厂级', '生产', '产品', '年度', '有效', '年度生产计划达标率', '动力车间', '92', '生产管理部', '95', '95', '3.0', '3.2', '合格', '2', ''],
            ['6', '厂级', '生产', '产品', '年度', '有效', '年度生产计划达标率', '新材料车间', '102', '生产管理部', '95', '95', '3.0', '3.05', '合格', '5', ''],
            ['7', '厂级', '生产', '产品', '年度', '有效', '年度生产计划达标率', '选矿车间', '98', '生产管理部', '95', '95', '3.0', '3.14', '合格', '3', '']
        ];

        var __temp__ = [];

        i = 0;

        for (; i < __temp.length; i++) {
            __temp__[i] = {};
            for (var k = 0; k < _temp.length; k++) {
                
                __temp__[i][_temp[k]] = __temp[i][k];
            }
        }

        return __temp__;

    }

    //
    ret.getGridData2 = function () {

        return [
            {
                Id: 11, aaaa: '熔炼车间', bbbb: getRandom(90, 100), cccc: getRandom(90, 100), dddd: 3.5, eeee: 1
            }, {
                Id: 12, aaaa: '电解车间', bbbb: getRandom(90, 100), cccc: getRandom(90, 100), dddd: 3.01, eeee: 2
            }, {
                Id: 13, aaaa: '倾动炉', bbbb: getRandom(90, 100), cccc: getRandom(90, 100), dddd: 3.1, eeee: 3
            }, {
                Id: 13, aaaa: '硫酸车间', bbbb: getRandom(90, 100), cccc: getRandom(90, 100), dddd: 2.98, eeee: 4
            }, {
                Id: 13, aaaa: '倾动炉', bbbb: getRandom(90, 100), cccc: getRandom(90, 100), dddd: 3.1, eeee: 3
            }, {
                Id: 13, aaaa: '硫酸车间', bbbb: getRandom(90, 100), cccc: getRandom(90, 100), dddd: 2.98, eeee: 4
            }, {
                Id: 13, aaaa: '倾动炉', bbbb: getRandom(90, 100), cccc: getRandom(90, 100), dddd: 3.1, eeee: 3
            }, {
                Id: 13, aaaa: '硫酸车间', bbbb: getRandom(90, 100), cccc: getRandom(90, 100), dddd: 2.98, eeee: 4
            }, {
                Id: 13, aaaa: '倾动炉', bbbb: getRandom(90, 100), cccc: getRandom(90, 100), dddd: 3.1, eeee: 3
            }, {
                Id: 13, aaaa: '硫酸车间', bbbb: getRandom(90, 100), cccc: getRandom(90, 100), dddd: 2.98, eeee: 4
            }, {
                Id: 13, aaaa: '倾动炉', bbbb: getRandom(90, 100), cccc: getRandom(90, 100), dddd: 3.1, eeee: 3
            }, {
                Id: 13, aaaa: '硫酸车间', bbbb: getRandom(90, 100), cccc: getRandom(90, 100), dddd: 2.98, eeee: 4
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
                Id: 11, aaaa: '2016-1', bbbb: '0.00', cccc: '744.00', dddd: '1', eeee: getRandom(0, 1), ffff: getRandom(0, 5), gggg: getRandom(0, 5)
            }, {
                Id: 12, aaaa: '2016-2', bbbb: '12.00', cccc: '744.00', dddd: '1', eeee: getRandom(0, 1), ffff: getRandom(0, 5), gggg: getRandom(0, 5)
            }, {
                Id: 13, aaaa: '2016-3', bbbb: '13.00', cccc: '744.00', dddd: '1', eeee: getRandom(0, 1), ffff: getRandom(0, 5), gggg: getRandom(0, 5)
            }, {
                Id: 13, aaaa: '2016-4', bbbb: '13.00', cccc: '744.00', dddd: '1', eeee: getRandom(0, 1), ffff: getRandom(0, 5), gggg: getRandom(0, 5)
            }, {
                Id: 13, aaaa: '2016-5', bbbb: '13.00', cccc: '744.00', dddd: '1', eeee: getRandom(0, 1), ffff: getRandom(0, 5), gggg: getRandom(0, 5)
            }, {
                Id: 13, aaaa: '2016-6', bbbb: '13.00', cccc: '744.00', dddd: '1', eeee: getRandom(0, 1), ffff: getRandom(0, 5), gggg: getRandom(0, 5)
            }, {
                Id: 13, aaaa: '2016-7', bbbb: '13.00', cccc: '744.00', dddd: '1', eeee: getRandom(0, 1), ffff: getRandom(0, 5), gggg: getRandom(0, 5)
            }, {
                Id: 13, aaaa: '2016-8', bbbb: '13.00', cccc: '744.00', dddd: '1', eeee: getRandom(0, 1), ffff: getRandom(0, 5), gggg: getRandom(0, 5)
            }, {
                Id: 13, aaaa: '2016-9', bbbb: '13.00', cccc: '744.00', dddd: '1', eeee: getRandom(0, 1), ffff: getRandom(0, 5), gggg: getRandom(0, 5)
            }, {
                Id: 13, aaaa: '2016-10', bbbb: '13.00', cccc: '744.00', dddd: '1', eeee: getRandom(0, 1), ffff: getRandom(0, 5), gggg: getRandom(0, 5)
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
                { name: '电解车间', value: 3.01 },
                { name: '熔炼车间', value: 3.5 },
                { name: '倾动炉车间', value: 3.1 },
                { name: '硫酸车间', value: 2.98 },
                { name: '动力车间', value: 3.2 },
                { name: '新材料车间', value: 3.05 },
                { name: '选矿车间', value: 3.14 }
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
        return ['厂级']
    }

    ret.selectData2 = function () {
        return ['生产']
    }

    ret.selectData3 = function () {
        return ['产品']
    }

    ret.selectData4 = function () {
        return ['熔炼车间']
    }

    ret.selectData5 = function () {
        return ['生产管理部']
    }

    return ret;

})



















