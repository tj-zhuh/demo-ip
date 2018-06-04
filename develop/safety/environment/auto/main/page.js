
require.config({
    paths: config.getPaths(4)
})

define(function (require) {

    require('toolbar');

    var $ = require('jquery');
    var chart1 = require('chart1');
    var chart2 = require('chart2');

    window.parent.g.update();

   
    $(function () {
        chart1.drawCharts();
        chart2.drawCharts();

        window.parent.frames[0].frameElement.height = document.body.scrollHeight + 10;


    })
})