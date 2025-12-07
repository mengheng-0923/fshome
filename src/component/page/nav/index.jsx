import style from './index.module.css';
import Contact from './contact';
import { navData } from '../infodata'

import { CustomerServiceOutlined, AppleFilled, HomeFilled, MenuOutlined } from '@ant-design/icons';
import { Drawer, ConfigProvider } from 'antd';
import { useState } from 'react';

export default function Nav() {

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
                            return <h2 key={item.id}>{item.name}</h2>
                        } else {
                            return <span key={item.id}>{item.name}</span>
                        }
                    })
                }
            </div>
        )
    }

    return (<>
        {/* ConfigProvider可以设置adtdesgin里的动画样式 */}
        <ConfigProvider theme={{ token: { motionDurationSlow: '0.5s' } }}>
            <nav className={style.nav}>
                <HomeFilled />
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