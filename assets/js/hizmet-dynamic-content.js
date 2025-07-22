document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const serviceName = params.get('service');

    // Sadece service parametresi varsa DOM'u güncelle
    if (serviceName && serviceName.trim() !== '') {
        const trimmedServiceName = serviceName.trim();

        const data = {
            title: trimmedServiceName,
            description: `İstanbul ${trimmedServiceName} servisi. Profesyonel, hızlı ve güvenilir ${trimmedServiceName} teknik servis hizmeti.`,
            heroTitle: trimmedServiceName,
            mainTitle: trimmedServiceName,
            serviceTitle: `İstanbul Profesyonel ${trimmedServiceName} Tamir ve Bakım Hizmetleri`,
            mainDescription: `${trimmedServiceName} için uzman teknik servis hizmeti. İstanbul genelinde hızlı, güvenilir ve uygun fiyatlı çözümler için bize ulaşın.`
        };

        // DOM elementlerini bir kere seç ve sakla
        const elements = {
            title: document.querySelector('title'),
            metaDescription: document.getElementById('metaDescription'),
            canonicalLink: document.getElementById('canonicalLink'),
            ogTitle: document.getElementById('ogTitle'),
            ogDescription: document.getElementById('ogDescription'),
            ogUrl: document.getElementById('ogUrl'),
            twitterTitle: document.getElementById('twitterTitle'),
            twitterDescription: document.getElementById('twitterDescription'),
            heroTitle: document.getElementById('heroTitle'),
            mainTitle: document.getElementById('mainTitle'),
            serviceTitle: document.getElementById('serviceTitle'),
            mainDescription: document.getElementById('mainDescription'),
            breadcrumbCurrent: document.querySelector('#breadcrumbCurrent span'),
            breadcrumbCurrentLink: document.querySelector('#breadcrumbCurrent a'),
            facebookShare: document.getElementById('facebookShare'),
            twitterShare: document.getElementById('twitterShare'),
            breadcrumbSchema: document.getElementById('breadcrumbSchema'),
            serviceSchema: document.getElementById('serviceSchema'),
            articleSchema: document.getElementById('articleSchema')
        };

        // Tüm DOM güncellemelerini tek bir requestAnimationFrame içinde yap
        requestAnimationFrame(() => {
            const currentUrl = window.location.href;
            const currentUrlEncoded = encodeURIComponent(currentUrl);

            // Meta güncellemeleri
            if (elements.title) elements.title.textContent = data.title;
            if (elements.metaDescription) elements.metaDescription.content = data.description;
            if (elements.canonicalLink) elements.canonicalLink.href = currentUrl;
            
            // Open Graph güncellemeleri
            if (elements.ogTitle) elements.ogTitle.content = data.title;
            if (elements.ogDescription) elements.ogDescription.content = data.description;
            if (elements.ogUrl) elements.ogUrl.content = currentUrl;

            // Twitter Card güncellemeleri
            if (elements.twitterTitle) elements.twitterTitle.content = data.title;
            if (elements.twitterDescription) elements.twitterDescription.content = data.description;
            
            // İçerik güncellemeleri
            if (elements.heroTitle) elements.heroTitle.textContent = data.heroTitle;
            if (elements.mainTitle) elements.mainTitle.textContent = data.mainTitle;
            if (elements.serviceTitle) elements.serviceTitle.textContent = data.serviceTitle;
            if (elements.mainDescription) elements.mainDescription.textContent = data.mainDescription;

            // Breadcrumb güncellemeleri
            if (elements.breadcrumbCurrent) elements.breadcrumbCurrent.textContent = data.mainTitle;
            if (elements.breadcrumbCurrentLink) elements.breadcrumbCurrentLink.href = currentUrl;

            // Paylaşım linkleri
            if (elements.facebookShare) elements.facebookShare.href = `https://www.facebook.com/sharer/sharer.php?u=${currentUrlEncoded}`;
            if (elements.twitterShare) elements.twitterShare.href = `https://twitter.com/intent/tweet?url=${currentUrlEncoded}&text=${encodeURIComponent(data.title)}`;

            // Schema güncellemeleri
            const updateSchema = (element, updater) => {
                if (element) {
                    try {
                        const schema = JSON.parse(element.textContent);
                        updater(schema);
                        element.textContent = JSON.stringify(schema, null, 2);
                    } catch (e) {
                        console.error('Schema güncelleme hatası:', e);
                    }
                }
            };

            updateSchema(elements.breadcrumbSchema, schema => {
                if (schema.itemListElement?.length > 1) {
                    const lastItem = schema.itemListElement[schema.itemListElement.length - 1];
                    lastItem.name = data.mainTitle;
                    lastItem.item = currentUrl;
                }
            });

            updateSchema(elements.serviceSchema, schema => {
                schema.serviceType = data.mainTitle;
                schema.name = data.mainTitle;
                schema.description = data.description;
            });
            
            updateSchema(elements.articleSchema, schema => {
                schema.headline = data.mainTitle;
                schema.description = data.description;
                if (schema.mainEntityOfPage) {
                    schema.mainEntityOfPage['@id'] = currentUrl;
                }
            });
        });
    }
}); 