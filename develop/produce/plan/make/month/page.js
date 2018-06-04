
require.config({
    paths: config.getPaths(4)
})

define(function (require) {

    require('toolbar');

    var $ = require('jquery');
    var grid1 = require('grid1');
   
    $(function () {
        grid1.drawGrid();

        //var ele = document.getElementsByTagName('th');
        //for (i = 0; i < ele.length; i++) {
        //    ele[i].setAttribute('rowspan', '2');
        //}
        //ele[4].setAttribute('rowspan', '1');
        //ele[4].setAttribute('colspan', '3');

        //var elem = document.getElementsByTagName('td');
        //for (i = 3; i < 6; i++) {
        //    //elem[i].hidden = true;
        //    elem[i].parentNode.removeChild(elem[i]);
        //}

        //$('table tr td:nth-child(2)').attr('text-align', 'left');

        window.parent.g.update();
    })
})