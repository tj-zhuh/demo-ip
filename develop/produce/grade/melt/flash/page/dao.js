


define(function (require) {

    var ret = {};

    //
    ret.getGridData1 = function () {

        return [
            {
                Id: 1, aaaa: '1', bbbb: 'KC160923001', cccc: '渣精矿', dddd: '8', eeee: '94.32', ffff: '10.14', gggg: '36.1', hhhh: '100000'
            }, {
                Id: 2, aaaa: '2', bbbb: 'KC170509001', cccc: '智利-西拉格达-进口矿', dddd: '10', eeee: '56.41', ffff: '12.56', gggg: '44.3', hhhh: '3158.5'
            }, {
                Id: 3, aaaa: '3', bbbb: 'KC170313001', cccc: '铜三厂-N-金山矿', dddd: '10', eeee: '74.39', ffff: '12.52', gggg: '46.6', hhhh: '20169.24'
            }, {
                Id: 4, aaaa: '4', bbbb: 'KC000000000', cccc: '空置-空置-空置', dddd: '0', eeee: '0.26', ffff: '0', gggg: '0', hhhh: '/'
            }, {
                Id: 5, aaaa: '5', bbbb: 'KC170516002', cccc: 'N-OT矿-进口矿', dddd: '3', eeee: '-24.98', ffff: '0.79', gggg: '13.9', hhhh: '5113.66'
            }
         ]

    }

    ret.getGridData2 = function () {

        return [
            {
                Id: 11, aaaa: 'H2O', bbbb: '7.9', cccc: '%'
            }, {
                Id: 12, aaaa: 'Pb', bbbb: '0.15', cccc: '%'
            }, {
                Id: 13, aaaa: 'SiO2', bbbb: '4.02', cccc: '%'
            }, {
                Id: 14, aaaa: 'Fe', bbbb: '25.81', cccc: '%'
            }, {
                Id: 15, aaaa: 'Sb', bbbb: '<0.01', cccc: '%'
            }, {
                Id: 16, aaaa: 'Bi', bbbb: '0.054', cccc: '%'
            }, {
                Id: 17, aaaa: 'CaO', bbbb: '0.095', cccc: '%'
            }
        ]

    }

    ret.getGridData3 = function () {

        return [
             {
                 Id: 11, aaaa: 'KC160923001', bbbb: 'N-N-N', cccc: '36.1'
             }, {
                 Id: 12, aaaa: 'KC170407002', bbbb: 'N-N-石英砂', cccc: '57.8'
             }, {
                 Id: 13, aaaa: 'KC170516002', bbbb: 'N-OT矿-进口矿', cccc: '13.9'
             }, {
                 Id: 14, aaaa: 'KC000000000', bbbb: '空置-空置-空置', cccc: '4.5'
             }, {
                 Id: 15, aaaa: 'KC170516003', bbbb: '老挝-富开姆-进口矿', cccc: '43.8'
             }
        ]

    }


    ret.reGetGridData2 = function () {

        return [
            { Id: 11, aaaa: 'zzbc', bbbb: '企业一部', cccc: '所有数据', dddd: '机密', eeee: '增删改查' },
            { Id: 12, aaaa: 'zhuh', bbbb: '企业一部', cccc: '所有数据', dddd: '机密', eeee: '增删改查' },
            { Id: 13, aaaa: 'zrd', bbbb: '企业一部', cccc: '所有数据', dddd: '机密', eeee: '增删改查' },
            { Id: 14, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 15, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 16, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 17, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 18, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 19, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 20, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 21, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 22, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' }
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



















