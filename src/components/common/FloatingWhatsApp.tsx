'use client';

import { generateWhatsAppMessage, getWhatsAppUrl } from '@/lib/utils';
import { WHATSAPP_DEFAULT_CONFIG } from '@/lib/constants';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
}

export function FloatingWhatsApp({ phoneNumber = WHATSAPP_DEFAULT_CONFIG.phoneNumber }: FloatingWhatsAppProps) {
  const handleClick = () => {
    const message = generateWhatsAppMessage({
      service: 'Halo CareNurse, saya ingin tanya layanan perawat',
    });
    window.open(getWhatsAppUrl(phoneNumber, message), '_blank');
  };

  return (
    <div className="fixed z-10 bottom-6 right-6 z-40">
      <button
        onClick={handleClick}
        className="group flex items-center bg-wa-500 hover:bg-wa-600 text-white p-4 rounded-full shadow-2xl shadow-wa-500/50 transition-all duration-300 hover:scale-110 relative"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300" />
        </span>
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-sm ml-0 group-hover:ml-2">
          Chat WA Direct
        </span>
      </button>
    </div>
  );
}