

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
            fields: ['Id', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff', 'gggg', 'hhhh', 'iiii', 'jjjj', 'kkkk', 'llll', 'mmmm', 'nnnn', 'oooo','pppp','qqqq' ],
            columns: [{
                dataIndex: 'aaaa',
                dataName: '编号',
                renderer: function (x) {
                    if(x.aaaa)
                        return x.aaaa
                    else {
                        return "&nbsp;"
                    }
                }
            
            }, {
                dataIndex: 'bbbb',
                dataName: '层级'

            }, {
                dataIndex: 'cccc',
                dataName: '类别'

            }, {
                dataIndex: 'dddd',
                dataName: '分项类别'

            }, {
                dataIndex: 'eeee',
                dataName: '考核周期'
            }, {
                dataIndex: 'ffff',
                dataName: '有效状态'

            }, {
                dataIndex: 'gggg',
                dataName: 'KPI指标名称'

            }, {
                dataIndex: 'hhhh',
                dataName: '考核对象'
            }, {
                dataIndex: 'iiii',
                dataName: '考核人数'

            }, {
                dataIndex: 'jjjj',
                dataName: '分管单位'

            }, {
                dataIndex: 'kkkk',
                dataName: '指标值'
            }, {
                dataIndex: 'llll',
                dataName: '计划值'

            }, {
                dataIndex: 'mmmm',
                dataName: '标达分值'

            }, {
                dataIndex: 'nnnn',
                dataName: '实际分值'
            }, {
                dataIndex: 'oooo',
                dataName: '考核结果'

            }, {
                dataIndex: 'pppp',
                dataName: '排名'

            }, {
                dataIndex: 'qqqq',
                dataName: '结果分析'
            }]
        })

        ret.tb.init(dao.getGridData());

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





















