

define(function (require) {

    var tb = require('tb');
    var dao = require('dao');

    var data = ['序号', '指标名称（单位）', '实时值', '目标值', '偏差', '煤耗偏差'];
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
        tb:null
    };

    ret.drawGrid = function () {

        ret.tb = new tb();

        ret.tb.config({
            container: document.getElementById('grid1'),
            fields: fieldsArr,
            columns: arr
        })

        ret.tb.init(dao.getGrid1Data());

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





















