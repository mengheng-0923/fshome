import React, { useEffect } from 'react';

import style from './style.module.css';
import pc from '../../../assets/7.png';
import iped from '../../../assets/9.jpeg';
import moblie1 from '../../../assets/1.png';
import moblie2 from '../../../assets/2.png';
import moblie3 from '../../../assets/3.jpg';
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
                <div className={style.fadeinup} >
                    <picture >
                        <source media='(max-width: 1250px)' srcSet={iped} />
                        <img src={pc} alt="" style={{ width: '100%', height: "15%" }} />
                    </picture>
                    <div className={style.info}> 一玥家居，夜伴一帘幽梦</div>
                    <div className={style.box}>
                        <div className={style.boxitem}>
                            <img src={moblie1} alt="" className={style.roundedCorners} style={{ width: '40%', height: "14%" }} />
                            <img src={moblie2} alt="" className={style.roundedCorners} style={{ width: '40%', height: "14%" }} />
                        </div>
                        <div className={style.boxitem}>
                            <img src={moblie3} alt="" className={style.roundedCorners} style={{ width: '40%', height: "14%" }} />
                            <img src={moblie4} alt="" className={style.roundedCorners} style={{ width: '40%', height: "14%" }} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )

}