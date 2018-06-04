

define(function (require) {

    var tb = require('tb');
    var dao = require('dao');

    var ret = {
        tb:null
    };

    ret.drawGrid = function () {

        ret.tb = new tb();

        ret.tb.config({
            container: document.getElementById('grid2'),
            fields: ['Id', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff', 'gggg', 'hhhh', 'iiii', 'jjjj', 'kkkk', 'llll', 'mmmm', 'nnnn'],
            columns: [{
                dataIndex: 'aaaa',
                dataName: '样品编号',
                renderer: function (x) {
                    if (x.aaaa)
                        return x.aaaa
                    else {
                        return "&nbsp;"
                    }
                }
            }, {
                dataIndex: 'bbbb',
                dataName: '检验项目'

            }, {
                dataIndex: 'cccc',
                dataName: '检验结果'

            }, {
                dataIndex: 'dddd',
                dataName: '最小值'

            }, {
                dataIndex: 'eeee',
                dataName: '最大值'
            }, {
                dataIndex: 'ffff',
                dataName: '判定结果'
            }, {
                dataIndex: 'gggg',
                dataName: '备注'
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
        ret.tb.loadData(dao.reGetGridData2())
    }


    return ret;

})





















