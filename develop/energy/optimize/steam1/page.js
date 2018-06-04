
require.config({
    paths: config.getPaths(3)
})

define(function (require) {

    var $ = require('jquery');
    var chart1 = require('chart1');
    var grid1 = require('grid1');
    var grid2 = require('grid2');
    var dao = require('dao');
    
    function showTips() {

        $('#tips').animate({
            'height': '0.3rem'
        }, 500);

        $('#tips').html('<img src="../../../../images/alert-tip.png" /><p id="p1">' + '12:50:23' + '</p><p>' + '高峰期5分钟后即将来临，请提前做好准备！' + '</p><div id="closeIt"></div>');

        $('#closeIt').click(function () {
            $('#tips').animate({
                'height':'0'
            }, function () {
                $('#tips').empty();
            })
        })

    }
   
    $(function () {

        showTips();




        $('#select-btns1 li').click(function () {

            if ($(this).hasClass('active')) {
                return 
            }
            else {
                $('#select-btns1 li').removeClass('active');
                $(this).addClass('active');
            }
        })

        $('#select-btns2 li').click(function () {

            if ($(this).hasClass('active')) {
                return
            }
            else {
                $('#select-btns2 li').removeClass('active');
                $(this).addClass('active');
            }
        })

        $('#select-btns3 li').click(function () {

            if ($(this).hasClass('active')) {
                return
            }
            else {
                $('#select-btns3 li').removeClass('active');
                $(this).addClass('active');
            }
        })



        //dao.loadSelect(document.getElementById('select1'), dao.selectData1())

        //dao.loadSelect(document.getElementById('select2'), dao.selectData2())

        //dao.loadSelect(document.getElementById('select3'), dao.selectData3())

        //dao.loadSelect(document.getElementById('select4'), dao.selectData4())


        chart1.draw();

        //grid1.drawGrid();
        //grid2.drawGrid();


        $('#zhixinggonglv').click(function () {
            window.top.g.jump('develop/energy/optimize/steam2/page.html', '优化方案');
        })





    })
})