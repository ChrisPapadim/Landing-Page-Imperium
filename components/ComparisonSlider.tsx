import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  labelBefore?: string;
  labelAfter?: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ 
  beforeImage, 
  afterImage,
  labelBefore = "Before",
  labelAfter = "After"
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => setIsResizing(true);
  const handleTouchStart = () => setIsResizing(true);
  
  const handleMouseUp = useCallback(() => setIsResizing(false), []);
  const handleTouchEnd = useCallback(() => setIsResizing(false), []);

  const handleMove = useCallback((clientX: number) => {
    if (!isResizing || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const newWidth = (x / rect.width) * 100;
    
    if (newWidth >= 0 && newWidth <= 100) {
      setWidth(newWidth);
    }
  }, [isResizing]);

  const handleMouseMove = useCallback((e: MouseEvent) => handleMove(e.clientX), [handleMove]);
  const handleTouchMove = useCallback((e: TouchEvent) => handleMove(e.touches[0].clientX), [handleMove]);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isResizing, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-2xl select-none cursor-ew-resize border border-white/10 shadow-2xl"
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="After" 
        className="absolute top-0 left-0 w-full h-full object-cover"
        draggable={false}
      />
      
      {/* Label After */}
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur text-white px-3 py-1 rounded text-sm font-medium z-10 pointer-events-none">
        {labelAfter}
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${width}%` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="absolute top-0 left-0 max-w-none h-full object-cover"
          style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
          draggable={false}
        />
        {/* Label Before */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur text-white px-3 py-1 rounded text-sm font-medium z-10 pointer-events-none">
          {labelBefore}
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${width}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-slate-900">
           <MoveHorizontal size={16} />
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;