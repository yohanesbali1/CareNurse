import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CareNurse - Layanan Perawat Panggilan Ke Rumah 24/7",
  description:
    "Layanan perawat panggilan profesional 24/7. Perawatan luka, infus, kateter, NGT, pendampingan lansia, pasca operasi, dan home care. STR & SIP resmi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}