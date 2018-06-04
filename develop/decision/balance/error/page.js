
require.config({
    paths: config.getPaths(3)
})

define(function (require) {
    var $ = require('jquery');
    var echarts = require('echarts');
    var chart1 = require('chart1');

    function draw() {
        var chart1 = echarts.init($('#chart1')[0]);

        var option = {
            









        }

        chart1.setOption(option);

    }

    function showWin() {
        var win = window.top.document.getElementById('win4')
        var mo = window.top.document.getElementById('mo')

        $(win).removeClass('hide');
        $(mo).removeClass('hide');
        
        $(mo).click(function () { 
            $(win).addClass('hide');
            $(mo).addClass('hide'); 
        }) 
    }

    $("#tb2").show();

    $(".errtr").click(function () {
        var t = $(this);
        t.addClass('active');

        $("#tb2").show();
    })

    $('.errtd').click(function () {

        showWin();
        chart1.draw();
        chart1.drawLine();

        


    })

    $('.mo').click(function () {
        showWin();
    })




})