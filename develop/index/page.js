
require.config({
    paths: config.getPaths(1)
})

define(function (require) {

    var dao = require('dao');
    var tj = require('tj');
    var mfr = require('mfr');
    var tfs = require('tf/tfs');
    require('tools');

    mfr.change(function () {

        var path = 'develop/';
        var arr = mfr.activeMenus;
        for (var i = 0; i < arr.length; i++) {
            path += arr[i].folder;
            path += '/';
        }

        var tabArr = [];

        if (mfr.origin.tabs) {
            var tmpArr = mfr.origin.tabs.split(',');
            for (var i = 0 ; i < tmpArr.length; i++) {
                if (tmpArr[i]) {
                    var t = tmpArr[i];
                    var suspend = !!t.match(/404/);
                    t = t.replace(/\$\$\$$/, '');
                    var _p = t.split('#')[0];
                    var _name = t.split('#')[1];
                    var _url = path + _p + '/page.html';
                    tabArr.push({
                        url: _url,
                        name: _name,
                        active: i == 0,
                        suspend: suspend
                    });
                }
            }
        } else {
            tabArr.push({
                url: path + 'page.html',
                name: mfr.menuName,
                active: true
            })
        }

        if (mfr.activeMenus.length < 4) {
            tj.addClass(ui, 'hide-left');
            tj.addClass(tabs, 'hide-left');
        } else {
            tj.removeClass(ui, 'hide-left');
            tj.removeClass(tabs, 'hide-left');
        }

        tfs.load(tabArr);
    });

    tj.addLoadEvent(function () {

        dao.getMenu(function (data) {

            for (var i = 0; i < data.length; i++) {
                if (data[i].parentId == 'root') {
                    data[i].iconUrl = './develop/index/icons/' + data[i].folder + '.png';
                    data[i].iconActiveUrl = './develop/index/icons/' + data[i].folder + '-active.png';;
                }
            }

            var dom = document.getElementById('mfr');
            mfr.init(dom);
            mfr.load(data);

            var devHack = (function () {
                function getUrlParam(name) {
                    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                    var r = window.location.search.substr(1).match(reg);
                    if (r != null) return decodeURI(r[2]); return null;
                }
                var p = getUrlParam('p');
                if (p) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].menuName.indexOf(p) >= 0) {
                            mfr.jump(data[i].menuId);
                            break;
                        }
                    }
                }
            })();

        });
    }) 

    window.g = {
        jump: function (url, name) {
            tfs.jump(url, name);
        },
        update: function () {
            tfs.update();
        }
    }
})
