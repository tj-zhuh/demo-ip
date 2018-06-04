

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
                dataName: '序号'
            }, {
                dataIndex: 'bbbb',
                dataName: ''
            }, {
                dataIndex: 'cccc',
                dataName: 'Cu%'
            }, {
                dataIndex: 'dddd',
                dataName: 'S%'
            }, {
                dataIndex: 'eeee',
                dataName: 'Fe%'
            }, {
                dataIndex: 'ffff',
                dataName: 'CaO%'
            }, {
                dataIndex: 'gggg',
                dataName: 'MaO%'
            }, {
                dataIndex: 'hhhh',
                dataName: 'As%'
            }, {
                dataIndex: 'iiii',
                dataName: '(Pb+Zn)%'
            }, {
                dataIndex: 'jjjj',
                dataName: 'S/Cu'
            }, {
                dataIndex: 'kkkk',
                dataName: '氧化矿%'
            }, {
                dataIndex: 'llll',
                dataName: '自产矿%'
            }, {
                dataIndex: 'mmmm',
                dataName: '渣精矿%'
            }]
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





















