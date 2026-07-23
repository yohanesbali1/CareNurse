'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { CALCULATOR_OPTIONS } from '@/lib/constants';
import { formatRupiah, generateWhatsAppMessage, getWhatsAppUrl } from '@/lib/utils';

interface CalculatorProps {
  phoneNumber: string;
}

export function Calculator({ phoneNumber }: CalculatorProps) {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [days, setDays] = useState(1);
  const [includeKit, setIncludeKit] = useState(false);
  const [includeUrgent, setIncludeUrgent] = useState(false);

  const selectedService = CALCULATOR_OPTIONS[serviceIndex];
  const basePrice = selectedService.price;
  let total = basePrice * days;
  if (includeKit) total += 50000;
  if (includeUrgent) total += 50000;

  const handleOrder = () => {
    const message = generateWhatsAppMessage({
      service: selectedService.name,
      notes: `Durasi: ${days} Hari\nEstimasi Total: ${formatRupiah(total)}`,
    });
    window.open(getWhatsAppUrl(phoneNumber, message), '_blank');
  };

  return (
    <section id="kalkulator" className="py-20 bg-gradient-to-br from-slate-900 via-brand-950 to-slate-950 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-teal-400 font-extrabold text-xs tracking-wider uppercase bg-teal-950/80 px-3.5 py-1 rounded-full border border-teal-800">
            Simulasi Biaya Cepat
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mt-3 text-white">
            Kalkulator Estimasi Biaya Home Care
          </h2>
          <p className="text-slate-400 mt-2 text-sm">
            Hitung perkiraan biaya perawat panggilan secara transparan sebelum memesan.
          </p>
        </div>

        <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-10 border border-slate-700 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  1. Pilih Jenis Tindakan / Layanan
                </label>
                <select
                  value={serviceIndex}
                  onChange={(e) => setServiceIndex(Number(e.target.value))}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-medium text-sm focus:outline-none focus:border-brand-500"
                >
                  {CALCULATOR_OPTIONS.map((opt, i) => (
                    <option key={opt.value} value={i}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  2. Jumlah Hari / Kunjungan
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min={1}
                    max={14}
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full accent-brand-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                  />
                  <span className="font-mono font-bold text-brand-400 text-lg w-16 text-right">
                    {days} Hari
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  3. Tambahan Alat / Kebutuhan Khusus
                </label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeKit}
                      onChange={(e) => setIncludeKit(e.target.checked)}
                      className="rounded border-slate-700 bg-slate-900 text-brand-500 focus:ring-brand-500 w-4 h-4"
                    />
                    <span>Termasuk Paket Kassa &amp; Antiseptik Steril Kit (+Rp 50.000)</span>
                  </label>
                  <label className="flex items-center space-x-3 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeUrgent}
                      onChange={(e) => setIncludeUrgent(e.target.checked)}
                      className="rounded border-slate-700 bg-slate-900 text-brand-500 focus:ring-brand-500 w-4 h-4"
                    />
                    <span>Panggilan Cepat Emergency Malam / Same Day (+Rp 50.000)</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-900/60 to-slate-900/90 rounded-2xl p-6 border border-brand-800 text-center flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs uppercase font-bold text-brand-300 tracking-wider">
                  Estimasi Total Biaya
                </span>
                <div className="text-4xl sm:text-5xl font-black text-white mt-2 font-mono text-emerald-400">
                  {formatRupiah(total)}
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  *Perkiraan biaya transparan tanpa biaya tersembunyi.
                </p>
              </div>

              <button
                onClick={handleOrder}
                className="w-full bg-wa-500 hover:bg-wa-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-wa-500/30 flex items-center justify-center space-x-2 transition-transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Pesan Sesuai Estimasi Ini</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}