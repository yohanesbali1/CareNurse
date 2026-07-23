'use client';

import { Award, Syringe, HeartHandshake, Zap } from 'lucide-react';

const badges = [
  { icon: Award, title: 'STR & SIP Resmi', desc: 'Perawat terdidik & tersumpah', color: 'bg-brand-100 text-brand-600', hoverColor: 'hover:border-brand-200 hover:bg-brand-50/30' },
  { icon: Syringe, title: 'Alat Steril Standar', desc: 'Peralatan medis higienis & baru', color: 'bg-emerald-100 text-emerald-600', hoverColor: 'hover:border-emerald-200 hover:bg-emerald-50/30' },
  { icon: HeartHandshake, title: 'Empati & Sabar', desc: 'Pelayanan ramah berhati hangat', color: 'bg-indigo-100 text-indigo-600', hoverColor: 'hover:border-indigo-200 hover:bg-indigo-50/30' },
  { icon: Zap, title: 'Respon Instan', desc: 'Siap meluncur kapanpun dipanggil', color: 'bg-amber-100 text-amber-600', hoverColor: 'hover:border-amber-200 hover:bg-amber-50/30' },
];

export function TrustBadges() {
  return (
    <section className="bg-white py-10 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className={`p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all duration-300 group ${badge.hoverColor}`}
            >
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${badge.color}`}
              >
                <badge.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">{badge.title}</h4>
              <p className="text-xs text-slate-500 mt-1">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}