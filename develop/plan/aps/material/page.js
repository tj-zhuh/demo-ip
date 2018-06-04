require.config({
    paths: config.getPaths(3)
})

define(function (require) {
    var $ = require('jquery');
    var grid1 = require('grid1');

    $(function () {
        grid1.drawGrid();
    })
})