
require.config({
    paths: config.getPaths(3)
})

define(function (require) {

    var $ = require('jquery');

    //var dao = require('dao');
    var mtree = require('mtree');

    var treeData = require('treeData');
  require('toolbar')


    $(function () {

        mtree.config({
            autoExpandLevel: 1,
            autoSelectRoot: true,
            containerSelector: '.mtree'
        });

        mtree.load(treeData);



















    })
})