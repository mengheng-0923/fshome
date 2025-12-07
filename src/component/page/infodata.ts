
// infodata.ts
interface navDataType {
    name: string;
    id: number;
}

const navData: navDataType[] = [
    { name: '门店', id: 0 },
    { name: '家具', id: 1 },
    { name: '家居用品', id: 2 },
    { name: '窗帘', id: 3 },
    { name: '灯具', id: 4 },
    { name: '地板', id: 5 },
    { name: '全屋智能', id: 6 },
    { name: '家装设计', id: 7 },
    { name: '配送/安装/售后', id: 8 }
];

const footerData = [
    {
        id: 1,
        title: '窗帘',
        content: [
            { type: '清晰复古型', ids: 11 },
            { type: '细腻奶油丝绒型', ids: 12 },
            { type: '高克重高密型', ids: 13 },
            { type: '美拉德·太妃咖系列', ids: 14 },
        ]
    },
    {
        id: 2,
        title: '纱窗',
        content: [
            { type: '奶油纱帘合集', ids: 21 },
            { type: '银丝璨若星河系列', ids: 22 },
            { type: '高支高密 软糯细腻', ids: 23 },
        ]
    },
    {
        id: 3,
        title: '窗帘绑带',
        content: [
            { type: '磁吸', ids: 31 },
            { type: '中式礼结', ids: 32 },
            { type: '田园风', ids: 33 },
        ]
    },
    {
        id: 4,
        title: '产品批发',
        content: [
            { type: '请查看页面底部联系方式', ids: 41 }
        ]
    }

]
export { navData, footerData }