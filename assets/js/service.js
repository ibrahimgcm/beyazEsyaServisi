// URL parametresinden service bilgisini al
function getServiceFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('service') || 'Beyaz Eşya Servisi';
}

// Sayfa yüklendiğinde dinamik içeriği güncelle
document.addEventListener('DOMContentLoaded', function() {
    const serviceName = getServiceFromURL();
    const currentURL = window.location.href;
    
    updatePageContent(serviceName);
    updateStructuredData(serviceName, currentURL);
    updateMetaTags(serviceName, currentURL);
});

function updatePageContent(serviceName) {
    document.getElementById('mainTitle').textContent = serviceName;
    document.getElementById('serviceTitle').textContent = serviceName;
    document.getElementById('breadcrumbService').textContent = serviceName;
    document.title = `${serviceName} | İstanbul Teknik Servis`;
    
    const description = `${serviceName} hizmetlerimiz ile profesyonel bakım ve onarım desteği`;
    document.getElementById('mainDescription').textContent = description;
    document.getElementById('metaDescription').setAttribute('content', description);
    document.getElementById('serviceDescription').textContent = 
        `${serviceName} için profesyonel bakım, onarım ve servis hizmetlerini sunuyoruz.`;
}

function updateMetaTags(serviceName, currentURL) {
    document.querySelector('link[rel="canonical"]').setAttribute('href', currentURL);
    
    const metaDescription = `${serviceName} için profesyonel, hızlı ve güvenilir teknik servis hizmeti. İstanbul genelinde uzman ekibimizle hizmetinizdeyiz.`;
    document.querySelector('meta[name="description"]').setAttribute('content', metaDescription);

    const keywords = `${serviceName}, beyaz eşya servisi, teknik servis, ${serviceName} tamiri, ${serviceName} bakımı, İstanbul`;
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (keywordsMeta) {
        keywordsMeta.setAttribute('content', keywords);
    } else {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        keywordsMeta.setAttribute('content', keywords);
        document.head.appendChild(keywordsMeta);
    }

    // Open Graph Meta Tags
    document.querySelector('meta[property="og:title"]').setAttribute('content', `${serviceName} | İstanbul Teknik Servis`);
    document.querySelector('meta[property="og:description"]').setAttribute('content', metaDescription);
    document.querySelector('meta[property="og:url"]').setAttribute('content', currentURL);
    
    // Twitter Meta Tags
    document.querySelector('meta[name="twitter:title"]').setAttribute('content', `${serviceName} | İstanbul Teknik Servis`);
    document.querySelector('meta[name="twitter:description"]').setAttribute('content', metaDescription);
}

function updateStructuredData(serviceName, currentURL) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": serviceName,
        "provider": {
            "@type": "LocalBusiness",
            "name": "İstanbul Teknik Servis",
            "image": "https://www.beyaz-esya-servisi.vercel.app/assets/img/beyaz-esya-hero.jpg",
            "telephone": "+905551234567",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Örnek Sokak, No: 1",
                "addressLocality": "İstanbul",
                "postalCode": "34000",
                "addressCountry": "TR"
            }
        },
        "areaServed": {
            "@type": "City",
            "name": "İstanbul"
        },
        "url": currentURL,
        "name": serviceName,
        "description": `${serviceName} için profesyonel, hızlı ve güvenilir teknik servis hizmeti.`
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (scriptTag) {
        scriptTag.textContent = JSON.stringify(structuredData, null, 2);
    } else {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        scriptTag.textContent = JSON.stringify(structuredData, null, 2);
        document.head.appendChild(scriptTag);
    }
}

// Diğer fonksiyonlar...