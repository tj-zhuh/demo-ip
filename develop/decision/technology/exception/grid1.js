

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
            fields: ['Id', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff', 'gggg', 'hhhh', 'iiii', 'jjjj', 'kkkk', 'llll'],
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
                dataName: '指标周期'

            }, {
                dataIndex: 'eeee',
                dataName: '所属单位'
            }, {
                dataIndex: 'ffff',
                dataName: '分管单位'

            }, {
                dataIndex: 'gggg',
                dataName: '名称'

            }, {
                dataIndex: 'hhhh',
                dataName: '单位'
            }, {
                dataIndex: 'iiii',
                dataName: '计划值'

            }, {
                dataIndex: 'jjjj',
                dataName: '实际值'

            }, {
                dataIndex: 'kkkk',
                dataName: '指标状态'
            }, {
                dataIndex: 'llll',
                dataName: '异常原因分析',
                renderer: function (x) {
                    return "<a class='yichang' style='font-size:0.14rem;text-decoration:underline;color:#00deb9;'>" + x.llll + "</a>";
                }

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





















