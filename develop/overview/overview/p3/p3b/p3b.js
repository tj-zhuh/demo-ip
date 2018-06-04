
//取随机数组工具函数(获得固定数量的数组型数据)
function getRadomNums(nums, min, max) {
    var _temp = [];

    for (var i = 0; i < nums; i++) {
        var __temp__ = (min + (max - min) * Math.random()).toFixed(2);

        _temp.push(__temp__);
    }

    return _temp;
}

//获得一个随机数工具函数
function getRandom(min, max) {
    var __temp__ = (min + (max - min) * Math.random()).toFixed(2);
    return __temp__;
}


function zResetOption(x) {
    var option = {
        series: [{
            type: 'pie',
            name: '',
            data: [{ name: '熔炼车间1', value: getRandom(10, 250) },
                { name: '备料车间1', value: getRandom(10, 250) },
                { name: '电解车间1', value: getRandom(10, 250) },
                { name: '熔炼车间2', value: getRandom(10, 250) },
                { name: '备料车间2', value: getRandom(10, 250) }]
        }]
    }
    x.setOption(option)
}






window.onload = function () {
	
	var depart = document.getElementById('depart');
	var medium = document.getElementById('medium');
	var day = document.getElementById('day');
	var month = document.getElementById('month');
	var year = document.getElementById('year');

	var option2 = {
	    color: ['#0358ab', '#9f5e2f', '#688e2c', '#a28a27', '#0c3a70', '#853879'],
	    tooltip: {
	        formatter: function (e) {
	            //console.log(e);
	            var _temp = e.name + ':<br/>&nbsp&nbsp';
	            _temp += '数值:&nbsp' + e.value + '<br/>&nbsp&nbsp';
	            _temp += '占比:&nbsp' + e.percent + ' % ';
	            return _temp;
	        }
	    },
        series: [{
            type: 'pie',
            name: '',
            data: [
                { name: '熔炼车间1', value: 123 },
                { name: '备料车间1', value: 123 },
                { name: '电解车间1', value: 234 },
                { name: '熔炼车间2', value: 190 },
                { name: '备料车间2', value: 190 },
            ],
            center: ['35%','50%'],
            radius: '80%',
            startAngle: 90,
            animationDuration: 1000,
            roseType:  false,
            label: { normal: {show:false, textStyle: { fontSize: (12), color: '#fff' } } },
            labelLine: { normal: { show: false, lineStyle: { color: '#fff' } } }
        }],
        legend: {
            show: true,
            data: ['熔炼车间1', '备料车间1', '电解车间1', '熔炼车间2', '备料车间2'],
            formatter: function (e) {
                //console.log(e)
                return e
            },
            orient: 'vertical',
            right: '2%',
            top: '15%',
            textStyle: { color: '#fff', fontSize: 6 }
        }
    }

    var chart2 = echarts.init(document.getElementById('chart'));

    chart2.setOption(option2)

    $('.opt1').click(function () {
        if($(this).hasClass('active')){return}
        $('.opt1').removeClass('active');
        $(this).addClass('active');
        zResetOption(chart2)
    })

    $('.opt2').click(function () {
        if ($(this).hasClass('active')) { return }
        $('.opt2').removeClass('active');
        $(this).addClass('active');
        zResetOption(chart2)

    })

}