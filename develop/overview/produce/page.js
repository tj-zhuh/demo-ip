
require.config({
    paths: config.getPaths(2)
})

define(function (require) {
    require('toolbar');
    var $ = require('jquery');
    var grid1 = require('grid1');
    var grid2 = require('grid2');
    var chart1 = require('chart1');
    var chart2 = require('chart2');
    var chart3 = require('chart3');
    var chart4 = require('chart4');
    var chart5 = require('chart5');
   
    $(function () {
        chart1.draw();
        chart2.draw();
        chart3.draw();
        chart4.draw();
        chart5.draw();
        grid1.drawGrid();
        grid2.drawGrid();
        window.parent.frames[0].frameElement.height = document.body.scrollHeight + 10;
    })
})