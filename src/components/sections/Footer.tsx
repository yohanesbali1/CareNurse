'use client';

import { HeartPulse } from 'lucide-react';


interface FooterProps {
  phoneNumber: string;
}

export function Footer({ phoneNumber }: FooterProps) {
  const formatDisplay = (num: string) => {
    return `+${num.substring(0, 2)} ${num.substring(2, 5)}-${num.substring(5, 9)}-${num.substring(9)}`;
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3 md:col-span-2">
          <div className="flex items-center space-x-2 text-white font-bold text-lg">
            <HeartPulse className="w-6 h-6 text-brand-500" />
            <span>CareNurse Indonesia</span>
          </div>
          <p className="text-slate-400 max-w-sm leading-relaxed">
            Layanan panggil perawat profesional terpercaya langsung ke rumah. Komitmen kami menghadirkan pelayanan kesehatan aman, hangat, dan standar medis tertinggi.
          </p>
          <div className="text-[11px] text-slate-500 pt-2">
            &copy; 2026 CareNurse. All rights reserved.
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-3">Layanan Populer</h4>
          <ul className="space-y-2">
            <li><a href="#layanan" className="hover:text-white transition-colors">Perawatan Luka Diabetes</a></li>
            <li><a href="#layanan" className="hover:text-white transition-colors">Pasang Infus &amp; Kateter Urine</a></li>
            <li><a href="#layanan" className="hover:text-white transition-colors">Pendamping Lansia Harian</a></li>
            <li><a href="#layanan" className="hover:text-white transition-colors">Perawat Pasca Operasi &amp; Stroke</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-3">Kontak Darurat</h4>
          <p className="mb-2">
            WhatsApp Direct: <br />
            <span className="text-emerald-400 font-mono font-bold text-sm">
              {formatDisplay(phoneNumber)}
            </span>
          </p>
          <p>
            Jam Operasional: <br />
            <span className="text-white font-medium">24 Jam / 7 Hari Seminggu</span>
          </p>
        </div>
      </div>
    </footer>
  );
}