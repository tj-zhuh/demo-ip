﻿
require.config({
    paths: config.getPaths(3)
})

define(function (require) {

    var $ = require('jquery');
    var grid1 = require('grid1');
    var grid2 = require('grid2');
    var grid3 = require('grid3');
    var chart1 = require('chart1');
    var chart2 = require('chart2');
    var chart3 = require('chart3');
    var dao = require('dao');
    //require('toolbar');

    function hideWin1() {
        $('#membrane').addClass('hide');
        $('#panel4').addClass('hide');
        $('#panel5').addClass('hide');
        $('#panel6').addClass('hide');
    }
   
    function hideWin2() {
        $('#membrane').addClass('hide');
        $('#panel7').addClass('hide');
        //$('#panel8').toggleClass('hide');
    }

    function showWin1() {
        $('#membrane').removeClass('hide');
        $('#panel4').removeClass('hide');
        $('#panel5').removeClass('hide');
        $('#panel6').removeClass('hide');
    }

    function showWin2() {
        var mo = window.parent.document.getElementById('mo');
    
        var win = window.parent.document.getElementById('win2-2');
        $(win).removeClass('hide');
        $(mo).removeClass('hide');

        $(mo).click(function () {
            $(win).addClass('hide');
            $(mo).addClass('hide');
        })

        //$('#panel7').removeClass('hide');
        //$('#panel8').toggleClass('hide');
    }


    $(function () {

        dao.loadSelect(document.getElementById('select1'), dao.selectData1())

        dao.loadSelect(document.getElementById('select2'), dao.selectData2())

        dao.loadSelect(document.getElementById('select3'), dao.selectData3())

        //dao.loadSelect(document.getElementById('select4'), dao.selectData4())

        dao.loadSelect(document.getElementById('select5'), dao.selectData5())

        $('#membrane').click(function () {
            hideWin1();
            hideWin2();
        })


        grid1.drawGrid();
        grid2.drawGrid();
        grid3.drawGrid();
        chart1.draw();
        chart2.draw();
        chart3.draw();

        $('#guzhang').click(function () {

            showWin2()
            //showWin2()
        })


        //hacker
        var ddd = window.parent.document.getElementById('chart2');
        $(ddd.childNodes[0]).css('position','')





        //$('#btn2').click(function () {

        //    //showWin1()
        //    showWin2()
        //})
    })
})