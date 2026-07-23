'use client';

export function HowItWorks() {
  const steps = [
    { number: 1, title: 'Isi Form / Chat WA', desc: 'Isi form singkat di website ini atau langsung hubungi nomor WhatsApp admin resmi CareNurse.' },
    { number: 2, title: 'Konfirmasi Perawat', desc: 'Tim kami mencocokkan perawat terdekat yang memiliki keahlian sesuai dengan kebutuhan kondisi pasien Anda.' },
    { number: 3, title: 'Perawat Tiba di Rumah', desc: 'Perawat tiba sesuai waktu yang disepakati, siap memberikan tindakan medis profesional dan telaten.' },
  ];

  const colors = ['bg-brand-600 shadow-brand-500/30', 'bg-teal-500 shadow-teal-500/30', 'bg-emerald-500 shadow-emerald-500/30'];

  return (
    <section id="cara-pesan" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-extrabold text-xs tracking-wider uppercase bg-brand-50 px-3 py-1 rounded-full">
            Langkah Mudah
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
            3 Cara Praktis Panggil Perawat
          </h2>
          <p className="text-slate-600 mt-2 text-sm">
            Tidak perlu antre lama di rumah sakit. Dapatkan pertolongan perawat langsung di rumah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="text-center p-6 bg-slate-50/70 rounded-3xl border border-slate-100 hover:shadow-lg transition-all group"
            >
              <div
                className={`w-16 h-16 rounded-2xl text-white flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform ${colors[idx]}`}
              >
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}