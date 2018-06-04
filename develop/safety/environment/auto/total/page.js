
require.config({
    paths: config.getPaths(4)
})

define(function (require) {

    require('toolbar');

    var $ = require('jquery');
    //var grid1 = require('grid1');
    var chart1 = require('chart1');

    window.parent.g.update();

   
    $(function () {
        //grid1.drawGrid();
        chart1.drawCharts();

        window.parent.frames[0].frameElement.height = document.body.scrollHeight + 10;


    })
})