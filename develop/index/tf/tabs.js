
// 负责tab条的绘制
define(function (require) {

    var tj = require('tj');

    var __tabs__ = {
        onclick: null,     // change事件，当用户点击一个非激活的tab时触发；包含一个参数为name
        onclose: null      // close事件，当用户关闭一个tab时触发；包含一个参数为name
    };

    var doms = [];   // 全部li元素 

    function gbname(name) {
        for (var i = 0; i < doms.length; i++) {
            if (doms[i].getAttribute('data-name') == name) return doms[i];
        }
    }

    // 获得容器
    var __ctn;
    function getctn() {
        if (!__ctn) __ctn = document.getElementById('tabs');
        return __ctn;
    }

    // 在末尾位置添加一个标签
    __tabs__.append = function (name, closable, suspend) {

        var ctn = getctn();  
        var li = document.createElement('li');
        var text = document.createTextNode(name);
        li.setAttribute('data-name', name);
        li.appendChild(text);
        ctn.appendChild(li);
        doms.push(li);

        if (suspend) {
            tj.addClass(li, 'suspend');
        }

        var closed = false

        li.addEventListener('click', function () {

            if (closed) return;

            if (tj.hasClass(li, 'suspend')) return;

            if (typeof __tabs__.onclick === 'function') {
                __tabs__.onclick(name);
            }
        }, false)

        if (closable) {

            var cite = document.createElement('cite');
            li.appendChild(cite);

            cite.addEventListener('click', function () {

                closed = true;

                if (typeof __tabs__.onclose === 'function') {
                    __tabs__.onclose(name);
                }

            }, false)
        }
    }

    // 将指定name的标签设为激活的（同时取消其它标签的激活状态）
    __tabs__.setActive = function (name) {

        var dom = gbname(name);

        for (var i = 0 ; i < doms.length; i++)
            tj.removeClass(doms[i], 'active');
        
        tj.addClass(dom, 'active');
    }

    // 删除指定name的标签
    __tabs__.remove = function (name) {

        var ctn = getctn();
        var t = gbname(name);
        ctn.removeChild(t);

        for (var i = 0; i < doms.length; i++) {
            if (t == doms[i]) {
                doms.splice(i, 1);
                return;
            }
        }
    }

    return __tabs__; 
})