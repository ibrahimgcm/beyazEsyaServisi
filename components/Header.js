import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Ana Sayfa</Link>
        <div className="dropdown">
          <span>Hizmetlerimiz</span>
          <div className="dropdown-content">
            <Link href="/hizmet?service=Beyaz+Eşya+Servisi">
              Beyaz Eşya Servisi
            </Link>
            <Link href="/hizmet?service=Buzdolabı">Buzdolabı</Link>
            <Link href="/hizmet?service=Çamaşır+Makinesi">
              Çamaşır Makinesi
            </Link>
            <Link href="/hizmet?service=Bulaşık+Makinesi">
              Bulaşık Makinesi
            </Link>
            <Link href="/hizmet?service=Fırın">Fırın</Link>
            <Link href="/hizmet?service=Klima">Klima</Link>
            <Link href="/hizmet?service=Kombi">Kombi</Link>
            <Link href="/hizmet?service=Televizyon">Televizyon</Link>
          </div>
        </div>
        <Link href="/hakkimizda">Hakkımızda</Link>
        <Link href="/iletisim">İletişim</Link>
      </nav>
    </header>
  );
}
