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
            fields: ['ID', 'aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj', 'kk', 'll'],
            columns: [{
                dataIndex: 'ID',
                dataName: '序号'
            }, {
                dataIndex: 'aa',
                dataName: '状态'
            }, {
                dataIndex: 'bb',
                dataName: '材料审核',
                renderer: function (line, all) {
                    if (line.bb == '已审核') {
                        return "<div class='colorDiv greenDiv'>" + "" + "</div>";
                    }
                    else if (line.bb == '未审核') {
                        return "<div class='colorDiv grayDiv'>" + "" + "</div>";
                    }
                }
            }, {
                dataIndex: 'cc',
                dataName: '数量审核',
                renderer: function (line, all) {
                    if (line.cc == '已审核') {
                        return "<div class='colorDiv greenDiv'>" + "" + "</div>";
                    }
                    else if (line.cc == '未审核') {
                        return "<div class='colorDiv grayDiv'>" + "" + "</div>";
                    }
                }
            }, {
                dataIndex: 'dd',
                dataName: '计划类别'
            }, {
                dataIndex: 'ee',
                dataName: '计划单位'
            }, {
                dataIndex: 'ff',
                dataName: '计划工期'
            }, {
                dataIndex: 'gg',
                dataName: '计划开始'
            }, {
                dataIndex: 'hh',
                dataName: '计划结束'
            }, {
                dataIndex: 'ii',
                dataName: '项目子号'
            }, {
                dataIndex: 'jj',
                dataName: '物料编码'
            }, {
                dataIndex: 'kk',
                dataName: '物料描述'
            }, {
                dataIndex: 'll',
                dataName: '图号'
            },
            {
                dataIndex: '',
                dataName: '操作',
                renderer: function (line, all) {
                    if (line.ID) {
                        return "<div class='tb-edit'></div><div class='tb-delete'></div>";
                    }
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

            //ret.tb.loadData(dao.reGetGridData());
        })
    }

    return ret;
})