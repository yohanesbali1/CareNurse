# ANIMASI IMPROVEMENT — IMPLEMENTED

## 1. Splash Screen — Progress Bar + 3-Stage Exit
**File:** `src/components/common/SplashScreen.tsx`

### Progress Bar (diperbaiki)
- Bar mulai dari `0%`, naik bertahap (random increment tiap 200ms) hingga `100%`
- Pake state `progress`, di-set ke `100%` setelah 1.8s
- Tidak langsung full width seperti sebelumnya

### Exit Animation (3 stage)
| Stage | Waktu | Efek CSS |
|-------|-------|----------|
| `enter` | 0–2200ms | Tampil normal |
| `exit-scale` | 2200–2600ms | `opacity: 0; scale: 0.9` — logo & teks mengecil + fade |
| `exit-slide` | 2600–2900ms | `-translate-y-full` — geser ke atas |
| `gone` | 2900ms+ | `return null` — hapus dari DOM |

## 2. Mobile Menu — Slide-in Drawer
**File:** `src/components/sections/Header.tsx`

- Bukan toggle `hidden/block` instant
- **Drawer tetap di DOM**, dikontrol dengan `translate-x-full` / `translate-x-0`
- Slide dari kanan (300ms ease-in-out)
- Backdrop overlay `bg-slate-950/50 backdrop-blur-sm` fade in/out
- Body scroll terkunci saat menu terbuka
- Tombol X absolute z-50 agar tidak ketumpuk drawer

## 3. Service Cards — Staggered Entrance
**File:** `src/components/sections/Services.tsx`

- IntersectionObserver detect saat section visible
- Title + filter buttons: `opacity 0→1` + `translate-y 6px→0` (700ms)
- Cards: `opacity 0→1` + `translate-y 8px→0` (500ms), delay 100ms per card
- Delay di-set via inline `style={{ transitionDelay }}`

## 4. ScrollReveal — Swipe Per Section
**File baru:** `src/components/common/ScrollReveal.tsx`

### Props
| Prop | Default | Opsi |
|------|---------|------|
| `direction` | `up` | `up`, `down`, `left`, `right` |
| `delay` | `0` | ms |
| `className` | `''` | tambahan class |

### Cara pakai di `page.tsx`:
```tsx
<ScrollReveal direction="up" delay={100}>
  <Calculator phoneNumber={phoneNumber} />
</ScrollReveal>
```

### Sections with ScrollReveal:
- TrustBadges (no delay)
- Calculator (+100ms)
- WhyChooseUs (+100ms)
- Pricing (+100ms)
- HowItWorks (+100ms)
- Testimonials (+100ms)
- FAQ (+100ms)
- CTA (+100ms)
- Footer (+100ms)

Services sudah punya staggered built-in sendiri (tidak double-wrap).

## 5. Back to Top — Scale Pop
**File:** `src/components/common/BackToTop.tsx`

- Dulu cuma `opacity 0→1`
- Sekarang `opacity 0→1` + `scale 0.5→1` — efek pop saat muncul

## Files Changed
- `src/components/common/SplashScreen.tsx` — fix progress bar + 3-stage exit
- `src/components/common/ScrollReveal.tsx` — **new** reusable swipe-in wrapper
- `src/components/common/BackToTop.tsx` — scale pop animation
- `src/components/sections/Header.tsx` — slide-in drawer menu
- `src/components/sections/Services.tsx` — staggered card reveal
- `src/app/page.tsx` — wrap sections with ScrollReveal

## Teknik
- **Zero library tambahan** — pure CSS transitions + class toggling
- IntersectionObserver untuk trigger scroll-based reveal
- Tidak ada Framer Motion — tetap ringan
