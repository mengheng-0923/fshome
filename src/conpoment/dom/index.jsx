import style from './index.module.css';
import './cssStyle.css'
import { useEffect, useRef, useState } from 'react';

export default function User() {
    //变量
    const [flag, setFalg] = useState(true)
    const [value, setValue] = useState('')
    //事件
    const habdleClick = (param1, param2) => (event) => {
        console.log(param1, param2)
        setFalg(!flag)
    }
    const valueChange = (event) => {
        setValue(event.target.value)
        console.log(event.target.value)
    }

    const refCurrent = useRef()
    useEffect(() => {
        refCurrent.current.focus()
    }, [])

    return <>
        {/* css引入 */}
        <div className={style.div}>123</div>
        <p className="backColor">123</p>
        <span className={flag ? style.red : style.yellow}>123</span>

        {/* 事件传参*/}
        {/* 1.bind */}
        {/* 2.函数柯里化 */}
        <button onClick={habdleClick(2, 444)}>转换</button>

        {/* 条件渲染 */}
        {
            flag ? <span>我的</span> : <span>你的</span>
        }

        {/* 获取input的值 */}
        <input onChange={valueChange} value={value} />
        {/* ref的使用 */}
        <input ref={refCurrent}></input>
    </>
}
