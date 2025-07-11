import Head from "next/head";
import siteConfig from "../config/siteConfig";

export default function Iletisim() {
  return (
    <>
      <Head>
        <title>İletişim | {siteConfig.companyName}</title>
        <meta name="description" content="{siteConfig.companyName} iletişim bilgileri ve servis talepleri için form." />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">İletişim</h1>
        <div className="mb-6 bg-blue-50 border border-blue-100 rounded-lg p-4 text-blue-800">
          <div><strong>Adres:</strong> {siteConfig.address}</div>
          <div><strong>Telefon:</strong> <a href={`tel:${siteConfig.phone}`} className="text-blue-600 font-semibold hover:underline">{siteConfig.phone}</a></div>
        </div>
        <form className="bg-white border border-gray-100 rounded-lg p-6 shadow mb-8">
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Ad Soyad</label>
            <input type="text" className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Adınız Soyadınız" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Telefon</label>
            <input type="tel" className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Telefon Numaranız" />
          </div>
           <div className="mb-4">
            <label className="block text-gray-700 mb-1">Hizmetlerimiz</label>
            <textarea className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" rows="1" placeholder="Mesajınız"></textarea>
          </div>  
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Mesajınız</label>
            <textarea className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" rows="4" placeholder="Mesajınız"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold rounded py-2 hover:bg-blue-700 transition">Gönder</button>
        </form>
        <div className="mb-8">
          <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center text-gray-500">Harita (Google Maps) Alanı</div>
        </div>
        <div className="text-sm text-red-600 font-bold">Bu site yetkili servis değildir. Sadece garantisi olmayan cihazlar için tamir, bakım, arıza vb. hizmetler verilmektedir.</div>
      </main>
    </>
  );
}
