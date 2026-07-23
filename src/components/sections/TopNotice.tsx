'use client';

import { ShieldCheck, Clock, Edit3, X } from 'lucide-react';
import { useState } from 'react';
import { WHATSAPP_DEFAULT_CONFIG } from '@/lib/constants';

interface TopNoticeProps {
  phoneNumber: string;
  onPhoneChange: (newNumber: string) => void;
}

export function TopNotice({ phoneNumber, onPhoneChange }: TopNoticeProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState(phoneNumber);

  const formatDisplay = (num: string) => {
    return `+${num.substring(0, 2)} ${num.substring(2, 5)}-${num.substring(5, 9)}-${num.substring(9)}`;
  };

  const handleSave = () => {
    const cleaned = inputValue.replace(/[^0-9]/g, '');
    if (cleaned.length >= 8) {
      onPhoneChange(cleaned);
      setModalOpen(false);
    }
  };

  return (
    <>
      <div className="bg-brand-900 text-white text-xs py-2 px-4 border-b border-brand-800/60 relative z-30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Perawat Terverifikasi STR &amp; SIP
            </span>
            <span className="hidden md:flex items-center gap-1">
              <Clock className="w-4 h-4 text-amber-400" /> Layanan Emergency 24 Jam
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-slate-300">WhatsApp Admin:</span>
            <div className="flex items-center bg-brand-800/90 rounded-lg px-2.5 py-0.5 border border-brand-700 shadow-inner">
              <span className="font-mono font-semibold text-emerald-300">
                {formatDisplay(phoneNumber)}
              </span>
              <button
                onClick={() => { setInputValue(phoneNumber); setModalOpen(true); }}
                className="ml-2 text-xs text-brand-200 underline hover:text-white transition-colors flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" /> Ubah
              </button>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                Atur Nomor WhatsApp Admin
              </h3>
              <button onClick={() => setModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-500">
              Ubah nomor WhatsApp ini agar seluruh tombol pesan otomatis mengarahkan ke nomor HP/WhatsApp bisnis Anda.
            </p>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nomor WhatsApp (dengan kode 62)
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Contoh: 6281234567890"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <span className="text-[10px] text-slate-400 mt-1 block">
                Format: 6281234567890 (tanpa spasi &amp; tanpa +)
              </span>
            </div>
            <div className="flex justify-end space-x-2 pt-2">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 rounded-xl hover:bg-slate-100"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="px-5 py-2 text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl"
              >
                Simpan Nomor
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}