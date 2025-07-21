document.addEventListener('DOMContentLoaded', () => {
    const serviceData = {
        'Beyaz Eşya Servisi': {
            title: 'Beyaz Eşya Servisi | İstanbul Teknik Servis',
            description: 'İstanbul\'da buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın gibi tüm beyaz eşyalarınız için profesyonel, hızlı ve güvenilir teknik servis hizmeti sunuyoruz.',
            heroTitle: 'Beyaz Eşya Servisi İstanbul - Hızlı ve Güvenilir Teknik Destek',
            mainTitle: 'Beyaz Eşya Servisi',
            serviceTitle: 'İstanbul Profesyonel Beyaz Eşya Tamir ve Bakım Hizmetleri',
            mainDescription: 'Beyaz eşya, buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın, klima, kombi ve televizyon için uzman teknik servis hizmeti. İstanbul genelinde hızlı, güvenilir ve uygun fiyatlı çözümler için bize ulaşın.',
            serviceDescription: 'Hizmetlerimiz kapsamında, beyaz eşya, buzdolabı, çamaşır makinesi, bulaşık makinesi, fırın, klima, kombi ve televizyon için uzman teknik servis desteği sunuyoruz. İstanbul genelinde hızlı, güvenilir ve uygun fiyatlı çözümler için bize ulaşabilirsiniz. Deneyimli ekibimizle müşteri memnuniyetini ön planda tutuyoruz.'
        },
        'Buzdolabı': {
            title: 'Buzdolabı Servisi | İstanbul Teknik Servis',
            description: 'İstanbul\'da tüm marka ve model buzdolapları için profesyonel tamir, bakım ve onarım servisi. Hızlı ve güvenilir çözümler.',
            heroTitle: 'Buzdolabı Servisi İstanbul - Uzman Tamir ve Bakım',
            mainTitle: 'Buzdolabı Servisi',
            serviceTitle: 'İstanbul Profesyonel Buzdolabı Tamir ve Bakım Hizmetleri',
            mainDescription: 'Buzdolabı arızaları, gaz dolumu, motor değişimi gibi tüm ihtiyaçlarınız için uzman ekibimizle hizmetinizdeyiz. İstanbul genelinde aynı gün servis imkanı.',
            serviceDescription: 'Buzdolabınız soğutmuyor mu? Ses mi yapıyor? Uzman ekibimizle tüm buzdolabı arızalarınıza yerinde ve garantili çözümler sunuyoruz. Orijinal yedek parça kullanıyoruz.'
        },
        'Çamaşır Makinesi': {
            title: 'Çamaşır Makinesi Servisi | İstanbul Teknik Servis',
            description: 'İstanbul\'da çamaşır makinesi tamiri, bakımı ve onarımı. Tüm markalar için profesyonel ve garantili servis hizmeti.',
            heroTitle: 'Çamaşır Makinesi Servisi İstanbul - Hızlı ve Garantili Çözümler',
            mainTitle: 'Çamaşır Makinesi Servisi',
            serviceTitle: 'İstanbul Profesyonel Çamaşır Makinesi Tamir Hizmetleri',
            mainDescription: 'Çamaşır makineniz su mu akıtıyor, sıkma mı yapmıyor? Deneyimli teknisyenlerimizle her türlü çamaşır makinesi arızasını hızla gideriyoruz.',
            serviceDescription: 'Her marka ve model çamaşır makinesi için tamir, bakım, kazan değişimi, pompa motoru arızaları gibi konularda profesyonel destek sağlıyoruz.'
        },
        'Bulaşık Makinesi': {
            title: 'Bulaşık Makinesi Servisi | İstanbul Teknik Servis',
            description: 'İstanbul bulaşık makinesi servisi. Tüm marka ve modeller için yerinde tamir, bakım ve onarım hizmetleri.',
            heroTitle: 'Bulaşık Makinesi Servisi İstanbul - Profesyonel Onarım',
            mainTitle: 'Bulaşık Makinesi Servisi',
            serviceTitle: 'İstanbul Profesyonel Bulaşık Makinesi Tamir ve Bakım',
            mainDescription: 'Bulaşık makineniz temiz yıkamıyor veya su mu almıyor? Endişelenmeyin. Uzman ekibimizle bulaşık makinesi sorunlarınıza kalıcı çözümler üretiyoruz.',
            serviceDescription: 'Bulaşık makinesi arızaları, parlatıcı sorunları, su ısıtma problemleri gibi tüm konularda deneyimli ekibimizle yanınızdayız.'
        },
        'Fırın': {
            title: 'Fırın Servisi | İstanbul Teknik Servis',
            description: 'İstanbul fırın ve ocak servisi. Ankastre ve solo fırınlar için profesyonel tamir, bakım ve montaj hizmetleri.',
            heroTitle: 'Fırın Servisi İstanbul - Uzman Tamir ve Montaj',
            mainTitle: 'Fırın Servisi',
            serviceTitle: 'İstanbul Profesyonel Fırın Tamir ve Bakım Hizmetleri',
            mainDescription: 'Fırınınız ısıtmıyor mu? Ocağınız yanmıyor mu? Her marka fırın ve ocak için uzman teknisyenlerimizle garantili tamir hizmeti sunuyoruz.',
            serviceDescription: 'Ankastre fırın montajı, fırın rezistans değişimi, termostat arızaları gibi tüm fırın ve ocak sorunlarınız için bize ulaşın.'
        },
        'Klima': {
            title: 'Klima Servisi | İstanbul Teknik Servis',
            description: 'İstanbul klima servisi. Klima montaj, demontaj, bakım, onarım ve gaz dolumu hizmetleri. Tüm markalarda uzmanız.',
            heroTitle: 'Klima Servisi İstanbul - Montaj, Bakım ve Onarım',
            mainTitle: 'Klima Servisi',
            serviceTitle: 'İstanbul Profesyonel Klima Bakım ve Tamir Hizmetleri',
            mainDescription: 'Yazın serin, kışın sıcak bir ortam için klimanızın periyodik bakımını ihmal etmeyin. Klima arızaları ve montaj için profesyonel ekibimizle hizmetinizdeyiz.',
            serviceDescription: 'Klima bakımı, gaz dolumu, iç ve dış ünite temizliği, elektronik kart arızaları gibi tüm klima ihtiyaçlarınız için bize ulaşabilirsiniz.'
        },
        'Kombi': {
            title: 'Kombi Servisi | İstanbul Teknik Servis',
            description: 'İstanbul kombi servisi. Kombi arıza, bakım, onarım ve petek temizliği hizmetleri. 7/24 acil servis.',
            heroTitle: 'Kombi Servisi İstanbul - Acil Arıza, Bakım ve Petek Temizliği',
            mainTitle: 'Kombi Servisi',
            serviceTitle: 'İstanbul Profesyonel Kombi Bakım ve Onarım Hizmetleri',
            mainDescription: 'Kombiniz arızalandığında veya petekleriniz ısınmadığında 7/24 acil servisimizle yanınızdayız. Tüm marka kombilerde uzmanız.',
            serviceDescription: 'Yıllık kombi bakımı, petek temizliği, eşanjör değişimi, ana kart tamiri gibi tüm kombi hizmetlerini garantili olarak sunuyoruz.'
        },
        'Televizyon': {
            title: 'Televizyon Servisi | İstanbul Teknik Servis',
            description: 'İstanbul televizyon tamir servisi. LED, LCD, Plazma TV tamiri, panel değişimi ve onarımı. Tüm markalara hizmet.',
            heroTitle: 'Televizyon Servisi İstanbul - Panel Değişimi ve Onarımı',
            mainTitle: 'Televizyon Servisi',
            serviceTitle: 'İstanbul Profesyonel Televizyon Tamir Hizmetleri',
            mainDescription: 'Televizyonunuzda ses var görüntü mü yok? Ekran mı kırıldı? Her marka ve model televizyon için panel değişimi ve onarım hizmeti sunuyoruz.',
            serviceDescription: 'LED TV panel onarımı, anakart tamiri, besleme kartı sorunları gibi tüm televizyon arızalarınızda uzman ekibimizle garantili çözümler üretiyoruz.'
        }
    };

    const params = new URLSearchParams(window.location.search);
    let serviceName = params.get('service');

    if (!serviceName || serviceName.trim() === '') {
        serviceName = 'Beyaz Eşya Servisi';
    }

    let data = serviceData[serviceName];

    if (!data) {
        data = {
            title: `${serviceName} Servisi | İstanbul Teknik Servis`,
            description: `İstanbul'da ${serviceName} için profesyonel, hızlı ve güvenilir teknik servis hizmeti sunuyoruz.`,
            heroTitle: `${serviceName} Servisi İstanbul - Hızlı ve Güvenilir Teknik Destek`,
            mainTitle: serviceName,
            serviceTitle: `İstanbul Profesyonel ${serviceName} Tamir ve Bakım Hizmetleri`,
            mainDescription: `${serviceName} için uzman teknik servis hizmeti. İstanbul genelinde hızlı, güvenilir ve uygun fiyatlı çözümler için bize ulaşın.`,
            serviceDescription: `Hizmetlerimiz kapsamında, ${serviceName} için uzman teknik servis desteği sunuyoruz. İstanbul genelinde hızlı, güvenilir ve uygun fiyatlı çözümler için bize ulaşabilirsiniz. Deneyimli ekibimizle müşteri memnuniyetini ön planda tutuyoruz.`
        };
    }

    const updateText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    const updateContent = (id, content) => {
        const el = document.getElementById(id);
        if (el) el.content = content;
    };
    
    const updateHref = (id, url) => {
        const el = document.getElementById(id);
        if (el) el.href = url;
    };

    requestAnimationFrame(() => {
        document.title = data.title;
        updateContent('metaDescription', data.description);
        updateHref('canonicalLink', window.location.href);
        
        updateContent('ogTitle', data.title);
        updateContent('ogDescription', data.description);
        updateContent('ogUrl', window.location.href);

        updateContent('twitterTitle', data.title);
        updateContent('twitterDescription', data.description);
        
        updateText('heroTitle', data.heroTitle);
        updateText('mainTitle', data.mainTitle);
        updateText('serviceTitle', data.serviceTitle);
        updateText('mainDescription', data.mainDescription);
        updateText('serviceDescription', data.serviceDescription);

        const breadcrumbCurrent = document.querySelector('#breadcrumbCurrent span');
        const breadcrumbCurrentLink = document.querySelector('#breadcrumbCurrent a');
        if (breadcrumbCurrent) breadcrumbCurrent.textContent = data.mainTitle;
        if (breadcrumbCurrentLink) breadcrumbCurrentLink.href = window.location.href;

        const currentUrlEncoded = encodeURIComponent(window.location.href);
        updateHref('facebookShare', `https://www.facebook.com/sharer/sharer.php?u=${currentUrlEncoded}`);
        updateHref('twitterShare', `https://twitter.com/intent/tweet?url=${currentUrlEncoded}&text=${encodeURIComponent(data.title)}`);

        const updateSchema = (schemaId, updater) => {
            const schemaEl = document.getElementById(schemaId);
            if (schemaEl) {
                try {
                    const schema = JSON.parse(schemaEl.textContent);
                    updater(schema);
                    schemaEl.textContent = JSON.stringify(schema, null, 2);
                } catch (e) {
                    console.error(`Error parsing or updating schema ${schemaId}:`, e);
                }
            }
        };

        updateSchema('breadcrumbSchema', schema => {
            if (schema.itemListElement && schema.itemListElement.length > 1) {
                const lastItem = schema.itemListElement[schema.itemListElement.length - 1];
                lastItem.name = data.mainTitle;
                lastItem.item = window.location.href;
            }
        });

        updateSchema('serviceSchema', schema => {
            schema.serviceType = data.mainTitle;
            schema.name = data.mainTitle;
            schema.description = data.description;
        });
        
        updateSchema('articleSchema', schema => {
            schema.headline = data.mainTitle;
            schema.description = data.description;
            if (schema.mainEntityOfPage) {
                schema.mainEntityOfPage['@id'] = window.location.href;
            }
        });
    });
}); 