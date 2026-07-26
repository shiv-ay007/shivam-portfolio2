import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    // Hover effect for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.glass-card')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  // Smooth lag effect for trailing ring and ambient light shadow
  useEffect(() => {
    let animationFrameId;

    const updateTrailing = () => {
      setTrailingPos(prev => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    animationFrameId = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Cursor Following Ambient Radial Shadow Glow */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-30 transition-opacity duration-300"
        style={{
          transform: `translate3d(${trailingPos.x - 140}px, ${trailingPos.y - 140}px, 0)`,
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(168, 85, 247, 0.12) 45%, transparent 70%)',
          filter: 'blur(30px)',
          opacity: isHovered ? 0.8 : 0.4,
        }}
      />

      {/* 2. Outer Smooth Trailing Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-cyan-400/60 transition-transform duration-100 ease-out backdrop-blur-[1px] ${
          isHovered
            ? 'scale-150 border-purple-400 bg-cyan-500/10 shadow-[0_0_20px_rgba(56,189,248,0.5)]'
            : isMouseDown
            ? 'scale-75 border-pink-500'
            : 'scale-100'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x - 18}px, ${trailingPos.y - 18}px, 0)`,
          width: '36px',
          height: '36px',
        }}
      />

      {/* 3. Central Precision Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shadow-[0_0_10px_#38bdf8]"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
          width: '8px',
          height: '8px',
        }}
      />
    </>
  );
};

export default CustomCursor;
