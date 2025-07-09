import Head from "next/head";
import siteConfig from "../config/siteConfig";

export default function Kvkk() {
  return (
    <>
      <Head>
        <title>KVKK | {siteConfig.companyName}</title>
        <meta name="description" content="{siteConfig.companyName} Kişisel Verilerin Korunması Kanunu (KVKK) bilgilendirmesi." />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Kişisel Verilerin Korunması (KVKK)</h1>
        <p className="mb-4 text-gray-700">{siteConfig.companyName} olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel verilerinizin gizliliğine ve güvenliğine önem veriyoruz.</p>
        <ul className="mb-6 list-disc pl-6 text-gray-700">
          <li>Kişisel verileriniz yasal zorunluluklar ve hizmet sunumu dışında üçüncü kişilerle paylaşılmaz.</li>
          <li>Veri güvenliği için gerekli tüm teknik ve idari tedbirler alınmaktadır.</li>
          <li>KVKK kapsamındaki haklarınız için bizimle iletişime geçebilirsiniz.</li>
        </ul>
        <div className="mb-8 text-sm text-red-600 font-bold">Bu site yetkili servis değildir. Sadece garantisi olmayan cihazlar için tamir, bakım, arıza vb. hizmetler verilmektedir.</div>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-800">
          <div><strong>İletişim:</strong> <a href={`tel:${siteConfig.phone}`} className="text-blue-600 font-semibold hover:underline">{siteConfig.phone}</a></div>
        </div>
      </main>
    </>
  );
}
