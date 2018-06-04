
require.config({
    paths: config.getPaths(4)
})

define(function (require) {

    var $ = require('jquery');
    var grid1 = require('grid1');
    var chart1 = require('chart1');
    var chart2 = require('chart2');
    var chart3 = require('chart3');
    var dao = require('dao');
    

   
    $(function () {

        //dao.loadSelect(document.getElementById('select1'), dao.selectData1())

        //dao.loadSelect(document.getElementById('select2'), dao.selectData2())

        //dao.loadSelect(document.getElementById('select3'), dao.selectData3())

        //dao.loadSelect(document.getElementById('select4'), dao.selectData4())

        //dao.loadSelect(document.getElementById('select5'), dao.selectData5())




        //grid1.drawGrid();
        chart1.draw();
        chart2.draw();
        chart3.draw();


        //hacker
        $('#chart2 div').css('position','')

    })
})