

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
            fields: ['Id', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff', 'gggg', 'hhhh', 'iiii', 'jjjj', 'kkkk', 'llll', 'mmmm', 'nnnn', 'oooo', 'ecolor', 'fcolor', 'gcolor', 'hcolor', 'icolor', 'jcolor', 'kcolor', 'lcolor', 'mcolor' ],
            columns: [{
                dataIndex: 'aaaa',
                dataName: '(栏号)',
                renderer: function (x) {
                    if(x.aaaa)
                        return x.aaaa
                    else {
                        return "&nbsp;"
                    }
                }
            }, {
                dataIndex: 'bbbb',
                dataName: '任务单编号'
            }, {
                dataIndex: 'cccc',
                dataName: '样品名称'
            }, {
                dataIndex: 'dddd',
                dataName: '检测编号'
            }, {
                dataIndex: 'eeee',
                dataName: '备注'
            }, {
            	dataIndex: 'ffff',
            	dataName: '检测项目'
            }, {
            	dataIndex: 'gggg',
            	dataName: '样品状况或样量(g/ml)'
            }, {
            	dataIndex: 'hhhh',
            	dataName: '方法依据'
            }, {
            	dataIndex: 'iiii',
            	dataName: '完成时间'
            }, {
            	dataIndex: 'jjjj',
            	dataName: '送样单位'
            }, {
            	dataIndex: 'kkkk',
            	dataName: '状态'
            }, {
            	dataIndex: 'llll',
            	dataName: '任务分配人'
            }, {
            	dataIndex: 'mmmm',
            	dataName: '任务分配日期'
            }]
        })

        ret.tb.init(dao.getGridData1());

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

    return ret;

})





















