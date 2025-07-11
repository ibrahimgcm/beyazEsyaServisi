import { useRouter } from "next/router";
import Head from "next/head";
import siteConfig from "../config/siteConfig";
import beyazEsyaMakale from "../data/beyaz_esya_servisi_seo_icerik.json";

const hizmetBaslikMap = {
  "Beyaz Eşya Servisi": "Beyaz Eşya Servisi Nedir?",
  "Buzdolabı": "Buzdolabı Servisi ve Yaygın Sorunlar",
  "Çamaşır Makinesi": "Çamaşır Makinesi Bakımı ve Onarımı",
  "Bulaşık Makinesi": "Bulaşık Makinesi Performans Arttırma Yöntemleri",
  "Fırın": "Fırın Servisi ve Güvenlik Önlemleri",
  "Klima": "Klima Montajı, Bakımı ve Arızaları",
  "Kombi": "Kombi Arızaları ve Servis Müdahaleleri",
  "Televizyon": "Televizyon Teknik Servis ve Panel Onarımları"
};

const musteriYorumlari = [
  { isim: "Ahmet Y.", yorum: "Çok hızlı ve güvenilir bir servis, teşekkürler!" },
  { isim: "Elif K.", yorum: "Buzdolabım kısa sürede tamir edildi, memnun kaldım." },
  { isim: "Mehmet S.", yorum: "Uygun fiyat ve kaliteli hizmet, tavsiye ederim." },
  { isim: "Zeynep D.", yorum: "Çamaşır makinesi arızası için aradım, hemen geldiler." },
  { isim: "Ali V.", yorum: "Kombi bakımı için başvurdum, çok ilgililerdi." },
  { isim: "Ayşe T.", yorum: "Klima bakımı sonrası cihazım çok daha iyi çalışıyor." },
  { isim: "Burak E.", yorum: "Fırın tamiri için teşekkürler, sorunsuz çalışıyor." },
  { isim: "Gülşah M.", yorum: "Televizyonumun ekranı düzeldi, çok mutluyum." },
  { isim: "Serkan P.", yorum: "Bulaşık makinesi için hızlı çözüm sağladılar." },
  { isim: "Derya N.", yorum: "Her arızada ilk tercihim burası olacak." }
];

function getMakaleByService(service) {
  if (!service) return null;
  const anahtar = Object.keys(hizmetBaslikMap).find(
    k => k.toLowerCase() === service.toLowerCase()
  );
  if (!anahtar) return null;
  const sectionTitle = hizmetBaslikMap[anahtar];
  const section = beyazEsyaMakale.sections.find(s => s.title === sectionTitle);
  return section || null;
}

export default function Hizmet() {
  const router = useRouter();
  const { service } = router.query;
  const serviceTitle = service ? decodeURIComponent(service) : "Hizmet";
  const makale = getMakaleByService(serviceTitle);

  return (
    <>
      <Head>
        <title>{serviceTitle} | {siteConfig.companyName}</title>
        <meta name="description" content={`${serviceTitle} için profesyonel servis, bakım ve onarım hizmetleri. Sadece garantisi olmayan cihazlara hizmet verilmektedir.`} />
        {/* Schema.org Article işaretlemesi */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": serviceTitle,
            "description": makale ? makale.content : '',
            "author": { "@type": "Organization", "name": siteConfig.companyName },
            "publisher": { "@type": "Organization", "name": siteConfig.companyName },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": typeof window !== 'undefined' ? window.location.href : ''
            }
          })
        }} />
      </Head>
      <main className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{serviceTitle}</h1>
        <div className="mb-4 text-blue-700 font-semibold">
          {makale ? makale.content : `${serviceTitle} için uzman teknik servis, bakım ve onarım hizmetleri sunuyoruz.`}
        </div>
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 font-bold rounded">
          Bu site yetkili servis değildir. Sadece garantisi olmayan cihazlar için tamir, bakım, arıza vb. hizmetler verilmektedir.
        </div>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Müşteri Yorumları</h2>
          <ul className="space-y-2">
            {musteriYorumlari.map((yorum, idx) => (
              <li key={idx} className="bg-gray-50 p-3 rounded border border-gray-200">
                <span className="font-semibold">{yorum.isim}:</span> {yorum.yorum}
              </li>
            ))}
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{serviceTitle} Hakkında Bilgilendirici İçerik</h2>
          {makale ? (
            <article className="prose prose-blue">
              <h3>{makale.title}</h3>
              <p>{makale.content}</p>
            </article>
          ) : (
            <p>Bu hizmetle ilgili içerik bulunamadı.</p>
          )}
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Sıkça Sorulan Sorular</h2>
          <div className="bg-gray-100 p-3 rounded">
            {beyazEsyaMakale.sections.find(s => s.title === "Sıkça Sorulan Sorular (SSS)")?.content}
          </div>
        </section>
        <div className="mt-8 text-sm text-gray-600">
          <strong>İletişim:</strong> <a href={`tel:${siteConfig.phone}`} className="text-blue-600 underline">{siteConfig.phone}</a> <br/>
          <strong>Adres:</strong> {siteConfig.address}
        </div>
      </main>
    </>
  );
}
