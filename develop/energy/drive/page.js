require.config({
	paths: config.getPaths(2)
})

define(function (require) {
	var $ = require('jquery');
	var flow = require('flow');
	var dao = require('dao');
	var menu = require('menu');
	var rank = require('rank');
	var cost = require('cost');
	var predict = require('predict');
	var index = require('index');
	var consume = require('consume');
	//var mwin = require('mwin');
	//var util = require('util2');
	var message = require('message');
	var balance = require('balance');

	$(function () {
		// mwin.config({
		// selector: '#window',
		// windowId: 'window',
		// headId: 'window-head'
		// });
		// mwin.init();

		initButtonQuery();

		message.init();

		rank.init();

		cost.init();

		index.init();

		consume.init();

		balance.init();

		flow.init();

		//predict.init(dao.queryPredictData());
		predict.init();

		drawNet();

		$('.net').click(function () {
			window.top.g.jump('develop/energy/run/monitor/all/page.html','综合管网');
		})

		// flow.boxRClick(function (condition) {
		// menu.init(condition);
		// });

		// menu.click(function (url, name, modelBaseId, energyMediumID) {
		// Util.openInNewTab(name + modelBaseId + 'Id', name, url + "[ModelBaseID:" + modelBaseId + ",EnergyMediumID:" + energyMediumID + "]");
		// });

		// index.detailClick(function () {
		// Util.openInNewTab("indexId", "能源指标", "/develop/reports/chart-graph-to-jump/kpi-report-to-jump.html");
		// });

		// message.detailClick(function () {
		// //Util.openInNewTab("messageId", "消息", "/develop/factory/message/message-detail/message-detail.html");
		// //页面权限 不止查询权限时 需要配置数据库中的 MENU_ID
		// Util.openInNewTab("1d2a14b571db7e2A27bc86aa", "消息", "/develop/factory/message/message-detail/message-detail.html");
		// });

		// consume.detailClick(function () {
		// Util.openInNewTab("consumeId", "能源消耗", "/develop/reports/chart-graph-to-jump/consume-detail-to-jump.html");
		// });

		// consume.listClick(function (type) {
		// Util.openInNewTab("consumeListId", "折标煤", "/develop/reports/chart-graph-to-jump/standard-coal-graph-to-jump.html?[DateType:" + type + "]");
		// });

		// predict.detailClick(function () {
		// Util.openInNewTab("balanceId", "能耗预测", "/develop/reports/chart-graph-to-jump/forecast-report-to-jump.html");
		// });

		// balance.detailClick(function () {
		// Util.openInNewTab("balanceId", "能源平衡", "/develop/reports/chart-graph-to-jump/balance-report-to-jump.html");
		// });

		// rank.detailClick(function () {
		// mwin.open();
		// $('.window .window-title h3').html('用能排行');
		// dao.queryRankEcharts(rank.condition(), rank.drawEchart);
		// });

		// cost.detailClick(function (type) {
		// Util.openInNewTab("costId", "用能成本", "/develop/reports/chart-graph-to-jump/costing-detail-to-jump.html?[Type:" + type + "]");
		// });

		// //窗口关闭事件
		// $(".opacity-div-for-modelwin").click(function () {
		// mwin.close();
		// });
	});

	function initButtonQuery() {
		$('.cycle-button').click(function () {
			var queryType = $(this).parent().parent().parent().attr('id');

			$(this).parent('.right').children('.cycle-button').each(function () {
				$(this).removeClass("active");
			});

			$(this).addClass("active");

			switch (queryType) {
				case 'index':
					index.init();
					break;
				case 'rank':
					rank.init();
					break;
				case 'cost':
					cost.init();
					break;
				case 'predict':
					//predict.init(dao.queryPredictData());
					predict.init();
					break;
				case 'balance':
					balance.init();
					break;
			}
		});

		$('.type-button').click(function () {
			var queryType = $(this).parent().parent().parent().attr('id');

			$(this).parent('.right').children('.type-button').each(function () {
				$(this).removeClass("active");
			});

			$(this).addClass("active");

			switch (queryType) {
				case 'index':
					index.init();
					break;
				case 'rank':
					rank.init();
					break;
				case 'cost':
					cost.init();
					break;
				case 'predict':
					//predict.init(dao.queryPredictData());
					predict.init();
					break;
				case 'balance':
					balance.init();
					break;
			}
		});

		// $(".net-button").click(function () {
		// Util.openInNewTab("netId", "实时监控", "/develop/monitor/monitor-realtime/monitor-realtime.html");
		// });
	}

	function drawNet() {
		var myChart1 = echarts.init(document.getElementById('watch1'));
		var myChart2 = echarts.init(document.getElementById('watch2'));

		var option1 = {
			title: {
				text: '总能耗量',
				textStyle: {
					color: '#70a0ca'
				}
			},
			tooltip: {
				formatter: "{a} <br/>{b} : {c}%"
			},
			series: [
				{
					name: '业务指标',
					type: 'gauge',
					detail: { formatter: '{value}%', offsetCenter: [0, '70%'], textStyle: { fontSize:13}},
					data: [{ value: 50 }],
					axisLine: { lineStyle: { color: [[0.2, '#f90000'], [0.8, '#fe9900'], [1, '#137400']] } },
				}
			],
			color: [[0.2, '#f90000'], [0.8, '#fe9900'], [1, '#137400']]
		};

		var option2 = {
			title: {
				text: '总节约量',
				textStyle: {
					color: '#70a0ca'
				}
			},
			tooltip: {
				formatter: "{a} <br/>{b} : {c}%"
			},
			series: [
				{
					name: '业务指标',
					type: 'gauge',
					detail: { formatter: '{value}%', offsetCenter: [0, '70%'], textStyle: { fontSize: 13 } },
					data: [{ value: 50 }],
					axisLine: { lineStyle: { color: [[0.2, '#f90000'], [0.8, '#fe9900'], [1, '#137400']] } },
				}
			],
			color: [[0.2, '#f90000'], [0.8, '#fe9900'], [1, '#137400']]
		};

		setInterval(function () {
			option1.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
			myChart1.setOption(option1, true);
		}, 2000);

		setInterval(function () {
			option2.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
			myChart2.setOption(option2, true);
		}, 2000);
	}
})