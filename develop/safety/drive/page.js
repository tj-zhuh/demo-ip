
require.config({
    paths: config.getPaths(2)
})

define(function (require) {
    require('toolbar');
    var $ = require('jquery');
    var chart1 = require('chart1');
    var chart2 = require('chart2');
    var chart3 = require('chart3');
    var chart4 = require('chart4');
    var chart5 = require('chart5');
    var chart6 = require('chart6');
   
    $(function () {
        chart1.draw();
        chart2.draw();
        chart3.draw();
        chart4.draw();
        chart5.draw();
        chart6.draw();
        window.parent.frames[0].frameElement.height = document.body.scrollHeight + 10;
    })
})