


define(function (require) {
    var ret = {};

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

    String.prototype.repeat = function (n) {
        var _this = this;
        var result = '';
        for (var i = 0; i < n; i++) {
            result += _this;
        }
        return result;
    }

    ret.getGrid1Data = function () {
    	var arr = [];
    	var unit = {};
    	var prop = ['Id'];
    	var data = [
 
            ['熔炼', '失重称螺旋', '24小时'],
            ['熔炼', '转炉环集风机', '0'],
            ['电解', '剥片机组', '30小时'],
            ['电解', '阳极机组', '0'],
            ['稀贵', '高压釜', '1天'],
            ['稀贵', '文丘里风机', '超负荷工作'],
            ['选矿', '半自磨机', '24小时'],
            ['选矿', '球磨机', '0'],
		];

    	for (var i = 0; i < data[0].length; i++) {
    		prop.push(String.fromCharCode(0x60 + i + 1).repeat(4));
       	}
       	for (var i = 0; i < data.length; i++) {
       		unit[prop[0]] = i+1;
       		for (var j = 1; j < prop.length; j++) {
       			unit[prop[j]] = data[i][j-1];
       		}
       		arr.push(JSON.parse(JSON.stringify(unit)));
       	}
        return arr;
    }

    ret.getGrid2Data = function () {
        var arr = [];
        var unit = {};
        var prop = ['Id'];
        var data = [
            ['1', 'XXX车间张三误操作，引发安全事'],
            ['2', 'XXX设备出现问题，停工2小时'],
            ['3', 'XXX反灌出现溢出现象'],
            ['4', 'XXX车间张三误操作，引发安全事'],
            ['5', 'XXX设备出现问题，停工2小时'],
            ['6', 'XXX反灌出现溢出现象'],
            ['7', 'XXX车间张三误操作，引发安全事'],
            ['8', 'XXX设备出现问题，停工2小时'],
        ];

        for (var i = 0; i < data[0].length; i++) {
            prop.push(String.fromCharCode(0x60 + i + 1).repeat(4));
        }
        for (var i = 0; i < data.length; i++) {
            unit[prop[0]] = i + 1;
            for (var j = 1; j < prop.length; j++) {
                unit[prop[j]] = data[i][j - 1];
            }
            arr.push(JSON.parse(JSON.stringify(unit)));
        }
        return arr;
    }

    return ret;

})



















