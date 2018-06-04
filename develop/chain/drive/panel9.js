
$(function () {

    var myChart = echarts.init(document.getElementById('chart9'));

    var xAxis = [];
    var data1 = [];
    var data2 = [];

    var months = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    for (var i = 0; i < 10; i++) {
        data1.push((2 + 0.7 * i).toFixed(1));
        xAxis.push(months[i + 1] + '/11');
    }

    for (var i = 0; i < 11; i++) {
        data1.push((2 + 0.7 * i).toFixed(1));
        xAxis.push(months[i] + '/11');
    }

    for (var i = 0; i < 10; i++) {
        data1.push((2 + 0.7 * i).toFixed(1));
        xAxis.push(months[i] + '/11');
    }

    data2.push(19, 18.8, 18.7, 18.5, 18.5, 18.4, 18.4, 18.2, 18.15, 18.15);
    data2.push(18, 17, 16, 14, 13.8, 13.9, 13.9, 13.7, 13.7, 13.7, 13.5);
    data2.push(14.1, 11.5, 12.6, 13.4, 14.3, 14.1, 12.5, 12.6, 11.5, 9.8);

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            textStyle: {
                fontSize: getPx(12)
            }
        },
        legend: {
            data: ['物流总费用累计(万亿元人民币)', '累计同比'],
            textStyle: {
                color: '#fff',
                fontSize: getPx(12)
            },
            bottom: getPx(10),
            itemWidth: getPx(25),
            itemHeight: getPx(14),
            itemGap: getPx(15)
        },
        grid: {
            left: '3%',
            right: '10%',
            bottom: '20%',
            top: '10%',
            containLabel: true
        },
        color: ["#004eff", "#fd7900"],
        xAxis: {
            type: 'category',
            data: xAxis,
            splitLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: getPx(12)
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#004eff',
                    width: getPx(1)
                }
            }
        },
        yAxis: [{
            type: 'value',
            splitLine: { show: false },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#004eff',
                    width: getPx(1)
                }
            },
            axisTick: { show: false },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: getPx(12)
                }
            }
        }, {
            type: 'value',
            splitLine: { show: false },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#004eff',
                    width: getPx(1)
                }
            },
            axisTick: { show: false },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: getPx(12)
                }
            }
        }],
        series: [
            {
                name: '物流总费用累计(万亿元人民币)',
                type: 'bar',
                data: data1

            },
            {
                name: '累计同比',
                type: 'line',
                data: data2,
                yAxisIndex: 1,
                symbol: 'circle'
            }
        ]
    };

    myChart.setOption(option);
})