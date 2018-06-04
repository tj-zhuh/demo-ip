

define(function (require) {

    var tb = require('tb');
    var dao = require('dao');

    var ret = {
        tb:null
    };

    ret.drawGrid = function () {

        if (window.parent.document.getElementById('grid2').childNodes.length)
            return

        ret.tb = new tb();

        ret.tb.config({
            container: window.parent.document.getElementById('grid2'),
            fields: ['Id', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff', 'gggg' ],
            columns: [{
                dataIndex: 'aaaa',
                dataName: '月份',
                renderer: function (x) {
                    if(x.aaaa)
                        return x.aaaa
                    else {
                        return "&nbsp;"
                    }
                }
            
            }, {
                dataIndex: 'bbbb',
                dataName: '故障停机'

            }, {
                dataIndex: 'cccc',
                dataName: '运行台时'

            }, {
                dataIndex: 'dddd',
                dataName: '故障次数'

            }, {
                dataIndex: 'eeee',
                dataName: '故障停机率'
            }, {
                dataIndex: 'ffff',
                dataName: '故障频率'

            }, {
                dataIndex: 'gggg',
                dataName: '故障强度率'

            }]
        })

        ret.tb.init(dao.getGridData3());

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





















