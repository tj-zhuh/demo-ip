


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
            ['1', '锅炉效率（%）', '90.62', '92.66', '-2.05', '7.94'],
            ['2', '汽机热耗（kj/kWh）', '8399.71', '8204.12', '195.03', '8.17'],
            ['3', '厂用电率（%）', '6.90', '6.90', '0.00', '0.00'],
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

    ret.getGrid21Data = function () {
        var arr = [];
        var unit = {};
        var prop = ['Id'];
        var data = [
            ['自产矿', '147747'],
            ['国产矿', '84501'],
            ['外购粗铜', '13902'],
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

    ret.getGrid22Data = function () {
        var arr = [];
        var unit = {};
        var prop = ['Id'];
        var data = [
            ['季节性', '0%'],
            ['趋势性', '30.14%'],
            ['影响事件', '17.02%'],
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



















