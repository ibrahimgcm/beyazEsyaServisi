import { useRouter } from "next/router";
import Head from "next/head";
import siteConfig from "../config/siteConfig";
import seoContent from "../data/beyaz_esya_servisi_seo_icerik";

export default function Hizmet() {
  const router = useRouter();
  const { service } = router.query;

  const decodedService = decodeURIComponent(service || "").replace(/\+/g, " ");

  return (
    <>
      <Head>
        <title>
          {decodedService} | {siteConfig.companyName}
        </title>
        <meta
          name="description"
          content={`${decodedService} için garantisiz teknik servis, bakım ve onarım hizmeti.`}
        />
      </Head>

      <section style={styles.container}>
        <h1>{decodedService}</h1>
        <p>
          {decodedService} cihazlarınız için uzman teknik servis hizmeti
          sunuyoruz. Garantisi bitmiş ürünlerinizin tamir, bakım ve arıza
          işlemleri için bizimle iletişime geçebilirsiniz.
        </p>

        <a href={`tel:${siteConfig.phone}`} style={styles.callButton}>
          📞 Hemen Ara: {siteConfig.phone}
        </a>

        <div style={styles.warning}>
          <strong>❗ Uyarı:</strong> Bu web sitesi{" "}
          <u>yetkili servis değildir</u>. Sadece garantisi olmayan cihazlar için
          özel servis hizmeti sunulmaktadır.
        </div>

        <div style={styles.article}>
          <h2>{decodedService} Hakkında Bilgilendirici Makale</h2>
          <p>
            [Serpsonic.com’dan alınacak 10.000 kelimelik içerik buraya entegre
            edilecek]
          </p>
        </div>

        <div style={styles.reviews}>
          <h3>Müşteri Yorumları</h3>
          {fakeReviews.map((review, i) => (
            <div key={i} style={styles.review}>
              <strong>{review.name}</strong>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>

        <div style={styles.article}>
          <h2>{seoContent.title}</h2>
          {seoContent.sections.map((section, index) => (
            <div key={index} style={{ marginBottom: "1.5rem" }}>
              <h3>{section.title}</h3>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const fakeReviews = [
  { name: "Ayşe K.", comment: "Klima servisi çok hızlıydı, teşekkür ederim." },
  {
    name: "Mehmet T.",
    comment: "Çamaşır makinem için uygun fiyatlı bir çözüm buldular.",
  },
  {
    name: "Zeynep A.",
    comment: "Buzdolabım artık sessiz çalışıyor, çok memnunum.",
  },
  {
    name: "Ali V.",
    comment: "Servis zamanında geldi ve işini titizlikle yaptı.",
  },
  { name: "Elif D.", comment: "Fırınımı tamir ettirdim, sorunsuz çalışıyor." },
];

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
  callButton: {
    display: "inline-block",
    margin: "1rem 0",
    padding: "0.75rem 1.5rem",
    backgroundColor: "#0070f3",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  warning: {
    backgroundColor: "#fff3cd",
    padding: "1rem",
    borderRadius: "5px",
    margin: "1.5rem 0",
    fontSize: "0.95rem",
  },
  article: {
    marginTop: "2rem",
    padding: "1rem",
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
  },
  reviews: {
    marginTop: "2rem",
  },
  review: {
    backgroundColor: "#f1f1f1",
    padding: "1rem",
    borderRadius: "5px",
    marginBottom: "1rem",
  },
};
