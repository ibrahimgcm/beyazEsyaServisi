import Link from "next/link";
import siteConfig from "../config/siteConfig";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.links}>
        <Link href="/">Ana Sayfa</Link>
        <Link href="/hakkimizda">Hakkımızda</Link>
        <Link href="/iletisim">İletişim</Link>
        <Link href="/gizlilik">Gizlilik Politikası</Link>
        <Link href="/kvkk">KVKK</Link>
        <Link href="/hizmet?service=Beyaz+Eşya+Servisi">
          Beyaz Eşya Servisi
        </Link>
        <Link href="/hizmet?service=Buzdolabı">Buzdolabı</Link>
        <Link href="/hizmet?service=Çamaşır+Makinesi">Çamaşır Makinesi</Link>
        <Link href="/hizmet?service=Bulaşık+Makinesi">Bulaşık Makinesi</Link>
        <Link href="/hizmet?service=Fırın">Fırın</Link>
        <Link href="/hizmet?service=Klima">Klima</Link>
        <Link href="/hizmet?service=Kombi">Kombi</Link>
        <Link href="/hizmet?service=Televizyon">Televizyon</Link>
      </div>

      <div style={styles.info}>
        <p>
          {siteConfig.companyName} © {new Date().getFullYear()}
        </p>
        <p>Adres: {siteConfig.address}</p>
        <p>
          Telefon: <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
        </p>
        <p style={{ color: "red", fontWeight: "bold" }}>
          Bu web sitesi yetkili servis değildir. Sadece garantisi olmayan
          cihazlar için özel servis hizmeti sunulmaktadır.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#f5f5f5",
    padding: "2rem",
    marginTop: "4rem",
    textAlign: "center",
  },
  links: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "1rem",
  },
  info: {
    fontSize: "0.9rem",
    color: "#333",
  },
};
