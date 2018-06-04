
require.config({
    paths: config.getPaths(2)
})

define(function (require) {

    var $ = require('jquery');
    var grid1 = require('grid1');

    

   
    $(function () {

        console.log(22)




        grid1.drawGrid();



    })
})