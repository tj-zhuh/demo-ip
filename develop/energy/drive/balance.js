/*能源平衡模块*/

define(function (require) {
    var $ = require('jquery');
    var dao = require('dao');

    var ret = {
        detailHandler: null		//详细按钮点击事件
    };

    function getBalanceCondition() {
        return {
            Cycle: $('.right-panel-bottom .cycle-button').filter('.active').attr('condition')
        }
    };

    function drawList(data) {
        $('.right-panel-bottom ul li').remove();

        for (var i = 0; i < data.length; i++) {
            if (i > 2) break;

            var item = data[i];
            var EnergyDiffer = (item.EnergyOut - item.EnergyIn).toFixed(2);

            var li = $('<li><div class="label">' + item.EnergyMediumName + '</div><img id="bg" src="../../../images/balance_bar.png" /><div class="left">供给 ' + item.EnergyIn + '</div><div class="right">' + item.EnergyOut + ' 消耗</div></li>');

            if (EnergyDiffer < 0) {
                var cursor = $('<img id="cursor_left" title="差异量：' + EnergyDiffer + '" src="../../../images/left_cursor.png" />');
            }
            else if (EnergyDiffer == 0) {
                var cursor = $('<img id="cursor_balance" title="差异量：' + EnergyDiffer + '" src="../../../images/balance_cursor.png" />');
            }
            else {
                var cursor = $('<img id="cursor_right" title="差异量：' + Math.abs(EnergyDiffer) + '" src="../../../images/right_cursor.png" />');
            }

            li.append(cursor);

            $('.right-panel-bottom ul').append(li);
        }
    };

    function addEventHandler() {
        $('.right-panel-bottom a').click(function () {
            if (typeof ret.detailHandler == 'function') {
                ret.detailHandler();
            }
        })
    };

    ret.init = function () {
        addEventHandler()
        dao.queryBalance(getBalanceCondition(), drawList);
        //drawRankList(data);
    };

    ret.condition = function () {
        return getBalanceCondition();
    };

    ret.detailClick = function (func) {
        this.detailHandler = func;
    };

    return ret;
})