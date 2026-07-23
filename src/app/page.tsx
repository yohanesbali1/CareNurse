'use client';

import { useState, useEffect, useRef } from 'react';
import { SplashScreen } from '@/components/common/SplashScreen';
import { ScrollProgress } from '@/components/common/ScrollProgress';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { FloatingWhatsApp } from '@/components/common/FloatingWhatsApp';
import { BackToTop } from '@/components/common/BackToTop';
import { TopNotice } from '@/components/sections/TopNotice';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { TrustBadges } from '@/components/sections/TrustBadges';
import { Services } from '@/components/sections/Services';
import { Calculator } from '@/components/sections/Calculator';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Pricing } from '@/components/sections/Pricing';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';
import { WHATSAPP_DEFAULT_CONFIG } from '@/lib/constants';

export default function HomePage() {
  const [phoneNumber, setPhoneNumber] = useState(WHATSAPP_DEFAULT_CONFIG.phoneNumber);
  const [progress, setProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const bookingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
      setShowBackToTop(currentScroll > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollToBooking = () => {
    if (bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      <SplashScreen />
      <ScrollProgress progress={progress} />
      <TopNotice phoneNumber={phoneNumber} onPhoneChange={setPhoneNumber} />
      <Header phoneNumber={phoneNumber} />
      <div ref={bookingRef}>
        <Hero phoneNumber={phoneNumber} onBookNow={scrollToBooking} />
      </div>
      <ScrollReveal><TrustBadges /></ScrollReveal>
      <Services phoneNumber={phoneNumber} />
      <ScrollReveal delay={100}><Calculator phoneNumber={phoneNumber} /></ScrollReveal>
      <ScrollReveal delay={100}><WhyChooseUs /></ScrollReveal>
      <ScrollReveal delay={100}><Pricing phoneNumber={phoneNumber} /></ScrollReveal>
      <ScrollReveal delay={100}><HowItWorks /></ScrollReveal>
      <ScrollReveal delay={100}><Testimonials /></ScrollReveal>
      <ScrollReveal delay={100}><FAQ /></ScrollReveal>
      <ScrollReveal delay={100}><CTA phoneNumber={phoneNumber} /></ScrollReveal>
      <ScrollReveal delay={100}><Footer phoneNumber={phoneNumber} /></ScrollReveal>
      <FloatingWhatsApp phoneNumber={phoneNumber} />
      <BackToTop visible={showBackToTop} onClick={scrollToTop} />
    </>
  );
}