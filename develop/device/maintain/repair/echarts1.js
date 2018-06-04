/*能源指标*/

define(function (require) {
	var $ = require('jquery');
	var dao = require('dao');

	var ret = {
		detailHandler: null		//详细按钮点击事件
	};

	function drawIndexCharts(data) {
		var indexCharts = echarts.init(document.getElementById('detail-charts'));

		var option = {
			title: {
				show: false
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			grid: {
				left: '0%',
				top: '0%',
				bottom: '0%',
				right: '0%'
			},
			xAxis: {
				type: 'value',
				boundaryGap: false,
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: false
				},
				splitLine: {
					show: false
				}
			},
			yAxis: {
				type: 'category',
				data: data.xAxis,
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: false
				},
				axisLabel: {
					show: false,
					textStyle: {
						color: '#bababa',
						fontFamily: 'SimHei',
						fontSize: 12
					}
				}
			},
			series: (function () {
				var seriseData = [];

				for (var i = 0 ; i < data.series.length; i++) {
					if (data.series[i] == null) {
						continue;
					}

					var s = {
						name: data.series[i].name,
						type: 'bar',
						//label: {
						//	normal: {
						//		show: true,
						//		position: 'right',
						//		textStyle: {
						//			color: '#bababa',
						//			fontFamily: 'SimHei',
						//			fontSize: 12
						//		}
						//	}
						//},
						data: data.series[i].data
					}

					seriseData.push(s);
				}

				return seriseData;
			})(),

			color: ['#8dcdd1', '#f1b099']
		};

		indexCharts.clear();
		indexCharts.setOption(option);
	}

	ret.init = function () {

		dao.queryIndexData(drawIndexCharts);
		//drawIndexCharts(data);
	};
	return ret;
})