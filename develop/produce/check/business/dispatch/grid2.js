

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
            fields: ['Id', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff', 'gggg', 'hhhh', 'iiii', 'jjjj', 'kkkk', 'llll', 'mmmm', 'nnnn', 'oooo', 'pppp', 'qqqq', 'rrrr', 'ecolor', 'fcolor', 'gcolor', 'hcolor', 'icolor', 'jcolor', 'kcolor', 'lcolor', 'mcolor'],
            columns: [{
                dataIndex: 'aaaa',
                dataName: '(栏号)',
                renderer: function (x) {
                    if (x.aaaa)
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
                dataName: '检测班组'
            }, {
                dataIndex: 'dddd',
                dataName: '样品名称'

            }, {
                dataIndex: 'eeee',
                dataName: '检验人员'
            }, {
            	dataIndex: 'ffff',
            	dataName: '检测编号'
            }, {
            	dataIndex: 'gggg',
            	dataName: '检测项目'
            }, {
            	dataIndex: 'hhhh',
            	dataName: '检测次数'
            }, {
            	dataIndex: 'iiii',
            	dataName: '样品状况或样量(g/ml)'
            }, {
            	dataIndex: 'jjjj',
            	dataName: '检测方法'
            }, {
            	dataIndex: 'kkkk',
            	dataName: '完成时间'
            }, {
            	dataIndex: 'llll',
            	dataName: '送样单位'
            }, {
            	dataIndex: 'mmmm',
            	dataName: '检测设备'
            }, {
            	dataIndex: 'nnnn',
            	dataName: '原始记录模板'
            }, {
            	dataIndex: 'oooo',
            	dataName: '计算公式'
            }, {
            	dataIndex: 'pppp',
            	dataName: '状态'
            }, {
            	dataIndex: 'qqqq',
            	dataName: '班组分配人'
            }, {
            	dataIndex: 'rrrr',
            	dataName: '班组分配日期'
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

    return ret;

})





















