'use client';

import { CalendarPlus, PhoneCall, CheckCircle2, ClipboardCheck, Send } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { generateWhatsAppMessage, getWhatsAppUrl } from '@/lib/utils';

interface HeroProps {
  phoneNumber: string;
  onBookNow: () => void;
}

export function Hero({ phoneNumber, onBookNow }: HeroProps) {
  const [form, setForm] = useState({
    name: '',
    service: 'Perawatan Luka Medis / Diabetes',
    location: '',
    time: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = generateWhatsAppMessage({
      service: form.service,
      patientName: form.name,
      location: form.location,
      dateTime: form.time,
      notes: form.notes || 'Tidak ada catatan khusus.',
    });
    window.open(getWhatsAppUrl(phoneNumber, message), '_blank');
  };

  const handleConsult = () => {
    const message = generateWhatsAppMessage({ service: 'Tanya Syarat & Konsultasi Perawat' });
    window.open(getWhatsAppUrl(phoneNumber, message), '_blank');
  };

  return (
    <section className="gradient-bg relative overflow-hidden pt-10 pb-20 lg:py-24">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-400/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md border border-brand-200 text-brand-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm animate-bounce-subtle">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>#1 Layanan Perawat Panggilan Resmi STR &amp; SIP</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Rawat Medis Profesional <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-teal-500 to-emerald-600">
                Langsung di Rumah Anda
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Pendampingan medis steril dan telaten untuk pasien pasca operasi, perawatan luka diabetes,
              ganti alat (infus/kateter/NGT), hingga jaga lansia 24 jam. Respon cepat &amp; langsung ditangani via WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onBookNow}
                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-wa-500 to-emerald-600 hover:from-wa-600 hover:to-emerald-700 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-wa-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <CalendarPlus className="w-6 h-6" />
                <span>Pesan Perawat Sekarang</span>
              </button>
              <button
                onClick={handleConsult}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white/90 hover:bg-slate-100 text-slate-800 border border-slate-200/80 font-bold px-6 py-4 rounded-2xl shadow-sm transition-all duration-300 hover:border-brand-300"
              >
                <PhoneCall className="w-5 h-5 text-brand-600" />
                <span>Konsultasi Gratis WA</span>
              </button>
            </div>

            <div className="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">850+</div>
                <div className="text-xs text-slate-500 font-medium">Pasien Terlayani</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">100%</div>
                <div className="text-xs text-slate-500 font-medium">STR Resmi Active</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">&lt; 30 m</div>
                <div className="text-xs text-slate-500 font-medium">Respon Cepat WA</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-brand-500/10 border border-slate-100 relative transition-all duration-300">
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Fast Track Order
              </div>

              <div className="flex items-center space-x-3 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold shadow-inner">
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg">Pesan Panggilan Perawat</h3>
                  <p className="text-xs text-slate-500">Isi singkat untuk terhubung ke WhatsApp</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Nama Pasien / Pemesan</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Contoh: Bpk. Ahmad / Ibu Maria"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 text-sm transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Jenis Perawatan</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 text-sm bg-white"
                    >
                      <option value="Perawatan Luka Medis / Diabetes">Perawatan Luka Medis</option>
                      <option value="Pemasangan Infus / NGT / Kateter">Pasang Infus / Kateter</option>
                      <option value="Pendampingan Lansia (Home Care)">Pendamping Lansia</option>
                      <option value="Perawat Pasca Operasi / Stroke">Pasca Operasi / Stroke</option>
                      <option value="Suntik Vitamin / Vaksinasi">Suntik Vitamin / Booster</option>
                      <option value="Perawat Standby 24 Jam">Perawat Standby 24 Jam</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Kota / Domisili</label>
                    <input
                      type="text"
                      required
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      placeholder="Contoh: Jakarta Selatan"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tanggal &amp; Jam Kunjungan</label>
                  <input
                    type="datetime-local"
                    required
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 text-sm text-slate-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Catatan Keluhan Singkat</label>
                  <textarea
                    rows={2}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Misal: Perawatan luka jahitan, minta ganti perban steril..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-wa-500 hover:bg-wa-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-wa-500/20 flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-[1.01] active:scale-95"
                >
                  <Send className="w-5 h-5" />
                  <span>Kirim Format Ke WhatsApp</span>
                </button>
                <p className="text-[11px] text-center text-slate-400">
                  Pesan otomatis dibuat rapi dalam percakapan WA.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}