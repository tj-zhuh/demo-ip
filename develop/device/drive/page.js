
require.config({
    paths: config.getPaths(2)
})

define(function (require) {

    var $ = require('jquery');
    var chart1 = require('chart1');
    var chart2 = require('chart2');
    var chart3 = require('chart3');
    var grid1=require('grid1')
    var dao = require('dao');
    
    function showWin1() {
        var mo = window.top.document.getElementById('mo');
        var win = window.top.document.getElementById('win5-1');
        $(mo).removeClass('hide');
        $(win).removeClass('hide');

        $(mo).click(function () {
            $(mo).addClass('hide');
            $(win).addClass('hide');
        })

    }

    function showWin2() {
        //var mo = window.top.document.getElementById('mo');
        //var win = window.top.document.getElementById('win5-2');
        //$(mo).removeClass('hide');
        //$(win).removeClass('hide');
        //$(mo).click(function () {
        //    $(mo).addClass('hide');
        //    $(win).addClass('hide');
        //})
        window.top.g.jump('develop/device/drive/zJumpers/page1.html', '设备管网图');



    }

    function showWin3() {
        var mo = window.top.document.getElementById('mo');
        var win = window.top.document.getElementById('win5-3');

        $(mo).removeClass('hide');
        $(win).removeClass('hide');
        $(mo).click(function () {
            $(mo).addClass('hide');
            $(win).addClass('hide');
        })



    }

   
    $(function () {

  

        chart1.draw();
        chart2.draw();

        //animation
        $('#bBar1-1').animate({ 'width': '1.8rem' })
        $('#bBar1-2').animate({ 'width': '0.6rem' })
        $('#bBar1-3').animate({ 'width': '1.2rem' })


        $('#bBar2-1').animate({ 'width': '1.9rem' })
        $('#bBar2-2').animate({ 'width': '1.1rem' })
        $('#bBar2-3').animate({ 'width': '1.3rem' })
        $('#bBar2-4').animate({ 'width': '1.9rem' })
        $('#bBar2-5').animate({ 'width': '0.9rem' })
        $('#bBar2-6').animate({ 'width': '2.2rem' })

        //

        $('#touyonglv').click(function () {
            chart3.draw(window.top.document.getElementById('chart5'));
            showWin1();
        })

        $('.bottomLeft-img').click(function () {
            showWin2();
        })
        $('#jihuaweixiu').click(function () {
            grid1.drawGrid(window.top.document.getElementById('grid5'));
            showWin3();
        })

    })
})