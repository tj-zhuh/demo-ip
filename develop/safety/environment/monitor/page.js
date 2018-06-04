
require.config({
    paths: config.getPaths(3)
})

define(function (require) {

    require('toolbar');

    var $ = require('jquery');
    var grid1 = require('grid1');
    var grid2 = require('grid2');

    window.parent.g.update();

   
    $(function () {
        grid1.drawGrid();
        grid2.drawGrid();

        window.parent.frames[0].frameElement.height = document.body.scrollHeight + 10;

        $('.tb-link').click(function () {
                window.parent.g.jump('bubble/page.html', '三维立体图');
        })
        
        console.log($('#grid2 tr td:first-child'));

        $('#grid2 tr td:first-child')[0].style.color = 'white';
        $('#grid2 tr td:first-child')[1].style.color = 'white';

        $('#grid2 tr td:first-child')[0].style.backgroundColor = 'green';
        $('#grid2 tr td:first-child')[1].style.backgroundColor = '#234E76';
        //$('#grid2 tr td:first-child')[1].attr('style','backgroun-color: gray');


    })
})