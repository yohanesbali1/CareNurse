import { Service, Package, Testimonial, FAQItem, CalculatorOption } from '@/types';

export const SERVICES: Service[] = [
  {
    id: 'luka',
    title: 'Perawatan Luka Medis / Diabetes',
    description: 'Pembersihan luka bakar, luka jahitan operasi, atau luka gangren diabetes secara steril & higienis untuk mencegah infeksi.',
    category: 'luka',
    icon: 'activity',
    features: [
      'Debridement & ganti balutan modern',
      'Sterilisasi cegah infeksi berulang',
    ],
    price: 'Rp 150.000 - Rp 250.000',
    duration: '45 - 60 menit',
  },
  {
    id: 'infus',
    title: 'Pasang Infus, Kateter & NGT',
    description: 'Pemasangan cairan infus vitamin/medis, selang makan NGT, maupun selang kencing kateter urine oleh perawat ahli.',
    category: 'tindakan',
    icon: 'droplet',
    features: [
      'Pemasangan/Pelepasan NGT & Kateter',
      'Pemberian nutrisi & cairan harian',
    ],
    price: 'Rp 175.000 - Rp 220.000',
    duration: '30 - 45 menit',
  },
  {
    id: 'lansia',
    title: 'Pendampingan Lansia (Elder Care)',
    description: 'Pendampingan lansia penuh kehangatan: bantu personal hygiene, cek tensi/gula darah rutin, jadwal obat, dan teman berkomunikasi.',
    category: 'pendampingan',
    icon: 'heart',
    features: [
      'Bantu mandi, makan, & mobilitas',
      'Pemantauan vital sign harian',
    ],
    price: 'Rp 350.000 - Rp 500.000',
    duration: 'Shift 8/12 Jam',
  },
  {
    id: 'operasi',
    title: 'Perawat Pasca Operasi / Stroke',
    description: 'Perawatan intensif pemulihan pasca operasi bedah atau stroke yang butuh monitoring posisi miring, fisioterapi pasif, dan obat.',
    category: 'pendampingan',
    icon: 'cross',
    features: [
      'Manajemen nyeri & alih baring',
      'Latihan fisik pemulihan pasif',
    ],
    price: 'Rp 350.000 - Rp 550.000',
    duration: 'Shift 8/12 Jam',
  },
  {
    id: 'suntik',
    title: 'Suntik Vitamin C & Booster',
    description: 'Layanan injeksi vitamin C, suplemen imunitas, atau obat instruksi dokter langsung ke rumah secara aman & higienis.',
    category: 'tindakan',
    icon: 'syringe',
    features: [
      'Injeksi IV / IM berpengalaman',
      'Jarum disposabel 100% sekali pakai',
    ],
    price: 'Rp 120.000 - Rp 180.000',
    duration: '15 - 30 menit',
  },
  {
    id: 'standby',
    title: 'Perawat Standby 24 Jam',
    description: 'Perawat tinggal menginap di rumah untuk perawatan intensif jangka panjang bagi pasien kronis atau pemulihan berat.',
    category: 'pendampingan',
    icon: 'clock',
    features: [
      'Sistem Shift 8j, 12j, atau 24 Jam',
      'Catatan rekam medis terperinci',
    ],
    price: 'Konsultasi WA',
    duration: 'Mingguan / Bulanan',
  },
];

export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'Semua Layanan' },
  { id: 'luka', label: 'Perawatan Luka' },
  { id: 'tindakan', label: 'Infus & Kateter' },
  { id: 'pendampingan', label: 'Lansia & Operasi' },
] as const;

export const PACKAGES: Package[] = [
  {
    id: 'visit',
    name: 'Tindakan Medis Visit',
    description: 'Cocok untuk ganti perban luka, suntik vitamin, atau pasang/lepas kateter & NGT.',
    type: 'visit',
    price: 'Rp 150rb - 250rb',
    priceNote: '/ visit',
    features: [
      'Durasi 1-2 Jam di lokasi',
      'Cek Tensi & Vital Sign awal',
      'Alat medis steril disiapkan',
      'Edukasi perawatan keluarga',
    ],
    ctaText: 'Pesan Paket Visit',
    ctaAction: 'Paket Visit Per-Tindakan',
  },
  {
    id: 'shift',
    name: 'Shift 8 - 12 Jam',
    description: 'Cocok untuk pendampingan penuh harian pasien pasca operasi atau penderita stroke.',
    type: 'shift',
    price: 'Rp 350rb - 500rb',
    priceNote: '/ shift',
    features: [
      'Standby 8 s/d 12 Jam lokasi',
      'Monitoring Tensi, Suhu & Gula Darah',
      'Bantu Makan, Mandi & Jadwal Obat',
      'Catatan rekam medis teratur',
    ],
    popular: true,
    ctaText: 'Pesan Paket Shift',
    ctaAction: 'Paket Shift Harian 8-12 Jam',
  },
  {
    id: 'livein',
    name: 'Perawat Live-in 24 Jam',
    description: 'Perawat tinggal di rumah untuk perawatan intensif jangka panjang mingguan/bulanan.',
    type: 'livein',
    price: 'Konsultasi WA',
    priceNote: '/ paket mingguan',
    features: [
      'Standby 24 Jam tinggal di lokasi',
      'Garansi ganti perawat bila kurang cocok',
      'Pendampingan medis ICU/Lansia',
      'Harga khusus kontrak bulanan',
    ],
    ctaText: 'Tanya Paket 24 Jam',
    ctaAction: 'Paket Live-in 24 Jam',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    rating: 5,
    content: 'Sangat terbantu saat paman saya baru pulang operasi sesar perut. Perawatnya telaten sekali pas ganti perban luka jahitan dan ramah. Respon WA juga dalam menit!',
    author: 'Bpk. Bambang D.',
    location: 'Jakarta Selatan',
    service: 'Perawatan Luka',
    initials: 'BD',
    bgColor: 'bg-brand-100',
    textColor: 'text-brand-700',
  },
  {
    id: '2',
    rating: 5,
    content: 'Pesankan perawat standby 12 jam buat dampingi nenek yang habis stroke. Perawatnya sabar banget ingetin minum obat dan bantu latihan fisik ringan. Rekomended!',
    author: 'Ibu Ratna S.',
    location: 'Tangerang',
    service: 'Perawat Lansia',
    initials: 'RS',
    bgColor: 'bg-teal-100',
    textColor: 'text-teal-700',
  },
  {
    id: '3',
    rating: 5,
    content: 'Emergency malam-malam butuh ganti kateter paman yang tersumbat. Alhamdulillah perawatnya datang cepat kurang dari 45 menit. Prosedur sangat higienis.',
    author: 'Hendri K.',
    location: 'Bekasi',
    service: 'Pasang Kateter',
    initials: 'HK',
    bgColor: 'bg-indigo-100',
    textColor: 'text-indigo-700',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: 'Apakah seluruh perawat CareNurse memiliki lisensi medis resmi?',
    answer: 'Ya, 100% perawat kami adalah lulusan Diploma / Sarjana Keperawatan yang memiliki Surat Tanda Registrasi (STR) aktif dan Surat Izin Praktek (SIP) resmi dari instansi kesehatan.',
  },
  {
    id: 2,
    question: 'Bagaimana sistem pembayaran tindakan perawat?',
    answer: 'Pembayaran sangat fleksibel. Anda dapat melakukan transfer bank resmi atau E-Wallet setelah perawat selesai melakukan tindakan medis di rumah Anda.',
  },
  {
    id: 3,
    question: 'Apakah peralatan medis disiapkan oleh perawat?',
    answer: 'Ya, perawat membawa kit standar (tensimeter, stetoskop, kassa steril, antiseptik, kassa ganti luka). Jika ada resep obat khusus dokter, dapat dikomunikasikan via WhatsApp.',
  },
  {
    id: 4,
    question: 'Berapa lama perawat bisa sampai ke rumah saya?',
    answer: 'Untuk panggilan darurat / same-day, perawat terdekat biasanya dapat tiba dalam kurun waktu 30 - 90 menit tergantung kondisi lalu lintas dan jarak area lokasi Anda.',
  },
];

export const CALCULATOR_OPTIONS: CalculatorOption[] = [
  { value: '150000', label: 'Perawatan Luka Medis / Steril (Rp 150.000)', price: 150000, name: 'Perawatan Luka Medis / Steril' },
  { value: '175000', label: 'Pemasangan / Ganti Infus (Rp 175.000)', price: 175000, name: 'Pemasangan / Ganti Infus' },
  { value: '200000', label: 'Pasang / Lepas Kateter Urine (Rp 200.000)', price: 200000, name: 'Pasang / Lepas Kateter Urine' },
  { value: '220000', label: 'Pasang / Ganti Selang NGT (Rp 220.000)', price: 220000, name: 'Pasang / Ganti Selang NGT' },
  { value: '350000', label: 'Pendampingan Shift 8 Jam (Rp 350.000)', price: 350000, name: 'Pendampingan Shift 8 Jam' },
  { value: '500000', label: 'Pendampingan Shift 12 Jam (Rp 500.000)', price: 500000, name: 'Pendampingan Shift 12 Jam' },
  { value: '750000', label: 'Perawat Standby Live-in 24 Jam (Rp 750.000)', price: 750000, name: 'Perawat Standby 24 Jam Menginap' },
];

export const WHATSAPP_DEFAULT_CONFIG = {
  phoneNumber: '6281234567890',
  displayNumber: '+62 812-3456-7890',
};

export const NAV_LINKS = [
  { href: '#layanan', label: 'Layanan Medis' },
  { href: '#kalkulator', label: 'Kalkulator Biaya' },
  { href: '#keunggulan', label: 'Keunggulan' },
  { href: '#paket', label: 'Tarif & Paket' },
  { href: '#cara-pesan', label: 'Cara Pesan' },
  { href: '#faq', label: 'FAQ' },
];

export const TOAST_NOTIFICATIONS = [
  { id: '1', patientName: 'Bpk. Hendri', service: 'Perawatan Luka', location: 'Jaksel', timeAgo: '2 menit yang lalu', status: 'confirmed' as const },
  { id: '2', patientName: 'Ibu Ratna', service: 'Pendampingan Lansia', location: 'Tangerang', timeAgo: '15 menit yang lalu', status: 'confirmed' as const },
  { id: '3', patientName: 'Bpk. Ahmad', service: 'Pasang Infus', location: 'Bekasi', timeAgo: '32 menit yang lalu', status: 'pending' as const },
  { id: '4', patientName: 'Ibu Sari', service: 'Suntik Vitamin', location: 'Depok', timeAgo: '45 menit yang lalu', status: 'confirmed' as const },
];