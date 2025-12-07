
import style from './style.module.css';
import './index.css'
import { Button } from 'antd';
import ContinuousMarquee from './swiper/index.jsx'


export default function Main() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
            <main>

                <header className={style.about} >
                    <strong>一玥家居</strong>让您的家装更安全、让您的生活更舒适、让您更爱家、居家更舒适的家居设计。
                </header>

                <main className={style.mainBox}>
                    <div data-type='selectLogoBox' data-type-item='logo' className={style.banner} key='logo'>
                        <div className={style.bannerInfo}></div>
                    </div>

                    <div data-type='selectBox' data-type-item='safe' className={style.banner} key='safe'>
                        <div className={style.bannerInfo}></div>
                    </div>

                    <div data-type='selectBox' data-type-item='fugu' className={style.banner} key='fugu'>
                        <div className={style.bannerInfo}>
                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <Button color="primary" shape="round" variant="solid" size='large'> 进一步了解 </Button>
                                <Button color="danger" shape="round" variant="solid" size='large'>去选心仪窗帘</Button>
                            </div>
                        </div>
                    </div>

                    <div data-type='selectBox' data-type-item='kafei' className={style.banner} key='kafei'>
                        <div className={style.bannerInfo}>
                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <Button color="primary" shape="round" variant="solid" size='large'> 进一步了解 </Button>
                                <Button color="danger" shape="round" variant="solid" size='large'>去选心仪窗帘</Button>
                            </div>
                        </div>
                    </div>

                    <div data-type='selectBox' data-type-item='sha' className={style.banner} key='sha'>
                        <div className={style.bannerInfo}>
                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <Button color="primary" shape="round" variant="solid" size='large'> 进一步了解 </Button>
                                <Button color="danger" shape="round" variant="solid" size='large'>去选心仪纱窗</Button>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className={style.footerSwiper}>
                    <ContinuousMarquee items={data} />
                    <div data-type-item='gg'>
                        <Button style={{ width: '100%' }} color="danger" shape="round" variant="solid" size='large'>去选绑带</Button>
                    </div>
                </footer>
            </main>
        </>
    )

}