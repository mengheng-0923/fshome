import banner from '../../../assets/7.png'; 
import ipde from '../../../assets/3.jpg'; 
// import ipde from '../../../assets/10.jpeg'
import style from './index.module.css'

export default function Main() {
    return (
        <>
            <main>
                <div className={style.narrator}>
                    <span>
                        <strong>一玥</strong>
                        让您的家装更安全、让您的生活更舒适、让您更爱家、更爱居家的家居设计。
                        <a>进一步了解 {">"} </a>
                    </span>
                </div>
                <div className={style.content}>
                    <h1>一玥家居</h1>
                    <h1>让您更爱家</h1>
                    <h1>更爱您的家人...</h1>
                </div>


                {/* <picture>
                    2. 定义媒体查询条件：当最大宽度为 768px 时，使用移动端图片
                    <source media="(max-width: 768px)" srcSet={mobileImage} />
                    3. 定义另一个条件：默认使用桌面端图片
                    <source media="(min-width: 769px)" srcSet={desktopImage} />
                    4. 如果浏览器不支持 <picture> 标签，或者以上条件都不满足，显示这个
                    <img src={fallbackImage} alt="响应式背景图" style={{ width: '100%' }} />
                </picture> */}
                <picture className={style.pictures}>
                    <source media='(max-width: 1250px)' srcSet={ipde} style={{ width: "100%", height: '500px' }} />
                    {/* <img src={ipde} alt="网站 Logo"  className={style.ipde} /> */}
                    <img src={banner} alt="网站 Logo" style={{ width: "100%", height: '600px' }} />
                    {/* <img src={banner} alt="网站 Logo" style={{ width: "100%", height: '600px' }} /> */}
                    {/* <img src={banner} alt="网站 Logo" style={{ width: "100%", height: '600px' }} /> */}
                </picture>

            </main>

        </>
    )

}