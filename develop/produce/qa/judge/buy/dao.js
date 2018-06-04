


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

    //
    ret.getGridData1 = function () {

        return [
            {
                Id: 11, aaaa: '917042793258', bbbb: 'A170427TJKQ006', cccc: '铜精矿', dddd: '铜精矿', eeee: '福建金三角贸易有限公司', ffff: '', gggg: '赣B63109', hhhh: '2017/4/27', iiii: '2017/4/27', jjjj: '', kkkk: ''
            }, {
                Id: 12, aaaa: '917042946708', bbbb: 'C170427TJK001', cccc: '铜精矿', dddd: '铜精矿', eeee: '福建金三角贸易有限公司', ffff: '', gggg: '赣B63109', hhhh: '2017/4/27', iiii: '2017/4/27', jjjj: '', kkkk: ''
            }, {
                Id: 13, aaaa: '917042794390', bbbb: 'B170427ATMNH161-180', cccc: '秘鲁安特米娜铜精矿', dddd: '铜精矿', eeee: '铁路转运', ffff: '', gggg: '闽F81889', hhhh: '2017/4/27', iiii: '2017/4/27', jjjj: '', kkkk: ''
            }, {
                Id: 14, aaaa: '917042730686', bbbb: 'A170427TJKQ006', cccc: '秘鲁安特米娜铜精矿', dddd: '铜精矿', eeee: '福建金三角贸易有限公司', ffff: '', gggg: '闽F19226,闽D97176,闽D89769,闽F19226', hhhh: '2017/4/27', iiii: '2017/4/27', jjjj: '', kkkk: ''
            }, {
                Id: 15, aaaa: '917051810787', bbbb: 'A170427TJKQ006', cccc: '铜精矿', dddd: '铜精矿', eeee: '紫金矿业物流有限公司', ffff: '', gggg: '赣B63109', hhhh: '2017/4/27', iiii: '2017/4/27', jjjj: '', kkkk: ''
            }, {
                Id: 16, aaaa: '917042738062', bbbb: 'A170427TJKQ006', cccc: '铜精矿', dddd: '铜精矿', eeee: '紫金矿业物流有限公司', ffff: '', gggg: '闽F62082,闽F90216', hhhh: '2017/4/27', iiii: '2017/4/27', jjjj: '', kkkk: ''
            }, {
                Id: 17, aaaa: '917042854163', bbbb: 'A170427TJKQ006', cccc: '铜精矿', dddd: '铜精矿', eeee: '紫金矿业物流有限公司', ffff: '', gggg: '闽F92720,闽F68790,闽F96268', hhhh: '2017/4/27', iiii: '2017/4/27', jjjj: '', kkkk: ''
            }
         ]

    }
    ret.getGridData2 = function () {

        return [
            {
                Id: 11, aaaa: 'B170427ZJSⅠQ053-054', bbbb: 'Ag', cccc: '175.45', dddd: '', eeee: '', ffff: '', gggg: ''
            }, {
                Id: 11, aaaa: 'B170427ZJSⅠQ053-054', bbbb: 'Au', cccc: '5.83', dddd: '', eeee: '', ffff: '', gggg: ''
            }, {
                Id: 11, aaaa: 'B170427ZJSⅠQ053-054', bbbb: 'Cu', cccc: '26.5', dddd: '', eeee: '', ffff: '', gggg: ''
            }, {
                Id: 11, aaaa: 'B170427ZJSⅠQ053-054', bbbb: 'S', cccc: '39.92', dddd: '20', eeee: '', ffff: '符合', gggg: ''
            }, {
                Id: 11, aaaa: 'B170427ZJSⅠQ053-054', bbbb: 'As', cccc: '1.21', dddd: '', eeee: '0.5', ffff: '', gggg: ''
            }
        ]

    }

    ret.reGetGridData2 = function () {

        return [
              {
                  Id: 11, aaaa: 'B170427ZJSⅠQ053-054', bbbb: 'Ag', cccc: getRandom(150,200), dddd: '', eeee: '', ffff: '', gggg: ''
              }, {
                  Id: 11, aaaa: 'B170427ZJSⅠQ053-054', bbbb: 'Au', cccc: getRandom(30, 40), dddd: getRandom(10, 40), eeee: '', ffff: '符合', gggg: ''
              }, {
                  Id: 11, aaaa: 'B170427ZJSⅠQ053-054', bbbb: 'Cu', cccc: getRandom(1, 3), dddd: '', eeee: getRandom(0, 1), ffff: '', gggg: ''
              }, {
                  Id: 11, aaaa: 'B170427ZJSⅠQ053-054', bbbb: 'S', cccc: '', dddd: '', eeee: getRandom(1, 10), ffff: '', gggg: ''
              }, {
                  Id: 11, aaaa: 'B170427ZJSⅠQ053-054', bbbb: 'As', cccc: '', dddd: '', eeee: getRandom(1, 10), ffff: '', gggg: ''
              }
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



















