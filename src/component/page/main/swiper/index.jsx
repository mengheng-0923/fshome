// ContinuousMarquee.jsx
import React, { useEffect, useRef, useState } from 'react';
import './ContinuousMarquee.css';

import image1 from '../../../../assets/image3/1.jpg';
import image2 from '../../../../assets/image3/2.jpg';
import image3 from '../../../../assets/image3/3.jpg';
import image4 from '../../../../assets/image3/4.jpg';
import image5 from '../../../../assets/image3/5.jpg';
import image6 from '../../../../assets/image3/6.jpg';
import image7 from '../../../../assets/image3/7.jpg';
import image8 from '../../../../assets/image3/8.jpg';
import image9 from '../../../../assets/image3/9.jpg';
import image10 from '../../../../assets/image3/10.jpg';

const ContinuousMarquee = ({ items }) => {
  const image = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]
  const contentRef = useRef(null);
  // 使用状态来跟踪动画是否暂停
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // 确保 DOM 元素存在
    if (contentRef.current) {
      // 测量第一份内容的精确像素宽度
      // contentRef.current.scrollWidth 是整个内容的宽度（两份数据）
      const totalWidth = contentRef.current.scrollWidth;
      // 我们需要移动的距离是总宽度的一半（即第一份内容的宽度）
      const distanceToMove = totalWidth / 2;

      // 将这个计算出的像素值设置为 CSS 变量 '--marquee-distance'
      contentRef.current.style.setProperty(
        '--marquee-distance',
        `-${distanceToMove}px`
      );

      // 动态调整动画速度以匹配新宽度（可选，让速度感保持一致）
      const speed = distanceToMove / 50; // 例如：每秒移动 50px 速度
      contentRef.current.style.setProperty('--marquee-speed', `${speed}s`);
    }
  }, [items]); // 依赖项数组，确保数据更新时重新计算

  // 处理触摸开始事件（按下）
  const handleTouchStart = () => {
    setIsPaused(!isPaused);
  };
  // 处理触摸结束事件（抬起）
  const handleTouchEnd = () => {
    setIsPaused(false);
  };
  const togglePause = () => {
    setIsPaused(prev => !prev); // 切换 true/false
  };
  return (
    <div className="marquee-container" onClick={togglePause}>
      {/* 将 ref 绑定到内容容器，用于测量 */}
      <div
        className={`marquee-content ${isPaused ? 'is-paused' : ''}`} // 动态添加 'is-paused' 类
        ref={contentRef}
        // 添加鼠标事件（保留PC端hover效果）
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        // 防止触摸滑动时的默认行为
        onTouchCancel={handleTouchEnd}
      >
        {/* 第一份内容 */}
        {items.map((_, index) => (
          <div data-footer-type='image' key={`item-1-${index}`} className="marquee-item" style={{ backgroundImage: `url(${image[index]})` }}></div>
        ))}
        {/* 第二份内容 */}
        {items.map((_, index) => (
          <div data-footer-type='image' key={`item-2-${index}`} className="marquee-item" style={{ backgroundImage: `url(${image[index]})` }}></div>
        ))}
      </div>
    </div>
  );
};

export default ContinuousMarquee;
