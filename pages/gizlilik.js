import Head from "next/head";
import siteConfig from "../config/siteConfig";

export default function Gizlilik() {
  return (
    <>
      <Head>
        <title>Gizlilik Politikası | {siteConfig.companyName}</title>
        <meta name="description" content="{siteConfig.companyName} gizlilik politikası ve kişisel verilerin korunması." />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Gizlilik Politikası</h1>
        <p className="mb-4 text-gray-700">Bu sayfa, {siteConfig.companyName} web sitesinin gizlilik politikalarını ve kişisel verilerin korunmasına ilişkin esasları açıklar. Kişisel bilgilerinizin güvenliği bizim için önemlidir.</p>
        <ul className="mb-6 list-disc pl-6 text-gray-700">
          <li>Toplanan bilgiler yalnızca hizmet sunumu ve iletişim için kullanılır.</li>
          <li>Bilgileriniz üçüncü şahıslarla paylaşılmaz.</li>
          <li>Çerezler ve analiz araçları kullanıcı deneyimini geliştirmek için kullanılır.</li>
        </ul>
        <div className="mb-8 text-sm text-red-600 font-bold">Bu site yetkili servis değildir. Sadece garantisi olmayan cihazlar için tamir, bakım, arıza vb. hizmetler verilmektedir.</div>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-800">
          <div><strong>İletişim:</strong> <a href={`tel:${siteConfig.phone}`} className="text-blue-600 font-semibold hover:underline">{siteConfig.phone}</a></div>
        </div>
      </main>
    </>
  );
}
  