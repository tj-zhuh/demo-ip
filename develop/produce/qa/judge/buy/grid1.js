

define(function (require) {

    var tb = require('tb');
    var dao = require('dao');
    var grid2 = require('grid2');
    var ret = {
        tb:null
    };

    ret.drawGrid = function () {

        ret.tb = new tb();

        ret.tb.config({
            container: document.getElementById('grid1'),
            fields: ['Id', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff', 'gggg', 'hhhh', 'iiii', 'jjjj', 'kkkk', 'llll', 'mmmm', 'nnnn', 'oooo', 'ecolor', 'fcolor', 'gcolor', 'hcolor', 'icolor', 'jcolor', 'kcolor', 'lcolor', 'mcolor' ],
            columns: [{
                dataIndex: 'aaaa',
                dataName: '样品条码',
                renderer: function (x) {
                    if(x.aaaa)
                        return x.aaaa
                    else {
                        return "&nbsp;"
                    }
                }
            }, {
                dataIndex: 'bbbb',
                dataName: '样品编号'

            }, {
                dataIndex: 'cccc',
                dataName: '样品名称'

            }, {
                dataIndex: 'dddd',
                dataName: '物料名称'

            }, {
                dataIndex: 'eeee',
                dataName: '供应商'
            }, {
                dataIndex: 'ffff',
                dataName: '合同号'
            }, {
                dataIndex: 'gggg',
                dataName: '车号'
            }, {
                dataIndex: 'hhhh',
                dataName: '到货日期'
            }, {
                dataIndex: 'iiii',
                dataName: '制样日期'
            }, {
                dataIndex: 'jjjj',
                dataName: '制样员2'
            }, {
                dataIndex: 'kkkk',
                dataName: '监察人'
            }]
        })

        ret.tb.init(dao.getGridData1());

        ////添加
        ret.tb.on('click', '', function (line, all) {
                
            console.log(line);

            grid2.reloadData();



        })

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

    return ret;

})





















