'use client';

import { Check, MessageCircle } from 'lucide-react';
import { PACKAGES } from '@/lib/constants';
import { generateWhatsAppMessage, getWhatsAppUrl } from '@/lib/utils';

interface PricingProps {
  phoneNumber: string;
}

export function Pricing({ phoneNumber }: PricingProps) {
  const orderPackage = (packageName: string) => {
    const message = generateWhatsAppMessage({ packageName });
    window.open(getWhatsAppUrl(phoneNumber, message), '_blank');
  };

  return (
    <section id="paket" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-400 font-extrabold text-xs tracking-wider uppercase bg-teal-950 px-3 py-1 rounded-full border border-teal-800">
            Estimasi Tarif
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mt-3">Paket Layanan Perawat</h2>
          <p className="text-slate-400 mt-2 text-sm">
            Pilih paket sesuai dengan frekuensi dan tingkat perawatan yang dibutuhkan pasien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-brand-900/90 to-slate-800 border-2 border-brand-500 shadow-2xl shadow-brand-500/20 relative transform lg:-translate-y-2'
                  : 'bg-slate-800/80 border-slate-700 hover:border-brand-500'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-400 to-brand-500 text-slate-950 text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  Paling Sering Dipilih
                </div>
              )}

              <div>
                <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border ${
                  pkg.type === 'visit'
                    ? 'text-brand-400 bg-brand-950 border-brand-800'
                    : pkg.popular
                    ? 'text-teal-300 bg-teal-950 border-teal-800'
                    : 'text-amber-400 bg-amber-950 border-amber-800'
                }`}>
                  {pkg.type === 'visit' ? 'Visit Per-Tindakan' : pkg.type === 'shift' ? 'Harian / Shift' : 'Menginap / Standby'}
                </span>

                <h3 className="text-2xl font-bold mt-4 mb-2">{pkg.name}</h3>
                <p className="text-xs text-slate-400 mb-6">{pkg.description}</p>

                <div className="mb-6">
                  <span className="text-3xl font-black text-white">{pkg.price}</span>
                  <span className="text-xs text-slate-400"> {pkg.priceNote}</span>
                </div>

                <ul className="space-y-3 text-xs text-slate-300 mb-8">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-teal-400" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => orderPackage(pkg.ctaAction)}
                className={`w-full font-bold py-3.5 rounded-xl flex items-center justify-center space-x-2 transition-colors ${
                  pkg.popular
                    ? 'bg-wa-500 hover:bg-wa-600 text-white shadow-lg shadow-wa-500/30'
                    : 'bg-slate-700 hover:bg-wa-500 text-white'
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                <span>{pkg.ctaText}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}