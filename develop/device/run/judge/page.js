
require.config({
    paths: config.getPaths(3)
})

define(function (require) {

    var $ = require('jquery');
    //var grid1 = require('grid1');
    var dao = require('dao');
    var mtree = require('mtree');

    function showWin() {
        $('#panel4').toggleClass('hide');
        $('.mo').toggleClass('hide');
    }





   
    $(function () {


        mtree.config({
            autoExpandLevel: 1,
            autoSelectRoot: true,
            containerSelector: '.mtree'
        });

        var data = dao.getTree();
        mtree.load(data);

        //tab页点击事情
        $('#tabs li').click(function () {

            if ($(this).hasClass('active')) {
                return 
            }

            else {
                $('#tabs li').removeClass('active');
                $(this).addClass('active');
            }

        })

        //chart1.draw($('#chart1'));
        //chart1.draw($('#chart2'));
        //chart1.draw($('#chart3'));
        //chart1.draw($('#chart4'));
        //chart1.draw($('#chart5'));
        //chart1.draw($('#chart6'));
        //chart1.draw($('#chart7'));
        //chart1.draw($('#chart8'));

        $('#baojing').click(function () {

            showWin();


        })

        $('.mo').click(function () {

            showWin();


        })






    })
})