
require.config({
    paths: config.getPaths(4)
})

define(function (require) {

    require('toolbar');

    var $ = require('jquery');
    var grid1 = require('grid1');
   
    $(function () {
        grid1.drawGrid();

        window.parent.frames[0].frameElement.height = document.body.scrollHeight + 10;
    })
})