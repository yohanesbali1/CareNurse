'use client';

import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/constants';

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  const filtered = FAQ_ITEMS.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase()) ||
    item.answer.toLowerCase().includes(search.toLowerCase())
  );

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-brand-600 font-extrabold text-xs tracking-wider uppercase bg-brand-50 px-3 py-1 rounded-full">
            Tanya Jawab
          </span>
          <h2 className="text-3xl font-black text-slate-900 mt-3">Pertanyaan Umum (FAQ)</h2>
          <p className="text-slate-500 text-sm mt-2">
            Cari pertanyaan yang sering ditanyakan mengenai perawat panggilan.
          </p>
        </div>

        <div className="relative mb-8 max-w-xl mx-auto">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari pertanyaan (misal: lisensi, bayar, alat)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50"
          />
        </div>

        <div className="space-y-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex justify-between items-center p-5 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors"
              >
                <span className="text-sm sm:text-base">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50 ${
                  openId === item.id ? 'block' : 'hidden'
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}