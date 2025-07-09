import Link from "next/link";
import siteConfig from "../config/siteConfig";

const services = [
  { name: "Beyaz Eşya Servisi", href: "/beyaz-esya-servisi" },
  { name: "Buzdolabı", href: "/buzdolabi" },
  { name: "Çamaşır Makinesi", href: "/camasir-makinesi" },
  { name: "Bulaşık Makinesi", href: "/bulasik-makinesi" },
  { name: "Fırın", href: "/firin" },
  { name: "Klima", href: "/klima" },
  { name: "Kombi", href: "/kombi" },
  { name: "Televizyon", href: "/televizyon" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-50 border-t border-blue-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
        <div>
          <div className="text-xl font-bold text-blue-700 mb-2">ServisSite</div>
          <div className="mb-2">{siteConfig.companyName}</div>
          <div className="mb-2">{siteConfig.address}</div>
          <div className="mb-2">Tel: <a href={`tel:${siteConfig.phone}`} className="text-blue-600 font-semibold hover:underline">{siteConfig.phone}</a></div>
          <div className="text-xs text-gray-500 mt-4">Bu site yetkili servis değildir. Sadece garantisi olmayan cihazlar için hizmet verilmektedir.</div>
        </div>
        <div>
          <div className="font-semibold text-blue-700 mb-2">Sayfalar</div>
          <ul className="space-y-1">
            <li><Link href="/">Ana Sayfa</Link></li>
            <li><Link href="/hakkimizda">Hakkımızda</Link></li>
            <li><Link href="/iletisim">İletişim</Link></li>
            <li><Link href="/gizlilik">Gizlilik Politikası</Link></li>
            <li><Link href="/kvkk">KVKK</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-blue-700 mb-2">Hizmetlerimiz</div>
          <ul className="space-y-1">
            {services.map((s) => (
              <li key={s.href}><Link href={s.href}>{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold text-blue-700 mb-2">Bizi Takip Edin</div>
          <div className="flex gap-3 mt-2">
            {/* Sosyal medya ikonları için placeholder */}
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z" /></svg></a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.07 8.24 8.93.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.23-3.23-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.23 0 4.64-2.8 5.67-5.47 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C18.36 20.07 22 16.41 22 12c0-5.5-4.46-9.96-9.96-9.96z" /></svg></a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.54 7.2c-.13-.47-.52-.81-.99-.81h-2.13c-.47 0-.86.34-.99.81l-1.7 6.13c-.13.47.09.97.52 1.1.47.13.97-.09 1.1-.52l.34-1.23h2.36l.34 1.23c.13.47.63.65 1.1.52.43-.13.65-.63.52-1.1l-1.7-6.13zm-2.13 4.13l.7-2.53.7 2.53h-1.4z" /></svg></a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 py-4 border-t border-blue-100 bg-blue-50">&copy; {new Date().getFullYear()} {siteConfig.companyName} - Tüm hakları saklıdır.</div>
    </footer>
  );
}
