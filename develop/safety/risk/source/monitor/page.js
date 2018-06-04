
require.config({
    paths: config.getPaths(4)
})

define(function (require) {

    require('toolbar');

    var $ = require('jquery');
    var grid1 = require('grid1');

    window.parent.g.update();


    $(function () {
        grid1.drawGrid();

        window.parent.frames[0].frameElement.height = document.body.scrollHeight + 10;

        $('.tb-link').click(function () {
            window.parent.g.jump('bubble/page.html', '三维立体图');
        })

    })
})