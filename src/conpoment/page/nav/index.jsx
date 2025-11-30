import style from './index.module.css';
import { SearchOutlined, ShoppingOutlined, AppleFilled, MenuOutlined } from '@ant-design/icons';

export default function Nav() {
    let navData = [
        { name: '门店', id: 0 },
        { name: '关于', id: 1 },
        { name: '窗帘', id: 9 },
        { name: '家具', id: 2 },
        { name: '电器', id: 4 },
        { name: '实木家居', id: 7 },
        { name: '生活用品', id: 3 },
        { name: '设计到家', id: 5 },
        { name: '全屋智能', id: 8 },
        { name: '联系我们', id: 10 },

    ];
    return (<>
        <nav className={style.nav}>
            <AppleFilled className={style.logo} />
            <div className={style.content}>
                {
                    navData?.map((item) => {
                        return <span className={style.textS} key={item.id}>{item.name}</span>
                    })
                }
            </div>
            <div className={style.icons}>
                <SearchOutlined />
                <ShoppingOutlined />
                <MenuOutlined />
            </div>
        </nav>

    </>)

}