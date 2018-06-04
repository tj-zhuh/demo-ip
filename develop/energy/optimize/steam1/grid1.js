

define(function (require) {

    var tb = require('tb');
    var dao = require('dao');

    var ret = {
        tb: null
    };

    ret.drawGrid = function () {

        ret.tb = new tb();

        ret.tb.config({
            container: document.getElementById('grid1'),
            fields: ['Id', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff', 'gggg', 'hhhh', 'iiii', 'jjjj', 'kkkk', 'llll', 'mmmm', 'nnnn', 'oooo', 'ecolor', 'fcolor', 'gcolor', 'hcolor', 'icolor', 'jcolor', 'kcolor', 'lcolor', 'mcolor'],
            columns: [{
                dataIndex: 'aaaa',
                dataName: '(栏号)'

            }, {
                dataIndex: 'bbbb',
                dataName: '不良原因编号'

            }, {
                dataIndex: 'cccc',
                dataName: '（不良原因）'

            }, {
                dataIndex: 'dddd',
                dataName: '数量'

            }, {
                dataIndex: 'eeee',
                dataName: '分录备注'
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





















