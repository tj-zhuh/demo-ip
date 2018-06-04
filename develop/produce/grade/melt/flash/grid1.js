

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
            fields: ['Id', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff', 'gggg', 'hhhh' ],
            columns: [{
                dataIndex: 'aaaa',
                dataName: '仓号',
                renderer: function (x) {
                    if(x.aaaa)
                        return x.aaaa
                    else {
                        return "&nbsp;"
                    }
                }
            }, {
                dataIndex: 'bbbb',
                dataName: '批次'

            }, {
                dataIndex: 'cccc',
                dataName: '矿种信息'

            }, {
                dataIndex: 'dddd',
                dataName: '运行比率'

            }, {
                dataIndex: 'eeee',
                dataName: '仓位(%)'
            }, {
                dataIndex: 'ffff',
                dataName: '给料量(t/h)'
            }, {
                dataIndex: 'gggg',
                dataName: '当班投料量(t)'
            }, {
                dataIndex: 'hhhh',
                dataName: '库存(t)'
            }]
        })

        ret.tb.init(dao.getGridData1());

        ////添加
        ret.tb.on('click', '', function (line, all) {
                
            //console.log('本行');
            console.log(line);
            var p2 = document.getElementById('p2');
            p2.innerHTML = line.Id + '号配料仓成分';
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





















