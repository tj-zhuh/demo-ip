
require.config({
    paths: config.getPaths(3)
})

define(function (require) {
    require('toolbar');
    var $ = require('jquery');
    //var grid1 = require('grid1');
    //var grid2 = require('grid2');
   
    $(function () {
        //grid1.drawGrid();
        //grid2.drawGrid();
        //$('th.tj-grid-th').attr('colspan', '2'); 

        for (var i = 0; i < $("td").length; i++) {
            if ($("td")[i].innerText == '1') {
                //$("td")[i].bgColor = 'gray';
                $("td")[i].className = 'gray';
                $("td")[i].innerText = '';
                var cite = document.createElement('cite');
                $("td")[i].appendChild(cite);
            }
        }

        $("#grid2 .report").show();

        window.parent.g.update();
    })
})