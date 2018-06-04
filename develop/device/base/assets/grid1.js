

define(function (require) {

    var $ = require('jquery');
    var tb = require('tb');
    var dao = require('dao');

    var data = ['发电厂', '安装位置', '设备名称', '设备类型', '设备型号', '生产厂家', '投运日期', '责任人', '专业名称'];
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

    /*  grid-container  */
    var cnt = 1;
    $('.grid-router li').click(function () {
        if(!$(this).hasClass('active')){
            $('.grid-router li').removeClass('active');
            $(this).addClass('active');
            ret.tb.loadData(dao.getTransferData(cnt));
            cnt++;
        }
    });



    return ret;

})





















