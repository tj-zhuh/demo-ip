
require.config({
    paths: config.getPaths(3)
})

define(function (require) {
    require('toolbar');
    var $ = require('jquery');
    //var grid1 = require('grid1');
    var grid21 = require('grid21');
    var grid22 = require('grid22');
    var chart1 = require('chart1');
   
    $(function () {
        //grid1.drawGrid();
        grid21.drawGrid();
        grid22.drawGrid();
        chart1.draw();
        window.parent.g.update();

        $('.query-conditions li label').click(function () {
            $(".query-conditions li label").removeClass('active');
            $(this).addClass('active');
        });

    })
})