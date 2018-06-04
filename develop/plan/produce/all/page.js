
require.config({
    paths: config.getPaths(3)
})

define(function (require) {

    var $ = require('jquery');
    var grid1 = require('grid1');
    var dao = require('dao');
    

   
    $(function () {

        dao.loadSelect(document.getElementById('select1'), dao.selectData1())

        dao.loadSelect(document.getElementById('select2'), dao.selectData2())

        //dao.loadSelect(document.getElementById('select3'), dao.selectData3())





        grid1.drawGrid();



    })
})