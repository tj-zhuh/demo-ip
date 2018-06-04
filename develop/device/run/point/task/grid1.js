

define(function (require) {

    var tb = require('tb');
    var dao = require('dao');

    var data = ['序号', '专业', '机组', '计划名称', '设备名称', '测点名', '计划点检时间', '执行方式', '操作', '异常登记', '上限', '下限', '点检值', '点检人', '点检时间'];
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
    for (var i = 0; i < 8; i++) {
        arr.push({
            dataIndex: String.fromCharCode(0x61 + i).repeat(4),
            dataName: data[i]
        })
        fieldsArr.push(String.fromCharCode(0x60 + i).repeat(4));
    }
    arr.push({
        dataIndex: 'iiii',
        dataName: data[8],
        renderer: function (a, b) {
            return "<div class='tb-link'><strong>点检</strong><strong>曲线</strong></div>"
        }
    });
    arr.push({
        dataIndex: 'jjjj',
        dataName: data[9],
        renderer: function (a, b) {
            return "<div class='tb-link'><strong>登记</strong></div>"
        }
    });
    for (var i = 10; i < data.length; i++) {
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





















