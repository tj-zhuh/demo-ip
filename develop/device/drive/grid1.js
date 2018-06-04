

define(function (require) {

    var tb = require('tb');
    var dao = require('dao');

    var ret = {
        tb: null
    };

    ret.drawGrid = function (x) {

        if (ret.tb)
            return

        ret.tb = new tb();

        ret.tb.config({
            container: x,
            fields: ['Id', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff', 'gggg', 'hhhh', 'iiii', 'jjjj', 'kkkk', 'llll'],
            columns: [{
                dataIndex: 'aaaa',
                dataName: '序号'

            }, {
                dataIndex: 'bbbb',
                dataName: '状态'

            }, {
                dataIndex: 'cccc',
                dataName: '月内执行均可'

            }, {
                dataIndex: 'dddd',
                dataName: '下次维修时间'

            }, {
                dataIndex: 'eeee',
                dataName: '上次维修时间'
            }, {
                dataIndex: 'ffff',
                dataName: '维修级别'
            }, {
                dataIndex: 'gggg',
                dataName: '设备编号'
            }, {
                dataIndex: 'hhhh',
                dataName: '设备名称'
            }, {
                dataIndex: 'iiii',
                dataName: '规格型号'
            }, {
                dataIndex: 'jjjj',
                dataName: '使用部门'
            }, {
                dataIndex: 'kkkk',
                dataName: '维修项目'
            }, {
                dataIndex: 'llll',
                dataName: '维修标准'
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





















