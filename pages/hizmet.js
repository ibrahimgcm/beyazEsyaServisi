import { useRouter } from "next/router";
import Head from "next/head";
import siteConfig from "../config/siteConfig";
import beyazEsyaIcerikleri from "../beyaz_esya_icerikleri.json";

function getRelatedArticles(service) {
  if (!service) return [];
  const keyword = service.toLowerCase();
  // Başlık veya içerikte anahtar kelime geçenleri filtrele
  return beyazEsyaIcerikleri.filter(item =>
    (item.title && item.title.toLowerCase().includes(keyword)) ||
    (item.content && item.content.toLowerCase().includes(keyword))
  );
}

export default function Hizmet() {
  const router = useRouter();
  const { service } = router.query;
  const serviceTitle = service ? decodeURIComponent(service) : "Hizmet";
  const articles = getRelatedArticles(serviceTitle);

  return (
    <>
      <Head>
        <title>{serviceTitle} | {siteConfig.companyName}</title>
        <meta name="description" content={`${serviceTitle} için profesyonel servis, bakım ve onarım hizmetleri. Sadece garantisi olmayan cihazlara hizmet verilmektedir.`} />
      </Head>
      <main style={{padding: '2rem'}}>
        <h1>{serviceTitle}</h1>
        <p>{serviceTitle} için uzman teknik servis, bakım ve onarım hizmetleri sunuyoruz.</p>
        <div style={{margin: '2rem 0', color: 'red', fontWeight: 'bold'}}>
          Bu site yetkili servis değildir. Sadece garantisi olmayan cihazlar için tamir, bakım, arıza vb. hizmetler verilmektedir.
        </div>
        <section style={{margin: '2rem 0'}}>
          <h2>{serviceTitle} ile ilgili Makaleler</h2>
          {articles.length === 0 ? (
            <p>Bu hizmetle ilgili içerik bulunamadı.</p>
          ) : (
            articles.map((item, idx) => (
              <article key={idx} style={{marginBottom: '2rem'}}>
                <h3 style={{fontSize: '1.1rem', fontWeight: 600}}>{item.title}</h3>
                <div style={{whiteSpace: 'pre-line', color: '#444'}}>{item.content}</div>
              </article>
            ))
          )}
        </section>
        <div style={{marginTop: '3rem', fontSize: '0.95rem', color: '#555'}}>
          <strong>İletişim:</strong> <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a> <br/>
          <strong>Adres:</strong> {siteConfig.address}
        </div>
      </main>
    </>
  );
}
