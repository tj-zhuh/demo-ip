$(function () {

    $("#day").click(function () {
        var t = $(this);
        $("li").removeClass('active');
        t.addClass('active');

        $(".line").addClass('day').removeClass('year').removeClass('month');
    })

    $("#month").click(function () {
        var t = $(this);
        $("li").removeClass('active');
        t.addClass('active');

        $(".line").removeClass('day').removeClass('year').addClass('month');


    })

    $("#year").click(function () {
        var t = $(this);
        $("li").removeClass('active');
        t.addClass('active');

        $(".line").removeClass('day').addClass('year').removeClass('month');


    })

    //var b1 = $("#b1");
    //var b2 = $("#b2");

    //b1.click(function () {

    //    if (b1.hasClass('active')) return;

    //    b1.addClass('active');
    //    b2.removeClass('active');

    //})

    //b2.click(function () {

    //    if (b2.hasClass('active')) return;

    //    b2.addClass('active');
    //    b1.removeClass('active');

    //})



})