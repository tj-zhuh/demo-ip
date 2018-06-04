


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

    ret.getGridBubbleData = function () {
        var arr = [];
        var unit = {};
        var prop = ['Id'];
        var data = [
            ['蒸汽温度', '℃', '537.03', '540', '550', '520'],
            ['蒸汽压力', 'MPa', '9.43', '9.8', '10', '8.8'],
            ['给水温度', '℃', '213.53', '215', '225', '190'],
            ['给水压力', 'MPa', '9.43', '9.8', '10', '8.8'],
            ['蒸汽总流量', 't', '141530.50', '210', '220', '200'],
            ['焦炉煤气总流量', '立方米', '281893.25', '', '', ''],
            ['高炉煤气总流量', '万立方米', '5554.48', '14', '18', '12'],
            ['转炉煤气总流量', '万立方米', '3096.59', '1.5', '2', '1.2'],
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



















