


define(function (require) {

    var ret = {};

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
            ['当前', '目标', '当前', '目标', '当前', '目标', '当前', '目标', '当前', '目标', '当前', '目标', '当前', '目标', ],
            ['120.99','0','30.24','0','1500','1500','1000','1000','800','800','500','0']
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
            ['当前', '目标', '当前', '目标', '当前', '目标', '当前', '目标', '当前', '目标', '当前', '目标', '当前', '目标', ],
            ['120.99','0','30.24','0','1500','1500','1000','1000','800','800','500','0']
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

    return ret;

})



















