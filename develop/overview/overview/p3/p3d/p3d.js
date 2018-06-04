
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




window.onload = function () {

    var option1 = function () {
        return {
            color: ['#1f8290', '#918021', '#be4727', '#8bad89'],
            tooltip: {
                formatter: function (e) {
                    //console.log(e);
                    var _temp = e.name + ':<br/>&nbsp&nbsp';
                    _temp += '数值:&nbsp' + e.value + '<br/>&nbsp&nbsp';
                    _temp += '占比:&nbsp' + e.percent + ' % ';
                    return _temp;
                },
                position: ['40%', '20%']
            },
            title: {
                text: '备品备件库存占比',
                textStyle: {
                    color: '#bababa',
                    fontSize: 15,
                    fontWeight: 'normal'
                },
                bottom: '0%',
                //left: '10%'
            },
            series: [{
                type: 'pie',
                name: '',
                data: [
                    //{ name: 'OEE', value: getRandom(20, 100) },
                    //{ name: '故障损失', value: getRandom(20, 100) },
                    //{ name: '速度低下损失', value: getRandom(20, 100) },
                    { name: 'A类备件', value: getRandom(20, 100) },
                    { name: 'B类备件', value: getRandom(20, 100) },
                    { name: 'C类备件', value: getRandom(20, 100) },
                    { name: '其它', value: getRandom(20, 100) },
                ],
                center: ['50%', '50%'],
                radius: '66%',
                startAngle: 90,
                animationDuration: 1000,
                roseType: false,
                label: { normal: { show: false, textStyle: { fontSize: (12), color: '#fff' } } },
                labelLine: { normal: { show: false, lineStyle: { color: '#fff' } } }
            }],
            legend: {
                show: false,
                data: ['OEE', '故障损失', '速度低下损失', '瞬间停止损失', '不良修正损失', '其它'],
                formatter: function (e) {
                    //console.log(e)
                    return e
                },
                orient: 'vertical',
                right: '-10%',
                top: '15%',
                textStyle: { color: '#fff', fontSize: 6 }
            }
        }
    }
    var option2 = function () {
        return {
            color: ['#0eb500'],
            title: {
                text: 'OEE趋势',
                top: 'top',
                left: '45%',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 16,
                    color: '#bababa'
                },
                //left: '6%'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }, textStyle: { fontSize: 12, color: '#fff' },
                formatter: '{b}: {c}%'
            },
            legend: {
                show: false,
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#032D7C'
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#032D7C'
                    }, length: 12
                },
                axisLabel: {
                    textStyle: {
                        color: '#bababa',
                        fontSize: 12
                    }, interval: 0
                },
                splitLine: { show: 0, lineStyle: { color: '#00449f', width: 1 } },
                data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日']
            }],
            grid: {
                top: '20%',
                bottom: '18%',
                left: '20%'
            },
            yAxis: [{
                type: 'value',
                max: 100,
                min: 0,
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#032D7C'
                    }, show: true,
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 12,
                        color: '#ccc'
                    },
                    formatter: function (v) { return v + '%' }
                },
                splitLine: { lineStyle: { color: '#00449f', width: 1 } },
            }, {
                type: 'value',
                max: 1000,
                min: 0,

                axisLine: {
                    lineStyle: {
                        color: '#032D7C'
                    }, show: true,
                },
                axisLabel: {
                    show: false,

                },
                splitLine: { lineStyle: { color: '#00449f', width: 1 } },
            }],
            series: [{
                name: 'OEE趋势',
                type: 'line',
                symbolSize: 4,
                symbol: 'circle',
                smooth: false,
                lineStyle: {
                    normal: {
                        width: 2,
                        //color:'#33e8ea'
                    }
                },
                itemStyle: {
                    normal: {
                        //color: '#33e8ea',
                        //borderColor: obj.color[2],
                        borderWidth: 1
                    },
                    emphasis: { borderWidth: 1 }
                },
                data: getRadomNums(7, 60, 100)
            }]

        }
    }




    var chart1 = echarts.init(document.getElementById('echarts8'));

   

    var chart2 = echarts.init(document.getElementById('echarts9'));


    function loopIt() {

        chart1.setOption(option1())
        chart2.setOption(option2())

        setTimeout(loopIt, 3000);
    }

    loopIt();

	//仪表盘1
    var option3 = function () {
    	return {

    		tooltip: {
    			formatter: "{a} <br/>{b} : {c}%"
    		},
    		series: [
				{
					name: '业务指标',
					type: 'gauge',
					radius: '100%',
					center: ['50%', '80%'],
					detail: { formatter: '{value}%' },
					data: [{ value: getRandom(79, 96), name: '' }],
					startAngle: 180,
					endAngle: 0,
					axisLine: { lineStyle: { color: [[0.2, '#AC0506'], [1, '#228B22']] } },
					detail: {
						offsetCenter: ['0%', '23%'],
						textStyle: { fontSize: (15), color: '#bababa' },
						formatter: function (e) {
							return 'OEE: ' + e + '%'
						}
					},
					splitLine: { show: 1, lineStyle: { width: 1 } },
					axisLabel: { show: 0, textStyle: { fontSize: (12) } },
				}
    		]
    	}
    }

    var option4 = function () {
    	return {
    		tooltip: {
    			formatter: function (e) {
    				//console.log(e);
    				var _temp = e.name + ':<br/>&nbsp&nbsp';
    				_temp += '数值:&nbsp' + e.value + '<br/>&nbsp&nbsp';
    				_temp += '占比:&nbsp' + e.percent + ' % ';
    				return _temp;
    			}
    		},
    		title: {
    			text: '设备能力损失分析',
    			textStyle: {
    				color: '#bababa',
    				fontSize: 15,
    				fontWeight: 'normal'
    			},
    			bottom: '0%',
    			left: '20%'
    		},
    		color: ['#06427c', '#cf5f4a', '#b9516f', '#82812c', '#692a5c', '#449985'],
    		series: [{
    			type: 'pie',
    			name: '',
    			data: [
                    //{ name: 'OEE', value: getRandom(20, 100) },
                    { name: '故障损失', value: getRandom(20, 100) },
                    { name: '速度低下损失', value: getRandom(20, 100) },
                    { name: '瞬间停止损失', value: getRandom(20, 100) },
                    { name: '不良修正损失', value: getRandom(20, 100) },
                    { name: '其它', value: getRandom(20, 100) },
    			],
    			center: ['50%', '50%'],
    			radius: '60%',
    			startAngle: 90,
    			animationDuration: 1000,
    			roseType: false,
    			label: { normal: { show: false, textStyle: { fontSize: (12), color: '#fff' } } },
    			labelLine: { normal: { show: false, lineStyle: { color: '#fff' } } }
    		}]
    	}
    }






    var chart3 = echarts.init(document.getElementById('echarts6'));



    var chart4 = echarts.init(document.getElementById('echarts7'));




    function loopIt1() {

    	chart3.setOption(option3())
    	chart4.setOption(option4());
    	setTimeout(loopIt1, 3000);

    }

    loopIt1();

    var option5 = function () {
    	return {
    		color: ['#00ae30', '#7601fb'],
    		legend: {
    			data: ['二氧化硫排放浓度(mg/m3)', '氮氧化物排放浓度(mg/m3)'],
    			textStyle: { color: '#fff', fontSize: 6 },
    			orient: 'vertical',
    			right: '5%',
    			top: '0%',
    		},
    		tooltip: {
    			trigger: 'axis',
    			axisPointer: {
    				lineStyle: {
    					color: '#57617B'
    				}
    			}, textStyle: { fontSize: 12, color: '#fff' }
    		},
    		xAxis: {
    			type: 'category',
    			data: ['1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月1日', '1月2日', '1月3日', '1月4日', '1月5日', '1月6日', ],
    			axisLine: {
    				lineStyle: {
    					color: '#032D7C'
    				}
    			},
    			axisTick: {
    				show: false,
    				lineStyle: {
    					color: '#032D7C'
    				}, length: 12
    			},
    			axisLabel: {
    				textStyle: {
    					color: '#bababa',
    					fontSize: 12
    				}, interval: 5
    			},
    			splitLine: { show: 0, lineStyle: { color: '#00449f', width: 1 } },
    		},
    		yAxis: {
    			type: 'value',
    			min: 0,
    			max: 250,
    			axisTick: {
    				show: false
    			},
    			axisLine: {
    				lineStyle: {
    					color: '#032D7C'
    				}, show: true,
    			},
    			axisLabel: {
    				margin: 10,
    				textStyle: {
    					fontSize: 12,
    					color: '#ccc'
    				},
    				formatter: function (v) { return v }
    			},
    			splitLine: { lineStyle: { color: '#00449f', width: 1 } },
    		},
    		grid: {
    			top: '25%',
    			bottom: '20%'
    		},
    		series: [{
    			type: 'line',
    			name: '二氧化硫排放浓度(mg/m3)',
    			data: getRadomNums(31, 0, 250),
    			symbol: 'circle'
    		}, {
    			type: 'line',
    			name: '氮氧化物排放浓度(mg/m3)',
    			data: getRadomNums(31, 0, 250),
    			symbol: 'circle'
    		}]
    	}
    }

    var option6 = function () {
    	return {
    		color: ['#006cb0', '#fe5600', '#816a05'],
    		legend: {
    			data: ['发现隐患数', '整改比例', '整改隐患数'],
    			textStyle: { color: '#fff', fontSize: 6 },
    			//orient: 'vertical',
    			right: '0%',
    			top: '0%',
    		},
    		tooltip: {
    			trigger: 'axis',
    			axisPointer: {
    				type: 'shadow',
    				lineStyle: {
    					color: '#57617B'
    				}
    			}, textStyle: { fontSize: 12, color: '#fff' }
    		},
    		xAxis: {
    			type: 'category',
    			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
    			axisLine: {
    				lineStyle: {
    					color: '#032D7C'
    				}
    			},
    			axisTick: {
    				show: false,
    				lineStyle: {
    					color: '#032D7C'
    				}, length: 12
    			},
    			axisLabel: {
    				textStyle: {
    					color: '#bababa',
    					fontSize: 12
    				}, interval: 0
    			},
    			splitLine: { show: 0, lineStyle: { color: '#00449f', width: 1 } },
    		},
    		yAxis: [{
    			type: 'value',
    			min: 0,
    			max: 250,
    			axisTick: {
    				show: false
    			},
    			axisLine: {
    				lineStyle: {
    					color: '#032D7C'
    				}, show: true,
    			},
    			axisLabel: {
    				margin: 10,
    				textStyle: {
    					fontSize: 12,
    					color: '#ccc'
    				},
    				formatter: function (v) { return v }
    			},
    			splitLine: { lineStyle: { color: '#00449f', width: 1 } },
    		}, {
    			type: 'value',
    			min: 0,
    			max: 20,

    			axisTick: {
    				show: false
    			},
    			axisLine: {
    				lineStyle: {
    					color: '#032D7C'
    				}, show: true,
    			},
    			axisLabel: {
    				margin: 10,
    				textStyle: {
    					fontSize: 12,
    					color: '#ccc'
    				},
    				formatter: function (e) { return e + '%' },
    			},
    			splitLine: { lineStyle: { color: '#00449f', width: 1 }, show: 0 },
    		}],
    		grid: {
    			top: '20%',
    			bottom: '15%'
    		},
    		series: [{
    			type: 'bar',
    			name: '发现隐患数',
    			data: getRadomNums(7, 0, 250),
    			//symbol: 'circle'
    		}, {
    			type: 'bar',
    			name: '整改比例',
    			data: getRadomNums(7, 0, 250),
    			//symbol: 'circle'
    		}, {
    			type: 'line',
    			name: '整改隐患数',
    			data: getRadomNums(7, 0, 250),
    			symbol: 'circle',
    			smooth: 1
    		}]
    	}
    }











    var chart5 = echarts.init(document.getElementById('echarts10'));


    var chart6 = echarts.init(document.getElementById('echarts11'));

    function loopIt3() {
    	chart5.setOption(option5());
    	chart6.setOption(option6());
    	setTimeout(loopIt3, 3000);
    }
    loopIt3();
}





