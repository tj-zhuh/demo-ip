$(function () {
     
    var arr = [90, 60, 20, 80];


    for (var i = 0; i < 4; i++) {

        var el = $(".t" + (i + 1) + " div");

        el.width(0);
        el.show();
        el.animate({
            width: arr[i] * 1 + "px"
        }, 600)
    }

    var b1 = $("#b1");
    var b2 = $("#b2");

    b1.click(function () {

        if (b1.hasClass('active')) return;

        b1.addClass('active');
        b2.removeClass('active');

    })

    b2.click(function () {

        if (b2.hasClass('active')) return;

        b2.addClass('active');
        b1.removeClass('active');

    })



})