'use client';

import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, HeartPulse } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_DEFAULT_CONFIG } from '@/lib/constants';
import { cn, generateWhatsAppMessage, getWhatsAppUrl } from '@/lib/utils';

interface HeaderProps {
  phoneNumber?: string;
}

export function Header({ phoneNumber = WHATSAPP_DEFAULT_CONFIG.phoneNumber }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleWaClick = (context: string) => {
    const message = generateWhatsAppMessage({ service: context });
    window.open(getWhatsAppUrl(phoneNumber, message), '_blank');
  };

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300">
            <HeartPulse className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Care<span className="text-brand-600">Nurse</span>
            </span>
            <span className="block text-[10px] text-slate-500 font-medium tracking-wider uppercase">
              Home Care Medical Services
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center space-x-8 font-medium text-slate-600 text-sm">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link py-1 hover:text-brand-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={() => handleWaClick('Konsultasi Umum Panggil Perawat')}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold text-white rounded-full group bg-gradient-to-br from-wa-500 to-emerald-600 shadow-md shadow-wa-500/25 transition-transform duration-300 hover:scale-105"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-full flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Hubungi WA Direct</span>
            </span>
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation"
          className="lg:hidden text-slate-700 p-2 rounded-xl hover:bg-slate-100 transition-colors relative z-50"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-30 bg-slate-950/50 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Slide-in drawer mobile menu */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-72 max-w-[80vw] bg-white shadow-2xl transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          <div className="space-y-1 flex-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block py-3 px-4 text-slate-700 font-semibold rounded-xl hover:bg-brand-50 hover:text-brand-600 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100">
            <button
              onClick={() => { handleWaClick('Konsultasi Umum Mobile Menu'); closeMenu(); }}
              className="w-full flex justify-center items-center space-x-2 bg-wa-500 hover:bg-wa-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-wa-500/20 transition-all duration-200 active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Hubungi WA Sekarang</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}