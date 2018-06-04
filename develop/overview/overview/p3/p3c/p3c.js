window.onload = function () {
	
	var myChart = echarts.init(document.getElementById('zzwl'));

	var option = {
	    tooltip: {
	        trigger: 'item',
	        axisPointer: {
	            lineStyle: {
	                color: '#57617B'
	            }
	        }, textStyle: { fontSize: 12, color: '#fff' }
	    },
		title: {
			text: 'zzwl',
			show: false
		},
		grid: {
			top: '10%',
			bottom: '18%',
			left: '15%',
			right: '10%',
		},
		xAxis: {
			axisLine: {
				lineStyle: {
					color: 'blue'
				}
			},
			axisLabel: {
				textStyle: {
					color: 'white'
				}
			},
			data: [ '精矿','氧化矿','石英砂','石灰石粉','杂铜','活性焦']
		},
		yAxis:{
			show: true,
			axisLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: 'white'
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: 'blue'
				}
			},
			min: 0,
			max: 2000
		},
		series: {
			name: '',
			type: 'bar',
			data: [ 1850, 1400, 350, 1050, 1450, 450]
		}
	}

	myChart.setOption(option);
}