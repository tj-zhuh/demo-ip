


define(function (require) {

    var ret = {};

    //
    ret.getGridData = function () {

        return [
        	// { Id:  0, aaaa:'月产', bbbb:'平均日产', cccc:'生产天数'},
            { Id:  1, aaaa: '2017', bbbb: '6', cccc: '一、主产品产量', dddd: '', eeee: '', ffff:'', gggg:'30', hhhh:'' },
            { Id:  2, aaaa: '2017', bbbb: '6', cccc: '1、矿产粗铜(金属量）', dddd: '吨', eeee: '20500', ffff:'683.33', gggg:'30', hhhh:'' },
            { Id:  3, aaaa: '2017', bbbb: '6', cccc: '2、合格阳极铜（金属量）', dddd: '吨', eeee: '30000', ffff:'1000', gggg:'30', hhhh:'' },
            { Id:  4, aaaa: '2017', bbbb: '6', cccc: '3、阴极铜', dddd: '吨', eeee: '24000', ffff:'800', gggg:'30', hhhh:'' },
            { Id:  5, aaaa: '2017', bbbb: '6', cccc: '4、电积铜', dddd: '吨', eeee: '60', ffff:'2', gggg:'30', hhhh:'' },
            { Id:  6, aaaa: '2017', bbbb: '6', cccc: '5、硫酸(100%)', dddd: '吨', eeee: '80830', ffff:'2694.33', gggg:'30', hhhh:'' },
            { Id:  7, aaaa: '2017', bbbb: '6', cccc: ' 其中：制酸厂', dddd: '吨', eeee: '78630', ffff:'2621', gggg:'30', hhhh:'' },
            { Id:  8, aaaa: '2017', bbbb: '6', cccc: '      黄金冶炼厂', dddd: '吨', eeee: '2200', ffff:'73.33', gggg:'30', hhhh:'' },
            { Id:  9, aaaa: '2017', bbbb: '6', cccc: '6、成品黄金', dddd: '公斤', eeee: '1046', ffff:'34.87', gggg:'30', hhhh:'' },
            { Id: 10, aaaa: '2017', bbbb: '6', cccc: '其中：稀贵厂', dddd: '公斤', eeee: '900', ffff:'30', gggg:'30', hhhh:'' },
            { Id: 11, aaaa: '2017', bbbb: '6', cccc: '     黄金冶炼厂', dddd: '公斤', eeee: '146', ffff:'4.87', gggg:'30', hhhh:'' },
            { Id: 12, aaaa: '2017', bbbb: '6', cccc: '7、成品白银', dddd: '吨', eeee: '21.9', ffff:'0.73', gggg:'30', hhhh:'' },
            { Id: 13, aaaa: '2017', bbbb: '6', cccc: '  其中：稀贵厂', dddd: '吨', eeee: '20', ffff:'0.67', gggg:'30', hhhh:'' },
            { Id: 14, aaaa: '2017', bbbb: '6', cccc: '       黄金冶炼厂', dddd: '吨', eeee: '1.9', ffff:'0.06', gggg:'30', hhhh:'' },
            { Id: 15, aaaa: '2017', bbbb: '6', cccc: '二、辅助类产品', dddd: '', eeee: '', ffff:'', gggg:'30', hhhh:'' },
            { Id: 16, aaaa: '2017', bbbb: '6', cccc: ' 1、余热发电量', dddd: '万千瓦时', eeee: '100', ffff:'3.33', gggg:'30', hhhh:'' },
            { Id: 17, aaaa: '2017', bbbb: '6', cccc: ' 2、液氧', dddd: '吨', eeee: '630', ffff:'21', gggg:'30', hhhh:'' },
            { Id: 18, aaaa: '2017', bbbb: '6', cccc: ' 3、液氮', dddd: '吨', eeee: '1320', ffff:'44', gggg:'30', hhhh:'' },
            { Id: 19, aaaa: '2017', bbbb: '6', cccc: ' 4、液氩', dddd: '吨', eeee: '600', ffff:'20', gggg:'30', hhhh:'' },
            { Id: 20, aaaa: '2017', bbbb: '6', cccc: '三、主要作业量', dddd: '', eeee: '', ffff:'', gggg:'30', hhhh:'' },
            { Id: 21, aaaa: '2017', bbbb: '6', cccc: '1、闪速炉处理量', dddd: '吨', eeee: '91000', ffff:'3033.33', gggg:'30', hhhh:'' },
            { Id: 22, aaaa: '2017', bbbb: '6', cccc: '   其中：铜精矿', dddd: '吨', eeee: '83000', ffff:'2766.67', gggg:'30', hhhh:'' },
            { Id: 23, aaaa: '2017', bbbb: '6', cccc: '        渣精矿', dddd: '吨', eeee: '8000', ffff:'266.67', gggg:'30', hhhh:'' },
            { Id: 24, aaaa: '2017', bbbb: '6', cccc: '2、熔炼以外冷铜处理（金属量）', dddd: '吨', eeee: '9364', ffff:'312.13', gggg:'30', hhhh:'' },
            { Id: 25, aaaa: '2017', bbbb: '6', cccc: '    其中：电解残极', dddd: '吨', eeee: '4364', ffff:'145.47', gggg:'30', hhhh:'' },
            { Id: 26, aaaa: '2017', bbbb: '6', cccc: '          黒铜板(泥）', dddd: '吨', eeee: '200', ffff:'6.67', gggg:'30', hhhh:'' },
            { Id: 27, aaaa: '2017', bbbb: '6', cccc: '          外购粗铜', dddd: '吨', eeee: '4800', ffff:'160', gggg:'30', hhhh:'' },
            { Id: 28, aaaa: '2017', bbbb: '6', cccc: '3、黄金冶炼厂金精矿处理量', dddd: '吨', eeee: '4000', ffff:'133.33', gggg:'30', hhhh:'' },
            { Id: 29, aaaa: '2017', bbbb: '6', cccc: '4、阳极泥处理量', dddd: '吨', eeee: '240', ffff:'8', gggg:'30', hhhh:'' },
            { Id: 30, aaaa: '2017', bbbb: '6', cccc: '5、选矿炉渣处理量', dddd: '万吨', eeee: '5.3', ffff:'0.18', gggg:'30', hhhh:'' },
            { Id: 31, aaaa: '2017', bbbb: '6', cccc: '四、铜原料进厂计划', dddd: '', eeee: '', ffff:'', gggg:'30', hhhh:'' },
            { Id: 32, aaaa: '2017', bbbb: '6', cccc: '(一)进厂铜精矿金属量', dddd: '吨', eeee: '6300', ffff:'210', gggg:'30', hhhh:'' },
            { Id: 33, aaaa: '2017', bbbb: '6', cccc: '1、紫金山', dddd: '吨', eeee: '4200', ffff:'140', gggg:'30', hhhh:'' },
            { Id: 34, aaaa: '2017', bbbb: '6', cccc: '2、国内矿', dddd: '吨', eeee: '1000', ffff:'33.33', gggg:'30', hhhh:'' },
            { Id: 35, aaaa: '2017', bbbb: '6', cccc: '3、进口矿', dddd: '吨', eeee: '1100', ffff:'36.67', gggg:'30', hhhh:'' },
            { Id: 36, aaaa: '2017', bbbb: '6', cccc: '（二）进厂粗铜含铜量', dddd: '吨', eeee: '2900', ffff:'96.67', gggg:'30', hhhh:'' },
            { Id: 37, aaaa: '2017', bbbb: '6', cccc: '1、国内粗铜', dddd: '吨', eeee: '1000', ffff:'33.33', gggg:'30', hhhh:'' },
            { Id: 38, aaaa: '2017', bbbb: '6', cccc: '2、进口粗铜', dddd: '吨', eeee: '1900', ffff:'63.33', gggg:'30', hhhh:'' },
            { Id: 39, aaaa: '2017', bbbb: '6', cccc: '五、主要技术经济指标', dddd: '', eeee: '', ffff:'', gggg:'30', hhhh:'' },
            { Id: 40, aaaa: '2017', bbbb: '6', cccc: '1、闪速炉作业率', dddd: '%', eeee: '98.5', ffff:'3.28', gggg:'30', hhhh:'' },
            { Id: 41, aaaa: '2017', bbbb: '6', cccc: '2、渣选矿尾砂含铜', dddd: '%', eeee: '0.25', ffff:'0.01', gggg:'30', hhhh:'' },
            { Id: 42, aaaa: '2017', bbbb: '6', cccc: '3、熔炼渣含铜', dddd: '%', eeee: '2.6', ffff:'0.09', gggg:'30', hhhh:'' },
            { Id: 43, aaaa: '2017', bbbb: '6', cccc: '4、电解残极率', dddd: '%', eeee: '15', ffff:'0.5', gggg:'30', hhhh:'' },
      	]

    }


    ret.reGetGridData = function () {

        return [
        	// { Id: 0, aaaa: '月产', bbbb: '平均日产', cccc: '生产天数' },
            { Id: 1, aaaa: '2017', bbbb: '6', cccc: '一、主产品产量', dddd: '', eeee: '', ffff: '', gggg: '30', hhhh: '' },
            { Id: 2, aaaa: '2017', bbbb: '6', cccc: '1、矿产粗铜(金属量）', dddd: '吨', eeee: '20500', ffff: '683.33', gggg: '30', hhhh: '' },
            { Id: 3, aaaa: '2017', bbbb: '6', cccc: '2、合格阳极铜（金属量）', dddd: '吨', eeee: '30000', ffff: '1000', gggg: '30', hhhh: '' },
            { Id: 4, aaaa: '2017', bbbb: '6', cccc: '3、阴极铜', dddd: '吨', eeee: '24000', ffff: '800', gggg: '30', hhhh: '' },
            { Id: 5, aaaa: '2017', bbbb: '6', cccc: '4、电积铜', dddd: '吨', eeee: '60', ffff: '2', gggg: '30', hhhh: '' },
            { Id: 6, aaaa: '2017', bbbb: '6', cccc: '5、硫酸(100%)', dddd: '吨', eeee: '80830', ffff: '2694.33', gggg: '30', hhhh: '' },
            { Id: 7, aaaa: '2017', bbbb: '6', cccc: ' 其中：制酸厂', dddd: '吨', eeee: '78630', ffff: '2621', gggg: '30', hhhh: '' },
            { Id: 8, aaaa: '2017', bbbb: '6', cccc: '      黄金冶炼厂', dddd: '吨', eeee: '2200', ffff: '73.33', gggg: '30', hhhh: '' },
            { Id: 9, aaaa: '2017', bbbb: '6', cccc: '6、成品黄金', dddd: '公斤', eeee: '1046', ffff: '34.87', gggg: '30', hhhh: '' },
            { Id: 10, aaaa: '2017', bbbb: '6', cccc: '其中：稀贵厂', dddd: '公斤', eeee: '900', ffff: '30', gggg: '30', hhhh: '' },
            { Id: 11, aaaa: '2017', bbbb: '6', cccc: '     黄金冶炼厂', dddd: '公斤', eeee: '146', ffff: '4.87', gggg: '30', hhhh: '' },
            { Id: 12, aaaa: '2017', bbbb: '6', cccc: '7、成品白银', dddd: '吨', eeee: '21.9', ffff: '0.73', gggg: '30', hhhh: '' },
            { Id: 13, aaaa: '2017', bbbb: '6', cccc: '  其中：稀贵厂', dddd: '吨', eeee: '20', ffff: '0.67', gggg: '30', hhhh: '' },
            { Id: 14, aaaa: '2017', bbbb: '6', cccc: '       黄金冶炼厂', dddd: '吨', eeee: '1.9', ffff: '0.06', gggg: '30', hhhh: '' },
            { Id: 15, aaaa: '2017', bbbb: '6', cccc: '二、辅助类产品', dddd: '', eeee: '', ffff: '', gggg: '30', hhhh: '' },
            { Id: 16, aaaa: '2017', bbbb: '6', cccc: ' 1、余热发电量', dddd: '万千瓦时', eeee: '100', ffff: '3.33', gggg: '30', hhhh: '' },
            { Id: 17, aaaa: '2017', bbbb: '6', cccc: ' 2、液氧', dddd: '吨', eeee: '630', ffff: '21', gggg: '30', hhhh: '' },
            { Id: 18, aaaa: '2017', bbbb: '6', cccc: ' 3、液氮', dddd: '吨', eeee: '1320', ffff: '44', gggg: '30', hhhh: '' },
            { Id: 19, aaaa: '2017', bbbb: '6', cccc: ' 4、液氩', dddd: '吨', eeee: '600', ffff: '20', gggg: '30', hhhh: '' },
            { Id: 20, aaaa: '2017', bbbb: '6', cccc: '三、主要作业量', dddd: '', eeee: '', ffff: '', gggg: '30', hhhh: '' },
            { Id: 21, aaaa: '2017', bbbb: '6', cccc: '1、闪速炉处理量', dddd: '吨', eeee: '91000', ffff: '3033.33', gggg: '30', hhhh: '' },
            { Id: 22, aaaa: '2017', bbbb: '6', cccc: '   其中：铜精矿', dddd: '吨', eeee: '83000', ffff: '2766.67', gggg: '30', hhhh: '' },
            { Id: 23, aaaa: '2017', bbbb: '6', cccc: '        渣精矿', dddd: '吨', eeee: '8000', ffff: '266.67', gggg: '30', hhhh: '' },
            { Id: 24, aaaa: '2017', bbbb: '6', cccc: '2、熔炼以外冷铜处理（金属量）', dddd: '吨', eeee: '9364', ffff: '312.13', gggg: '30', hhhh: '' },
            { Id: 25, aaaa: '2017', bbbb: '6', cccc: '    其中：电解残极', dddd: '吨', eeee: '4364', ffff: '145.47', gggg: '30', hhhh: '' },
            { Id: 26, aaaa: '2017', bbbb: '6', cccc: '          黒铜板(泥）', dddd: '吨', eeee: '200', ffff: '6.67', gggg: '30', hhhh: '' },
            { Id: 27, aaaa: '2017', bbbb: '6', cccc: '          外购粗铜', dddd: '吨', eeee: '4800', ffff: '160', gggg: '30', hhhh: '' },
            { Id: 28, aaaa: '2017', bbbb: '6', cccc: '3、黄金冶炼厂金精矿处理量', dddd: '吨', eeee: '4000', ffff: '133.33', gggg: '30', hhhh: '' },
            { Id: 29, aaaa: '2017', bbbb: '6', cccc: '4、阳极泥处理量', dddd: '吨', eeee: '240', ffff: '8', gggg: '30', hhhh: '' },
            { Id: 30, aaaa: '2017', bbbb: '6', cccc: '5、选矿炉渣处理量', dddd: '万吨', eeee: '5.3', ffff: '0.18', gggg: '30', hhhh: '' },
            { Id: 31, aaaa: '2017', bbbb: '6', cccc: '四、铜原料进厂计划', dddd: '', eeee: '', ffff: '', gggg: '30', hhhh: '' },
            { Id: 32, aaaa: '2017', bbbb: '6', cccc: '(一)进厂铜精矿金属量', dddd: '吨', eeee: '6300', ffff: '210', gggg: '30', hhhh: '' },
            { Id: 33, aaaa: '2017', bbbb: '6', cccc: '1、紫金山', dddd: '吨', eeee: '4200', ffff: '140', gggg: '30', hhhh: '' },
            { Id: 34, aaaa: '2017', bbbb: '6', cccc: '2、国内矿', dddd: '吨', eeee: '1000', ffff: '33.33', gggg: '30', hhhh: '' },
            { Id: 35, aaaa: '2017', bbbb: '6', cccc: '3、进口矿', dddd: '吨', eeee: '1100', ffff: '36.67', gggg: '30', hhhh: '' },
            { Id: 36, aaaa: '2017', bbbb: '6', cccc: '（二）进厂粗铜含铜量', dddd: '吨', eeee: '2900', ffff: '96.67', gggg: '30', hhhh: '' },
            { Id: 37, aaaa: '2017', bbbb: '6', cccc: '1、国内粗铜', dddd: '吨', eeee: '1000', ffff: '33.33', gggg: '30', hhhh: '' },
            { Id: 38, aaaa: '2017', bbbb: '6', cccc: '2、进口粗铜', dddd: '吨', eeee: '1900', ffff: '63.33', gggg: '30', hhhh: '' },
            { Id: 39, aaaa: '2017', bbbb: '6', cccc: '五、主要技术经济指标', dddd: '', eeee: '', ffff: '', gggg: '30', hhhh: '' },
            { Id: 40, aaaa: '2017', bbbb: '6', cccc: '1、闪速炉作业率', dddd: '%', eeee: '98.5', ffff: '3.28', gggg: '30', hhhh: '' },
            { Id: 41, aaaa: '2017', bbbb: '6', cccc: '2、渣选矿尾砂含铜', dddd: '%', eeee: '0.25', ffff: '0.01', gggg: '30', hhhh: '' },
            { Id: 42, aaaa: '2017', bbbb: '6', cccc: '3、熔炼渣含铜', dddd: '%', eeee: '2.6', ffff: '0.09', gggg: '30', hhhh: '' },
            { Id: 43, aaaa: '2017', bbbb: '6', cccc: '4、电解残极率', dddd: '%', eeee: '15', ffff: '0.5', gggg: '30', hhhh: '' },
        ]

    }




    return ret;

})



















