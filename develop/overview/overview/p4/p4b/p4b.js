
$(function () {

    var b1 = $("#b1");
    var b2 = $("#b2");

    b1.click(function () {
        b1.addClass('active');
        b2.removeClass('active');
    })

    b2.click(function () {
        b2.addClass('active');
        b1.removeClass('active');
    })

})
