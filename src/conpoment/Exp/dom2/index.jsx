import React, { useState, useCallback, useMemo } from 'react';

// useMemo 示例：缓存计算结果
function ExpensiveCalculation({ number }) {
    const expensiveValue = useMemo(() => {
        console.log('执行复杂计算...');
        return number * number; // 模拟耗时计算
    }, [number]);

    return <div>计算结果: {expensiveValue}</div>;
}

// useCallback 示例：缓存函数引用
function ChildComponent({ onClick }) {
    console.log('子组件渲染');
    return <button onClick={onClick}>点击我</button>;
}

const MemoizedChild = React.memo(ChildComponent);

export default function ParentComponent() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    // useCallback 缓存函数，避免子组件不必要渲染
    const handleClick = useCallback(() => {
        console.log('按钮被点击，当前计数:', count);
    }, [count]);

    return (
        <div>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="输入内容观察子组件是否重新渲染"
            />
            <button onClick={() => setCount(c => c + 1)}>
                计数: {count}
            </button>
            <ExpensiveCalculation number={count} />
            <MemoizedChild onClick={handleClick} />
        </div>
    );
}
