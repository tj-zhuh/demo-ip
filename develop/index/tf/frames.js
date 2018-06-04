
// 负责iframe的绘制和删除
define(function (require) {

    var __frames__ = {};  

    var doms = [];      // 当前正在使用的iframe元素数组（包括显示的和隐藏的）
    var expire = [];    // 已经被删除的iframe元素的数组，为以后新创建的iframe使用（防止内存泄露）

    // 删除iframe元素
    function dispose(dom) {

        if (!dom) return;

        dom.src = "about:blank";
        dom.contentWindow.document.write('');
        dom.contentWindow.close();

        var ui = getui();
        ui.removeChild(dom); 
        dom.height = 0;
        expire.push(dom);
    }

    // 根据name获得frame
    function gbname(name) {
        for (var i = 0; i < doms.length; i++) {
            if (doms[i].getAttribute('data-name') == name)
                return doms[i];
        }
    }

    function getdfheight(name) {
        switch (name) {
            case "工厂概览": return 1314;
        }
    }

    // 获得容器
    var __ui;
    function getui() {
        if (!__ui) __ui = document.getElementById('ui');
        return __ui;
    } 

    __frames__.append = function (url, name) {

        var ui = getui();
        var dom;
        if (expire.length > 0) {
            dom = expire.pop();
        } else {
            dom = document.createElement('iframe');
        }

        ui.appendChild(dom);
        dom.frameBorder = 0;
        dom.width = "100%";
        dom.scrolling = "no";
        dom.src = url;
        dom.setAttribute('data-name', name);
        dom.style.display = 'none';

        var dfheight = getdfheight(name);
        if (dfheight) {            
            dom.height = dfheight * window.document.documentElement.clientWidth / 1920;
        }

        dom.onload = function () {
            dom.height = dom.contentWindow.document.body.scrollHeight + 10;
        }

        doms.push(dom);
    }

    __frames__.setActive = function (name) {
        
        for (var i = 0; i < doms.length; i++) {
            doms[i].style.display = 'none';
        }

        var f = gbname(name);
        f.style.display = 'block';

        console.log(doms.length)

        //var interval = 50;
        //var times1 = 5;
        //var times2 = 15;
        //var count = 0

        //var loadingDiv = document.getElementById('loading');
        //loadingDiv.style.display = 'block';
        //loading();
        //var f = gbname(name);

        //function checkFinish() { return f.contentWindow.document.readyState == 'complete'; }

        //function loading() {

        //    if (count++ > times2 || (count > times1 && checkFinish())) {
        //        cont();
        //        return;
        //    }

        //    setTimeout(loading, interval);
        //}

        //function cont() {

        //    f.style.display = 'block';
        //    loadingDiv.style.display = 'none';

        //}

        

    } 

    // 删除frame
    __frames__.remove = function (name) {

        var f = gbname(name);
        if (!f) return; 

        for (var i = 0; i < doms.length; i++) {
            if (f == doms[i]) {
                doms.splice(i, 1);
                dispose(f);
                return;
            }
        }
    }

    __frames__.update = function (name) {
        var f = gbname(name);
        if (!f) return;
        f.height = f.contentWindow.document.body.scrollHeight + 10;
    }

    return __frames__; 

})