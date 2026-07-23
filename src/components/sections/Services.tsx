'use client';

import { useState, useEffect, useRef } from 'react';
import { Activity, Droplet, Heart, Cross, Syringe, Clock, Info, MessageSquare, CheckCircle2 } from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES } from '@/lib/constants';
import { generateWhatsAppMessage, getWhatsAppUrl } from '@/lib/utils';
import { ServiceModal } from '@/components/common/ServiceModal';
import { Service } from '@/types';

interface ServicesProps {
  phoneNumber: string;
}

const iconMap: Record<string, React.ElementType> = {
  activity: Activity,
  droplet: Droplet,
  heart: Heart,
  cross: Cross,
  syringe: Syringe,
  clock: Clock,
};

const colorMap: Record<string, string> = {
  activity: 'bg-rose-50 text-rose-500',
  droplet: 'bg-brand-50 text-brand-600',
  heart: 'bg-amber-50 text-amber-600',
  cross: 'bg-teal-50 text-teal-600',
  syringe: 'bg-purple-50 text-purple-600',
  clock: 'bg-emerald-50 text-emerald-600',
};

export function Services({ phoneNumber }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [modalService, setModalService] = useState<Service | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setSectionVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const openModal = (service: Service) => {
    setModalService(service);
    setModalOpen(true);
  };

  const orderService = (serviceName: string) => {
    const message = generateWhatsAppMessage({ service: serviceName });
    window.open(getWhatsAppUrl(phoneNumber, message), '_blank');
  };

  return (
    <>
      <section id="layanan" ref={sectionRef} className="py-20 bg-slate-50/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="text-brand-600 font-extrabold text-xs tracking-wider uppercase bg-brand-100 px-3 py-1 rounded-full">
              Pilihan Perawatan
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
              Layanan Perawat Home Care
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Hadirkan standar kualitas rumah sakit langsung di kenyamanan kamar keluarga Anda.
            </p>
          </div>

          <div
            className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-100 ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-sm transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-brand-600 text-white'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const Icon = iconMap[service.icon];
              const colorClass = colorMap[service.icon];

              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group card-tilt ${
                    sectionVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: sectionVisible ? `${filteredServices.indexOf(service) * 100}ms` : '0ms' }}
                >
                  <div>
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${colorClass}`}
                    >
                      {Icon && <Icon className="w-7 h-7" />}
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6 text-xs text-slate-600">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <button
                      onClick={() => openModal(service)}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl text-xs transition-colors flex items-center justify-center space-x-1"
                    >
                      <Info className="w-4 h-4" />
                      <span>Detail Layanan</span>
                    </button>
                    <button
                      onClick={() => orderService(service.title)}
                      className="flex-1 bg-wa-500 hover:bg-wa-600 text-white font-bold py-3 rounded-xl text-xs transition-colors flex items-center justify-center space-x-1 shadow-md shadow-wa-500/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Pesan WA</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        service={modalService}
        onOrder={orderService}
      />
    </>
  );
}