


define(function (require) {

    var ret = {};

    //
    ret.getGridData1 = function () {

        return [

         ]

    }

    ret.queryIndexData = function (callback) {
    	var indexData = {
    		xAxis: ['阴极铜综合电单耗(Kwh/t)', '阳极铜电单耗(Kwh/t)', '铜冶炼综合能耗(kgce/t)', '阴极铜电单耗(Kwh/t)', '硫酸电单耗(Kwh/t)'],
    		series: [{
    			name: "实际",
    			data: [3, 5, 3, 7, 5, 4, 6, 8, 4, 6, 2, 5, 8, 9, 4]
    		}, {
    			name: "指标",
    			data: [6, 8, 4, 8, 5, 4, 6, 3, 8, 6, 3, 6, 8, 5, 7]
    		}]
    	}

    	callback(indexData);
    }

    ret.getGridData2 = function () {

    	return [
            {
            	Id: 11, aaaa: '1', bbbb: '17AA189', cccc: '甲班', dddd: '亚硫酸氢钠	', eeee: '张月琳', ffff: '435', gggg: 'NaHSO3(以SO2计)', hhhh: '2', iiii: '', jjjj: '', kkkk: '2017/6/23', llll: '', mmmm: '', nnnn: 'TYH-J/2.27-03', oooo: 'C117', pppp: '捡毕', qqqq: '李文英', rrrr: '2017/6/22',
            	ecolor: 'red', fcolor: 'red', gcolor: 'yellow', hcolor: 'green', icolor: 'red', jcolor: 'blue', kcolor: 'red', lcolor: 'red', mcolor: 'red'
            }, {
            	Id: 11, aaaa: '2', bbbb: '17AA190', cccc: '丙班', dddd: '紫金山炭末', eeee: '黄耀乾/张丽娟', ffff: '436', gggg: 'Au', hhhh: '2', iiii: '', jjjj: '', kkkk: '2017/6/26', llll: '', mmmm: 'HYSA001', nnnn: 'TYH-J/2.27-01', oooo: 'C013', pppp: '捡毕', qqqq: '吕火秀', rrrr: '2017/6/22',
            	ecolor: 'red', fcolor: 'red', gcolor: 'yellow', hcolor: 'green', icolor: 'red', jcolor: 'blue', kcolor: 'red', lcolor: 'red', mcolor: 'red'
            }, {
            	Id: 11, aaaa: '3', bbbb: '17AA190', cccc: '丙班', dddd: '紫金山炭末', eeee: '黄耀乾/张丽娟', ffff: '437', gggg: 'Au', hhhh: '2', iiii: '', jjjj: '', kkkk: '2017/6/26', llll: '', mmmm: 'HYSA001', nnnn: 'TYH-J/2.27-01', oooo: 'C013', pppp: '捡毕', qqqq: '吕火秀', rrrr: '2017/6/22',
            	ecolor: 'red', fcolor: 'red', gcolor: 'yellow', hcolor: 'green', icolor: 'red', jcolor: 'blue', kcolor: 'red', lcolor: 'red', mcolor: 'red'
            }, {
            	Id: 11, aaaa: '4', bbbb: '17AA193', cccc: '丙班', dddd: '粗铜包壳', eeee: '邹流清/廖星武/陈兴发', ffff: '441', gggg: 'Au', hhhh: '3', iiii: '', jjjj: '', kkkk: '2017/6/29', llll: '', mmmm: 'HYSA001', nnnn: 'TYH-J/2.27-01', oooo: 'C013', pppp: '捡毕', qqqq: '吕火秀', rrrr: '2017/6/26',
            	ecolor: 'red', fcolor: 'red', gcolor: 'yellow', hcolor: 'green', icolor: 'red', jcolor: 'blue', kcolor: 'red', lcolor: 'red', mcolor: 'red'
            }
    	]

    }


    ret.getGridData1 = function () {

        return [
            { Id: 11, aaaa: '1', bbbb: '6KV/10KV工作段保护', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 12, aaaa: '2', bbbb: '2号机组脱硫段2A保护及二次网络进度', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 13, aaaa: '3', bbbb: '2号机组脱硫段2A保护及二次网络进度', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 14, aaaa: '4', bbbb: '2号机组厂内输煤B段保护', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 15, aaaa: '5', bbbb: '2号机组6KV A段备用电源进度', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 16, aaaa: '6', bbbb: '2号机组6KV B段备用电源进度', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 17, aaaa: '7', bbbb: '2号机组发电机短路试验电源', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 18, aaaa: '8', bbbb: '2号机组汽机变2A保护及二次网络进度', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 19, aaaa: '9', bbbb: '2号机组升压站变B保护', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 20, aaaa: '10', bbbb: '2号机组磨煤机2D保护及二次网络进度', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 21, aaaa: '11', bbbb: '2号机组一次风机2A保护及二次网络进度', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 22, aaaa: '12', bbbb: '2号机组1号辅机循环水泵保护', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' },
            { Id: 22, aaaa: '13', bbbb: '2号机组炉水循环泵2C保护及二次网络进度', cccc: '2017/6/15', dddd: '2017/7/3', eeee: '100%' }
        ]

    }

    ret.loadSelect = function (id, data) {

        for (var i = 0; i < data.length; i++) {
            var op = document.createElement('option');
            op.innerHTML = data[i];
            id.appendChild(op);
        }
    }

    ret.selectData1 = function () {
        return ['领料']
    }

    ret.selectData2 = function () {
        return ['法兰盖ghd67']
    }

    ret.selectData3 = function () {
        return ['电焊车间']
    }

    ret.selectData4 = function () {
        return ['刘呵呵']
    }

    ret.selectData5 = function () {
        return ['生产部']
    }

    return ret;

})



















