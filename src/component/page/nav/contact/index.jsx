import './index.css';
import { PhoneTwoTone, MessageTwoTone, AudioTwoTone } from '@ant-design/icons';

export default function Contact() {
    return (
        <>
            <main className='contact'>
                <div>
                    <div className='textleft'>
                        <PhoneTwoTone className='size' />
                        &nbsp;电 话 : &nbsp;16637770650
                    </div >
                    <div className='textleft'>
                        <AudioTwoTone className='size' />
                        &nbsp;客 服 : &nbsp;&nbsp;021-4564-9870
                    </div>
                    <div className='textleft'>
                        <MessageTwoTone className='size' />
                        &nbsp;邮 箱 : &nbsp;&nbsp;25420513387@qq.com
                    </div>
                </div>
                <div className='address'>浙江绍兴御龙街道2879号外贸大厦3402 <br /><a href="">一玥工作室</a></div>
            </main>
        </>
    )

}