import Link from "next/link";
import { useState } from "react";

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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tight">BeyazEsyaServisi</Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-blue-600 transition font-medium">Ana Sayfa</Link>
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onClick={() => setDropdownOpen((open) => !open)}
            tabIndex={0}
            onBlur={(e) => {
              // Only close if focus leaves the dropdown area
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setDropdownOpen(false);
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <button
              className="font-medium hover:text-blue-600 transition flex items-center gap-1 focus:outline-none"
              type="button"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              tabIndex={-1}
            >
              Hizmetlerimiz
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {dropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 flex flex-col py-2 animate-fade-in z-20"
                tabIndex={0}
              >
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="px-5 py-2 hover:bg-blue-50 hover:text-blue-700 transition text-gray-800 text-sm"
                    tabIndex={0}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/hakkimizda" className="hover:text-blue-600 transition font-medium">Hakkımızda</Link>
          <Link href="/iletisim" className="hover:text-blue-600 transition font-medium">İletişim</Link>
        </div>
        {/* Mobil Menü Butonu */}
        <button className="md:hidden flex items-center" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menüyü Aç/Kapat">
          <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </nav>
      {/* Mobil Menü */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow animate-fade-in px-4 pb-4">
          <Link href="/" className="block py-2 font-medium hover:text-blue-600">Ana Sayfa</Link>
          <details className="py-2">
            <summary className="font-medium cursor-pointer hover:text-blue-600">Hizmetlerimiz</summary>
            <div className="flex flex-col mt-2">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="pl-4 py-1 text-sm hover:text-blue-700">{s.name}</Link>
              ))}
            </div>
          </details>
          <Link href="/hakkimizda" className="block py-2 font-medium hover:text-blue-600">Hakkımızda</Link>
          <Link href="/iletisim" className="block py-2 font-medium hover:text-blue-600">İletişim</Link>
        </div>
      )}
    </header>
  );
} 