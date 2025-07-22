function updateServiceContent() {
    const params = new URLSearchParams(window.location.search);
    const serviceName = params.get('service');

    if (!serviceName || serviceName.trim() === '') {
        // service parametresi yoksa hiçbir şey yapma
        return;
    }

    const trimmedServiceName = serviceName.trim();
    const currentUrl = window.location.href;

    // Basit bir title oluştur
    const newTitle = `${trimmedServiceName} Servisi | İstanbul Teknik Servis`;
    document.title = newTitle;

    // Tüm DOM güncellemelerini tek bir fonksiyonda topla
    const updateElement = (id, property, value) => {
        const element = document.getElementById(id);
        if (element) {
            if (property === 'textContent') {
                element.textContent = value;
            } else {
                element.setAttribute(property, value);
            }
        }
    };

    // DOM güncellemelerini gruplayarak reflow'u azalt
    requestAnimationFrame(() => {
        document.title = newTitle;
        updateElement('metaTitle', 'textContent', newTitle);
        updateElement('ogTitle', 'content', newTitle);
        updateElement('twitterTitle', 'content', newTitle);

        const newDescription = `İstanbul ${trimmedServiceName} servisi: Profesyonel, hızlı ve güvenilir teknik destek. Garantili tamir ve bakım hizmetleri.`;
        updateElement('metaDescription', 'content', newDescription);
        updateElement('ogDescription', 'content', newDescription);
        updateElement('twitterDescription', 'content', newDescription);

        const newUrl = `https://beyaz-esya-servisi.vercel.app/hizmet.html?service=${encodeURIComponent(trimmedServiceName)}`;
        updateElement('canonicalLink', 'href', newUrl);
        updateElement('ogUrl', 'content', newUrl);

        updateElement('heroTitle', 'textContent', `${trimmedServiceName} Servisi İstanbul - Hızlı ve Güvenilir Teknik Destek`);
        updateElement('mainTitle', 'textContent', `${trimmedServiceName} Servisi`);
        updateElement('serviceTitle', 'textContent', `İstanbul Profesyonel ${trimmedServiceName} Tamir ve Bakım Hizmetleri`);
        updateElement('mainDescription', 'textContent', `İstanbul'da ${trimmedServiceName} ve diğer tüm beyaz eşyalarınız için uzman teknik servis hizmeti. Hızlı, güvenilir ve uygun fiyatlı çözümler için bize ulaşın.`);

        // Breadcrumb güncellemesi
        const breadcrumbCurrent = document.getElementById('breadcrumb-current-page');
        if (breadcrumbCurrent) {
            const link = breadcrumbCurrent.querySelector('a');
            const span = breadcrumbCurrent.querySelector('span');
            if (link) link.href = newUrl;
            if (span) span.textContent = `${trimmedServiceName} Servisi`;
        }

        // Schema.org JSON-LD güncellemesi
        const updateJsonLd = (id, updater) => {
            const script = document.getElementById(id);
            if (script) {
                try {
                    const json = JSON.parse(script.textContent);
                    updater(json);
                    script.textContent = JSON.stringify(json, null, 2);
                } catch (e) {
                    console.error(`Error parsing or updating JSON-LD for ${id}:`, e);
                }
            }
        };

        updateJsonLd('breadcrumbSchema', json => {
            if (json.itemListElement && json.itemListElement[1]) {
                json.itemListElement[1].name = `${trimmedServiceName} Servisi`;
                json.itemListElement[1].item = newUrl;
            }
        });

        updateJsonLd('serviceSchema', json => {
            json.serviceType = `${trimmedServiceName} Servisi`;
            json.name = `${trimmedServiceName} Servisi`;
            json.description = newDescription;
        });

        updateJsonLd('articleSchema', json => {
            json.headline = `${trimmedServiceName} Servisi`;
            json.description = newDescription;
            if(json.mainEntityOfPage) {
                json.mainEntityOfPage['@id'] = newUrl;
            }
        });

        // Sosyal medya paylaşım linklerini güncelle
        const facebookShare = document.getElementById('facebookShare');
        if(facebookShare) facebookShare.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(newUrl)}`;

        const twitterShare = document.getElementById('twitterShare');
        if(twitterShare) twitterShare.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(newUrl)}&text=${encodeURIComponent(newTitle)}`;
    });
}

// Script'in DOM tamamen yüklendikten sonra çalışmasını garantile
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateServiceContent);
} else {
    // DOM zaten hazırsa doğrudan çalıştır
    updateServiceContent();
}