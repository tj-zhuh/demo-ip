

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
            fields: ['Id', 'aaaa', 'bbbb', 'cccc', 'dddd' ],
            columns: [{
                dataIndex: 'aaaa',
                dataName: '车间',
                renderer: function (x) {
                    if(x.aaaa)
                        return x.aaaa
                    else {
                        return "&nbsp;"
                    }
                }
            
            }, {
                dataIndex: 'bbbb',
                dataName: 'KPI'

            }, {
                dataIndex: 'cccc',
                dataName: 'KPI考核值'

            }, {
                dataIndex: 'dddd',
                dataName: 'KPI排名'

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





















