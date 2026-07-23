'use client';

import { useState, useEffect, useRef } from 'react';

export function useCounter(target: number, isActive: boolean, suffix: string = '') {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isActive || hasAnimated) return;
    setHasAnimated(true);

    const steps = 40;
    const stepValue = target / steps;
    let current = 0;

    intervalRef.current = setInterval(() => {
      current += stepValue;
      if (current >= target) {
        current = target;
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      setCount(Math.floor(current));
    }, 30);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive, target, hasAnimated]);

  const displayValue = `${count.toLocaleString('id-ID')}${suffix}`;

  return { count, displayValue };
}