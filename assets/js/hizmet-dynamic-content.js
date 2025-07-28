document.addEventListener('DOMContentLoaded', () => {
    // Use a flag to prevent multiple executions
    let contentUpdated = false;

    const updateServiceContent = () => {
        if (contentUpdated) return;

        const params = new URLSearchParams(window.location.search);
        const serviceName = params.get('service');

        if (!serviceName || serviceName.trim() === '') {
            return;
        }

        contentUpdated = true;
        const trimmedServiceName = serviceName.trim();
        const newTitle = `${trimmedServiceName} Servisi | İstanbul Teknik Servis`;
        const newDescription = `İstanbul ${trimmedServiceName} servisi: Profesyonel, hızlı ve güvenilir teknik destek. Garantili tamir ve bakım hizmetleri.`;
        const newUrl = `https://beyaz-esya-servisi.vercel.app/hizmet.html?service=${encodeURIComponent(trimmedServiceName)}`;

        // Batch DOM reads
        const elements = {
            metaTitle: document.getElementById('metaTitle'),
            ogTitle: document.querySelector('meta[property="og:title"]'),
            twitterTitle: document.querySelector('meta[name="twitter:title"]'),
            metaDescription: document.querySelector('meta[name="description"]'),
            ogDescription: document.querySelector('meta[property="og:description"]'),
            twitterDescription: document.querySelector('meta[name="twitter:description"]'),
            canonicalLink: document.getElementById('canonicalLink'),
            ogUrl: document.querySelector('meta[property="og:url"]'),
            heroTitle: document.getElementById('heroTitle'),
            mainTitle: document.getElementById('mainTitle'),
            serviceTitle: document.getElementById('serviceTitle'),
            mainDescription: document.getElementById('mainDescription'),
            breadcrumbCurrentLink: document.querySelector('#breadcrumb-current-page a'),
            breadcrumbCurrentSpan: document.querySelector('#breadcrumb-current-page span'),
            breadcrumbSchema: document.getElementById('breadcrumbSchema'),
            serviceSchema: document.getElementById('serviceSchema'),
            articleSchema: document.getElementById('articleSchema'),
            facebookShare: document.getElementById('facebookShare'),
            twitterShare: document.getElementById('twitterShare')
        };

        // Batch DOM writes in a single animation frame to avoid layout thrashing
        requestAnimationFrame(() => {
            document.title = newTitle;
            if (elements.metaTitle) elements.metaTitle.textContent = newTitle;
            if (elements.ogTitle) elements.ogTitle.content = newTitle;
            if (elements.twitterTitle) elements.twitterTitle.content = newTitle;

            if (elements.metaDescription) elements.metaDescription.content = newDescription;
            if (elements.ogDescription) elements.ogDescription.content = newDescription;
            if (elements.twitterDescription) elements.twitterDescription.content = newDescription;

            if (elements.canonicalLink) elements.canonicalLink.href = newUrl;
            if (elements.ogUrl) elements.ogUrl.content = newUrl;

            if (elements.heroTitle) elements.heroTitle.textContent = `${trimmedServiceName} Servisi İstanbul - Hızlı ve Güvenilir Teknik Destek`;
            if (elements.mainTitle) elements.mainTitle.textContent = `${trimmedServiceName} Servisi`;
            if (elements.serviceTitle) elements.serviceTitle.textContent = `İstanbul Profesyonel ${trimmedServiceName} Tamir ve Bakım Hizmetleri`;
            if (elements.mainDescription) elements.mainDescription.textContent = `İstanbul'da ${trimmedServiceName} ve diğer tüm beyaz eşyalarınız için uzman teknik servis hizmeti. Hızlı, güvenilir ve uygun fiyatlı çözümler için bize ulaşın.`;

            if (elements.breadcrumbCurrentLink) elements.breadcrumbCurrentLink.href = newUrl;
            if (elements.breadcrumbCurrentSpan) elements.breadcrumbCurrentSpan.textContent = `${trimmedServiceName} Servisi`;

            const updateJsonLd = (script, updater) => {
                if (script) {
                    try {
                        const json = JSON.parse(script.textContent);
                        updater(json);
                        script.textContent = JSON.stringify(json, null, 2);
                    } catch (e) {
                        console.error(`Error updating JSON-LD:`, e);
                    }
                }
            };

            updateJsonLd(elements.breadcrumbSchema, json => {
                if (json.itemListElement && json.itemListElement[1]) {
                    json.itemListElement[1].name = `${trimmedServiceName} Servisi`;
                    json.itemListElement[1].item = newUrl;
                }
            });

            updateJsonLd(elements.serviceSchema, json => {
                json.serviceType = `${trimmedServiceName} Servisi`;
                json.name = `${trimmedServiceName} Servisi`;
                json.description = newDescription;
            });

            updateJsonLd(elements.articleSchema, json => {
                json.headline = `${trimmedServiceName} Servisi`;
                json.description = newDescription;
                if (json.mainEntityOfPage) {
                    json.mainEntityOfPage['@id'] = newUrl;
                }
            });

            if (elements.facebookShare) elements.facebookShare.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(newUrl)}`;
            if (elements.twitterShare) elements.twitterShare.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(newUrl)}&text=${encodeURIComponent(newTitle)}`;
        });
    };

    // Run the update logic
    updateServiceContent();
});