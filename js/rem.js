(function (window) {
    "use strict";

    function setFont() {
        var fontSize = window.top.document.documentElement.clientWidth / 19.19759;
        fontSize = fontSize < 60 ? 60 : fontSize;
        document.documentElement.style.fontSize = fontSize + 'px';
    }

    setFont();

    if (typeof window.top.childPageIsReady === 'function')
        window.top.childPageIsReady();

    window.getPx = function (designPx) {
        var curr_font = parseFloat(window.document.documentElement.style.fontSize);
        return designPx * curr_font / 100;
    }

})(window);