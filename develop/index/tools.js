 
define(function (require) {

    var $ = require('jquery');

    var t = {}

    var collapsed = false;

    $(function () {

        var ctn = document.createElement('div');
        ctn.id = 'toolbar';
        ctn.className = 'toolbar';
        document.body.appendChild(ctn);

        var menu = add('menu', '收起');
        add('query', '查询');
        add('add', '添加');
        add('del', '删除');
        add('save', '保存');
        add('check', '审核');
        add('publish', '下发');
        add('print', '打印');
        add('favor', '收藏');
        add('export', '导出');

        function add(cls, text) {
            var btn = document.createElement('div');
            var cite = document.createElement('cite');
            var span = document.createElement('span');
            btn.appendChild(cite);
            ctn.appendChild(btn);
            btn.appendChild(span);

            span.innerHTML = text;
            btn.className = 'toolbar-btn toolbar-btn-' + cls;
            btn.id = 'toolbar-btn-' + cls;

            return {
                btn: btn,
                cite: cite,
                span: span
            }
        }

        menu.btn.addEventListener('click', function () {

            collapsed = !collapsed;

            if (collapsed) {
                ctn.className = 'toolbar collapsed';
                menu.span.innerHTML = '展开';
            } else {
                ctn.className = 'toolbar';
                menu.span.innerHTML = '收起';
            }

        }, false) 
    })

    return t;
})