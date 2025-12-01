import style from './index.module.css';
import Contact from './contact';

import { CustomerServiceOutlined, AppleFilled,BankFilled, MenuOutlined } from '@ant-design/icons';
import { Drawer, ConfigProvider } from 'antd';
import { useState } from 'react';

export default function Nav() {
    let navData = [
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
    const [menuOpen, setMenuOpen] = useState(false);
    const [menutype, setTypemenu] = useState('pc')
    const [contactdrawOpen, setContactdrawOpen] = useState(false)
    //联系抽屉
    const handleClickContact = () => {
        setContactdrawOpen(!contactdrawOpen);
    }
    //菜单抽屉
    const onCloseMenu = () => {
        setMenuOpen(false);
        setTypemenu('pc');
    };
    const handleClickMenu = () => {
        setTypemenu('mobile');
        setMenuOpen(!menuOpen);
    }
    const Menu = function () {
        return (
            <div className={menutype == 'mobile' ? style.contentDraw : style.content}>
                {
                    navData?.map((item) => {
                        if (menutype == 'mobile') {
                            return <h2 className={style.textS} key={item.id}>{item.name}</h2>
                        } else {
                            return <span className={style.textS} key={item.id}>{item.name}</span>
                        }
                    })
                }
            </div>
        )
    }

    return (<>
        {/* ConfigProvider可以设置adtdesgin的样式 */}
        <ConfigProvider theme={{ token: { motionDurationSlow: '0.5s' } }}>
            <nav className={style.nav}>
                <BankFilled  className={style.logo} />
                {menutype == "pc" && <Menu type="pc" />}
                <div className={style.icons}>
                    <CustomerServiceOutlined onClick={handleClickContact} />
                    <MenuOutlined onClick={handleClickMenu} className={style.hiddenMenu} />
                </div>
            </nav>
            {/* 菜单 */}
            <Drawer
                class='menu'
                placement="top"
                onClose={onCloseMenu}
                closable={{ placement: 'end' }}
                open={menuOpen}
                style={{ height: '100vh' }}
                styles={{
                    mask: {
                        backgroundColor: 'transparent',
                    }
                }}>
                <Menu type="mobile" />
            </Drawer>
            {/* 联系 */}
            <Drawer
                id='contact'
                placement="right"
                onClose={() => { setContactdrawOpen(false) }}
                closable={false}
                open={contactdrawOpen}
                size={300}
                keyboard
                styles={{
                    mask: {
                        backgroundColor: 'transparent',
                    }
                }}
            >
                <Contact />
            </Drawer>
        </ConfigProvider >

    </>)

}