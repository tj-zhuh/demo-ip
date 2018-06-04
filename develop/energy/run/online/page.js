
require.config({
    paths: config.getPaths(3)
})

define(function (require) {
    require('toolbar');
    var $ = require('jquery');
    var grid1 = require('grid1');
    var grid2 = require('grid2');
   
    $(function () {
        grid1.drawGrid();
        grid2.drawGrid();
        window.parent.g.update();

        $('.tb-checkbox').click(function () {
            $(this).toggleClass('active');
        });

        $("#grid2 tr td:nth-child(5)")

        $("#grid2 tr td:nth-child(5)").click(function () {
            window.parent.g.jump('bubble/page.html', '专家分析');
        })
        $("#grid2 tr td:nth-child(5)").attr('style', 'color:blue; font-weight:bold;');
        $("#grid2 tr:nth-child(4) td:nth-child(5)").attr('style', 'color:red; text-decoration:underline; font-weight:bold;');

    })
})