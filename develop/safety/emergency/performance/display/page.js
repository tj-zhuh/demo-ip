
require.config({
    paths: config.getPaths(4)
})

define(function (require) {
    require('toolbar');
    var $ = require('jquery');
    $(function () {
        window.parent.frames[0].frameElement.height = document.body.scrollHeight + 10;


    })
})