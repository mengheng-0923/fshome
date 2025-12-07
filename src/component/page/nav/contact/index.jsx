import './index.css';
import { PhoneTwoTone, MessageTwoTone, AudioTwoTone } from '@ant-design/icons';

export default function Contact() {
    return (
        <>
            <main className='contact'>
                <div>
                    <div className='textleft'>
                        <PhoneTwoTone className='size' />电 话 : &nbsp;15869155376
                    </div >
                    <div className='textleft'>
                        <AudioTwoTone className='size' />客 服 : &nbsp;&nbsp;2532051336
                    </div>
                    <div className='textleft'>
                        <MessageTwoTone className='size' />邮 箱 : &nbsp;&nbsp;2532051336@qq.com
                    </div>
                </div>
                <div className='address'>浙江省杭州市余杭区余杭街道沈家店社区1号综合楼2871室 <br /><a href="">一玥工作室</a></div>
            </main>
        </>
    )

}