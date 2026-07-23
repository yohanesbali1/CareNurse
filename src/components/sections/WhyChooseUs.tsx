'use client';

import { ShieldAlert, HeartHandshake, FileSpreadsheet, MapPin } from 'lucide-react';

const features = [
  {
    number: 1,
    title: 'Verifikasi STR & SIP Aktif',
    desc: 'Memiliki Surat Tanda Registrasi & Surat Izin Praktek resmi kesehatan.',
  },
  {
    number: 2,
    title: 'Pemesanan Tanpa Ribet',
    desc: 'Cukup melalui obrolan WhatsApp, jadwal dan perawat langsung dikonfirmasi.',
  },
  {
    number: 3,
    title: 'Rincian Transparan',
    desc: 'Semua biaya jasa dan peralatan dikomunikasikan secara lugas sejak awal.',
  },
];

const gridItems = [
  { icon: ShieldAlert, title: 'Prosedur Medis Steril', desc: 'Menggunakan sarung tangan, kassa steril, dan instrumen medis berstandar rumah sakit.', color: 'bg-brand-100 text-brand-600', offset: false },
  { icon: HeartHandshake, title: 'Pendampingan Emosional', desc: 'Memberikan dukungan mental dan rasa hangat agar pasien tetap ceria selama masa pemulihan.', color: 'bg-emerald-100 text-emerald-600', offset: true },
  { icon: FileSpreadsheet, title: 'Laporan Rekam Medis', desc: 'Setiap perkembangan tensi, gula darah, dan catatan obat tercatat rapi untuk laporan dokter.', color: 'bg-indigo-100 text-indigo-600', offset: false },
  { icon: MapPin, title: 'Jangkauan Area Luas', desc: 'Melayani area Jabodetabek dan sekitarnya dengan perawat lokal terdekat dari posisi Anda.', color: 'bg-amber-100 text-amber-600', offset: true },
];

export function WhyChooseUs() {
  return (
    <section id="keunggulan" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-brand-600 font-extrabold text-xs tracking-wider uppercase bg-brand-50 px-3 py-1 rounded-full">
              Standar Kesehatan
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Mengapa Keluarga Mempercayakan Kami?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Keluarga Anda berhak mendapatkan perawatan terbaik. Seluruh tim perawat kami telah melalui verifikasi berkas legalitas dan tes klinis berkala.
            </p>

            <div className="space-y-4 pt-2">
              {features.map((f) => (
                <div key={f.number} className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-600 flex-shrink-0 flex items-center justify-center font-bold mt-1">
                    {f.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{f.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gridItems.map((item) => (
              <div
                key={item.title}
                className={`bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:shadow-lg transition-all space-y-3 ${
                  item.offset ? 'sm:mt-8' : ''
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}