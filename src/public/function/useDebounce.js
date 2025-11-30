// hooks/useDebounce.js
import { useState, useEffect, useRef } from 'react';

/**
 * 一个用于防抖处理的自定义 Hook。
 *
 * @param {any} value 需要防抖的值
 * @param {number} delay 延迟时间（毫秒）
 * @returns {any} 防抖后的值
 */
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timerRef = useRef();

  useEffect(() => {
    // 每次 value 或 delay 改变时，清除旧的定时器
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // 设置新的定时器，在 delay 毫秒后更新 debouncedValue
    timerRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // 清理函数：在组件卸载或 useEffect 重新运行前清除定时器
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [value, delay]); // 只有当 value 或 delay 改变时才重新运行 effect

  return debouncedValue;
}

export default useDebounce;
