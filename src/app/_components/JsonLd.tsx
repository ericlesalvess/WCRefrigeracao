export function JsonLd() {
    const data = {
        "@context": "https://schema.org",
        "@type": "HVACBusiness",
        name: "WC Refrigeração e Climatização",
        description:
            "Instalação, manutenção e higienização de ar-condicionado para residências, comércios, empresas, hospitais e laboratórios.",
        url: "https://wcrefrigeracao.com.br",
        telephone: "+5524992764964",
        image: "https://wcrefrigeracao.com.br/og-image.jpg",
        areaServed: [
            { "@type": "City", name: "Valença" },
            { "@type": "AdministrativeArea", name: "Região de Valença, RJ" },
        ],
        address: {
            "@type": "PostalAddress",
            addressLocality: "Valença",
            addressRegion: "RJ",
            addressCountry: "BR",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Serviços",
            itemListElement: [
                "Instalação de ar-condicionado",
                "Desinstalação",
                "Manutenção preventiva",
                "Manutenção corretiva",
                "Higienização completa",
                "Higienização na bolsa",
                "Projeto e infraestrutura de climatização",
            ].map((name) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name },
            })),
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}