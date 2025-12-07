import { Collapse } from 'antd';
import { footerData } from '../infodata';
import style from './index.module.css';
import './style.css';
const { Panel } = Collapse;
export default function Footer() {
    return (<>
        <main className={style.footerbox}>
            <section className={style.footersection}>
                <ul>
                    <li> 一玥家居，您身边的智慧窗帘美学专家。我们专注于窗饰产品的设计、研发与定制服务，致力于为现代都市家庭，特别是追求品质与个性的年轻一代，打造集功能性、美学设计与智能科技于一体的窗帘解决方案。
                        我们不仅提供遮阳与隐私保护，更提供一种全新的生活方式体验。</li>
                    <li>四大核心优势，定义未来人居：</li>
                    <li>1.绿色环保，健康优先</li>
                    <li> 我们坚信，健康是美好生活的基石。一玥家居严格甄选天然棉麻、丝绸、高分子环保纤维等健康无害材料。所有产品均符合严苛的环保标准，采用无醛添加、水性印染工艺。我们关注甲醛等室内污染问题，为您和家人的呼吸健康提供坚实保障，让您在窗前享受每一缕纯净空气。</li>
                    <li>2.智能科技，未来已来</li>
                    告别传统手动拉拽，迎接“AI无感”智能生活。一玥家居提供全系列的电动窗帘与智能遮阳系统。产品可无缝接入华为鸿蒙、米家等主流智能家居生态，支持手机APP远程控制、智能音箱语音操作，甚至实现根据日出日落自动开关、联动室内光照传感器等智能场景。科技，让窗帘成为懂您生活的伙伴。
                    ;<li>3.私人定制，专属品味</li>
                    千篇一律的设计无法满足独特的您。一玥家居的核心服务在于彻底的“私人定制”。从测量、选材、款式设计（如布艺帘、百叶窗、卷帘、风琴帘等），到色彩搭配与安装维护，我们提供“一对一”设计师全案服务。无论是极简奶油风、复古中古风，还是现代轻奢风，我们都能精准匹配您的家居风格与个性化功能需求。
                    <li>4.年轻视角，时尚美学</li>
                    我们洞察年轻一代的审美趋势，将时尚元素与实用功能相结合。一玥家居的设计风格紧跟国际前沿，注重色彩的层次感与材质的碰撞，打造高颜值、高性价比的窗饰产品。我们的窗帘不仅是遮光工具，更是提升空间格调、彰显主人独特品味的艺术软装。
                    一玥家居，以创新科技赋能窗帘艺术，以个性定制服务每一位热爱生活的年轻人。开启一玥家居，开启您的理想生活
                </ul>
            </section>
            <Collapse bordered={false} defaultActiveKey={['1']}>
                {
                    footerData.map((item) => {
                        return <Panel header={item.title} key={item.id}>
                            <div className={style.panelitem}>
                                {
                                    item.content.map((items) => {
                                        return <li key={items.ids}>{items.type}</li>
                                    })
                                }
                            </div>
                        </Panel>
                    })
                }
            </Collapse>
            <div className={style.footerinfo}>
                <div>更多选购方式：</div>
                <div>抖音 / 小红书：一玥家居； 拼多多：孟玥家居。</div>
                <div>致电：<a>15869155376</a></div>
                <div>微信：<a>2532051336</a></div>
            </div>
        </main>
    </>)
}