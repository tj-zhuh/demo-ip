
require.config({
    paths: config.getPaths(4)
})

define(function (require) {

    require('toolbar');
    var $ = require('jquery');
    var grid1 = require('grid1');
    var grid2 = require('grid2');
    var grid3 = require('grid3');
    var dao = require('dao');
    

   
    $(function () {

        //dao.loadSelect(document.getElementById('select1'), dao.selectData1())

        //dao.loadSelect(document.getElementById('select2'), dao.selectData2())

        //dao.loadSelect(document.getElementById('select3'), dao.selectData3())

        //dao.loadSelect(document.getElementById('select4'), dao.selectData4())

        //dao.loadSelect(document.getElementById('select5'), dao.selectData5())




        grid1.drawGrid();
        grid2.drawGrid();
        grid3.drawGrid();



    })
})