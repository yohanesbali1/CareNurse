'use client';

import { X, Check, MessageCircle, Stethoscope } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { cn, formatRupiah } from '@/lib/utils';
import { Service } from '@/types';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
  onOrder: (serviceName: string) => void;
}

export function ServiceModal({ isOpen, onClose, service, onOrder }: ServiceModalProps) {
  if (!service) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center font-bold">
          <Stethoscope className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-extrabold text-slate-900 text-lg">{service.title}</h3>
          <p className="text-xs text-slate-500">CareNurse Professional Detail</p>
        </div>
      </div>

      <p className="text-xs text-slate-600 leading-relaxed">{service.description}</p>

      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
        <h4 className="text-xs font-bold text-slate-800">Cakupan Tindakan:</h4>
        <ul className="space-y-1.5 text-xs text-slate-600">
          {['Prosedur pencucian luka dengan antiseptik non-iritasi', 'Penggunaan kassa modern dressing higienis', 'Edukasi cara memposisikan area luka di rumah', `Estimasi durasi: ${service.duration}`].map(
            (item, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" />
                {item}
              </li>
            )
          )}
        </ul>
      </div>

      <div className="flex justify-between items-center pt-2">
        <div>
          <span className="block text-[10px] text-slate-400 font-bold uppercase">Estimasi Biaya</span>
          <span className="font-bold text-brand-600 text-sm sm:text-base">{service.price}</span>
        </div>
        <button
          onClick={() => onOrder(service.title)}
          className="bg-wa-500 hover:bg-wa-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-md transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Pesan via WA</span>
        </button>
      </div>
    </Modal>
  );
}