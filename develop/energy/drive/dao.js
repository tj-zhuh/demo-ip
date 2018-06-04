/*数据源模块*/

define(function (require) {
	var $ = require('jquery');
	var ret = {};

	var flowList = [{
		id: 1,
		name: '熔炼车间',
		f: 23452.2,
		day: 76375.2,
		month: 53441.2,
		year: 9983.0,
		sub: 7825.3
	}, {
		id: 2,
		name: '电解车间',
		f: 23452.2,
		day: 76375.2,
		month: 53441.2,
		year: 9983.0,
		sub: 7825.3
	}, {
		id: 3,
		name: '计控车间',
		f: 23452.2,
		day: 76375.2,
		month: 53441.2,
		year: 9983.0,
		sub: 7825.3
	}, {
		id: 4,
		name: '计控车间',
		f: 23452.2,
		day: 76375.2,
		month: 53441.2,
		year: 9983.0,
		sub: 7825.3
	}, {
		id: 5,
		name: '熔炼车间',
		f: 23452.2,
		day: 76375.2,
		month: 53441.2,
		year: 9983.0,
		sub: 7825.3
	}, {
		id: 6,
		name: '电解车间',
		f: 23452.2,
		day: 76375.2,
		month: 53441.2,
		year: 9983.0,
		sub: 7825.3
	}, {
		id: 7,
		name: '计控车间',
		f: 23452.2,
		day: 76375.2,
		month: 53441.2,
		year: 9983.0,
		sub: 7825.3
	}, {
		id: 8,
		name: '计控车间',
		f: 23452.2,
		day: 76375.2,
		month: 53441.2,
		year: 9983.0,
		sub: 7825.3
	}];

	var rankList = [{
		id: 1,
		name: '备料车间',
		value: 1234.23,
		sort: 1
	}, {
		id: 2,
		name: '电解车间',
		value: 2234.23,
		sort: 2
	}, {
		id: 3,
		name: '动力车间',
		value: 3234.23,
		sort: 3
	}, {
		id: 4,
		name: '熔炼车间',
		value: 4234.23,
		sort: 4
	}, {
		id: 5,
		name: '硫酸车间',
		value: 5234.23,
		sort: 5
	}];

	var costData = {
		data: [{
			name: '备料车间',
			value: 2435
		}, {
			name: '电解车间',
			value: 1435
		}, {
			name: '动力车间',
			value: 2735
		}, {
			name: '硫酸车间',
			value: 3435
		}, {
			name: '熔炼车间',
			value: 6435
		}]
	};

	var indexData = {
		xAxis: ['阴极铜综合电单耗', '阳极铜电单耗', '铜冶炼综合能耗', '阴极铜电单耗', '硫酸电单耗'],
		series: [{
			name: "实际",
			data: [200.6, 268.3, 98.3, 106.6, 68.3]
		}, {
			name: "指标",
			data: [10.8, 60.0, 224.0, 16.8, 215.0]
		}]
	}

	var GraphStructGas = {
		"Models": [{
			"StructIn": [{
				"SubConfigID": "1",
				"SubConfigName": "天然气总管1"
			}, {
				"SubConfigID": "2",
				"SubConfigName": "天然气总管2"
			}, {
				"SubConfigID": "3",
				"SubConfigName": "天然气总管3"
			}],
			"StructOut": [{
				"SubConfigID": "4",
				"SubConfigName": "第一冶炼厂",
				"NextCount": 0
			}, {
				"SubConfigID": "5",
				"SubConfigName": "铜材公司",
				"NextCount": 0
			}, {
				"SubConfigID": "6",
				"SubConfigName": "冶炼车间",
				"NextCount": 0
			}],
		}]
	}

	var GraphStructDataGas = {
		"Models": [{
			"DataIn": [{
				"SubConfigID": "1",
				"SubConfigName": "天然气总管1",
				"CurrentIn": 3777.28,
				"DayIn": 66548,
				"MonthIn": 726268,
				"YearIn": 12161188
			}, {
				"SubConfigID": "2",
				"SubConfigName": "天然气总管2",
				"CurrentIn": 1777.28,
				"DayIn": 26348,
				"MonthIn": 96368,
				"YearIn": 2161188
			}, {
				"SubConfigID": "3",
				"SubConfigName": "天然气总管3",
				"CurrentIn": 777.28,
				"DayIn": 6848,
				"MonthIn": 86248,
				"YearIn": 7161188
			}],
			"DataOut": [{
				"SubConfigID": "4",
				"SubConfigName": "第一冶炼厂",
				"CurrentOut": 3777.28,
				"DayOut": 66548,
				"MonthOut": 726268,
				"YearOut": 12161188
			}, {
				"SubConfigID": "5",
				"SubConfigName": "铜材公司",
				"CurrentOut": 1777.28,
				"DayOut": 26348,
				"MonthOut": 96368,
				"YearOut": 2161188
			}, {
				"SubConfigID": "6",
				"SubConfigName": "冶炼车间",
				"CurrentOut": 777.28,
				"DayOut": 6848,
				"MonthOut": 86248,
				"YearOut": 7161188
			}],
			"SumDataOut": [{
				"SumCurrentOut": 3777.28,
				"SumDayOut": 6848,
				"SumMonthOut": 86248,
				"SumYearOut": 7161188
			}],
			"SumDataIn": [{
				"SumCurrentIn": 3777.28,
				"SumDayIn": 6848,
				"SumMonthIn": 86248,
				"SumYearIn": 7161188
			}],
			"DifferData": [{
				"DifferCurrent": 3777.28,
				"DifferDay": 6848,
				"DifferMonth": 86248,
				"DifferYear": 7161188
			}]
		}]
	}

	var GraphStructEle = {
		"Models": [{
			"StructIn": [{
				"SubConfigID": "1",
				"SubConfigName": "1#进线"
			}, {
				"SubConfigID": "2",
				"SubConfigName": "2#进线"
			}, {
				"SubConfigID": "3",
				"SubConfigName": "3#进线"
			}],
			"StructOut": [{
				"SubConfigID": "4",
				"SubConfigName": "倾动炉车间",
				"NextCount": 0
			}, {
				"SubConfigID": "5",
				"SubConfigName": "冶化公司",
				"NextCount": 0
			}, {
				"SubConfigID": "6",
				"SubConfigName": "动力车间",
				"NextCount": 0
			}, {
				"SubConfigID": "7",
				"SubConfigName": "电解车间",
				"NextCount": 0
			}],
		}]
	}

	var GraphStructDataEle = {
		"Models": [{
			"DataIn": [{
				"SubConfigID": "1",
				"SubConfigName": "1#进线",
				"CurrentIn": 2737.28,
				"DayIn": 12548,
				"MonthIn": 423268,
				"YearIn": 6256188
			}, {
				"SubConfigID": "2",
				"SubConfigName": "2#进线",
				"CurrentIn": 7687.28,
				"DayIn": 6148,
				"MonthIn": 13318,
				"YearIn": 2264188
			}, {
				"SubConfigID": "3",
				"SubConfigName": "3#进线",
				"CurrentIn": 377.28,
				"DayIn": 7448,
				"MonthIn": 32248,
				"YearIn": 3161188
			}],
			"DataOut": [{
				"SubConfigID": "4",
				"SubConfigName": "倾动炉车间",
				"CurrentOut": 3247.28,
				"DayOut": 31748,
				"MonthOut": 721268,
				"YearOut": 5161178
			}, {
				"SubConfigID": "5",
				"SubConfigName": "冶化公司",
				"CurrentOut": 5777.22,
				"DayOut": 49342,
				"MonthOut": 126368,
				"YearOut": 2165688
			}, {
				"SubConfigID": "6",
				"SubConfigName": "动力车间",
				"CurrentOut": 435.28,
				"DayOut": 1687,
				"MonthOut": 34523,
				"YearOut": 8756753
			}, {
				"SubConfigID": "7",
				"SubConfigName": "电解车间",
				"CurrentOut": 547.56,
				"DayOut": 9834,
				"MonthOut": 26384,
				"YearOut": 2947572
			}],
			"SumDataOut": [{
				"SumCurrentOut": 2346.37,
				"SumDayOut": 8283,
				"SumMonthOut": 54627,
				"SumYearOut": 21943
			}],
			"SumDataIn": [{
				"SumCurrentIn": 6423.20,
				"SumDayIn": 6848,
				"SumMonthIn": 86248,
				"SumYearIn": 7161188
			}],
			"DifferData": [{
				"DifferCurrent": 9872.90,
				"DifferDay": 6848,
				"DifferMonth": 86248,
				"DifferYear": 7161188
			}]
		}]
	}

	var GraphStructWater = {
		"Models": [{
			"StructIn": [{
				"SubConfigID": "1",
				"SubConfigName": "给水A管"
			}, {
				"SubConfigID": "2",
				"SubConfigName": "给水B管"
			}, {
				"SubConfigID": "3",
				"SubConfigName": "给水C管"
			}, {
				"SubConfigID": "4",
				"SubConfigName": "给水D管"
			}],
			"StructOut": [{
				"SubConfigID": "5",
				"SubConfigName": "倾动炉车间",
				"NextCount": 0
			}, {
				"SubConfigID": "6",
				"SubConfigName": "冶化公司",
				"NextCount": 0
			}, {
				"SubConfigID": "7",
				"SubConfigName": "动力车间",
				"NextCount": 0
			}, {
				"SubConfigID": "8",
				"SubConfigName": "电解车间",
				"NextCount": 0
			}],
		}]
	}

	var GraphStructDataWater = {
		"Models": [{
			"DataIn": [{
				"SubConfigID": "1",
				"SubConfigName": "给水A管",
				"CurrentIn": 2812.45,
				"DayIn": 66548,
				"MonthIn": 726268,
				"YearIn": 12161188
			}, {
				"SubConfigID": "2",
				"SubConfigName": "给水B管",
				"CurrentIn": 1642.37,
				"DayIn": 26348,
				"MonthIn": 96368,
				"YearIn": 2161188
			}, {
				"SubConfigID": "3",
				"SubConfigName": "给水C管",
				"CurrentIn": 987.12,
				"DayIn": 6848,
				"MonthIn": 86248,
				"YearIn": 7161188
			}, {
				"SubConfigID": "4",
				"SubConfigName": "给水D管",
				"CurrentIn": 2543.67,
				"DayIn": 6848,
				"MonthIn": 86248,
				"YearIn": 7161188
			}],
			"DataOut": [{
				"SubConfigID": "5",
				"SubConfigName": "倾动炉车间",
				"CurrentOut": 3564.23,
				"DayOut": 66548,
				"MonthOut": 726268,
				"YearOut": 12161188
			}, {
				"SubConfigID": "6",
				"SubConfigName": "冶化公司",
				"CurrentOut": 2637.89,
				"DayOut": 26348,
				"MonthOut": 96368,
				"YearOut": 2161188
			}, {
				"SubConfigID": "7",
				"SubConfigName": "动力车间",
				"CurrentOut": 7625.56,
				"DayOut": 6848,
				"MonthOut": 86248,
				"YearOut": 7161188
			}, {
				"SubConfigID": "8",
				"SubConfigName": "电解车间",
				"CurrentOut": 452.45,
				"DayOut": 6848,
				"MonthOut": 86248,
				"YearOut": 7161188
			}],
			"SumDataOut": [{
				"SumCurrentOut": 8736.20,
				"SumDayOut": 6848,
				"SumMonthOut": 86248,
				"SumYearOut": 7161188
			}],
			"SumDataIn": [{
				"SumCurrentIn": 12524.90,
				"SumDayIn": 6848,
				"SumMonthIn": 86248,
				"SumYearIn": 7161188
			}],
			"DifferData": [{
				"DifferCurrent": 5362.32,
				"DifferDay": 6848,
				"DifferMonth": 86248,
				"DifferYear": 7161188
			}]
		}]
	}

	var GraphStructWaterGas = {
		"Models": [{
			"StructIn": [{
				"SubConfigID": "1",
				"SubConfigName": "倾动炉产汽"
			}, {
				"SubConfigID": "2",
				"SubConfigName": "动力产汽"
			}, {
				"SubConfigID": "3",
				"SubConfigName": "外购蒸汽"
			}, {
				"SubConfigID": "4",
				"SubConfigName": "硫酸蒸汽"
			}],
			"StructOut": [{
				"SubConfigID": "5",
				"SubConfigName": "倾动炉车间",
				"NextCount": 0
			}, {
				"SubConfigID": "6",
				"SubConfigName": "冶化公司",
				"NextCount": 0
			}, {
				"SubConfigID": "7",
				"SubConfigName": "动力车间",
				"NextCount": 0
			}, {
				"SubConfigID": "8",
				"SubConfigName": "电解车间",
				"NextCount": 0
			}],
		}]
	}

	var GraphStructDataWaterGas = {
		"Models": [{
			"DataIn": [{
				"SubConfigID": "1",
				"SubConfigName": "倾动炉产汽",
				"CurrentIn": 827.56,
				"DayIn": 66548,
				"MonthIn": 726268,
				"YearIn": 12161188
			}, {
				"SubConfigID": "2",
				"SubConfigName": "动力产汽",
				"CurrentIn": 7264.19,
				"DayIn": 26348,
				"MonthIn": 96368,
				"YearIn": 2161188
			}, {
				"SubConfigID": "3",
				"SubConfigName": "外购蒸汽",
				"CurrentIn": 2435.89,
				"DayIn": 6848,
				"MonthIn": 86248,
				"YearIn": 7161188
			}, {
				"SubConfigID": "4",
				"SubConfigName": "硫酸蒸汽",
				"CurrentIn": 635.45,
				"DayIn": 6848,
				"MonthIn": 86248,
				"YearIn": 7161188
			}],
			"DataOut": [{
				"SubConfigID": "5",
				"SubConfigName": "倾动炉车间",
				"CurrentOut": 1836.29,
				"DayOut": 66548,
				"MonthOut": 726268,
				"YearOut": 12161188
			}, {
				"SubConfigID": "6",
				"SubConfigName": "冶化公司",
				"CurrentOut": 2784.63,
				"DayOut": 26348,
				"MonthOut": 96368,
				"YearOut": 2161188
			}, {
				"SubConfigID": "7",
				"SubConfigName": "动力车间",
				"CurrentOut": 4362.19,
				"DayOut": 6848,
				"MonthOut": 86248,
				"YearOut": 7161188
			}, {
				"SubConfigID": "8",
				"SubConfigName": "电解车间",
				"CurrentOut": 9826.17,
				"DayOut": 6848,
				"MonthOut": 86248,
				"YearOut": 7161188
			}],
			"SumDataOut": [{
				"SumCurrentOut": 7361.34,
				"SumDayOut": 1092,
				"SumMonthOut": 86248,
				"SumYearOut": 7161188
			}],
			"SumDataIn": [{
				"SumCurrentIn": 7834.76,
				"SumDayIn": 6848,
				"SumMonthIn": 86248,
				"SumYearIn": 7161188
			}],
			"DifferData": [{
				"DifferCurrent": 9683.23,
				"DifferDay": 6848,
				"DifferMonth": 86248,
				"DifferYear": 7161188
			}]
		}]
	}

	var EleData = {
		"Models": [{
			"ConfigID": "Gas",
			"ConfigReportName": "天然气"
		}, {
			"ConfigID": "Ele",
			"ConfigReportName": "电力"
		}, {
			"ConfigID": "Water",
			"ConfigReportName": "净化水"
		}, {
			"ConfigID": "WaterGas",
			"ConfigReportName": "蒸汽"
		}]
	}

	var messageList = {
		"Models": [{
			MessageContent: '报警：2#供电设备 2017-06-12 20:48 电压 660V，标准上限为600V',
			Color: 'red'
		}, {
			MessageContent: '通知：8#天然气管道 流量 超限 问题已解决 2017-06-08 09:05',
			Color: '#00CD00'
		}, {
			MessageContent: '报警：8#天然气管道 2017-06-08 08:52 流量 3000Nm³/h，标准上限为2000Nm³/h',
			Color: 'red'
		}, {
			MessageContent: '报警：5#供电设备 2017-06-15 15:52 电压 670V，标准上限为700V',
			Color: 'red'
		}, {
			MessageContent: '通知：6#天然气管道 流量 超限 问题已解决，2017-06-10 10:05',
			Color: '#00CD00'
		}]
	}





	//获取最新流向图元素
	ret.queryGraphStruct = function (condition, callback) {

		switch (condition.ConfigID) {
			case "Gas":
				callback(GraphStructGas.Models);
				break;
			case "Ele":
				callback(GraphStructEle.Models);
				break;
			case "Water":
				callback(GraphStructWater.Models);
				break;
			case "WaterGas":
				callback(GraphStructWaterGas.Models);
				break;
		}

		//callback(GraphStruct.Models);
		// $.ajax({
		// type: 'get',
		// dataType: 'json',
		// url: '/api/OverView/GetGraphStruct',
		// data: condition,
		// success: function (data) {
		// if (!data.Models || data.Models.length < 1) return;

		// if (typeof callback === 'function') {
		// callback(data.Models);
		// }
		// }
		// })
	};

	//获取最新流向图元素数据
	ret.queryGraphData = function (condition, callback) {
		switch (condition.ConfigID) {
			case "Gas":
				var GraphStructDataGas = {
					"Models": [{
						"DataIn": [{
							"SubConfigID": "1",
							"SubConfigName": "天然气总管1",
							"CurrentIn": (parseInt(Math.random() * 200 + 800, 10)).toFixed(2),
							"DayIn": 66548,
							"MonthIn": 726268,
							"YearIn": 12161188
						}, {
							"SubConfigID": "2",
							"SubConfigName": "天然气总管2",
							"CurrentIn": (parseInt(Math.random() * 200 + 800, 10)).toFixed(2),
							"DayIn": 26348,
							"MonthIn": 96368,
							"YearIn": 2161188
						}, {
							"SubConfigID": "3",
							"SubConfigName": "天然气总管3",
							"CurrentIn": (parseInt(Math.random() * 200 + 800, 10)).toFixed(2),
							"DayIn": 6848,
							"MonthIn": 86248,
							"YearIn": 7161188
						}],
						"DataOut": [{
							"SubConfigID": "4",
							"SubConfigName": "第一冶炼厂",
							"CurrentOut": (parseInt(Math.random() * 200 + 800, 10)).toFixed(2),
							"DayOut": 66548,
							"MonthOut": 726268,
							"YearOut": 12161188
						}, {
							"SubConfigID": "5",
							"SubConfigName": "铜材公司",
							"CurrentOut": (parseInt(Math.random() * 200 + 800, 10)).toFixed(2),
							"DayOut": 26348,
							"MonthOut": 96368,
							"YearOut": 2161188
						}, {
							"SubConfigID": "6",
							"SubConfigName": "冶炼车间",
							"CurrentOut": (parseInt(Math.random() * 200 + 800, 10)).toFixed(2),
							"DayOut": 6848,
							"MonthOut": 86248,
							"YearOut": 7161188
						}],
						"SumDataOut": [{
							"SumCurrentOut": (parseInt(Math.random() * 500 + 2500, 10)).toFixed(2),
							"SumDayOut": 6848,
							"SumMonthOut": 86248,
							"SumYearOut": 7161188
						}],
						"SumDataIn": [{
							"SumCurrentIn": (parseInt(Math.random() * 500 + 2500, 10)).toFixed(2),
							"SumDayIn": 6848,
							"SumMonthIn": 86248,
							"SumYearIn": 7161188
						}],
						"DifferData": [{
							"DifferCurrent": (parseInt(Math.random() * 50 + 150, 10)).toFixed(2),
							"DifferDay": 6848,
							"DifferMonth": 86248,
							"DifferYear": 7161188
						}]
					}]
				};
				callback(GraphStructDataGas.Models);
				break;
			case "Ele":
				var GraphStructDataEle = {
					"Models": [{
						"DataIn": [{
							"SubConfigID": "1",
							"SubConfigName": "1#进线",
							"CurrentIn": (parseInt(Math.random() * 500 + 4500, 10)).toFixed(2),
							"DayIn": 12548,
							"MonthIn": 423268,
							"YearIn": 6256188
						}, {
							"SubConfigID": "2",
							"SubConfigName": "2#进线",
							"CurrentIn": (parseInt(Math.random() * 500 + 4500, 10)).toFixed(2),
							"DayIn": 6148,
							"MonthIn": 13318,
							"YearIn": 2264188
						}, {
							"SubConfigID": "3",
							"SubConfigName": "3#进线",
							"CurrentIn": (parseInt(Math.random() * 500 + 4500, 10)).toFixed(2),
							"DayIn": 7448,
							"MonthIn": 32248,
							"YearIn": 3161188
						}],
						"DataOut": [{
							"SubConfigID": "4",
							"SubConfigName": "倾动炉车间",
							"CurrentOut": (parseInt(Math.random() * 500 + 4500, 10)).toFixed(2),
							"DayOut": 31748,
							"MonthOut": 721268,
							"YearOut": 5161178
						}, {
							"SubConfigID": "5",
							"SubConfigName": "冶化公司",
							"CurrentOut": (parseInt(Math.random() * 500 + 4500, 10)).toFixed(2),
							"DayOut": 49342,
							"MonthOut": 126368,
							"YearOut": 2165688
						}, {
							"SubConfigID": "6",
							"SubConfigName": "动力车间",
							"CurrentOut": (parseInt(Math.random() * 500 + 4500, 10)).toFixed(2),
							"DayOut": 1687,
							"MonthOut": 34523,
							"YearOut": 8756753
						}, {
							"SubConfigID": "7",
							"SubConfigName": "电解车间",
							"CurrentOut": (parseInt(Math.random() * 500 + 4500, 10)).toFixed(2),
							"DayOut": 9834,
							"MonthOut": 26384,
							"YearOut": 2947572
						}],
						"SumDataOut": [{
							"SumCurrentOut": (parseInt(Math.random() * 1000 + 19000, 10)).toFixed(2),
							"SumDayOut": 8283,
							"SumMonthOut": 54627,
							"SumYearOut": 21943
						}],
						"SumDataIn": [{
							"SumCurrentIn": (parseInt(Math.random() * 1000 + 14000, 10)).toFixed(2),
							"SumDayIn": 6848,
							"SumMonthIn": 86248,
							"SumYearIn": 7161188
						}],
						"DifferData": [{
							"DifferCurrent": (parseInt(Math.random() * 500 + 5000, 10)).toFixed(2),
							"DifferDay": 6848,
							"DifferMonth": 86248,
							"DifferYear": 7161188
						}]
					}]
				}
				callback(GraphStructDataEle.Models);
				break;
			case "Water":
				var GraphStructDataWater = {
					"Models": [{
						"DataIn": [{
							"SubConfigID": "1",
							"SubConfigName": "给水A管",
							"CurrentIn": (parseInt(Math.random() * 500 + 1500, 10)).toFixed(2),
							"DayIn": 66548,
							"MonthIn": 726268,
							"YearIn": 12161188
						}, {
							"SubConfigID": "2",
							"SubConfigName": "给水B管",
							"CurrentIn": (parseInt(Math.random() * 500 + 1500, 10)).toFixed(2),
							"DayIn": 26348,
							"MonthIn": 96368,
							"YearIn": 2161188
						}, {
							"SubConfigID": "3",
							"SubConfigName": "给水C管",
							"CurrentIn": (parseInt(Math.random() * 500 + 1500, 10)).toFixed(2),
							"DayIn": 6848,
							"MonthIn": 86248,
							"YearIn": 7161188
						}, {
							"SubConfigID": "4",
							"SubConfigName": "给水D管",
							"CurrentIn": (parseInt(Math.random() * 500 + 1500, 10)).toFixed(2),
							"DayIn": 6848,
							"MonthIn": 86248,
							"YearIn": 7161188
						}],
						"DataOut": [{
							"SubConfigID": "5",
							"SubConfigName": "倾动炉车间",
							"CurrentOut": (parseInt(Math.random() * 500 + 1500, 10)).toFixed(2),
							"DayOut": 66548,
							"MonthOut": 726268,
							"YearOut": 12161188
						}, {
							"SubConfigID": "6",
							"SubConfigName": "冶化公司",
							"CurrentOut": (parseInt(Math.random() * 500 + 1500, 10)).toFixed(2),
							"DayOut": 26348,
							"MonthOut": 96368,
							"YearOut": 2161188
						}, {
							"SubConfigID": "7",
							"SubConfigName": "动力车间",
							"CurrentOut": (parseInt(Math.random() * 500 + 1500, 10)).toFixed(2),
							"DayOut": 6848,
							"MonthOut": 86248,
							"YearOut": 7161188
						}, {
							"SubConfigID": "8",
							"SubConfigName": "电解车间",
							"CurrentOut": (parseInt(Math.random() * 500 + 1500, 10)).toFixed(2),
							"DayOut": 6848,
							"MonthOut": 86248,
							"YearOut": 7161188
						}],
						"SumDataOut": [{
							"SumCurrentOut": (parseInt(Math.random() * 500 + 7500, 10)).toFixed(2),
							"SumDayOut": 6848,
							"SumMonthOut": 86248,
							"SumYearOut": 7161188
						}],
						"SumDataIn": [{
							"SumCurrentIn": (parseInt(Math.random() * 500 + 7500, 10)).toFixed(2),
							"SumDayIn": 6848,
							"SumMonthIn": 86248,
							"SumYearIn": 7161188
						}],
						"DifferData": [{
							"DifferCurrent": (parseInt(Math.random() * 100 + 100, 10)).toFixed(2),
							"DifferDay": 6848,
							"DifferMonth": 86248,
							"DifferYear": 7161188
						}]
					}]
				}
				callback(GraphStructDataWater.Models);
				break;
			case "WaterGas":
				var GraphStructDataWaterGas = {
					"Models": [{
						"DataIn": [{
							"SubConfigID": "1",
							"SubConfigName": "倾动炉产汽",
							"CurrentIn": (parseInt(Math.random() * 100 + 1000, 10)).toFixed(2),
							"DayIn": 66548,
							"MonthIn": 726268,
							"YearIn": 12161188
						}, {
							"SubConfigID": "2",
							"SubConfigName": "动力产汽",
							"CurrentIn": (parseInt(Math.random() * 100 + 1000, 10)).toFixed(2),
							"DayIn": 26348,
							"MonthIn": 96368,
							"YearIn": 2161188
						}, {
							"SubConfigID": "3",
							"SubConfigName": "外购蒸汽",
							"CurrentIn": (parseInt(Math.random() * 100 + 1000, 10)).toFixed(2),
							"DayIn": 6848,
							"MonthIn": 86248,
							"YearIn": 7161188
						}, {
							"SubConfigID": "4",
							"SubConfigName": "硫酸蒸汽",
							"CurrentIn": (parseInt(Math.random() * 100 + 1000, 10)).toFixed(2),
							"DayIn": 6848,
							"MonthIn": 86248,
							"YearIn": 7161188
						}],
						"DataOut": [{
							"SubConfigID": "5",
							"SubConfigName": "倾动炉车间",
							"CurrentOut": (parseInt(Math.random() * 100 + 1000, 10)).toFixed(2),
							"DayOut": 66548,
							"MonthOut": 726268,
							"YearOut": 12161188
						}, {
							"SubConfigID": "6",
							"SubConfigName": "冶化公司",
							"CurrentOut": (parseInt(Math.random() * 100 + 1000, 10)).toFixed(2),
							"DayOut": 26348,
							"MonthOut": 96368,
							"YearOut": 2161188
						}, {
							"SubConfigID": "7",
							"SubConfigName": "动力车间",
							"CurrentOut": (parseInt(Math.random() * 100 + 1000, 10)).toFixed(2),
							"DayOut": 6848,
							"MonthOut": 86248,
							"YearOut": 7161188
						}, {
							"SubConfigID": "8",
							"SubConfigName": "电解车间",
							"CurrentOut": (parseInt(Math.random() * 100 + 1000, 10)).toFixed(2),
							"DayOut": 6848,
							"MonthOut": 86248,
							"YearOut": 7161188
						}],
						"SumDataOut": [{
							"SumCurrentOut": (parseInt(Math.random() * 500 + 4000, 10)).toFixed(2),
							"SumDayOut": 1092,
							"SumMonthOut": 86248,
							"SumYearOut": 7161188
						}],
						"SumDataIn": [{
							"SumCurrentIn": (parseInt(Math.random() * 500 + 4000, 10)).toFixed(2),
							"SumDayIn": 6848,
							"SumMonthIn": 86248,
							"SumYearIn": 7161188
						}],
						"DifferData": [{
							"DifferCurrent": (parseInt(Math.random() * 50 + 100, 10)).toFixed(2),
							"DifferDay": 6848,
							"DifferMonth": 86248,
							"DifferYear": 7161188
						}]
					}]
				}
				callback(GraphStructDataWaterGas.Models);
				break;
		}

		//callback(GraphStructData.Models);
		// $.ajax({
		// type: 'get',
		// dataType: 'json',
		// url: '/api/OverView/GetGraphData',
		// data: condition,
		// success: function (data) {
		// if (!data.Models || data.Models.length < 1) return;

		// if (typeof callback === 'function') {
		// callback(data.Models);
		// }
		// }
		// })
	};

	//获取流向图介质
	ret.queryGraphEle = function (condition, callback) {
		callback(EleData.Models);
		// $.ajax({
		// type: 'get',
		// dataType: 'json',
		// url: '/api/ReportConfig/GetOverViewGraph2',
		// data: condition,
		// success: function (data) {
		// if (!data.Models || data.Models.length < 1) return;

		// if (typeof callback === 'function') {
		// callback(data.Models);
		// }
		// }
		// })
	};

	//获取天然气流向图元素
	ret.queryFlowListGas = function (condition, callback) {
		$.ajax({
			type: 'get',
			dataType: 'json',
			url: '/api/OverView/GetGasGraphStruct',
			data: condition,
			success: function (data) {
				if (!data.Models || data.Models.length < 1) return;

				if (typeof callback === 'function') {
					callback(data.Models);
				}
			}
		})
	};

	//获取天然气流向图数据
	ret.queryFlowDataGas = function (condition, callback) {
		$.ajax({
			type: 'get',
			dataType: 'json',
			url: '/api/OverView/GetGasGraphData',
			data: condition,
			success: function (data) {
				if (!data.Models || data.Models.length < 1) return;

				if (typeof callback === 'function') {
					callback(data.Models);
				}
			}
		})
	};

	//获取电流向图元素
	ret.queryFlowListEle = function (condition, callback) {
		$.ajax({
			type: 'get',
			dataType: 'json',
			url: '/api/OverView/GetPowerGraphStruct',
			data: condition,
			success: function (data) {
				if (!data.Models || data.Models.length < 1) return;

				if (typeof callback === 'function') {
					callback(data.Models);
				}
			}
		})
	};

	//获取电流向图数据
	ret.queryFlowDataEle = function (condition, callback) {
		$.ajax({
			type: 'get',
			dataType: 'json',
			url: '/api/OverView/GetPowerGraphData',
			data: condition,
			success: function (data) {
				if (!data.Models || data.Models.length < 1) return;

				if (typeof callback === 'function') {
					callback(data.Models);
				}
			}
		})
	};

	//获取总消耗数据
	ret.queryConsumeData = function (callback) {
		$.ajax({
			type: 'get',
			dataType: 'json',
			url: '/api/OverView/GetSumConsume',
			success: function (data) {
				if (!data.Models || data.Models.length < 1) return;

				if (typeof callback === 'function') {
					callback(data.Models);
				}
			}
		})
	}

	//获取成本数据
	ret.queryCostData = function (condition, callback) {
		callback(costData.data);
		// $.ajax({
		// type: 'get',
		// dataType: 'json',
		// url: '/api/OverView/GetCosting',
		// data: condition,
		// success: function (data) {
		// if (!data.Models || data.Models.length < 1) return;

		// if (typeof callback === 'function') {
		// callback(data.Models);
		// }
		// }
		// })
	}

	ret.queryRankList = function (condition, callback) {
		var rankData = {
			"Models": [{
				name: '熔炼车间',
				value: (Math.random() * 23874.99).toFixed(2)
			}, {
				name: '动力车间',
				value: (Math.random() * 14874.99).toFixed(2)
			}, {
				name: '硫酸车间',
				value: (Math.random() * 4874.99).toFixed(2)
			}, {
				name: '选矿车间',
				value: (Math.random() * 3674.99).toFixed(2)
			}, {
				name: '备料车间',
				value: (Math.random() * 874.99).toFixed(2)
			}]
		}

		callback(rankData.Models);
		//$.ajax({
		//    type: 'get',
		//    dataType: 'json',
		//    url: '/api/OverView/GetConsumeRank',
		//    data: condition,
		//    success: function (data) {
		//        if (!data.Models || data.Models.length < 1) return;

		//        if (typeof callback === 'function') {
		//            callback(data.Models);
		//        }
		//    }
		//})
	};

	ret.queryRankEcharts = function (condition, callback) {
		var result = {
			xAxisId: [],
			xAxis: [],
			series: [{
				name: "",
				data: []
			}]
		};

		$.ajax({
			type: 'get',
			dataType: 'json',
			url: '/api/OverView/GetConsumeRank',
			data: condition,
			success: function (data) {
				if (!data.Models || data.Models.length < 1) return;

				for (var i = data.Models.length - 1; i >= 0; i--) {
					var item = data.Models[i];
					result.xAxis.push(item.Name);
					result.series[0].data.push(parseFloat(item.Value).toFixed(1));
				}

				if (typeof callback === 'function') {
					callback(result);
				}
			}
		})
	};

	//获取推送信息
	ret.queryMessage = function (callback) {
		callback(messageList.Models);
		// $.ajax({
		// type: 'get',
		// dataType: 'json',
		// url: '/api/MessagePush/GetNewMessage',
		// success: function (data) {
		// if (!data.Models || data.Models.length < 1) return;

		// if (typeof callback === 'function') {
		// callback(data.Models);
		// }
		// }
		// })
	};

	//获取推送信息
	ret.queryBalance = function (condition, callback) {
		var balanceDate = {
			"Models": [{
				EnergyMediumName: '水',
				EnergyIn: (27618 * Math.random()).toFixed(2),
				EnergyOut: (35674 * Math.random()).toFixed(2)
			}, {
				EnergyMediumName: '电',
				EnergyIn: (45632 * Math.random()).toFixed(2),
				EnergyOut: (49867 * Math.random()).toFixed(2)
			}, {
				EnergyMediumName: '气',
				EnergyIn: (98476 * Math.random()).toFixed(2),
				EnergyOut: (23847 * Math.random()).toFixed(2)
			}]
		}
		callback(balanceDate.Models);
		//$.ajax({
		//    type: 'get',
		//    dataType: 'json',
		//    url: '/api/OverView/GetEnergyBalanceByCycle',
		//    data: condition,
		//    success: function (data) {
		//        if (!data.Models || data.Models.length < 1) return;

		//        if (typeof callback === 'function') {
		//            callback(data.Models);
		//        }
		//    }
		//})
	};

	//ret.queryPredictData = function (condition, callback) {
	//	return predictData;
	//};
	ret.queryPredictList = function (condition, callback) {
		var predictData = {
			"Models": [{
				name: '熔炼车间',
				value: (Math.random() * 2436874.99).toFixed(2)
			}, {
				name: '动力车间',
				value: (Math.random() * 1436874.99).toFixed(2)
			}, {
				name: '硫酸车间',
				value: (Math.random() * 436874.99).toFixed(2)
			}, {
				name: '选矿车间',
				value: (Math.random() * 336874.99).toFixed(2)
			}, {
				name: '备料车间',
				value: (Math.random() * 36874.99).toFixed(2)
			}]
		}

		callback(predictData.Models);
		//$.ajax({
		//    type: 'get',
		//    dataType: 'json',
		//    url: '/api/OverView/GetForecastByCycle',
		//    data: condition,
		//    success: function (data) {
		//        if (!data.Models || data.Models.length < 1) return;

		//        if (typeof callback === 'function') {
		//            callback(data.Models);
		//        }
		//    }
		//})
	};

	//获取指标数据
	ret.queryIndexData = function (condition, callback) {
		// var result = {
		// xAxisId: [],
		// xAxis: [],
		// series: [{
		// name: "实际",
		// data: []
		// }, {
		// name: "指标",
		// data: []
		// }]
		// };
		callback(indexData);
		// $.ajax({
		// type: 'get',
		// dataType: 'json',
		// url: '/api/OverView/GetEnergyKPIByCycle',
		// data: condition,
		// success: function (data) {
		// if (!data.Models || data.Models.length < 1) return;

		// for (var i = 0; i < data.Models.length; i++) {
		// if (i > 4) break;

		// var item = data.Models[i];
		// result.xAxis.push(item.MeasurePropertyName);
		// result.xAxisId.push(item.MeasurePropertyID);
		// result.series[0].data.push(parseFloat(item.ReportComputeValue).toFixed(1));
		// result.series[1].data.push(parseFloat(item.SUBEFFICACIOUSVALUE).toFixed(1));
		// }

		// if (typeof callback === 'function') {
		// callback(result);
		// }
		// }
		// })
	}

	return ret;
})