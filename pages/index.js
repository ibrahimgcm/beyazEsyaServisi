import Head from "next/head";
import Link from "next/link";
import siteConfig from "../config/siteConfig";

const services = [
  { name: "Beyaz Eşya Servisi", href: "/beyaz-esya-servisi", desc: "Tüm beyaz eşyalarınız için uzman servis." },
  { name: "Buzdolabı", href: "/buzdolabi", desc: "Buzdolabı arıza ve bakımı." },
  { name: "Çamaşır Makinesi", href: "/camasir-makinesi", desc: "Çamaşır makinesi tamir ve bakım." },
  { name: "Bulaşık Makinesi", href: "/bulasik-makinesi", desc: "Bulaşık makinesi servis hizmeti." },
  { name: "Fırın", href: "/firin", desc: "Fırın arıza ve bakım servisi." },
  { name: "Klima", href: "/klima", desc: "Klima bakım ve onarım." },
  { name: "Kombi", href: "/kombi", desc: "Kombi teknik servis ve bakım." },
  { name: "Televizyon", href: "/televizyon", desc: "Televizyon tamir ve servis." },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.companyName} | Beyaz Eşya Servisi</title>
        <meta name="description" content="Beyaz eşya, buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın, klima, kombi ve televizyon için uzman teknik servis." />
      </Head>
      <main className="min-h-screen bg-gray-50">
        {/* Hero Alanı */}
        <section className="max-w-4xl mx-auto text-center py-16 px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-700 mb-4">{siteConfig.companyName}</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">Beyaz eşya, klima, kombi ve televizyonlarınız için <span className="text-blue-600 font-semibold">profesyonel servis</span> ve <span className="text-blue-600 font-semibold">bakım hizmeti</span>.</p>
          <a href={`tel:${siteConfig.phone}`} className="inline-block bg-blue-600 text-white font-semibold rounded-lg px-6 py-3 shadow hover:bg-blue-700 transition mb-2">Hemen Ara: {siteConfig.phone}</a>
          <div className="text-xs text-gray-500 mt-2">Sadece garantisi olmayan cihazlar için hizmet verilmektedir.</div>
        </section>
        {/* Hizmet Kartları */}
        <section className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="block bg-white rounded-xl shadow hover:shadow-lg border border-blue-100 p-6 text-center group transition">
              <div className="text-blue-600 text-2xl font-bold mb-2 group-hover:text-blue-700">{s.name}</div>
              <div className="text-gray-600 text-sm">{s.desc}</div>
            </Link>
          ))}
        </section>
        {/* İletişim ve Uyarı */}
        <section className="max-w-3xl mx-auto px-4 py-10 text-center">
          <div className="text-lg font-semibold text-blue-700 mb-2">Hızlı Servis İçin Bize Ulaşın</div>
          <a href={`tel:${siteConfig.phone}`} className="inline-block bg-blue-600 text-white font-semibold rounded px-5 py-2 mt-2 hover:bg-blue-700 transition">{siteConfig.phone}</a>
          <div className="mt-6 text-sm text-red-600 font-bold">Bu site yetkili servis değildir. Sadece garantisi olmayan cihazlar için tamir, bakım, arıza vb. hizmetler verilmektedir.</div>
        </section>
      </main>
    </>
  );
}
