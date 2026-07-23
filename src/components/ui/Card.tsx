'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, hover = true, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-white rounded-3xl border border-slate-100 shadow-sm',
        hover && 'transition-all duration-300 hover:shadow-xl card-tilt',
        className
      )}
    >
      {children}
    </div>
  );
}