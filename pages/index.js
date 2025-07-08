import Head from "next/head";
import Link from "next/link";
import siteConfig from "../config/siteConfig";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.companyName} | Beyaz Eşya Servisi</title>
        <meta
          name="description"
          content="Beyaz eşya, klima, kombi ve televizyonlarınız için garantisiz teknik servis, bakım ve onarım hizmeti."
        />
      </Head>

      <section style={styles.hero}>
        <h1>Profesyonel Beyaz Eşya Servisi</h1>
        <p>
          Garantisi olmayan cihazlarınız için hızlı, güvenilir ve uygun fiyatlı
          teknik servis hizmeti.
        </p>
        <a href={`tel:${siteConfig.phone}`} style={styles.callButton}>
          📞 Hemen Ara: {siteConfig.phone}
        </a>
      </section>

      <section style={styles.services}>
        <h2>Hizmetlerimiz</h2>
        <div style={styles.grid}>
          {[
            "Beyaz Eşya Servisi",
            "Buzdolabı",
            "Çamaşır Makinesi",
            "Bulaşık Makinesi",
            "Fırın",
            "Klima",
            "Kombi",
            "Televizyon",
          ].map((service) => (
            <Link
              key={service}
              href={`/hizmet?service=${encodeURIComponent(service)}`}
              style={styles.card}
            >
              {service}
            </Link>
          ))}
        </div>
      </section>

      <section style={styles.warning}>
        <p>
          <strong>❗ Uyarı:</strong> Bu web sitesi{" "}
          <u>yetkili servis değildir</u>. Sadece garantisi olmayan cihazlar için
          özel servis hizmeti sunulmaktadır.
        </p>
      </section>
    </>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "3rem 1rem",
    backgroundColor: "#f0f8ff",
  },
  callButton: {
    display: "inline-block",
    marginTop: "1rem",
    padding: "0.75rem 1.5rem",
    backgroundColor: "#0070f3",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  services: {
    padding: "2rem 1rem",
    textAlign: "center",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
  },
  card: {
    padding: "1rem 2rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textDecoration: "none",
    color: "#333",
    backgroundColor: "#fff",
    transition: "0.3s",
  },
  warning: {
    backgroundColor: "#fff3cd",
    padding: "1rem",
    margin: "2rem auto",
    maxWidth: "800px",
    borderRadius: "5px",
    textAlign: "center",
    fontSize: "0.95rem",
  },
};
