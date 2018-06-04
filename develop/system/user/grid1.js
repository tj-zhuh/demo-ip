

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
                dataName: '用户名'

            }, {
                dataIndex: 'bbbb',
                dataName: '所属部门'

            }, {
                dataIndex: 'cccc',
                dataName: '数据节点分组'

            }, {
                dataIndex: 'dddd',
                dataName: '文档权限分组'

            }, {
                dataIndex: 'eeee',
                dataName: '菜单权限分组'

            }, {
                dataIndex: '',
                dataName: '操作',
                renderer: function (line, all) {
                    return "<div class='tb-edit'></div><div class='tb-delete'></div>"
                }
            }]
        })

        ret.tb.init(dao.getGridData());

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

            ret.tb.loadData(dao.reGetGridData());

        })
    }

    return ret;

})





















