import React from 'react';

const BubbleBackground = ({ scrollY = 0 }) => {
  const bubbles = [
    { size: 'w-64 h-64', animation: 'animate-bubble-1', position: { top: '10%', left: '8%' }, parallax: 0.05 },
    { size: 'w-48 h-48', animation: 'animate-bubble-3', position: { top: '30%', left: '30%' }, parallax: -0.03 },
    { size: 'w-40 h-40', animation: 'animate-bubble-2', position: { top: '50%', right: '5%' }, parallax: 0.04 },
    { size: 'w-36 h-36', animation: 'animate-bubble-2', position: { top: '80%', left: '45%' }, parallax: -0.02 },
    { size: 'w-32 h-32', animation: 'animate-bubble-2', position: { top: '20%', right: '10%' } },
    { size: 'w-24 h-24', animation: 'animate-bubble-1', position: { top: '40%', right: '25%' } },
    { size: 'w-44 h-44', animation: 'animate-bubble-3', position: { top: '15%', right: '30%' } },
    { size: 'w-28 h-28', animation: 'animate-bubble-1', position: { top: '70%', right: '35%' } }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className={`bubble ${bubble.size} ${bubble.animation}`}
          style={{
            ...bubble.position,
            transform: bubble.parallax 
              ? `translateY(${scrollY * bubble.parallax}px)` 
              : 'none'
          }}
        />
      ))}
    </div>
  );
};

export default BubbleBackground;