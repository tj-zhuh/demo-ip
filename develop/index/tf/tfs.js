
// 管理tab页和iframe
define(function (require) {

    var __tfs__ = {};

    var tabs = require('tf/tabs');
    var frames = require('tf/frames');

    
    function Tf() {
        this.name;
        this.url;
        this.active;
        this.frameCreated = false;
    }

    var history = [];   // 历史
    var current;        // 当前
    var tfs = [];       // 列表
    var tabbar;         // tab的容器


    function gbname(name) {
        for (var i = 0; i < tfs.length; i++) {
            if (tfs[i].name == name) return tfs[i];
        }
    }

    tabs.onclick = function(name){
        
        var tf = gbname(name);

        history.push(current);
        current = tf;

        if (!tf.frameCreated) {
            frames.append(tf.url, tf.name);
            tf.frameCreated = true;
        }

        tabs.setActive(name);
        frames.setActive(name);

    }

    tabs.onclose = function (name) {

        var tf = gbname(name);

        tabs.remove(name);
        frames.remove(name);

        for (var i = 0; i < tfs.length; i++) {
            if (tfs[i] == tf) tfs.splice(i, 1);
        }

        if (current == tf) {
            current = history.pop();

            tabs.setActive(current.name);
            frames.setActive(current.name);
        } 
    }


    // 加载
    // _tabs是数组，包含name、url、active、suspend四个字段
    __tfs__.load = function (_tabs) {

        if (!tabbar) tabbar = document.getElementById('tabs');

        // 全部清空
        for (var i = 0 ; i < tfs.length; i++) {
            var name = tfs[i].name;
            tabs.remove(name);
            frames.remove(name);
        }
        tfs.length = 0;
        history.length = 0;
        current = null;
        tabbar.style.display = 'none';

        for (var i = 0; i < _tabs.length; i++) {

            var t = _tabs[i];

            var tf = new Tf();
            tf.name = t.name;
            tf.url = t.url;
            tf.active = t.active;
            tfs.push(tf);

            tabs.append(t.name, false, t.suspend);

            if (t.active) {
                tabs.setActive(t.name);
                frames.append(t.url, t.name)
                tf.frameCreated = true;
                current = tf;
                frames.setActive(t.name);
            }
        }       
        
        tabbar.style.display = 'none'; // tfs.length > 1 ? 'block' : 'none';
    }

    // 跳转
    __tfs__.jump = function (url, name) {

        var tf = gbname(name);

        if (tf) {
            
            if (tf == current) return;

            current.active = false;
            
            history.push(current);

            current = tf;

            tabs.setActive(name);

            if (!tf.frameCreated) {
                frames.append(url, name);
                tf.frameCreated = true;
            }

            frames.setActive(name);

            return;
        } 

        // 考虑url是相对路径的情况
        //if (!url.match(/.html$/)) {
        //    url = url + '.html';
        //}
        if (!url.match(/develop/)) {
            url = current.url.replace(/[^\/]*.html/, url);
        }

        current.active = false;

        history.push(current);
         
        var tf = new Tf();
        tf.name = name;
        tf.url = url;
        tf.active = true;
        tfs.push(tf);
         
        tabs.append(name, true);
        tabs.setActive(name);

        frames.append(url, name);
        frames.setActive(name);
        tf.frameCreated = true;

        current = tf;
 

        if (!tabbar) tabbar = document.getElementById('tabs');
        tabbar.style.display = tfs.length > 1 ? 'block' : 'none';
    }

    // 更新
    __tfs__.update = function () {
        frames.update(current.name);
    }

    return __tfs__;

})