'use client';

import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  visible: boolean;
  onClick: () => void;
}

export function BackToTop({ visible, onClick }: BackToTopProps) {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 left-6 z-40 bg-white/90 border border-slate-200 text-slate-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-brand-500 hover:text-white hover:scale-110 ${
        visible
          ? 'opacity-100 scale-100 pointer-events-auto'
          : 'opacity-0 scale-50 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}