
require.config({
    paths: config.getPaths(4)
})

define(function (require) {
    require('toolbar');
    var $ = require('jquery');
    var gridBubble = require('grid-bubble');
    var chartBubble = require('chart-bubble');
   
    $(function () {
        gridBubble.drawGrid();
        chartBubble.drawCharts();

    })
})