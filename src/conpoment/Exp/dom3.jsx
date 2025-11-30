
import React, { useState, useEffect, useCallback } from 'react';

const OptimizedWindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  const [screenType, setScreenType] = useState('');

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const handleResize = useCallback(debounce(() => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    
    setWindowSize({
      width: newWidth,
      height: newHeight
    });

    // 判断屏幕类型
    if (newWidth < 768) {
      setScreenType('移动端');
    } else if (newWidth < 1024) {
      setScreenType('平板端');
    } else {
      setScreenType('桌面端');
    }
  }, 100), []);

  useEffect(() => {
    handleResize(); // 初始化调用
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: screenType === '移动端' ? '#fff5f5' : 
                screenType === '平板端' ? '#f0fff0' : '#f0f8ff'
    }}>
      <h2>优化版窗口监听</h2>
      <div style={{ 
        padding: '15px', 
        borderRadius: '8px',
        border: '1px solid #ddd',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <p>窗口宽度: <strong>{windowSize.width}px</strong></p>
        <p>窗口高度: <strong>{windowSize.height}px</strong></p>
        <p>屏幕类型: <strong style={{ color: '#007acc' }}>{screenType}</strong></p>
      </div>
    </div>
  );
};

export default OptimizedWindowResize;
