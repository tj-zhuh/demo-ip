
require.config({
    paths: config.getPaths(3)
})

define(function (require) {

    var $ = require('jquery');



    function showWin2() {
        var mo = window.top.document.getElementById('mo');
        var win = window.top.document.getElementById('win5-2');
        $(mo).removeClass('hide');
        $(win).removeClass('hide');
        $(mo).click(function () {
            $(mo).addClass('hide');
            $(win).addClass('hide');
        })

    }







    $('.container').click(function () {

        showWin2();







    })


















})














