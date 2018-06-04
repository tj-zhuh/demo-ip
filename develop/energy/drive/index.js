/*能源指标*/

define(function (require) {
	var $ = require('jquery');
	var dao = require('dao');

	var ret = {
		detailHandler: null		//详细按钮点击事件
	};

	function getIndexCondition() {
		return {
			Cycle: $('.left-panel-middle .active').attr('condition'),
			TargetDate: '2016-11-01'
		}
	}

	function drawIndexCharts(data) {
		var indexCharts = echarts.init(document.getElementById('index-chart'));

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
				left: '43%',
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
					textStyle: {
						color: '#fff',
						fontFamily: 'SimHei',
						fontSize: getPx(12)
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
						label: {
							normal: {
								show: true,
								position: 'right',
								textStyle: {
									color: '#fff',
									fontFamily: 'SimHei',
									fontSize: 10
								}
							}
						},
						data: data.series[i].data
					}

					seriseData.push(s);
				}

				return seriseData;
			})(),

			color: ['#00ecfc', '#a0fd00']
		};

		indexCharts.clear();
		indexCharts.setOption(option);
	}

	function addEventHandler() {
		$('.left-panel-middle a').click(function () {
			if (typeof ret.detailHandler == 'function') {
				ret.detailHandler();
			}
		})
	}

	ret.init = function () {
		addEventHandler();
		dao.queryIndexData(getIndexCondition(), drawIndexCharts);
		//drawIndexCharts(data);
	};

	ret.condition = function () {
		return getIndexCondition();
	};

	ret.detailClick = function (func) {
		this.detailHandler = func;
	}
	return ret;
})