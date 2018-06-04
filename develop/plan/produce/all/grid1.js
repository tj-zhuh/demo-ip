

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
            fields: ['Id', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff', 'gggg', 'hhhh', 'iiii', 'jjjj', 'kkkk', 'llll', 'mmmm', 'nnnn', 'oooo', 'ecolor', 'fcolor', 'gcolor', 'hcolor', 'icolor', 'jcolor', 'kcolor', 'lcolor', 'mcolor' ],
            columns: [{
                dataIndex: 'aaaa',
                dataName: '序号'
            
            }, {
                dataIndex: 'bbbb',
                dataName: '客户名称'

            }, {
                dataIndex: 'cccc',
                dataName: '合同号'

            }, {
                dataIndex: 'dddd',
                dataName: '项目子号'

            }, {
                dataIndex: 'eeee',
                dataName: '部件名称',
                width:'2rem',
                renderer: function (x) {
                    if (x.ecolor === 'gray')
                        return "<div class='colorDiv grayDiv'>" + "" + "</div>"
                    if (x.ecolor === 'yellow')
                        return "<div class='colorDiv yellowDiv'>" + "" + "</div>"
                    if (x.ecolor === 'green')
                        return "<div class='colorDiv greenDiv'>" + "" + "</div>"
                    if (x.ecolor === 'blue')
                        return "<div class='colorDiv blueDiv'>" + "" + "</div>"
                    else {
                        return ''
                    }
                }
            }, {
                dataIndex: 'ffff',
                dataName: '订单签订',
                renderer: function (x) {
                    if (x.fcolor === 'gray')
                        return "<div class='colorDiv grayDiv'>" + "" + "</div>"
                    if (x.fcolor === 'yellow')
                        return "<div class='colorDiv yellowDiv'>" + "" + "</div>"
                    if (x.fcolor === 'green')
                        return "<div class='colorDiv greenDiv'>" + "" + "</div>"
                    if (x.fcolor === 'blue')
                        return "<div class='colorDiv blueDiv'>" + "" + "</div>"
                    else {
                        return ''
                    }
                }

            }, {
                dataIndex: 'gggg',
                dataName: '订单下发',
                renderer: function (x) {
                    if (x.gcolor === 'gray')
                        return "<div class='colorDiv grayDiv'>" + "" + "</div>"
                    if (x.gcolor === 'yellow')
                        return "<div class='colorDiv yellowDiv'>" + "" + "</div>"
                    if (x.gcolor === 'green')
                        return "<div class='colorDiv greenDiv'>" + "" + "</div>"
                    if (x.gcolor === 'blue')
                        return "<div class='colorDiv blueDiv'>" + "" + "</div>"
                    else {
                        return ''
                    }
                }

            }, {
                dataIndex: 'hhhh',
                dataName: '主计划下发',
                renderer: function (x) {
                    if (x.hcolor === 'gray')
                        return "<div class='colorDiv grayDiv'>" + "" + "</div>"
                    if (x.hcolor === 'yellow')
                        return "<div class='colorDiv yellowDiv'>" + "" + "</div>"
                    if (x.hcolor === 'green')
                        return "<div class='colorDiv greenDiv'>" + "" + "</div>"
                    if (x.hcolor === 'blue')
                        return "<div class='colorDiv blueDiv'>" + "" + "</div>"
                }

            }, {
                dataIndex: 'iiii',
                dataName: '图纸BOM',
                renderer: function (x) {
                    if (x.icolor === 'gray')
                        return "<div class='colorDiv grayDiv'>" + "" + "</div>"
                    if (x.icolor === 'yellow')
                        return "<div class='colorDiv yellowDiv'>" + "" + "</div>"
                    if (x.icolor === 'green')
                        return "<div class='colorDiv greenDiv'>" + "" + "</div>"
                    if (x.icolor === 'blue')
                        return "<div class='colorDiv blueDiv'>" + "" + "</div>"
                }

            }, {
                dataIndex: 'jjjj',
                dataName: '锻件工艺',
                renderer: function (x) {
                    if (x.jcolor === 'gray')
                        return "<div class='colorDiv grayDiv'>" + "" + "</div>"
                    if (x.jcolor === 'yellow')
                        return "<div class='colorDiv yellowDiv'>" + "" + "</div>"
                    if (x.jcolor === 'green')
                        return "<div class='colorDiv greenDiv'>" + "" + "</div>"
                    if (x.jcolor === 'blue')
                        return "<div class='colorDiv blueDiv'>" + "" + "</div>"
                }

            }, {
                dataIndex: 'kkkk',
                dataName: '机加工艺',
                renderer: function (x) {
                    if (x.kcolor === 'gray')
                        return "<div class='colorDiv grayDiv'>" + "" + "</div>"
                    if (x.kcolor === 'yellow')
                        return "<div class='colorDiv yellowDiv'>" + "" + "</div>"
                    if (x.kcolor === 'green')
                        return "<div class='colorDiv greenDiv'>" + "" + "</div>"
                    if (x.kcolor === 'blue')
                        return "<div class='colorDiv blueDiv'>" + "" + "</div>"
                }

            }, {
                dataIndex: 'llll',
                dataName: '锻件采购',
                renderer: function (x) {
                    if (x.lcolor === 'gray')
                        return "<div class='colorDiv grayDiv'>" + "" + "</div>"
                    if (x.lcolor === 'yellow')
                        return "<div class='colorDiv yellowDiv'>" + "" + "</div>"
                    if (x.lcolor === 'green')
                        return "<div class='colorDiv greenDiv'>" + "" + "</div>"
                    if (x.lcolor === 'blue')
                        return "<div class='colorDiv blueDiv'>" + "" + "</div>"
                }

            }, {
                dataIndex: 'mmmm',
                dataName: '配套采购',
                renderer: function (x) {
                    if (x.mcolor === 'gray')
                        return "<div class='colorDiv grayDiv'>" + "" + "</div>"
                    if (x.mcolor === 'yellow')
                        return "<div class='colorDiv yellowDiv'>" + "" + "</div>"
                    if (x.mcolor === 'green')
                        return "<div class='colorDiv greenDiv'>" + "" + "</div>"
                    if (x.mcolor === 'blue')
                        return "<div class='colorDiv blueDiv'>" + "" + "</div>"
                }

            }, {
                dataIndex: 'nnnn',
                dataName: '粗加工',
                renderer: function (x) {
                    if (x.mcolor === 'gray')
                        return "<div class='colorDiv grayDiv'>" + "" + "</div>"
                    if (x.mcolor === 'yellow')
                        return "<div class='colorDiv yellowDiv'>" + "" + "</div>"
                    if (x.mcolor === 'green')
                        return "<div class='colorDiv greenDiv'>" + "" + "</div>"
                    if (x.mcolor === 'blue')
                        return "<div class='colorDiv blueDiv'>" + "" + "</div>"
                }

            }, {
                dataIndex: 'oooo',
                dataName: '热处理',
                renderer: function (x) {
                    if (x.mcolor === 'gray')
                        return "<div class='colorDiv grayDiv'>" + "" + "</div>"
                    if (x.mcolor === 'yellow')
                        return "<div class='colorDiv yellowDiv'>" + "" + "</div>"
                    if (x.mcolor === 'green')
                        return "<div class='colorDiv greenDiv'>" + "" + "</div>"
                    if (x.mcolor === 'blue')
                        return "<div class='colorDiv blueDiv'>" + "" + "</div>"
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





















