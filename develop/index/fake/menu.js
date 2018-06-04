define(function () {
    var arr = [
        {
            menuId: "1",
            menuName: "工厂概览",
            folder: "overview",
            parentId: "root"
        }
        , {
            menuId: "1-1",
            menuName: "工厂概览",
            folder: "overview",
            parentId: "1"
        }
        , {
            menuId: "1-2",
            menuName: "生产概览",
            folder: "produce",
            parentId: "1"
        }
        , {
            menuId: "1-3",
            menuName: "供应链概览",
            folder: "chain",
            parentId: "1"
        }
        , {
            menuId: "1-4",
            menuName: "设备概览",
            folder: "device",
            parentId: "1"
        }
        , {
            menuId: "1-5",
            menuName: "能源概览",
            folder: "energy",
            parentId: "1"
        }
        , {
            menuId: "1-6",
            menuName: "安环概览",
            folder: "safety",
            parentId: "1"
        }
        , {
            menuId: "1-7",
            menuName: "三维视图",
            folder: "view",
            parentId: "1"
        }
        , {
            menuId: "2",
            menuName: "生产管控",
            folder: "produce",
            parentId: "root"
        }
        , {
            menuId: "2-1",
            menuName: "计划管理",
            folder: "plan",
            parentId: "2"
        }
        , {
            menuId: "2-1-1",
            menuName: "计划编制",
            folder: "make",
            parentId: "2-1"
        }
        , {
            menuId: "2-1-1-1",
            menuName: "工作日历管理",
            folder: "404",
            parentId: "2-1-1",
            suspend: "1"
        }
        , {
            menuId: "2-1-1-2",
            menuName: "维修计划查询",
            folder: "404",
            parentId: "2-1-1",
            suspend: "1"
        }
        , {
            menuId: "2-1-1-3",
            menuName: "年计划管理",
            folder: "404",
            parentId: "2-1-1",
            suspend: "1"
        }
        , {
            menuId: "2-1-1-4",
            menuName: "月计划管理",
            folder: "month",
            parentId: "2-1-1"
        }
        , {
            menuId: "2-1-1-5",
            menuName: "日计划管理",
            folder: "404",
            parentId: "2-1-1",
            suspend: "1"
        }
        , {
            menuId: "2-1-1-6",
            menuName: "作业计划管理",
            folder: "404",
            parentId: "2-1-1",
            suspend: "1"
        }
        , {
            menuId: "2-1-2",
            menuName: "计划跟踪",
            folder: "track",
            parentId: "2-1"
        }
        , {
            menuId: "2-1-2-1",
            menuName: "计划跟踪监控",
            folder: "monitor",
            parentId: "2-1-2"
        }
        , {
            menuId: "2-1-2-2",
            menuName: "计划对比分析",
            folder: "404",
            parentId: "2-1-2",
            suspend: "1"
        }
        , {
            menuId: "2-1-3",
            menuName: "计划绩效",
            folder: "404",
            parentId: "2-1",
            suspend: "1"
        }
        , {
            menuId: "2-1-4",
            menuName: "计划平衡",
            folder: "404",
            parentId: "2-1",
            suspend: "1"
        }
        , {
            menuId: "2-2",
            menuName: "调度管理",
            folder: "404",
            parentId: "2",
            suspend: "1"
        }
        , {
            menuId: "2-3",
            menuName: "生产实绩",
            folder: "grade",
            parentId: "2"
        }
        , {
            menuId: "2-3-1",
            menuName: "全场生产实绩总览",
            folder: "404",
            parentId: "2-3",
            suspend: "1"
        }
        , {
            menuId: "2-3-2",
            menuName: "熔炼车间实绩",
            folder: "melt",
            parentId: "2-3"
        }
        , {
            menuId: "2-3-2-1",
            menuName: "车间实绩总览",
            folder: "404",
            parentId: "2-3-2",
            suspend: "1"
        }
        , {
            menuId: "2-3-2-2",
            menuName: "车间辅助决策",
            folder: "404",
            parentId: "2-3-2",
            suspend: "1"
        }
        , {
            menuId: "2-3-2-3",
            menuName: "配料优化",
            folder: "match",
            parentId: "2-3-2"
        }
        , {
            menuId: "2-3-2-4",
            menuName: "闪速熔炼实绩",
            folder: "flash",
            parentId: "2-3-2"
        }
        , {
            menuId: "2-3-2-4-1",
            menuName: "#生产实绩",
            folder: "page",
            parentId: "2-3-2-4"
        }
        , {
            menuId: "2-3-2-4-2",
            menuName: "#班次数据",
            folder: "404",
            parentId: "2-3-2-4",
            suspend: "1"
        }
        , {
            menuId: "2-3-2-4-3",
            menuName: "#放铜",
            folder: "404",
            parentId: "2-3-2-4",
            suspend: "1"
        }
        , {
            menuId: "2-3-2-4-4",
            menuName: "#放渣",
            folder: "404",
            parentId: "2-3-2-4",
            suspend: "1"
        }
        , {
            menuId: "2-3-2-4-5",
            menuName: "#样品信息与结果",
            folder: "404",
            parentId: "2-3-2-4",
            suspend: "1"
        }
        , {
            menuId: "2-3-2-4-6",
            menuName: "#配料单查询",
            folder: "404",
            parentId: "2-3-2-4",
            suspend: "1"
        }
        , {
            menuId: "2-3-2-4-7",
            menuName: "#配料仓配置",
            folder: "404",
            parentId: "2-3-2-4",
            suspend: "1"
        }
        , {
            menuId: "2-3-2-5",
            menuName: "转炉吹炼实绩",
            folder: "404",
            parentId: "2-3-2",
            suspend: "1"
        }
        , {
            menuId: "2-3-2-6",
            menuName: "卡尔多炉实绩",
            folder: "404",
            parentId: "2-3-2",
            suspend: "1"
        }
        , {
            menuId: "2-3-2-7",
            menuName: "阳极炉实绩",
            folder: "404",
            parentId: "2-3-2",
            suspend: "1"
        }
        , {
            menuId: "2-3-2-8",
            menuName: "样品检测结果",
            folder: "404",
            parentId: "2-3-2",
            suspend: "1"
        }
        , {
            menuId: "2-3-2-9",
            menuName: "熔炼班组报表",
            folder: "404",
            parentId: "2-3-2",
            suspend: "1"
        }
        , {
            menuId: "2-3-2-10",
            menuName: "熔炼工段报表",
            folder: "404",
            parentId: "2-3-2",
            suspend: "1"
        }
        , {
            menuId: "2-3-2-11",
            menuName: "熔炼车间报表",
            folder: "404",
            parentId: "2-3-2",
            suspend: "1"
        }
        , {
            menuId: "2-3-3",
            menuName: "电解车间实绩",
            folder: "404",
            parentId: "2-3",
            suspend: "1"
        }
        , {
            menuId: "2-3-4",
            menuName: "倾动炉车间实绩",
            folder: "404",
            parentId: "2-3",
            suspend: "1"
        }
        , {
            menuId: "2-3-5",
            menuName: "一车间实绩",
            folder: "404",
            parentId: "2-3",
            suspend: "1"
        }
        , {
            menuId: "2-3-6",
            menuName: "新材料车间实绩",
            folder: "404",
            parentId: "2-3",
            suspend: "1"
        }
        , {
            menuId: "2-3-7",
            menuName: "硫酸车间实绩",
            folder: "404",
            parentId: "2-3",
            suspend: "1"
        }
        , {
            menuId: "2-3-8",
            menuName: "备料车间实绩",
            folder: "404",
            parentId: "2-3",
            suspend: "1"
        }
        , {
            menuId: "2-3-9",
            menuName: "选矿车间实绩",
            folder: "404",
            parentId: "2-3",
            suspend: "1"
        }
        , {
            menuId: "2-3-10",
            menuName: "动力车间实绩",
            folder: "404",
            parentId: "2-3",
            suspend: "1"
        }
        , {
            menuId: "2-4",
            menuName: "现场人员管理",
            folder: "404",
            parentId: "2",
            suspend: "1"
        }
        , {
            menuId: "2-5",
            menuName: "质量管理",
            folder: "qa",
            parentId: "2"
        }
        , {
            menuId: "2-5-1",
            menuName: "基础数据管理",
            folder: "404",
            parentId: "2-5",
            suspend: "1"
        }
        , {
            menuId: "2-5-2",
            menuName: "质量检验管理",
            folder: "404",
            parentId: "2-5",
            suspend: "1"
        }
        , {
            menuId: "2-5-3",
            menuName: "质量判定管理",
            folder: "judge",
            parentId: "2-5"
        }
        , {
            menuId: "2-5-3-1",
            menuName: "采购物料判定管理",
            folder: "buy",
            parentId: "2-5-3"
        }
        , {
            menuId: "2-5-3-2",
            menuName: "阳极铜判定管理",
            folder: "404",
            parentId: "2-5-3",
            suspend: "1"
        }
        , {
            menuId: "2-5-3-3",
            menuName: "主产品判定管理",
            folder: "404",
            parentId: "2-5-3",
            suspend: "1"
        }
        , {
            menuId: "2-5-3-4",
            menuName: "副产品判定管理",
            folder: "404",
            parentId: "2-5-3",
            suspend: "1"
        }
        , {
            menuId: "2-5-3-5",
            menuName: "质保书管理",
            folder: "404",
            parentId: "2-5-3",
            suspend: "1"
        }
        , {
            menuId: "2-5-4",
            menuName: "质量过程监控",
            folder: "404",
            parentId: "2-5",
            suspend: "1"
        }
        , {
            menuId: "2-5-5",
            menuName: "质量追溯",
            folder: "404",
            parentId: "2-5",
            suspend: "1"
        }
        , {
            menuId: "2-5-6",
            menuName: "质量统计分析",
            folder: "404",
            parentId: "2-5",
            suspend: "1"
        }
        , {
            menuId: "2-5-7",
            menuName: "质量体系管理",
            folder: "404",
            parentId: "2-5",
            suspend: "1"
        }
        , {
            menuId: "2-6",
            menuName: "计量管理",
            folder: "404",
            parentId: "2",
            suspend: "1"
        }
        , {
            menuId: "2-7",
            menuName: "检化验管理",
            folder: "check",
            parentId: "2"
        }
        , {
            menuId: "2-7-1",
            menuName: "检验标准管理",
            folder: "404",
            parentId: "2-7",
            suspend: "1"
        }
        , {
            menuId: "2-7-2",
            menuName: "检验业务管理",
            folder: "business",
            parentId: "2-7"
        }
        , {
            menuId: "2-7-2-1",
            menuName: "合同评审",
            folder: "404",
            parentId: "2-7-2",
            suspend: "1"
        }
        , {
            menuId: "2-7-2-2",
            menuName: "样品受理",
            folder: "404",
            parentId: "2-7-2",
            suspend: "1"
        }
        , {
            menuId: "2-7-2-3",
            menuName: "任务指派",
            folder: "404",
            parentId: "2-7-2",
            suspend: "1"
        }
        , {
            menuId: "2-7-2-4",
            menuName: "样品接收",
            folder: "404",
            parentId: "2-7-2",
            suspend: "1"
        }
        , {
            menuId: "2-7-2-5",
            menuName: "任务分配",
            folder: "dispatch",
            parentId: "2-7-2"
        }
        , {
            menuId: "2-7-2-6",
            menuName: "检验数据输入",
            folder: "404",
            parentId: "2-7-2",
            suspend: "1"
        }
        , {
            menuId: "2-7-2-7",
            menuName: "数据审核",
            folder: "404",
            parentId: "2-7-2",
            suspend: "1"
        }
        , {
            menuId: "2-7-2-8",
            menuName: "报告编制",
            folder: "404",
            parentId: "2-7-2",
            suspend: "1"
        }
        , {
            menuId: "2-7-2-9",
            menuName: "报告审核与签发",
            folder: "404",
            parentId: "2-7-2",
            suspend: "1"
        }
        , {
            menuId: "2-7-2-10",
            menuName: "报告发放",
            folder: "404",
            parentId: "2-7-2",
            suspend: "1"
        }
        , {
            menuId: "2-7-3",
            menuName: "检验质量管理",
            folder: "404",
            parentId: "2-7",
            suspend: "1"
        }
        , {
            menuId: "2-7-4",
            menuName: "检验资源管理",
            folder: "404",
            parentId: "2-7",
            suspend: "1"
        }
        , {
            menuId: "2-7-5",
            menuName: "样品管理",
            folder: "404",
            parentId: "2-7",
            suspend: "1"
        }
        , {
            menuId: "2-7-6",
            menuName: "统计分析",
            folder: "404",
            parentId: "2-7",
            suspend: "1"
        }
        , {
            menuId: "2-8",
            menuName: "数据管理驾驶舱",
            folder: "drive",
            parentId: "2"
        }
        , {
            menuId: "2-9",
            menuName: "三维视图",
            folder: "view",
            parentId: "2"
        }
        , {
            menuId: "3",
            menuName: "供应链管控",
            folder: "chain",
            parentId: "root"
        }
        , {
            menuId: "3-1",
            menuName: "基础信息管理",
            folder: "404",
            parentId: "3",
            suspend: "1"
        }
        , {
            menuId: "3-1-1",
            menuName: "编码管理",
            folder: "404",
            parentId: "3-1",
            suspend: "1"
        }
        , {
            menuId: "3-1-1-1",
            menuName: "物料编码管理",
            folder: "404",
            parentId: "3-1-1",
            suspend: "1"
        }
        , {
            menuId: "3-1-1-2",
            menuName: "备品备件编码",
            folder: "404",
            parentId: "3-1-1",
            suspend: "1"
        }
        , {
            menuId: "3-1-1-3",
            menuName: "成品编码",
            folder: "404",
            parentId: "3-1-1",
            suspend: "1"
        }
        , {
            menuId: "3-1-1-4",
            menuName: "中间物料编码",
            folder: "404",
            parentId: "3-1-1",
            suspend: "1"
        }
        , {
            menuId: "3-1-1-5",
            menuName: "回收物料编码",
            folder: "404",
            parentId: "3-1-1",
            suspend: "1"
        }
        , {
            menuId: "3-1-2",
            menuName: "物流建模",
            folder: "404",
            parentId: "3-1",
            suspend: "1"
        }
        , {
            menuId: "3-1-2-1",
            menuName: "仓库建模",
            folder: "404",
            parentId: "3-1-2",
            suspend: "1"
        }
        , {
            menuId: "3-1-2-2",
            menuName: "物流建模",
            folder: "404",
            parentId: "3-1-2",
            suspend: "1"
        }
        , {
            menuId: "3-1-2-3",
            menuName: "物资建模",
            folder: "404",
            parentId: "3-1-2",
            suspend: "1"
        }
        , {
            menuId: "3-2",
            menuName: "汽车运行调度管理",
            folder: "car",
            parentId: "3"
        }
        , {
            menuId: "3-2-1",
            menuName: "网上预约",
            folder: "404",
            parentId: "3-2",
            suspend: "1"
        }
        , {
            menuId: "3-2-2",
            menuName: "IC卡基础管理",
            folder: "404",
            parentId: "3-2",
            suspend: "1"
        }
        , {
            menuId: "3-2-3",
            menuName: "制卡开卡",
            folder: "404",
            parentId: "3-2",
            suspend: "1"
        }
        , {
            menuId: "3-2-4",
            menuName: "排号排队",
            folder: "404",
            parentId: "3-2",
            suspend: "1"
        }
        , {
            menuId: "3-2-5",
            menuName: "刷卡计量委托",
            folder: "404",
            parentId: "3-2",
            suspend: "1"
        }
        , {
            menuId: "3-2-6",
            menuName: "刷卡取样委托",
            folder: "404",
            parentId: "3-2",
            suspend: "1"
        }
        , {
            menuId: "3-2-7",
            menuName: "刷卡卸车",
            folder: "404",
            parentId: "3-2",
            suspend: "1"
        }
        , {
            menuId: "3-2-8",
            menuName: "刷卡装车",
            folder: "404",
            parentId: "3-2",
            suspend: "1"
        }
        , {
            menuId: "3-2-9",
            menuName: "刷卡出厂",
            folder: "404",
            parentId: "3-2",
            suspend: "1"
        }
        , {
            menuId: "3-2-10",
            menuName: "卡片回收",
            folder: "404",
            parentId: "3-2",
            suspend: "1"
        }
        , {
            menuId: "3-2-11",
            menuName: "汽车运输物流跟踪",
            folder: "track",
            parentId: "3-2"
        }
        , {
            menuId: "3-2-12",
            menuName: "统计报表",
            folder: "404",
            parentId: "3-2",
            suspend: "1"
        }
        , {
            menuId: "3-3",
            menuName: "铁路运输调度管理",
            folder: "railway",
            parentId: "3"
        }
        , {
            menuId: "3-3-1",
            menuName: "基础信息管理",
            folder: "404",
            parentId: "3-3",
            suspend: "1"
        }
        , {
            menuId: "3-3-2",
            menuName: "原料信息预报",
            folder: "404",
            parentId: "3-3",
            suspend: "1"
        }
        , {
            menuId: "3-3-3",
            menuName: "运输计划管理",
            folder: "404",
            parentId: "3-3",
            suspend: "1"
        }
        , {
            menuId: "3-3-4",
            menuName: "信息交换管理",
            folder: "404",
            parentId: "3-3",
            suspend: "1"
        }
        , {
            menuId: "3-3-4-1",
            menuName: "微机连锁交换",
            folder: "404",
            parentId: "3-3-4",
            suspend: "1"
        }
        , {
            menuId: "3-3-4-2",
            menuName: "车号识别交换",
            folder: "404",
            parentId: "3-3-4",
            suspend: "1"
        }
        , {
            menuId: "3-3-4-3",
            menuName: "机车作业交换",
            folder: "404",
            parentId: "3-3-4",
            suspend: "1"
        }
        , {
            menuId: "3-3-5",
            menuName: "车辆交接作业管理",
            folder: "404",
            parentId: "3-3",
            suspend: "1"
        }
        , {
            menuId: "3-3-5-1",
            menuName: "接车预约",
            folder: "404",
            parentId: "3-3-5",
            suspend: "1"
        }
        , {
            menuId: "3-3-5-2",
            menuName: "接车作业计划",
            folder: "404",
            parentId: "3-3-5",
            suspend: "1"
        }
        , {
            menuId: "3-3-5-3",
            menuName: "车辆接车",
            folder: "404",
            parentId: "3-3-5",
            suspend: "1"
        }
        , {
            menuId: "3-3-6",
            menuName: "调车作业管理",
            folder: "404",
            parentId: "3-3",
            suspend: "1"
        }
        , {
            menuId: "3-3-6-1",
            menuName: "调车作业计划",
            folder: "404",
            parentId: "3-3-6",
            suspend: "1"
        }
        , {
            menuId: "3-3-6-2",
            menuName: "计量、化验委托",
            folder: "404",
            parentId: "3-3-6",
            suspend: "1"
        }
        , {
            menuId: "3-3-7",
            menuName: "车辆实时跟踪",
            folder: "404",
            parentId: "3-3",
            suspend: "1"
        }
        , {
            menuId: "3-3-8",
            menuName: "物流实时跟踪",
            folder: "track",
            parentId: "3-3"
        }
        , {
            menuId: "3-3-9",
            menuName: "自备车管理",
            folder: "404",
            parentId: "3-3",
            suspend: "1"
        }
        , {
            menuId: "3-3-10",
            menuName: "统计报表",
            folder: "404",
            parentId: "3-3",
            suspend: "1"
        }
        , {
            menuId: "3-3-11",
            menuName: "统计查询",
            folder: "404",
            parentId: "3-3",
            suspend: "1"
        }
        , {
            menuId: "3-4",
            menuName: "厂内物流管理",
            folder: "404",
            parentId: "3",
            suspend: "1"
        }
        , {
            menuId: "3-4-1",
            menuName: "物料供应",
            folder: "404",
            parentId: "3-4",
            suspend: "1"
        }
        , {
            menuId: "3-4-1-1",
            menuName: "供应计划",
            folder: "404",
            parentId: "3-4-1",
            suspend: "1"
        }
        , {
            menuId: "3-4-1-2",
            menuName: "计划审核",
            folder: "404",
            parentId: "3-4-1",
            suspend: "1"
        }
        , {
            menuId: "3-4-1-3",
            menuName: "计量确认",
            folder: "404",
            parentId: "3-4-1",
            suspend: "1"
        }
        , {
            menuId: "3-4-1-4",
            menuName: "接收确认",
            folder: "404",
            parentId: "3-4-1",
            suspend: "1"
        }
        , {
            menuId: "3-4-2",
            menuName: "物料回收",
            folder: "404",
            parentId: "3-4",
            suspend: "1"
        }
        , {
            menuId: "3-4-2-1",
            menuName: "回收计划",
            folder: "404",
            parentId: "3-4-2",
            suspend: "1"
        }
        , {
            menuId: "3-4-2-2",
            menuName: "计划确认",
            folder: "404",
            parentId: "3-4-2",
            suspend: "1"
        }
        , {
            menuId: "3-4-2-3",
            menuName: "计量确认",
            folder: "404",
            parentId: "3-4-2",
            suspend: "1"
        }
        , {
            menuId: "3-4-2-4",
            menuName: "库存更新",
            folder: "404",
            parentId: "3-4-2",
            suspend: "1"
        }
        , {
            menuId: "3-4-3",
            menuName: "物流转移",
            folder: "404",
            parentId: "3-4",
            suspend: "1"
        }
        , {
            menuId: "3-4-3-1",
            menuName: "倒运计划",
            folder: "404",
            parentId: "3-4-3",
            suspend: "1"
        }
        , {
            menuId: "3-4-3-2",
            menuName: "移库确认",
            folder: "404",
            parentId: "3-4-3",
            suspend: "1"
        }
        , {
            menuId: "3-4-3-3",
            menuName: "移库更新",
            folder: "404",
            parentId: "3-4-3",
            suspend: "1"
        }
        , {
            menuId: "3-4-4",
            menuName: "场内物流计划跟踪",
            folder: "404",
            parentId: "3-4",
            suspend: "1"
        }
        , {
            menuId: "3-5",
            menuName: "智能仓储管理",
            folder: "storage",
            parentId: "3"
        }
        , {
            menuId: "3-5-1",
            menuName: "仓库基础信息",
            folder: "404",
            parentId: "3-5",
            suspend: "1"
        }
        , {
            menuId: "3-5-2",
            menuName: "入库管理",
            folder: "404",
            parentId: "3-5",
            suspend: "1"
        }
        , {
            menuId: "3-5-3",
            menuName: "出库管理",
            folder: "404",
            parentId: "3-5",
            suspend: "1"
        }
        , {
            menuId: "3-5-4",
            menuName: "盘库管理",
            folder: "404",
            parentId: "3-5",
            suspend: "1"
        }
        , {
            menuId: "3-5-5",
            menuName: "仓库监控",
            folder: "monitor",
            parentId: "3-5"
        }
        , {
            menuId: "3-5-5-1",
            menuName: "库存动态预测",
            folder: "404",
            parentId: "3-5-5",
            suspend: "1"
        }
        , {
            menuId: "3-5-5-2",
            menuName: "库存实时监控",
            folder: "store",
            parentId: "3-5-5"
        }
        , {
            menuId: "3-5-5-3",
            menuName: "库存追踪",
            folder: "404",
            parentId: "3-5-5",
            suspend: "1"
        }
        , {
            menuId: "3-5-5-4",
            menuName: "库位调整",
            folder: "404",
            parentId: "3-5-5",
            suspend: "1"
        }
        , {
            menuId: "3-5-5-5",
            menuName: "库存报警",
            folder: "404",
            parentId: "3-5-5",
            suspend: "1"
        }
        , {
            menuId: "3-5-6",
            menuName: "精矿配料管理",
            folder: "404",
            parentId: "3-5",
            suspend: "1"
        }
        , {
            menuId: "3-5-6-1",
            menuName: "原料信息预告",
            folder: "404",
            parentId: "3-5-6",
            suspend: "1"
        }
        , {
            menuId: "3-5-6-2",
            menuName: "配料变更管理",
            folder: "404",
            parentId: "3-5-6",
            suspend: "1"
        }
        , {
            menuId: "3-5-6-3",
            menuName: "配料优化分析",
            folder: "404",
            parentId: "3-5-6",
            suspend: "1"
        }
        , {
            menuId: "3-5-7",
            menuName: "粗杂铜配料管理",
            folder: "404",
            parentId: "3-5",
            suspend: "1"
        }
        , {
            menuId: "3-5-8",
            menuName: "半成品管理",
            folder: "404",
            parentId: "3-5",
            suspend: "1"
        }
        , {
            menuId: "3-5-9",
            menuName: "成品管理",
            folder: "404",
            parentId: "3-5",
            suspend: "1"
        }
        , {
            menuId: "3-5-10",
            menuName: "中间物料管理",
            folder: "404",
            parentId: "3-5",
            suspend: "1"
        }
        , {
            menuId: "3-5-11",
            menuName: "车间材料仓库管理",
            folder: "404",
            parentId: "3-5",
            suspend: "1"
        }
        , {
            menuId: "3-5-11-1",
            menuName: "材料验收入库",
            folder: "404",
            parentId: "3-5-11",
            suspend: "1"
        }
        , {
            menuId: "3-5-11-2",
            menuName: "材料出库",
            folder: "404",
            parentId: "3-5-11",
            suspend: "1"
        }
        , {
            menuId: "3-5-11-3",
            menuName: "定期盘库",
            folder: "404",
            parentId: "3-5-11",
            suspend: "1"
        }
        , {
            menuId: "3-5-11-4",
            menuName: "申请领用",
            folder: "404",
            parentId: "3-5-11",
            suspend: "1"
        }
        , {
            menuId: "3-5-11-5",
            menuName: "材料跟踪",
            folder: "404",
            parentId: "3-5-11",
            suspend: "1"
        }
        , {
            menuId: "3-5-12",
            menuName: "车间备件仓库管理",
            folder: "404",
            parentId: "3-5",
            suspend: "1"
        }
        , {
            menuId: "3-5-12-1",
            menuName: "验收入库",
            folder: "404",
            parentId: "3-5-12",
            suspend: "1"
        }
        , {
            menuId: "3-5-12-2",
            menuName: "备件出库",
            folder: "404",
            parentId: "3-5-12",
            suspend: "1"
        }
        , {
            menuId: "3-5-12-3",
            menuName: "定期盘库",
            folder: "404",
            parentId: "3-5-12",
            suspend: "1"
        }
        , {
            menuId: "3-5-12-4",
            menuName: "申请领用",
            folder: "404",
            parentId: "3-5-12",
            suspend: "1"
        }
        , {
            menuId: "3-5-12-5",
            menuName: "备件跟踪",
            folder: "404",
            parentId: "3-5-12",
            suspend: "1"
        }
        , {
            menuId: "3-5-13",
            menuName: "分析报表",
            folder: "404",
            parentId: "3-5",
            suspend: "1"
        }
        , {
            menuId: "3-5-13-1",
            menuName: "统计台帐",
            folder: "404",
            parentId: "3-5-13",
            suspend: "1"
        }
        , {
            menuId: "3-5-13-2",
            menuName: "统计报表",
            folder: "404",
            parentId: "3-5-13",
            suspend: "1"
        }
        , {
            menuId: "3-6",
            menuName: "数据管理驾驶舱",
            folder: "drive",
            parentId: "3"
        }
        , {
            menuId: "3-7",
            menuName: "三维视图",
            folder: "view",
            parentId: "3"
        }
        , {
            menuId: "4",
            menuName: "设备管理",
            folder: "device",
            parentId: "root"
        }
        , {
            menuId: "4-1",
            menuName: "设备基础管理",
            folder: "base",
            parentId: "4"
        }
        , {
            menuId: "4-1-1",
            menuName: "设备资产管理",
            folder: "assets",
            parentId: "4-1"
        }
        , {
            menuId: "4-1-2",
            menuName: "设备档案管理",
            folder: "404",
            parentId: "4-1",
            suspend: "1"
        }
        , {
            menuId: "4-1-3",
            menuName: "备品备件管理",
            folder: "404",
            parentId: "4-1",
            suspend: "1"
        }
        , {
            menuId: "4-2",
            menuName: "设备运行管理",
            folder: "run",
            parentId: "4"
        }
        , {
            menuId: "4-2-1",
            menuName: "设备润滑管理",
            folder: "404",
            parentId: "4-2",
            suspend: "1"
        }
        , {
            menuId: "4-2-2",
            menuName: "设备点巡检",
            folder: "point",
            parentId: "4-2"
        }
        , {
            menuId: "4-2-2-1",
            menuName: "点检标准",
            folder: "404",
            parentId: "4-2-2",
            suspend: "1"
        }
        , {
            menuId: "4-2-2-2",
            menuName: "路线管理",
            folder: "404",
            parentId: "4-2-2",
            suspend: "1"
        }
        , {
            menuId: "4-2-2-3",
            menuName: "点检任务",
            folder: "task",
            parentId: "4-2-2"
        }
        , {
            menuId: "4-2-2-4",
            menuName: "点检结果",
            folder: "404",
            parentId: "4-2-2",
            suspend: "1"
        }
        , {
            menuId: "4-2-2-5",
            menuName: "漏检查询",
            folder: "404",
            parentId: "4-2-2",
            suspend: "1"
        }
        , {
            menuId: "4-2-2-6",
            menuName: "点检统计",
            folder: "404",
            parentId: "4-2-2",
            suspend: "1"
        }
        , {
            menuId: "4-2-3",
            menuName: "设备报警管理",
            folder: "404",
            parentId: "4-2",
            suspend: "1"
        }
        , {
            menuId: "4-2-4",
            menuName: "运行状态检测",
            folder: "status",
            parentId: "4-2"
        }
        , {
            menuId: "4-2-5",
            menuName: "智能评估和诊断",
            folder: "judge",
            parentId: "4-2"
        }
        , {
            menuId: "4-3",
            menuName: "设备维护管理",
            folder: "maintain",
            parentId: "4"
        }
        , {
            menuId: "4-3-1",
            menuName: "设备故障管理",
            folder: "404",
            parentId: "4-3",
            suspend: "1"
        }
        , {
            menuId: "4-3-2",
            menuName: "设备维修管理",
            folder: "repair",
            parentId: "4-3"
        }
        , {
            menuId: "4-3-3",
            menuName: "设备投诉管理",
            folder: "404",
            parentId: "4-3",
            suspend: "1"
        }
        , {
            menuId: "4-4",
            menuName: "设备综合分析",
            folder: "404",
            parentId: "4",
            suspend: "1"
        }
        , {
            menuId: "4-5",
            menuName: "设备三维应用",
            folder: "404",
            parentId: "4",
            suspend: "1"
        }
        , {
            menuId: "4-6",
            menuName: "设备数据管理驾驶舱",
            folder: "drive",
            parentId: "4"
        }
        , {
            menuId: "4-7",
            menuName: "三维视图",
            folder: "view",
            parentId: "4"
        }
        , {
            menuId: "5",
            menuName: "能源管理",
            folder: "energy",
            parentId: "root"
        }
        , {
            menuId: "5-1",
            menuName: "能源基础管理",
            folder: "404",
            parentId: "5",
            suspend: "1"
        }
        , {
            menuId: "5-2",
            menuName: "能源运行管理",
            folder: "run",
            parentId: "5"
        }
        , {
            menuId: "5-2-1",
            menuName: "数据采集",
            folder: "404",
            parentId: "5-2",
            suspend: "1"
        }
        , {
            menuId: "5-2-2",
            menuName: "能源综合监控",
            folder: "monitor",
            parentId: "5-2"
        }
        , {
            menuId: "5-2-2-1",
            menuName: "综合管网",
            folder: "all",
            parentId: "5-2-2"
        }
        , {
            menuId: "5-2-2-2",
            menuName: "天然气管网",
            folder: "404",
            parentId: "5-2-2",
            suspend: "1"
        }
        , {
            menuId: "5-2-2-3",
            menuName: "电力管网",
            folder: "404",
            parentId: "5-2-2",
            suspend: "1"
        }
        , {
            menuId: "5-2-2-4",
            menuName: "热力管网",
            folder: "404",
            parentId: "5-2-2",
            suspend: "1"
        }
        , {
            menuId: "5-2-2-5",
            menuName: "氧气管网",
            folder: "404",
            parentId: "5-2-2",
            suspend: "1"
        }
        , {
            menuId: "5-2-2-6",
            menuName: "水力管网",
            folder: "404",
            parentId: "5-2-2",
            suspend: "1"
        }
        , {
            menuId: "5-2-3",
            menuName: "过程报警管理",
            folder: "404",
            parentId: "5-2",
            suspend: "1"
        }
        , {
            menuId: "5-2-4",
            menuName: "能效在线监控",
            folder: "online",
            parentId: "5-2"
        }
        , {
            menuId: "5-3",
            menuName: "能源评价分析",
            folder: "analysis",
            parentId: "5"
        }
        , {
            menuId: "5-3-1",
            menuName: "统计报表",
            folder: "404",
            parentId: "5-3",
            suspend: "1"
        }
        , {
            menuId: "5-3-2",
            menuName: "能源基础分析",
            folder: "404",
            parentId: "5-3",
            suspend: "1"
        }
        , {
            menuId: "5-3-3",
            menuName: "能源绩效分析",
            folder: "404",
            parentId: "5-3",
            suspend: "1"
        }
        , {
            menuId: "5-3-4",
            menuName: "智能决策分析",
            folder: "404",
            parentId: "5-3",
            suspend: "1"
        }
        , {
            menuId: "5-3-5",
            menuName: "能源平衡分析",
            folder: "404",
            parentId: "5-3",
            suspend: "1"
        }
        , {
            menuId: "5-3-6",
            menuName: "能耗追踪分析",
            folder: "404",
            parentId: "5-3",
            suspend: "1"
        }
        , {
            menuId: "5-3-7",
            menuName: "能源成本分析",
            folder: "404",
            parentId: "5-3",
            suspend: "1"
        }
        , {
            menuId: "5-3-8",
            menuName: "能效指标分析",
            folder: "target",
            parentId: "5-3"
        }
        , {
            menuId: "5-4",
            menuName: "能源优化调度",
            folder: "optimize",
            parentId: "5"
        }
        , {
            menuId: "5-4-1",
            menuName: "能源计划",
            folder: "404",
            parentId: "5-4",
            suspend: "1"
        }
        , {
            menuId: "5-4-2",
            menuName: "应急预案管理",
            folder: "404",
            parentId: "5-4",
            suspend: "1"
        }
        , {
            menuId: "5-4-3",
            menuName: "用电负荷优化",
            folder: "electric",
            parentId: "5-4"
        }
        , {
            menuId: "5-4-4",
            menuName: "工况模式优化",
            folder: "404",
            parentId: "5-4",
            suspend: "1"
        }
        , {
            menuId: "5-4-5",
            menuName: "蒸汽动力优化",
            folder: "steam1",
            parentId: "5-4"
        }
        , {
            menuId: "5-4-6",
            menuName: "优化方案",
            folder: "steam2",
            parentId: "5-4"
        }
        , {
            menuId: "5-5",
            menuName: "能源数据管理驾驶舱",
            folder: "drive",
            parentId: "5"
        }
        , {
            menuId: "6",
            menuName: "安环管控",
            folder: "safety",
            parentId: "root"
        }
        , {
            menuId: "6-1",
            menuName: "安全风险管理",
            folder: "risk",
            parentId: "6"
        }
        , {
            menuId: "6-1-1",
            menuName: "危险源辨识",
            folder: "judge",
            parentId: "6-1"
        }
        , {
            menuId: "6-1-1-1",
            menuName: "危险源检查模板",
            folder: "404",
            parentId: "6-1-1",
            suspend: "1"
        }
        , {
            menuId: "6-1-1-2",
            menuName: "危险源辨识与查询",
            folder: "404",
            parentId: "6-1-1",
            suspend: "1"
        }
        , {
            menuId: "6-1-1-3",
            menuName: "作业票自动关联",
            folder: "404",
            parentId: "6-1-1",
            suspend: "1"
        }
        , {
            menuId: "6-1-1-4",
            menuName: "危险源评估管理",
            folder: "404",
            parentId: "6-1-1",
            suspend: "1"
        }
        , {
            menuId: "6-1-2",
            menuName: "风险分级管理",
            folder: "levels",
            parentId: "6-1"
        }
        , {
            menuId: "6-1-2-1",
            menuName: "风险基本信息",
            folder: "404",
            parentId: "6-1-2",
            suspend: "1"
        }
        , {
            menuId: "6-1-2-2",
            menuName: "风险评估管理",
            folder: "404",
            parentId: "6-1-2",
            suspend: "1"
        }
        , {
            menuId: "6-1-2-3",
            menuName: "风险评审管理",
            folder: "404",
            parentId: "6-1-2",
            suspend: "1"
        }
        , {
            menuId: "6-1-3",
            menuName: "危险源分布与监控",
            folder: "source",
            parentId: "6-1"
        }
        , {
            menuId: "6-1-3-1",
            menuName: "危险源跟踪与...",
            folder: "404",
            parentId: "6-1-3",
            suspend: "1"
        }
        , {
            menuId: "6-1-3-2",
            menuName: "重大危险源视...",
            folder: "monitor",
            parentId: "6-1-3"
        }
        , {
            menuId: "6-1-3-3",
            menuName: "危险源评估结...",
            folder: "404",
            parentId: "6-1-3",
            suspend: "1"
        }
        , {
            menuId: "6-1-4",
            menuName: "特殊作业安全管理",
            folder: "404",
            parentId: "6-1",
            suspend: "1"
        }
        , {
            menuId: "6-1-4-1",
            menuName: "施工备案管理",
            folder: "404",
            parentId: "6-1-4",
            suspend: "1"
        }
        , {
            menuId: "6-1-4-2",
            menuName: "移动作业许可管理",
            folder: "404",
            parentId: "6-1-4",
            suspend: "1"
        }
        , {
            menuId: "6-2",
            menuName: "环境保护管理",
            folder: "environment",
            parentId: "6"
        }
        , {
            menuId: "6-2-1",
            menuName: "环境因素分级管理",
            folder: "404",
            parentId: "6-2",
            suspend: "1"
        }
        , {
            menuId: "6-2-2",
            menuName: "环保地图",
            folder: "404",
            parentId: "6-2",
            suspend: "1"
        }
        , {
            menuId: "6-2-3",
            menuName: "环境监测",
            folder: "monitor",
            parentId: "6-2"
        }
        , {
            menuId: "6-2-4",
            menuName: "环保设施运行管理",
            folder: "404",
            parentId: "6-2",
            suspend: "1"
        }
        , {
            menuId: "6-2-5",
            menuName: "固废管理",
            folder: "404",
            parentId: "6-2",
            suspend: "1"
        }
        , {
            menuId: "6-2-6",
            menuName: "环保自动监测",
            folder: "auto",
            parentId: "6-2"
        }
        , {
            menuId: "6-2-6-1",
            menuName: "采集主数据",
            folder: "main",
            parentId: "6-2-6"
        }
        , {
            menuId: "6-2-6-2",
            menuName: "环境集烟排放口",
            folder: "404",
            parentId: "6-2-6",
            suspend: "1"
        }
        , {
            menuId: "6-2-6-3",
            menuName: "硫酸尾气排放口",
            folder: "404",
            parentId: "6-2-6",
            suspend: "1"
        }
        , {
            menuId: "6-2-6-4",
            menuName: "黄金冶炼厂排放口",
            folder: "404",
            parentId: "6-2-6",
            suspend: "1"
        }
        , {
            menuId: "6-2-6-5",
            menuName: "数据合计汇总",
            folder: "total",
            parentId: "6-2-6"
        }
        , {
            menuId: "6-3",
            menuName: "应急管理",
            folder: "emergency",
            parentId: "6"
        }
        , {
            menuId: "6-3-1",
            menuName: "应急预案管理",
            folder: "file",
            parentId: "6-3"
        }
        , {
            menuId: "6-3-2",
            menuName: "应急资源管理",
            folder: "404",
            parentId: "6-3",
            suspend: "1"
        }
        , {
            menuId: "6-3-3",
            menuName: "应急演练",
            folder: "404",
            parentId: "6-3",
            suspend: "1"
        }
        , {
            menuId: "6-3-4",
            menuName: "应急响应与协同指挥",
            folder: "404",
            parentId: "6-3",
            suspend: "1"
        }
        , {
            menuId: "6-4",
            menuName: "HSE监督管理",
            folder: "HSE",
            parentId: "6"
        }
        , {
            menuId: "6-4-1",
            menuName: "文件管理",
            folder: "files",
            parentId: "6-4"
        }
        , {
            menuId: "6-4-2",
            menuName: "隐患管理",
            folder: "trouble",
            parentId: "6-4"
        }
        , {
            menuId: "6-4-3",
            menuName: "三同时管理",
            folder: "404",
            parentId: "6-4",
            suspend: "1"
        }
        , {
            menuId: "6-4-4",
            menuName: "职业卫生管理",
            folder: "404",
            parentId: "6-4",
            suspend: "1"
        }
        , {
            menuId: "6-4-5",
            menuName: "事故事件管理",
            folder: "404",
            parentId: "6-4",
            suspend: "1"
        }
        , {
            menuId: "6-4-6",
            menuName: "教育培训",
            folder: "404",
            parentId: "6-4",
            suspend: "1"
        }
        , {
            menuId: "6-4-7",
            menuName: "特种设备",
            folder: "404",
            parentId: "6-4",
            suspend: "1"
        }
        , {
            menuId: "6-4-8",
            menuName: "危险化学品",
            folder: "404",
            parentId: "6-4",
            suspend: "1"
        }
        , {
            menuId: "6-5",
            menuName: "监督监控",
            folder: "404",
            parentId: "6",
            suspend: "1"
        }
        , {
            menuId: "6-6",
            menuName: "安全报警管理",
            folder: "alarm",
            parentId: "6"
        }
        , {
            menuId: "6-7",
            menuName: "视频管理",
            folder: "404",
            parentId: "6",
            suspend: "1"
        }
        , {
            menuId: "6-8",
            menuName: "数据管理驾驶舱",
            folder: "drive",
            parentId: "6"
        }
        , {
            menuId: "6-9",
            menuName: "三维视图",
            folder: "view",
            parentId: "6"
        }
        , {
            menuId: "7",
            menuName: "决策应用",
            folder: "decision",
            parentId: "root"
        }
        , {
            menuId: "7-1",
            menuName: "绩效分析",
            folder: "analysis",
            parentId: "7"
        }
        , {
            menuId: "7-1-1",
            menuName: "绩效类别管理",
            folder: "404",
            parentId: "7-1",
            suspend: "1"
        }
        , {
            menuId: "7-1-2",
            menuName: "绩效参数管理",
            folder: "404",
            parentId: "7-1",
            suspend: "1"
        }
        , {
            menuId: "7-1-3",
            menuName: "绩效计划管理",
            folder: "404",
            parentId: "7-1",
            suspend: "1"
        }
        , {
            menuId: "7-1-4",
            menuName: "绩效指标考核与分析",
            folder: "target",
            parentId: "7-1"
        }
        , {
            menuId: "7-1-5",
            menuName: "绩效指标监控",
            folder: "404",
            parentId: "7-1",
            suspend: "1"
        }
        , {
            menuId: "7-1-6",
            menuName: "绩效考核在线审批",
            folder: "404",
            parentId: "7-1",
            suspend: "1"
        }
        , {
            menuId: "7-1-7",
            menuName: "绩效考核结果发布",
            folder: "404",
            parentId: "7-1",
            suspend: "1"
        }
        , {
            menuId: "7-1-8",
            menuName: "绩效考核结果申诉",
            folder: "404",
            parentId: "7-1",
            suspend: "1"
        }
        , {
            menuId: "7-2",
            menuName: "技术经济分析",
            folder: "technology",
            parentId: "7"
        }
        , {
            menuId: "7-2-1",
            menuName: "技术经济对标体系指标管理",
            folder: "404",
            parentId: "7-2",
            suspend: "1"
        }
        , {
            menuId: "7-2-2",
            menuName: "技术经济指标预警级别设置",
            folder: "404",
            parentId: "7-2",
            suspend: "1"
        }
        , {
            menuId: "7-2-3",
            menuName: "技术经济指标预警参数设置",
            folder: "404",
            parentId: "7-2",
            suspend: "1"
        }
        , {
            menuId: "7-2-4",
            menuName: "技术经济指标异常分析",
            folder: "exception",
            parentId: "7-2"
        }
        , {
            menuId: "7-2-5",
            menuName: "技术经济对标综合评价",
            folder: "404",
            parentId: "7-2",
            suspend: "1"
        }
        , {
            menuId: "7-3",
            menuName: "存货日管控",
            folder: "store",
            parentId: "7"
        }
        , {
            menuId: "7-3-1",
            menuName: "存货布局与状态查询",
            folder: "404",
            parentId: "7-3",
            suspend: "1"
        }
        , {
            menuId: "7-3-2",
            menuName: "存货预测",
            folder: "predicate",
            parentId: "7-3"
        }
        , {
            menuId: "7-3-3",
            menuName: "存货库龄分析",
            folder: "404",
            parentId: "7-3",
            suspend: "1"
        }
        , {
            menuId: "7-3-4",
            menuName: "存货异常预警及分析",
            folder: "404",
            parentId: "7-3",
            suspend: "1"
        }
        , {
            menuId: "7-4",
            menuName: "金属平衡",
            folder: "balance",
            parentId: "7"
        }
        , {
            menuId: "7-4-1",
            menuName: "金属平衡表管理",
            folder: "404",
            parentId: "7-4",
            suspend: "1"
        }
        , {
            menuId: "7-4-2",
            menuName: "金属平衡偏差分析",
            folder: "error",
            parentId: "7-4"
        }
        , {
            menuId: "7-5",
            menuName: "成本管控",
            folder: "cost",
            parentId: "7"
        }
        , {
            menuId: "7-5-1",
            menuName: "成本预算管理",
            folder: "404",
            parentId: "7-5",
            suspend: "1"
        }
        , {
            menuId: "7-5-2",
            menuName: "成本分析",
            folder: "analysis",
            parentId: "7-5"
        }
        , {
            menuId: "7-5-2-1",
            menuName: "财务分析",
            folder: "404",
            parentId: "7-5-2",
            suspend: "1"
        }
        , {
            menuId: "7-5-2-2",
            menuName: "自产分析",
            folder: "404",
            parentId: "7-5-2",
            suspend: "1"
        }
        , {
            menuId: "7-5-2-3",
            menuName: "销售分析",
            folder: "sale",
            parentId: "7-5-2"
        }
        , {
            menuId: "7-5-2-3-1",
            menuName: "#主页指标",
            folder: "param",
            parentId: "7-5-2-3"
        }
        , {
            menuId: "7-5-2-3-2",
            menuName: "#发展趋势",
            folder: "404",
            parentId: "7-5-2-3",
            suspend: "1"
        }
        , {
            menuId: "7-5-2-3-3",
            menuName: "#订单分析",
            folder: "404",
            parentId: "7-5-2-3",
            suspend: "1"
        }
        , {
            menuId: "7-5-2-4",
            menuName: "采购分析",
            folder: "404",
            parentId: "7-5-2",
            suspend: "1"
        }
        , {
            menuId: "7-5-2-5",
            menuName: "生产分析",
            folder: "404",
            parentId: "7-5-2",
            suspend: "1"
        }
        , {
            menuId: "7-5-2-6",
            menuName: "存货分析",
            folder: "404",
            parentId: "7-5-2",
            suspend: "1"
        }
        , {
            menuId: "7-5-2-7",
            menuName: "人力资源",
            folder: "404",
            parentId: "7-5-2",
            suspend: "1"
        }
        , {
            menuId: "7-5-2-8",
            menuName: "质量和安全",
            folder: "404",
            parentId: "7-5-2",
            suspend: "1"
        }
        , {
            menuId: "7-5-2-9",
            menuName: "风控分析",
            folder: "404",
            parentId: "7-5-2",
            suspend: "1"
        }
        , {
            menuId: "7-5-3",
            menuName: "成本绩效评价",
            folder: "404",
            parentId: "7-5",
            suspend: "1"
        }
        , {
            menuId: "8",
            menuName: "系统管理",
            folder: "system",
            parentId: "root"
        }
        , {
            menuId: "8-1",
            menuName: "菜单管理",
            folder: "menu",
            parentId: "8"
        }
    ];
    var tmp = []; var result = []; for (var i = 0; i < arr.length; i++) { var x = arr[i]; if (x.menuName.match(/^#/)) { tmp.push(x) } else { result.push(x) } } for (var i = 0; i < result.length; i++) { for (var j = 0; j < tmp.length; j++) { if (tmp[j].parentId == result[i].menuId) { result[i].tabs = result[i].tabs || ""; result[i].tabs += tmp[j].folder + tmp[j].menuName + "," } } }; return result;
})
