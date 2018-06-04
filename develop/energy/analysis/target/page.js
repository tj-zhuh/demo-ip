
require.config({
    paths: config.getPaths(3)
})

define(function (require) {
    require('toolbar');
    var $ = require('jquery');
    var grid1 = require('grid1');
   
    $(function () {
        grid1.drawGrid();
        window.parent.g.update();

        $('.tb-checkbox').click(function () {
            $(this).toggleClass('active');
        });

        $('.tb-link').click(function () {
            if ($(this).text() == '锅炉效率') {
                window.parent.g.jump('bubble/page.html', '指标详情');
            }
        })
    })
})