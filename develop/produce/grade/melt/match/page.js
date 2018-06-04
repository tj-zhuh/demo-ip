
require.config({
    paths: config.getPaths(4)
})

define(function (require) {
    var $ = require('jquery');
    var grid1 = require('grid1');
    var grid2 = require('grid2');
    var grid3 = require('grid3');
    var grid4 = require('grid4');
   
    $(function () {
        grid1.drawGrid();
        grid2.drawGrid();
        grid3.drawGrid();
        grid4.drawGrid();

        window.parent.g.update();

    })
})