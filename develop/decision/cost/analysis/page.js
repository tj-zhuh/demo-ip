
require.config({
    paths: config.getPaths(4)
})

define(function (require) {
    require('toolbar');
    var $ = require('jquery');
    var grid1 = require('grid1');
    var grid2 = require('grid2');
    var grid3 = require('grid3');
    var chart1 = require('chart1');
    var chart2 = require('chart2');
    var chart3 = require('chart3');
   
    $(function () {
        chart1.draw();
        chart2.draw();
        chart3.draw();
        grid1.drawGrid();
        grid2.drawGrid();
        grid3.drawGrid();
        window.parent.g.update();

        $('.tb-checkbox').click(function () {
            $(this).toggleClass('active');
        });

    })
})