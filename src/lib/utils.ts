import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function generateWhatsAppMessage(params: {
  service?: string;
  patientName?: string;
  location?: string;
  dateTime?: string;
  notes?: string;
  packageName?: string;
}): string {
  const lines = ['Halo CareNurse, saya ingin memesan layanan perawat:'];
  
  if (params.packageName) {
    lines.push(`📦 Paket: ${params.packageName}`);
  }
  if (params.service) {
    lines.push(`🩺 Layanan: ${params.service}`);
  }
  if (params.patientName) {
    lines.push(`👤 Nama Pasien: ${params.patientName}`);
  }
  if (params.location) {
    lines.push(`📍 Lokasi: ${params.location}`);
  }
  if (params.dateTime) {
    lines.push(`📅 Waktu: ${params.dateTime}`);
  }
  if (params.notes) {
    lines.push(`📝 Catatan: ${params.notes}`);
  }
  
  lines.push('\nMohon konfirmasi ketersediaan perawat & estimasi biaya. Terima kasih!');
  
  return encodeURIComponent(lines.join('\n'));
}

export function getWhatsAppUrl(phoneNumber: string, message: string): string {
  return `https://wa.me/${phoneNumber}?text=${message}`;
}

export function animateCounter(
  element: HTMLElement,
  target: number,
  duration: number = 1500,
  suffix: string = ''
): void {
  if (element.dataset.animated === 'true') return;
  element.dataset.animated = 'true';
  
  const start = 0;
  const steps = 60;
  const stepValue = target / steps;
  const stepTime = duration / steps;
  let current = start;
  
  const timer = setInterval(() => {
    current += stepValue;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current).toLocaleString('id-ID') + suffix;
  }, stepTime);
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}