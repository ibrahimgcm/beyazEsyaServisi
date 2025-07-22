document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const serviceName = params.get('service');

    if (serviceName && serviceName.trim() !== '') {
        const trimmedServiceName = serviceName.trim();

        // Sayfa başlığını güncelle
        document.title = `${trimmedServiceName} Servisi | İstanbul Teknik Servis`;

        // Meta etiketlerini güncelle
        const metaDesc = document.getElementById('metaDescription');
        if (metaDesc) {
            metaDesc.setAttribute('content', `İstanbul ${trimmedServiceName} servisi. Profesyonel, hızlı ve güvenilir ${trimmedServiceName} teknik servis hizmeti.`);
        }

        // H1 başlığını güncelle
        const heroTitle = document.getElementById('heroTitle');
        if (heroTitle) {
            heroTitle.textContent = `${trimmedServiceName} Servisi İstanbul - Hızlı ve Güvenilir Teknik Destek`;
        }
      
        const mainTitle = document.getElementById('mainTitle');
        if (mainTitle) {
            mainTitle.textContent = `${trimmedServiceName} Servisi`;
        }

        const serviceTitle = document.getElementById('serviceTitle');
        if (serviceTitle) {
            serviceTitle.textContent = `İstanbul Profesyonel ${trimmedServiceName} Tamir ve Bakım Hizmetleri`;
        }

        const mainDescription = document.getElementById('mainDescription');
        if (mainDescription) {
            mainDescription.textContent = `${trimmedServiceName} için uzman teknik servis hizmeti. İstanbul genelinde hızlı, güvenilir ve uygun fiyatlı çözümler için bize ulaşın.`;
        }

        // Breadcrumb güncelle
        const breadcrumbCurrent = document.querySelector('#breadcrumbCurrent span');
        if(breadcrumbCurrent) {
            breadcrumbCurrent.textContent = `${trimmedServiceName} Servisi`;
        }

        const breadcrumbCurrentLink = document.querySelector('#breadcrumbCurrent a');
        if(breadcrumbCurrentLink){
            breadcrumbCurrentLink.href = window.location.href;
        }


        // Open Graph ve Twitter kartları gibi diğer tüm dinamik alanları da güncelleyelim...
        const currentUrl = window.location.href;
        const ogTitle = document.getElementById('ogTitle');
        if (ogTitle) ogTitle.setAttribute('content', document.title);

        const ogDescription = document.getElementById('ogDescription');
        if (ogDescription) ogDescription.setAttribute('content', metaDesc.getAttribute('content'));
        
        const ogUrl = document.getElementById('ogUrl');
        if (ogUrl) ogUrl.setAttribute('content', currentUrl);

        const twitterTitle = document.getElementById('twitterTitle');
        if (twitterTitle) twitterTitle.setAttribute('content', document.title);

        const twitterDescription = document.getElementById('twitterDescription');
        if (twitterDescription) twitterDescription.setAttribute('content', metaDesc.getAttribute('content'));
        
        // Şema verilerini de güncelleyelim
        const breadcrumbSchemaEl = document.getElementById('breadcrumbSchema');
        if(breadcrumbSchemaEl){
            try {
                const breadcrumbSchema = JSON.parse(breadcrumbSchemaEl.textContent);
                if (breadcrumbSchema.itemListElement?.length > 1) {
                    const lastItem = breadcrumbSchema.itemListElement[1];
                    lastItem.name = `${trimmedServiceName} Servisi`;
                    lastItem.item = currentUrl;
                }
                breadcrumbSchemaEl.textContent = JSON.stringify(breadcrumbSchema, null, 2);
            } catch (e) { console.error("Breadcrumb schema güncellenemedi.", e); }
        }

        const serviceSchemaEl = document.getElementById('serviceSchema');
        if(serviceSchemaEl){
            try {
                const serviceSchema = JSON.parse(serviceSchemaEl.textContent);
                serviceSchema.serviceType = `${trimmedServiceName} Servisi`;
                serviceSchema.name = `${trimmedServiceName} Servisi`;
                serviceSchema.description = metaDesc.getAttribute('content');
                serviceSchemaEl.textContent = JSON.stringify(serviceSchema, null, 2);
            } catch (e) { console.error("Service schema güncellenemedi.", e); }
        }

        const articleSchemaEl = document.getElementById('articleSchema');
        if(articleSchemaEl){
             try {
                const articleSchema = JSON.parse(articleSchemaEl.textContent);
                articleSchema.headline = `${trimmedServiceName} Servisi`;
                articleSchema.description = metaDesc.getAttribute('content');
                articleSchema.mainEntityOfPage['@id'] = currentUrl;
                articleSchemaEl.textContent = JSON.stringify(articleSchema, null, 2);
            } catch (e) { console.error("Article schema güncellenemedi.", e); }
        }
    }
}); 