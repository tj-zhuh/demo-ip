define(function () {
    return [{
        nodeId: '1',
        nodeName: '冶炼厂',
        parentId: 'root'
    }, {
        nodeId: '11',
        nodeName: '火灾事故预案',
        parentId: '1'
    }, {
        nodeId: '12',
        nodeName: '瓦斯事故预案',
        parentId: '1'
    }, {
        nodeId: '13',
        nodeName: '进水事故预案',
        parentId: '1'
    },{
        nodeId: '111',
        nodeName: '车间1',
        parentId: '11'
    }, {
        nodeId: '112',
        nodeName: '车间2',
        parentId: '11'
    }];
})
