'use client';

import { MessageCircle } from 'lucide-react';
import { generateWhatsAppMessage, getWhatsAppUrl } from '@/lib/utils';

interface CTAProps {
  phoneNumber: string;
}

export function CTA({ phoneNumber }: CTAProps) {
  const handleClick = () => {
    const message = generateWhatsAppMessage({ service: 'Butuh Perawat Panggilan Hari Ini' });
    window.open(getWhatsAppUrl(phoneNumber, message), '_blank');
  };

  return (
    <section className="bg-gradient-to-r from-wa-600 via-emerald-600 to-teal-700 text-white py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-black">Butuh Perawat Ke Rumah Hari Ini?</h2>
        <p className="text-emerald-100 max-w-xl mx-auto text-sm sm:text-base">
          Jangan biarkan kondisi kesehatan pasien tertunda. Tim perawat medis terlatih kami siap meluncur ke lokasi Anda.
        </p>
        <div>
          <button
            onClick={handleClick}
            className="bg-white text-emerald-800 hover:bg-emerald-50 font-bold px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-3"
          >
            <MessageCircle className="w-6 h-6 text-wa-500" />
            <span className="text-base sm:text-lg">Chat WhatsApp Sekarang</span>
          </button>
        </div>
      </div>
    </section>
  );
}