
$(function () {

    var lefts = [0.42, 0.32,0.45,0.45,0.45,0.45];
    var tops = [0.4, 0.5, 0.15, 0.51, 0.338, 0.85];
    var entry = [true, false];
    var width = $(".train li").width();
    var height = $(".train li").height();
    var tw = $(".container").width();
    var th = $(".container").height(); 

    for (var i = 0; i < 2; i++) {
        var index = i + 1;

        var train = $(".train" + index);

        var arr = [];

        var head = $('.train-head', train);

        if (entry[i]) {
            arr.push(head);
        }

        for (var j = 0; j < 8 ; j++) {
            var car = $(".car" + (j + 1), train);
            arr.push(car);
        }

        if (!entry[i]) {
            arr.push(head);
            train.addClass('out');
        }
        var left = lefts[i] * tw;
        var top = tops[i] * th;

        train.css('left', left + 'px');
        train.css('top', top + 'px'); 
    }

    var states = [[
        '卸车','50分钟','空扣','卸车'
    ], [
        '计量', '100分钟', '段修', '电焊'
    ], [
        '取样', '80分钟', '电焊', '空'
    ]]

    function showToolTip(x) {

        var _x = event.clientX;
        var _y = event.clientY;



        $('#tooltip').css('top', _y + 'px');
        $('#tooltip').css('left', _x + 'px');



        $('#tooltip').html(x);
        $('#tooltip').removeClass('hide');
    }

    function hideToolTip() {
        $('#tooltip').addClass('hide');
    }

    //干掉事件
    $('.container').click(function () {
        if ($('#tooltip').hasClass('hide'))
            return
        else if (!$('#tooltip').hasClass('hide'))
            $('#tooltip').addClass('hide');
    })

    $(".car").click(function () {
        var t = $(this); 

        // 弹出框显示以下内容

        // 随机从states里取一个
        var state = states[Math.floor(Math.random() * 3)];

        var text = '作业状态：' + state[0] + '<br/>' + '消耗时间：' + state[1] + '<br/>' + '车辆状态：' + state[2] + '<br/>' + '下一步作业：' + state[3] + '<br/>';
           
 
        //   作业状态：state[0]
        //   消耗时间：state[1]
        //   车辆状态：state[2]
        // 下一步作业：state[3]



        showToolTip(text);
        event.stopPropagation()
    })


})