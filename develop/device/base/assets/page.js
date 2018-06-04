
require.config({
    paths: config.getPaths(3)
})

define(function (require) {
    var $ = require('jquery');
    var grid1 = require('grid1');
    require('toolbar');
    var mtree = require('mtree');
    var dao = require('dao');
    var treeData = require('treeData');

    $(function () {
        grid1.drawGrid();
        window.parent.g.update();

        mtree.config({
            autoExpandLevel: 1,
            autoSelectRoot: true,
            containerSelector: '.mtree'
        });
        mtree.load(treeData);

        window.parent.g.update();


    })
})