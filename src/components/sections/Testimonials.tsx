'use client';

import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

export function Testimonials() {
  return (
    <section className="py-20 bg-slate-50/80 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-extrabold text-xs tracking-wider uppercase bg-brand-100 px-3 py-1 rounded-full">
            Testimoni Pasien
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
            Pengalaman Keluarga Pasien
          </h2>
          <p className="text-slate-600 mt-2 text-sm">
            Kepuasan dan kenyamanan pemulihan keluarga Anda adalah kebanggaan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex text-amber-400 space-x-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 italic leading-relaxed">
                  &quot;{t.content}&quot;
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-2 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full ${t.bgColor} ${t.textColor} font-bold flex items-center justify-center text-sm`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.author}</h4>
                  <span className="text-[11px] text-slate-400">
                    {t.location} &bull; {t.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}