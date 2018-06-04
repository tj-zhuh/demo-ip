

define(function (require) {

    var tb = require('tb');
    var dao = require('dao');

    var data = ['发电负荷(MW)', '', '蒸汽流量(t/h)', '', '高炉煤气(m3/h)', '', '转炉煤气(m3/h)', '', '焦炉煤气(m3/h)', '', '燃煤(t/h)', ''];
    var fieldsArr = [];
    var arr = [];
    String.prototype.repeat = function (n) {
        var _this = this;
        var result = '';
        for (var i = 0; i < n; i++) {
            result += _this;
        }
        return result;
    }
    fieldsArr.push('Id');
    for (var i = 0; i < data.length; i++) {
        arr.push({
            dataIndex: String.fromCharCode(0x61 + i).repeat(4),
            dataName: data[i]
        })
        fieldsArr.push(String.fromCharCode(0x60 + i).repeat(4));
    }

    var ret = {
        tb: null
    };

    ret.drawGrid = function () {

        ret.tb = new tb();

        ret.tb.config({
            container: document.getElementById('grid2'),
            fields: fieldsArr,
            columns: arr
        })

        ret.tb.init(dao.getGrid2Data());

        ////添加
        //ret.tb.on('click', '.add', function (line, all) {

        //    console.log('你点击了行内添加按钮');
        //})

        //修改
        ret.tb.on('click', 'tb-edit', function (line, all) {

            console.log('你点击了行内编辑按钮');
            console.log(line);

        })

        //删除
        ret.tb.on('click', 'tb-delete', function (line, all) {

            console.log('你点击了行内删除按钮');
            console.log(line);

            //ret.tb.loadData(dao.reGetGridData());

        })
    }
    return ret;

})





















