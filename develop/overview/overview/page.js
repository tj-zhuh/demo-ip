
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

$(function () {
    
	var chart1 = echarts.init(document.getElementById('echarts1'));

	var option = function () {
		return {
			color: ['#f70240', '#fd9800', '#15b900', '#00b4fe'],
			tooltip: {},
			legend: {
				data: [
                    { name: '京明桥', icon: 'rect' },
                    { name: '商桥', icon: 'rect' },
                    { name: '玉桥', icon: 'rect' },
                    { name: '宏发', icon: 'rect' }
				],
				textStyle: { color: '#fff' },
				orient: 'vertical',
				right: '2%',
				bottom: '5%'
			},
			radar: {
				// shape: 'circle',
				radius: '60%',
				center: ['45%', '50%'],
				indicator: [
                   { name: '价格', max: 50000 },
                   { name: '质量', max: 50000 },
                   { name: '交期', max: 50000 },
                   { name: '研发', max: 50000 },
                   { name: '服务', max: 50000 },
				],
				axisLine: {
					show: true,
					lineStyle: { color: '#027191' }
				},
				axisTick: {},
				axisLabel: { textStyle: { fontSize: 24 } },
				splitLine: { lineStyle: { color: '#027191' } },
				splitArea: {
					areaStyle: { color: "transparent" }
				}
			},
			series: [{
				name: '京明桥',
				type: 'radar',
				// areaStyle: {normal: {}},
				data: [
                    {
                    	value: getRadomNums(6, 0, 50000),
                    	name: '京明桥'
                    }
				]
			}, {
				name: '商桥',
				type: 'radar',
				// areaStyle: {normal: {}},
				data: [
                    {
                    	value: getRadomNums(6, 0, 50000),
                    	name: '商桥'
                    }
				]
			}, {
				name: '玉桥',
				type: 'radar',
				// areaStyle: {normal: {}},
				data: [
                    {
                    	value: getRadomNums(6, 0, 50000),
                    	name: '玉桥'
                    }
				]
			}, {
				name: '宏发',
				type: 'radar',
				// areaStyle: {normal: {}},
				data: [
                    {
                    	value: getRadomNums(6, 0, 50000),
                    	name: '宏发'
                    }
				]
			}]

		}
	}

	function loopIt() {

		chart1.setOption(option());


		setTimeout(loopIt, 3000);

	}

	loopIt();

	var DATA_pie1 = function () {
		return [
		   {
		   	name: '名称1',
		   	blocks: [
				//{ name: '核心客户', value: 120, label: { normal: { show: true } }, labelLine: { normal: { show: true, lineStyle: { color: '#127293' } } } },
				{ name: '核心客户', value: 120 },
				{ name: '重要客户', value: 25 },
				{ name: '普通客户', value: 20 },
				{ name: '小客户', value: 15 },
				//{ name: '锢铍', value: 10 },
				{ name: '其它', value: 5 }
		   	],
		   	total: 185,

		   	radius: ['0%', '50%'],
		   	center: ['60%', '60%'],
		   }
		]
	}


	DATA_pie1 = DATA_pie1();

	drawPie({
		El: document.getElementById('echarts2'),
		data: DATA_pie1,
		labelshow: { normal: { show: false } },
		color: ['#127293', '#cb6621', '#1b7411', '#c7ab09', '#1b4573', '#7d1d84'],
		legend: {
			show: true,
			data: ['核心客户', '重要客户', '普通客户', '小客户', '其它'],
			//formatter: function (e) {
			//	for (var i = 0; i < DATA_pie1[0].blocks.length; i++) {
			//		if (e === DATA_pie1[0].blocks[i].name) {
			//			return e + ': ' + (100 * (DATA_pie1[0].blocks[i].value) / DATA_pie1[0].total).toFixed(2) + '%'
			//		}
			//	}

			//},
			orient: 'vertical',
			left: '5%',
			top: '15%',
			textStyle: { color: '#fff', fontSize: 10 }
		}
	});

})