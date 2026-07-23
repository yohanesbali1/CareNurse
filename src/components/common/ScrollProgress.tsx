'use client';

export function ScrollProgress({ progress }: { progress: number }) {
  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-brand-500 via-teal-400 to-emerald-400 z-50 transition-all duration-150"
      style={{ width: `${progress}%` }}
    />
  );
}