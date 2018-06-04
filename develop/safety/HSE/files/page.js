
require.config({
    paths: config.getPaths(3)
})

define(function (require) {

    require('toolbar');

    var $ = require('jquery');
    var grid1 = require('grid1');
    var mtree = require('mtree');

    var treeData = require('treeData');

   
    $(function () {
        grid1.drawGrid();

        mtree.config({
            autoExpandLevel: 1,
            autoSelectRoot: true,
            containerSelector: '.mtree'
        });
        mtree.load(treeData);

        window.parent.frames[0].frameElement.height = document.body.scrollHeight + 10;
    })
})