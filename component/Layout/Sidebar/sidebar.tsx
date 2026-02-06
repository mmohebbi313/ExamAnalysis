"use client";

import { useState, useEffect, useCallback, Children, isValidElement, cloneElement, ReactNode  } from 'react';
import React from 'react';

interface GentleSliderProps {
  children: ReactNode;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  className?: string;
  transitionDuration?: number;
}

const GentleSlider: React.FC<GentleSliderProps> = ({
  children,
  autoPlay = false,
  autoPlayInterval = 6000,
  showIndicators = false,
  className = '',
  transitionDuration = 700,
}) => {
  const items = Children.toArray(children).filter(isValidElement);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionStage, setTransitionStage] = useState<'idle' | 'exiting' | 'entering'>('idle');
  const [nextIndex, setNextIndex] = useState<number | null>(null);


  const goToSlide = useCallback((targetIndex : number) => {
    if (isAnimating || items.length <= 1 || targetIndex ===currentIndex) return;
    setIsAnimating(true)
    setCurrentIndex(targetIndex);
    setTimeout(() => setIsAnimating(false), transitionDuration);
  } , [isAnimating, items.length, currentIndex, transitionDuration])

  const goToNext = useCallback(() => {
    goToSlide((currentIndex + 1) % items.length)
  }, [currentIndex, items.length, goToSlide]);

  const goToPrev = useCallback(() => {
    goToSlide((currentIndex - 1 + items.length) % items.length)
  }, [currentIndex, items.length, goToSlide]);


  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, goToNext, items.length]);

  // محاسبه موقعیت آیتم‌ها با در نظر گرفتن انیمیشن
  const getSlidePosition = (index: number) => {
    if (index === currentIndex) return 'center';
    if (index === (currentIndex - 1 + items.length) % items.length) return 'left';
    if (index === (currentIndex + 1) % items.length) return 'right';
    return 'hidden';
  };


    
//     // اگر این آیتم در حال خروج است (آیتم فعلی که می‌رود)


const getSlideStyle = (position: 'left' | 'center' | 'right' | 'hidden') => {
  const baseStyle = "absolute transition-all duration-700 ease-in-out transform";
  
  switch(position) {
    case 'left':
      return `${baseStyle} -translate-x-20 scale-90 opacity-60 blur-sm z-10 cursor-pointer`;
    case 'center':
      return `${baseStyle} translate-x-0 scale-100 opacity-100 z-30`;
    case 'right':
      return `${baseStyle} translate-x-20 scale-90 opacity-60 blur-sm z-10 cursor-pointer`;
    case 'hidden':
      return `${baseStyle} opacity-0 scale-90 z-0`;
    default:
      return baseStyle;
  }
};

  if (items.length === 0) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 rounded-3xl">
        <p className="text-gray-500 text-lg">محتوایی برای نمایش وجود ندارد</p>
      </div>
    );
  }


const renderSlides = () => {
  return items.map((item, index) => {
    const position = getSlidePosition(index);
    
    return (
      <div
        key={index}
        className={getSlideStyle(position)}
        onClick={() => {
          if (position === 'left' || position === 'right') {
            goToSlide(index);
          }
        }}
      >
        {cloneElement(item as React.ReactElement<{ className?: string }>, {
          className: `${(item as React.ReactElement).props.className || ''} ${
            position === 'center' ? '' : 'pointer-events-none'
          }`
        })}
      </div>
    );
  });
};

  return (
    <div className={`relative w-full lg:h-125 md:h-90 h-70 overflow-hidden  group ${className}`}>
      {/* Container اصلی */}
      <div className="relative w-full h-full flex items-center justify-center">
        {renderSlides()}
      </div>

      {/* Overlay جهت‌دهی انیمیشن */}
      {transitionStage !== 'idle' && (
        <div className="absolute inset-0 z-40 pointer-events-none">
          <div className={`absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent
                         ${transitionStage === 'exiting' ? 'animate-pulse-subtle' : 'animate-pulse-subtle-reverse'}`}
               >
          </div>
        </div>
      )}

      {/* دکمه‌های ناوبری */}
      {items.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 
            flex items-center justify-center 
            bg-white/80 backdrop-blur-sm 
            rounded-full shadow-lg 
            transition-all duration-300 ease-in-out
            opacity-0 group-hover:opacity-100 hover:scale-110 
            hover:bg-white
            disabled:opacity-50 disabled:cursor-not-allowed
            z-30"            
            aria-label="آیتم قبلی"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-gray-800 transition-transform duration-300 hover:scale-125"
            >
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>

          <button
            onClick={goToNext}
            disabled={isAnimating}
            aria-label="آیتم بعدی"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12  
            flex items-center justify-center 
            bg-white/80 backdrop-blur-sm 
            rounded-full shadow-lg 
            transition-all duration-300 ease-in-out
            opacity-0 group-hover:opacity-100 hover:scale-110 
            hover:bg-white
            disabled:opacity-50 disabled:cursor-not-allowed
            z-30"                        
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-gray-800 transition-transform duration-300 hover:scale-125"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </>
      )}

      {/* Indicators با انیمیشن */}
      {showIndicators && items.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 
                       flex gap-3 z-40">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`relative overflow-hidden rounded-full transition-all duration-700 ease-out
                        ${index === currentIndex 
                          ? 'w-10 bg-white scale-110' 
                          : 'w-3 bg-white/50 hover:bg-white/80 hover:scale-125'}`}
              style={{ 
                height: '6px',
              }}
              aria-label={`برو به اسلاید ${index + 1}`}
            >
              {index === currentIndex && (
                <div 
                  className="absolute top-0 left-0 h-full bg-linear-to-r from-blue-400 to-purple-400 rounded-full"
                  style={{
                    animation: `progress ${autoPlayInterval}ms linear`,
                    animationPlayState: autoPlay && !isAnimating ? 'running' : 'paused'
                  }}
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* شماره اسلاید */}
      {/* {items.length > 1 && (
        // <div className="absolute top-4 right-4 
        //                bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md
        //                text-white px-4 py-2 
        //                rounded-2xl text-sm font-medium
        //                transition-all duration-700 ease-out
        //                transform hover:scale-105 hover:shadow-lg
        //                z-40"
        //      style={{ transitionTimingFunction: easing }}>
        <div className="absolute top-4 right-4 
               bg-black/30 backdrop-blur-sm
               text-white px-3 py-1 
               rounded-full text-sm font-medium
               z-30">
          <span className="font-bold">{currentIndex + 1}</span>
          <span className="mx-2 opacity-60">از</span>
          <span className="font-bold">{items.length}</span>
        </div>
      )} */}
    </div>
  );
};

export default GentleSlider;