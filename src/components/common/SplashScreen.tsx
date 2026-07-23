'use client';

import { useEffect, useState } from 'react';
import { HeartPulse, ShieldCheck } from 'lucide-react';

export function SplashScreen() {
  const [phase, setPhase] = useState<'enter' | 'exit-scale' | 'exit-slide' | 'gone'>('enter');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar from 0 to 100
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 18 + 5;
        return next >= 100 ? 100 : next;
      });
    }, 200);

    const t1 = setTimeout(() => {
      setProgress(100);
      clearInterval(progressInterval);
    }, 1800);

    const t2 = setTimeout(() => setPhase('exit-scale'), 2200);
    const t3 = setTimeout(() => setPhase('exit-slide'), 2600);
    const t4 = setTimeout(() => setPhase('gone'), 2900);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
      clearInterval(progressInterval);
    };
  }, []);

  if (phase === 'gone') return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-brand-950 text-white transition-all duration-500 ease-in-out ${
        phase === 'exit-scale'
          ? 'opacity-0 scale-90'
          : phase === 'exit-slide'
          ? 'opacity-0 scale-90 -translate-y-full'
          : 'opacity-100 scale-100 translate-y-0'
      }`}
    >
      <div className={`flex flex-col items-center text-center p-6 max-w-sm transition-all duration-500 ${
        phase === 'exit-scale' ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
      }`}>
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-brand-500 to-teal-400 flex items-center justify-center text-white shadow-2xl mb-6 animate-pulse-glow">
          <HeartPulse className="w-10 h-10 animate-bounce" />
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-white mb-1">
          Care<span className="text-brand-400">Nurse</span>
        </h1>
        <p className="text-xs text-slate-400 font-medium tracking-wider uppercase mb-6">
          Layanan Perawat Panggilan 24/7
        </p>

        <div className="w-48 bg-slate-800/80 rounded-full h-1.5 overflow-hidden mb-3 border border-slate-700/50">
          <div
            className="bg-gradient-to-r from-brand-500 via-teal-400 to-emerald-400 h-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-[11px] text-slate-400 flex items-center gap-1.5 animate-pulse">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
          Menyiapkan Layanan Medis Terpercaya...
        </span>
      </div>
    </div>
  );
}