import Head from "next/head";
import siteConfig from "../config/siteConfig";

export default function Hakkimizda() {
  return (
    <>
      <Head>
        <title>Hakkımızda | {siteConfig.companyName}</title>
        <meta name="description" content="{siteConfig.companyName} hakkında detaylı bilgi, misyon, vizyon ve iletişim." />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Hakkımızda</h1>
        <p className="mb-4 text-gray-700">{siteConfig.companyName}, beyaz eşya, klima, kombi ve televizyonlarınız için profesyonel teknik servis ve bakım hizmeti sunar. Deneyimli ekibimizle hızlı, güvenilir ve uygun fiyatlı çözümler sağlıyoruz.</p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Misyonumuz</h2>
          <p className="text-gray-700">Müşterilerimize en kaliteli teknik servis hizmetini sunmak, cihazlarınızın ömrünü uzatmak ve memnuniyetinizi en üst seviyede tutmak.</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Vizyonumuz</h2>
          <p className="text-gray-700">Sektörde güvenilirlik ve müşteri memnuniyetiyle öne çıkan lider bir servis firması olmak.</p>
        </div>
        <div className="mb-8 text-sm text-red-600 font-bold">Bu site yetkili servis değildir. Sadece garantisi olmayan cihazlar için tamir, bakım, arıza vb. hizmetler verilmektedir.</div>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-800">
          <div><strong>Adres:</strong> {siteConfig.address}</div>
          <div><strong>Telefon:</strong> <a href={`tel:${siteConfig.phone}`} className="text-blue-600 font-semibold hover:underline">{siteConfig.phone}</a></div>
        </div>
      </main>
    </>
  );
}
