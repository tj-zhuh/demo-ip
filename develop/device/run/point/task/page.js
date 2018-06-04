
require.config({
    paths: config.getPaths(4)
})

define(function (require) {
    var $ = require('jquery');
    var grid1 = require('grid1');
    require('toolbar');

    $(function () {
        grid1.drawGrid();

        window.parent.g.update();

    })

})