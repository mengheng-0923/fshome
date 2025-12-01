import React, { useEffect } from 'react';

import style from './style.module.css';
import iped from '../../../assets/9.jpeg';
import cl1 from '../../../assets/cl1.jpg';
import cl2 from '../../../assets/cl2.jpg';
import ju1 from '../../../assets/ju1.jpg';
import ju2 from '../../../assets/ju2.jpg';
import moblie4 from '../../../assets/4.jpg';


export default function Main() {

    return (
        <>
            <main>
                <div className={style.narrator} >
                    <span>
                        <strong>一玥</strong>
                        让您的家装更安全、让您的生活更舒适、让您更爱家、更爱居家的家居设计。
                        <a>进一步了解 {">"} </a>
                    </span>
                </div>
                <div >
                    <picture className={style.fadeinup}>
                        <source media='(max-width: 1250px)' srcSet={iped} />
                        <img src={ju2} alt="" style={{ width: '100%', height: "15%" }} />
                    </picture>
                    <div className={style.info}>
                        <div>一玥家居，东方雅韵</div>
                        <div>一玥家居，夜伴一帘幽梦</div>
                    </div>
                    <div className={style.box}>
                        <div>
                            <div>
                                <h3> 窗帘美学：是营造空间氛围、调节情绪、定义风格的“灵魂元素”</h3>
                                精选全球面料：甄选天然棉麻、真丝奢华光泽、绒布温厚触感。<br />
                                量身定制和精准配色：亲临现场，精准测量窗体，结合全屋风格为您提供专业的色彩搭配建议。<br />
                                智能遮阳解决方案：年轻科技，一键切换场景，轻松实现起床唤醒、观影遮阳，让生活更加便捷与舒适。<br />
                                {/* <strong>一玥家居</strong>，让每一扇窗都成为家中最美的风景，让您随心所欲地掌控生活中的每一缕光。 */}
                            </div>
                            <div className={style.boxitem}>
                                <img src={cl1} title='一玥家居' alt="一玥家居" loading="lazy" className={style.roundedCorners} style={{ width: '40%', height: "14%" }} />
                                <img src={cl2} title='一玥家居' alt="玥家居" loading="lazy" className={style.roundedCorners} style={{ width: '40%', height: "14%" }} />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>全屋整体设计</h3>
                                告别千篇一律的样板房，您的家应独一无二：个性化定制，为您量身打造专属空间，专业全案设计，让您拎包入住无烦恼。<br />
                                严选环保材料，品质生活有保障：优先采用高标准板材，守护您和家人的健康。<br />
                                小空间，大智慧，功能与美学并重：
                                从硬装规划到软装搭配，我们确保每一寸空间都和谐统一。我们擅长打造具有内涵的新中式、极简风格，让家成为您心灵休憩的港湾
                            </div>
                            <div>
                                <img src={ju2} title='一玥家居' alt="一玥家居" loading="lazy" className={style.roundedCorners} style={{ width: '100%', height: "14%" }} />
                                <div className={style.boxitem}>
                                    <img src={ju1} title='一玥家居' alt="一玥家居" loading="lazy" className={style.roundedCorners} style={{ width: '40%', height: "14%" }} />
                                    <img src={moblie4} title='一玥家居' alt="一玥家居" loading="lazy" className={style.roundedCorners} style={{ width: '40%', height: "14%" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )

}