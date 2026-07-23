'use client';

import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, HeartPulse, ShieldCheck, Clock, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { generateWhatsAppMessage, getWhatsAppUrl } from '@/lib/utils';

interface HeaderProps {
  phoneNumber?: string;
}

export function Header({ phoneNumber = '6281234567890' }: HeaderProps) {
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
          className="lg:hidden text-slate-700 p-2 rounded-xl hover:bg-slate-100 transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Backdrop - higher z-index to cover everything */}
      <div
        className={`fixed inset-0 h-[100vh] z-50 bg-slate-950/70 backdrop-blur-sm transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Full-screen sidebar modal from left */}
      <div
        className={`fixed inset-0 h-[100vh] z-50 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Dark backdrop with gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent transition-opacity duration-500 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />

        {/* Sidebar panel */}
        <div
          className={`relative w-80 max-w-[85vw] h-full bg-white shadow-2xl shadow-slate-950/30 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Gradient top bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 via-teal-400 to-emerald-400 z-10" />

          {/* Close button inside sidebar */}
          <button
            onClick={closeMenu}
            className="absolute top-5 right-5 z-10 w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col h-full">
            {/* Brand area */}
            <div className="px-6 pt-12 pb-6 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xl font-extrabold text-slate-900">Care<span className="text-brand-600">Nurse</span></span>
                  <span className="block text-[9px] text-slate-400 font-medium tracking-wider uppercase">Home Care Medical Services</span>
                </div>
              </div>
            </div>

            {/* Navigation links */}
            <div className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-3 pb-2">Menu Layanan</div>
              {NAV_LINKS.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-center justify-between px-4 py-3.5 rounded-2xl text-slate-700 font-semibold hover:bg-gradient-to-r hover:from-brand-50 hover:to-blue-50 hover:text-brand-700 hover:shadow-sm transition-all duration-200"
                  style={{
                    transitionDelay: mobileOpen ? `${index * 60}ms` : '0ms',
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `opacity 0.4s cubic-bezier(0.22,1,0.36,1) ${mobileOpen ? `${index * 60}ms` : '0ms'}, transform 0.4s cubic-bezier(0.22,1,0.36,1) ${mobileOpen ? `${index * 60}ms` : '0ms'}`,
                  }}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-brand-500 group-hover:translate-x-1 transition-all duration-200" />
                </a>
              ))}
            </div>

            {/* Bottom area */}
            <div className="px-4 pb-8 space-y-3">
              <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>STR Resmi</span>
                </div>
                <div className="w-px h-4 bg-slate-200" />
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>24 Jam</span>
                </div>
              </div>

              <button
                onClick={() => { handleWaClick('Konsultasi Umum Mobile Menu'); closeMenu(); }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-wa-500 to-emerald-600 hover:from-wa-600 hover:to-emerald-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-wa-500/30 transition-all duration-200 active:scale-[0.97]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Hubungi WhatsApp Direct</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}