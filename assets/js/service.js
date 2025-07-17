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
    
    const description = `${serviceName} hizmetlerimiz ile profesyonel bakım ve onarım desteği`;
    document.getElementById('mainDescription').textContent = description;
    document.getElementById('serviceDescription').textContent = 
        `${serviceName} için profesyonel bakım, onarım ve servis hizmetlerini sunuyoruz.`;
}

// Diğer fonksiyonlar...