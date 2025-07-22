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
    
    const newDescription = `İstanbul ${trimmedServiceName} servisi. Profesyonel, hızlı ve güvenilir ${trimmedServiceName} teknik servis hizmeti.`;

    // Metin ve Özellikleri Güncelle
    updateElement('metaDescription', 'content', newDescription);
    updateElement('canonicalLink', 'href', currentUrl);
    updateElement('ogTitle', 'content', newTitle);
    updateElement('ogDescription', 'content', newDescription);
    updateElement('ogUrl', 'content', currentUrl);
    updateElement('twitterTitle', 'content', newTitle);
    updateElement('twitterDescription', 'content', newDescription);
    
    // Hero başlığını güncelle ve görünür yap
    const heroTitleEl = document.getElementById('heroTitle');
    if (heroTitleEl) {
        heroTitleEl.textContent = `${trimmedServiceName} Servisi İstanbul - Hızlı ve Güvenilir Teknik Destek`;
        heroTitleEl.classList.add('visible');
    }
    
    updateElement('mainTitle', 'textContent', `${trimmedServiceName} Servisi`);
    updateElement('serviceTitle', 'textContent', `İstanbul Profesyonel ${trimmedServiceName} Tamir ve Bakım Hizmetleri`);
    updateElement('mainDescription', 'textContent', `${trimmedServiceName} için uzman teknik servis hizmeti. İstanbul genelinde hızlı, güvenilir ve uygun fiyatlı çözümler için bize ulaşın.`);

    // InnerHTML kullanan özel durumlar (sadece kesin gerekliyse)
    const breadcrumbCurrentSpan = document.querySelector('#breadcrumbCurrent span');
    if (breadcrumbCurrentSpan) {
        breadcrumbCurrentSpan.textContent = `${trimmedServiceName} Servisi`;
    }
    const breadcrumbCurrentLink = document.querySelector('#breadcrumbCurrent a');
    if (breadcrumbCurrentLink) {
        breadcrumbCurrentLink.href = currentUrl;
    }

    // Şema Güncellemeleri
    const updateSchema = (id, updater) => {
        const element = document.getElementById(id);
        if (element) {
            try {
                const schema = JSON.parse(element.textContent);
                updater(schema);
                element.textContent = JSON.stringify(schema, null, 2);
            } catch (e) {
                console.error(`Schema ID'si '${id}' güncellenirken hata oluştu:`, e);
            }
        }
    };

    updateSchema('breadcrumbSchema', schema => {
        if (schema.itemListElement && schema.itemListElement.length > 1) {
            schema.itemListElement[1].name = `${trimmedServiceName} Servisi`;
            schema.itemListElement[1].item = currentUrl;
        }
    });

    updateSchema('serviceSchema', schema => {
        schema.serviceType = `${trimmedServiceName} Servisi`;
        schema.name = `${trimmedServiceName} Servisi`;
        schema.description = newDescription;
    });

    updateSchema('articleSchema', schema => {
        schema.headline = `${trimmedServiceName} Servisi`;
        schema.description = newDescription;
        if (schema.mainEntityOfPage) {
            schema.mainEntityOfPage['@id'] = currentUrl;
        }
    });
}

// Script'in DOM tamamen yüklendikten sonra çalışmasını garantile
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateServiceContent);
} else {
    // DOM zaten hazırsa doğrudan çalıştır
    updateServiceContent();
} 