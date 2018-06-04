

define(function (require) {

    var tb = require('tb');
    var dao = require('dao');

    var ret = {
        tb:null
    };

    ret.drawGrid = function () {

        ret.tb = new tb();

        ret.tb.config({
            container: document.getElementById('grid1'),
            fields: [ 'Id', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee'],
            columns: [{
                dataIndex: 'aaaa',
                dataName: '年份'
            }, {
                dataIndex: 'bbbb',
                dataName: '月份'
            }, {
                dataIndex: 'cccc',
                dataName: '指标名称',
                textAlign: 'left',
                textIndent: '10px',
                width:'30%'

            }, {
                dataIndex: 'dddd',
                dataName: '单位'
            }, {
                dataIndex: 'eeee',
                dataName: '月产'
            }, {
                dataIndex: 'ffff',
                dataName: '平均日产'
            }, {
                dataIndex: 'gggg',
                dataName: '生产天数'
            }, {
                dataIndex: 'hhhh',
                dataName: '备注'
            }]
        })

        ret.tb.init(dao.getGridData());

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





















