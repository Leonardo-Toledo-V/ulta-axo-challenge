import { useEffect, useState } from 'react';

interface Breakpoints {
  base: number;
  sm: number;
  lg: number;
  xl: number;
}

export function useItemsPerView(breakpoints: Breakpoints) {
  const calculateItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return breakpoints.xl;
      if (window.innerWidth >= 1024) return breakpoints.lg;
      if (window.innerWidth >= 640) return breakpoints.sm;
    }
    return breakpoints.base;
  };

  const [itemsPerView, setItemsPerView] = useState(calculateItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(calculateItemsPerView());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return itemsPerView;
}
