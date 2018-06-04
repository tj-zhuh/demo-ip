


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
            ['客户A', '535'],
            ['客户B', '432'],
            ['客户C', '228'],
            ['客户D', '245'],
            ['客户E', '250'],
            ['客户F', '453'],
            ['客户G', '508'],
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
            ['阳极铜', '535'],
            ['阴极铜', '432'],
            ['硫酸', '228'],
            ['矿产粗铜', '245'],
            ['黄金', '250'],
            ['白银', '453'],
            ['其他', '58'],
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

    ret.getGrid3Data = function () {
        var arr = [];
        var unit = {};
        var prop = ['Id'];
        var data = [
            ['新产品', '56040'],
            ['传统产品', '83291'],
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



















