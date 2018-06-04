

define(function (require) {

    var tb = require('tb');
    var dao = require('dao');

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

    var ret = {
        tb:null
    };

    ret.drawGrid = function () {

        ret.tb = new tb();

        ret.tb.config({
            container: document.getElementById('grid2'),
            fields: ['Id', 'aaaa', 'bbbb', 'cccc' ],
            columns: [{
                dataIndex: 'aaaa',
                dataName: '检验项目',
                renderer: function (x) {
                    if (x.aaaa)
                        return x.aaaa
                    else {
                        return "&nbsp;"
                    }
                }
            }, {
                dataIndex: 'bbbb',
                dataName: '检验结果'

            }, {
                dataIndex: 'cccc',
                dataName: '单位'

            }]
        })

        ret.tb.init(dao.getGridData2());

        ////添加
        //ret.tb.on('click', '.add', function (line, all) {
                
        //    console.log('你点击了行内添加按钮');
        //})

        ////修改
        //ret.tb.on('click', 'tb-edit', function (line, all) {

        //    console.log('你点击了行内编辑按钮');
        //    console.log(line);

        //})

        ////删除
        //ret.tb.on('click', 'tb-delete', function (line, all) {

        //    console.log('你点击了行内删除按钮');
        //    console.log(line);

        //    ret.tb.loadData(dao.reGetGridData());

        //})
    }

    ret.reloadData = function () {

        var Data = [
            {
                Id: 11, aaaa: 'H2O', bbbb: getRandom(15,20), cccc: '%'
            }, {
                Id: 12, aaaa: 'Pb', bbbb: getRandom(1, 2), cccc: '%'
            }, {
                Id: 13, aaaa: 'SiO2', bbbb: getRandom(13, 20), cccc: '%'
            }, {
                Id: 14, aaaa: 'Fe', bbbb: getRandom(15, 18), cccc: '%'
            }, {
                Id: 15, aaaa: 'Sb', bbbb: getRandom(0, 0.8), cccc: '%'
            }, {
                Id: 16, aaaa: 'Bi', bbbb: getRandom(0, 0.8), cccc: '%'
            }, {
                Id: 17, aaaa: 'CaO', bbbb: getRandom(0, 0.8), cccc: '%'
            }
        ];

        ret.tb.loadData(Data);
    }

    return ret;

})





















