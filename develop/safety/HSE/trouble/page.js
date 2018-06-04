
require.config({
    paths: config.getPaths(3)
})

define(function (require) {

    require('toolbar');
    var mtree = require('mtree');
    var treeData = require('treeData');

    var $ = require('jquery');
   
    $(function () {

        mtree.config({
            autoExpandLevel: 1,
            autoSelectRoot: true,
            containerSelector: '.mtree'
        });
        mtree.load(treeData);

        window.parent.frames[0].frameElement.height = document.body.scrollHeight + 10;
    })
})