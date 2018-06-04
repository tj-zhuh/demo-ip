

define(function (require) {

    var tb = require('tb');
    var dao = require('dao');

    var data = ['选项', '项目', '单位', '当前值', '标准值', '上限', '下限'];
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
    arr.push({
        dataIndex: 'aaaa',
        dataName: '选项',
        renderer: function (a,b) {
                return "<div class='tb-checkbox'></div>";
        }
    });
    arr.push({
        dataIndex: 'bbbb',
        dataName: '项目',
        renderer: function (a, b) {
            return "<div class='tb-link'>" + a.bbbb + "</div>";
        }
    });
    for (var i = 2; i < data.length; i++) {
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





















