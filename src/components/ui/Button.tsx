'use client';

import { cn } from '@/lib/utils';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'wa' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      'bg-gradient-to-r from-wa-500 to-emerald-600 hover:from-wa-600 hover:to-emerald-700 text-white shadow-lg shadow-wa-500/30',
    secondary:
      'bg-white/90 hover:bg-slate-100 text-slate-800 border border-slate-200/80',
    wa: 'bg-wa-500 hover:bg-wa-600 text-white shadow-md shadow-wa-500/20',
    ghost: 'bg-slate-100 hover:bg-slate-200 text-slate-700',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-5 py-3',
    lg: 'text-base px-8 py-4',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}